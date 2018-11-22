import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from 'components/tabs';
import Icon from 'components/icon';
import Radio from 'components/radio';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;


export default class TabsView extends React.Component {
  static defaultProps = {
    target() {
      return window;
    },
    onChange() {},
  }
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: '当前分页', content: '当前分页', key: '1' },
      { title: '可关闭分页', content: '可关闭分页', key: '2' }
    ];
    this.state = {
      mode: 'top',
      panes,
      activeKey: panes[0].key
    }
  }
  onChange = (activeKey) => {
    this.setState({activeKey});
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  // 点击按钮增加分页
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: '新增分页', content: '新增分页内容', key: activeKey });
    this.setState({panes, activeKey});
  };
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({panes, activeKey});
  };
  callBack = (key) => {
    console.info(key);
  };
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode })
  };
  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.box_table);
    const currentHeight = element.offsetTop - element.offsetHeight;
    window.addEventListener('scroll', this.onScroll = () => {
      if (window.scrollY >= currentHeight && window.scrollY < element.offsetTop) {
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.width = '100%';
        element.style.padding = '0 170px 144px 64px';
        element.style.backgroundColor = '#fff';
      } else if (window.scrollY <= currentHeight || window.scrollY > currentHeight + element.offsetHeight) {
        element.style.position = 'relative';
        element.style.padding = '0';
      }
    });
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { mode } = this.state;
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本用法和禁用</h1>
        <Tabs defaultActiveKey='5' onChange={this.callBack}>
          <TabPane tab='选项一' key='5'>选项一</TabPane>
          <TabPane disabled tab='选项二' key='4'>选项二</TabPane>
          <TabPane tab='选项三' key='3'>选项三</TabPane>
        </Tabs>
        <h1 className='h1'>2.有图标的标签</h1>
        <Tabs defaultActiveKey='7'>
          <TabPane tab={<span><Icon type='bars' />选项一</span>} key='7'>
          选项一
          </TabPane>
          <TabPane disabled tab={<span><Icon type='appstore-o' />选项二</span>} key='8'>
          选项二
          </TabPane>
          <TabPane tab={<span><Icon type='detail' />选项三</span>} key='9'>
          选项三
          </TabPane>
        </Tabs>
        <h1 className='h1'>3.tab页上下，左右滑动</h1>
        <RadioGroup onChange={this.handleModeChange} value={mode} style={{marginBottom: 8}}>
          <RadioButton value='top'>水平</RadioButton>
          <RadioButton value='left'>垂直</RadioButton>
        </RadioGroup>
        <Tabs defaultActiveKey='11' tabPosition={mode} style={{height: 220}}>
          <TabPane tab='选项一' key='11'>选项一</TabPane>
          <TabPane tab='选项二' key='12'>选项二</TabPane>
          <TabPane tab='选项三' key='13'>选项三</TabPane>
          <TabPane tab='选项四' key='14'>选项四</TabPane>
          <TabPane tab='选项五' key='15'>选项五</TabPane>
          <TabPane tab='选项六' key='16'>选项六</TabPane>
          <TabPane tab='选项七' key='17'>选项七</TabPane>
          <TabPane tab='选项八' key='18'>选项八</TabPane>
          <TabPane tab='选项九' key='19'>选项九</TabPane>
          <TabPane tab='选项十' key='20'>选项十</TabPane>
          <TabPane tab='选项十一' key='21'>选项十一</TabPane>
          <TabPane tab='选项十二' key='22'>选项十二</TabPane>
          <TabPane tab='选项十三' key='23'>选项十三</TabPane>
          <TabPane tab='选项十四' key='24'>选项十四</TabPane>
        </Tabs>
        <h1 className='h1'>4.卡片式标签页容器</h1>
        <Tabs type='card'>
          <TabPane tab='分页一' key='25'>
            <p>分页内容一</p>
            <p>分页内容一</p>
            <p>分页内容一</p>
          </TabPane>
          <TabPane tab='分页二' key='26'>
            <p>分页内容二</p>
            <p>分页内容二</p>
            <p>分页内容二</p>
          </TabPane>
          <TabPane tab='分页三' key='27'>
            <p>分页内容三</p>
            <p>分页内容三</p>
            <p>分页内容三</p>
          </TabPane>
        </Tabs>
        <h1 className='h1'>5.新增和关闭</h1>
        <Tabs onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
          {this.state.panes.map(pane => <TabPane closable={pane.key === '1' ? false : 'true'} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
        <h1 className='h1'>6.卡片式容器</h1>
        <Tabs type='cardTabs'>
          <TabPane tab='分页一' key='28'>
            <p>分页内容一</p>
            <p>分页内容一</p>
            <p>分页内容一</p>
          </TabPane>
          <TabPane tab='分页二' key='29'>
            <p>分页内容二</p>
            <p>分页内容二</p>
            <p>分页内容二</p>
          </TabPane>
          <TabPane tab='分页三' key='30'>
            <p>分页内容三</p>
            <p>分页内容三</p>
            <p>分页内容三</p></TabPane>
        </Tabs>
        <h1 className='h1'>7.吸顶效果</h1>
        <Tabs ref='box_table'>
          <TabPane tab='分页一' key='31'>分页内容一</TabPane>
          <TabPane tab='分页二' key='32'>分页内容二</TabPane>
          <TabPane tab='分页三' key='33'>分页内容三</TabPane>
        </Tabs>
      </div>
    )
  }
}
