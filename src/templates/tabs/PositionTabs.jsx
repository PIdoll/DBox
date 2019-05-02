import React from 'react';
import {Tabs, Radio} from 'components';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
function onNextClick () {
  console.log('onNextClick')
};
function onPrevClick () {
  console.log('onPrevClick')
};
function onTabClick () {
  console.log('onTabClick')
}
export default class PositionTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    }
    this.handleModeChange = this.handleModeChange.bind(this)
  };
  handleModeChange (e) {
    const mode = e.target.value;
    this.setState({ mode });
  };
  render() {
  return (
    <div>
      <RadioGroup onChange={this.handleModeChange} value={this.state.mode} style={{marginBottom: 8}}>
        <RadioButton value='top'>水平</RadioButton>
        <RadioButton value='left'>垂直</RadioButton>
      </RadioGroup>
      <Tabs tabBarExtraContent='tabBarExtraContent' onNextClick={onNextClick} onPrevClick={onPrevClick} onTabClick={onTabClick} tabBarStyle={{backgroundColor: '#ccc'}} defaultActiveKey='11' tabPosition={this.state.mode} style={{height: 247}}>
        <TabPane tab='选项一' key='11'>选项一</TabPane>
        <TabPane tab='选项二' key='12'>选项二</TabPane>
        <TabPane tab='选项三' key='13'>选项三</TabPane>
        <TabPane tab='选项四' key='14'>选项四</TabPane>
        <TabPane tab='选项五' key='15'>选项五</TabPane>
        <TabPane tab='选项六' key='16'>选项六</TabPane>
        <TabPane disabled tab='选项七' key='17'>选项七</TabPane>
        <TabPane tab='选项八' key='18'>选项八</TabPane>
        <TabPane tab='选项九' key='19'>选项九</TabPane>
        <TabPane tab='选项十' key='20'>选项十</TabPane>
        <TabPane tab='选项十一' key='21'>选项十一</TabPane>
        <TabPane tab='选项十二' key='22'>选项十二</TabPane>
        <TabPane tab='选项十三' key='23'>选项十三</TabPane>
        <TabPane tab='选项十四' key='24'>选项十四</TabPane>
      </Tabs>
    </div>
  )
}
}
