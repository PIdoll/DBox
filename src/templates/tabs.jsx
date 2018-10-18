import React from 'react';

import Tabs from 'components/tabs';
import Icon from 'components/icon';
import Radio from 'components/radio';
import Button from 'components/button';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;

export default class TabsView extends React.Component {
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
  render() {
    const { mode } = this.state;
    return (
      <div id='main-container'>
        <h1 className='h1'>通用标签页</h1>
        <Tabs defaultActiveKey='2' onChange={this.callBack}>
          <TabPane tab='分页 1' key='1'>Content of Tab Pane 1</TabPane>
          <TabPane tab='分页 2' key='2'>Content of Tab Pane 2</TabPane>
          <TabPane tab='分页 3' key='3'>Content of Tab Pane 3</TabPane>
        </Tabs>
        <br />
        <br />
        <h1 className='h1'>卡片式标签页</h1>
        <Tabs type='card' onChange={this.callBack}>
          <TabPane tab='分页 1' key='1'>内容 1</TabPane>
          <TabPane tab='分页 2' key='2'>内容 2</TabPane>
          <TabPane tab='分页 3' key='3'>内容 3</TabPane>
        </Tabs>
        <br />
        <br />
        <h1 className='h1'>卡片式标签页容器</h1>
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
        <h1 className='h1'>有图标的标签</h1>
        <Tabs defaultActiveKey='2'>
          <TabPane tab={<span><Icon type='apple' />分页 1</span>} key='1'>
            内容 1
          </TabPane>
          <TabPane tab={<span><Icon type='android' />分页 2</span>} key='2'>
            内容 2
          </TabPane>
        </Tabs>
        <h1 className='h1'>tab页位置</h1>
        <Tabs tabPosition='left'>
          <TabPane tab='分页 1' key='1'>分页 1</TabPane>
          <TabPane tab='分页 2' key='2'>分页 2</TabPane>
          <TabPane tab='分页 3' key='3'>分页 3</TabPane>
        </Tabs>
        <h1 className='h1'>tab页上下，左右滑动</h1>
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
        <h1 className='h1'>自定义新增也签触发器</h1>
        <div>
          <div style={{ marginBottom: 15 }}>
            <Button onClick={this.add}>添加</Button>
          </div>
          <Tabs hideAdd onChange={this.onChange} activeKey={this.state.activeKey} type='editable-card' onEdit={this.onEdit}>
            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
          </Tabs>
        </div>
      </div>
    )
  }
}
