import React from 'react';
import {Switch, Button} from 'components';

export default class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    disabled: true,
    defaultChecked: true
    }
    this.toggle = this.toggle.bind(this)
    this.onChange = this.onChange.bind(this)
  };
  toggle () {
    this.setState({
      disabled: !this.state.disabled
    })
  };
  onChange (checked) {
    console.log(`onChange回调${checked}`)
  };
  render() {
  return (
    <div>
      <Switch onChange={this.onChange} disabled={this.state.disabled} />
      <br />
      <Button onClick={this.toggle} >改变禁用状态</Button>
    </div>
  )
}
}
