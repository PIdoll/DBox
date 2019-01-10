import React from 'react';
import {Button, Radio, Drawer} from 'components';
const RadioGroup = Radio.RadioGroup;
export default class PositionDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false,
      placement: 'right'
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onChange = this.onChange.bind(this)
  };
  onChange (e) {
    this.setState({
      placement: e.target.value,
    });
  }
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <div>
      <RadioGroup
        style={{ marginRight: 8 }}
        defaultValue={this.state.placement}
        onChange={this.onChange}
    >
        <Radio value='top'>上</Radio>
        <Radio value='bottom'>下</Radio>
        <Radio value='left'>左</Radio>
        <Radio value='right'>右</Radio>
      </RadioGroup>
      <br />
      <Button type='primary' onClick={this.showDrawer}>
      打开方位抽屉
      </Button>
      <Drawer
        title='基础抽屉'
        placement={this.state.placement}
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
    >
        <p>一些基本内容...</p>
        <p style={{marginTop: 24, marginBottom: 24}}>一些基本内容...</p>
        <p>一些基本内容...</p>
      </Drawer>
    </div>
    )
  }
}
