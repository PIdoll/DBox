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
      { title: '分页 1', content: '内容 1', key: '1' },
      { title: '分页 2', content: '内容 2', key: '2' }
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
    panes.push({ title: '新分页', content: '新分页内容', key: activeKey });
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
    this.setState({ mode });
  };
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll = () => {
      if (window.scrollY >= 1750 && window.scrollY < 1950) {
        const element = ReactDOM.findDOMNode(this.refs.box_table);
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.width = '100%';
        element.style.padding = '0 170px 144px 64px';
        element.style.backgroundColor = '#fff';
      } else if (window.scrollY >= 1950 || window.scrollY < 1750) {
        const element = ReactDOM.findDOMNode(this.refs.box_table);
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
        <Tabs defaultActiveKey='1' onChange={this.callBack}>
          <TabPane tab='当前选项' key='1'>当前选项</TabPane>
          <TabPane disabled tab='禁用选项' key='2'>禁用选项</TabPane>
          <TabPane tab='其他选项' key='3'>其他选项</TabPane>
        </Tabs>
        <h1 className='h1'>2.有图标的标签</h1>
        <Tabs defaultActiveKey='2'>
          <TabPane tab={<span><Icon type='bars' />分页 1</span>} key='1'>
            内容 1
          </TabPane>
          <TabPane tab={<span><Icon type='appstore-o' />分页 2</span>} key='2'>
            内容 2
          </TabPane>
        </Tabs>
        <h1 className='h1'>3.tab页上下，左右滑动</h1>
        <RadioGroup onChange={this.handleModeChange} value={mode} style={{marginBottom: 8}}>
          <RadioButton value='top'>水平</RadioButton>
          <RadioButton value='left'>垂直</RadioButton>
        </RadioGroup>
        <Tabs defaultActiveKey='1' tabPosition={mode} style={{height: 220}}>
          <TabPane tab='分页 1' key='1'>分页 1</TabPane>
          <TabPane tab='分页 2' key='2'>分页 2</TabPane>
          <TabPane tab='分页 3' key='3'>分页 3</TabPane>
          <TabPane tab='分页 4' key='4'>分页 4</TabPane>
          <TabPane tab='分页 5' key='5'>分页 5</TabPane>
          <TabPane tab='分页 6' key='6'>分页 6</TabPane>
          <TabPane tab='分页 7' key='7'>分页 7</TabPane>
          <TabPane tab='分页 8' key='8'>分页 8</TabPane>
          <TabPane tab='分页 9' key='9'>分页 9</TabPane>
          <TabPane tab='分页 10' key='10'>分页 10</TabPane>
          <TabPane tab='分页 11' key='11'>分页 11</TabPane>
          <TabPane tab='分页 12' key='12'>分页 12</TabPane>
          <TabPane tab='分页 13' key='13'>分页 13</TabPane>
          <TabPane tab='分页 14' key='14'>分页 14</TabPane>
        </Tabs>
        <h1 className='h1'>4.卡片式标签页容器</h1>
        <Tabs type='card'>
          <TabPane tab='分页 1' key='1'>
            <p>内容 1</p>
            <p>内容 1</p>
            <p>内容 1</p>
          </TabPane>
          <TabPane tab='分页 2' key='2'>
            <p>内容 2</p>
            <p>内容 2</p>
            <p>内容 2</p>
          </TabPane>
          <TabPane tab='分页 3' key='3'>
            <p>内容 3</p>
            <p>内容 3</p>
            <p>内容 3</p>
          </TabPane>
        </Tabs>
        <h1 className='h1'>5.新增和关闭</h1>
        <Tabs onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
          {this.state.panes.map(pane => <TabPane closable={pane.key === '1' ? false : 'true'} tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
        <h1 className='h1'>6.卡片式容器</h1>
        <Tabs type='cardTabs'>
          <TabPane tab='分页 1' key='1'>
            <p>内容 1</p>
            <p>内容 1</p>
            <p>内容 1</p>
          </TabPane>
          <TabPane tab='分页 2' key='2'>
            <p>内容 2</p>
            <p>内容 2</p>
            <p>内容 2</p>
          </TabPane>
          <TabPane tab='分页 3' key='3'>
            <p>内容 3</p>
            <p>内容 3</p>
            <p>内容 3</p></TabPane>
        </Tabs>
        <h1 className='h1'>7.吸顶效果</h1>
        <Tabs ref='box_table'>
          <TabPane tab='分页 1' key='1'>内容 1</TabPane>
          <TabPane tab='分页 2' key='2'>内容 2</TabPane>
          <TabPane tab='分页 3' key='3'>内容 3</TabPane>
        </Tabs>
      </div>
    )
  }
}
