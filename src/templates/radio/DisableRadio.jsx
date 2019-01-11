import React from 'react';
import {Radio, Button} from 'components';
export default class DisableRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
    this.toggleDisabled = this.toggleDisabled.bind(this)
  };
  toggleDisabled () {
    this.setState({
      disabled: !this.state.disabled
    });
	}
  render() {
  return (
    <div>
      <Radio defaultChecked={false} disabled >不能操作</Radio>
      <Radio disabled={this.state.disabled}>不允许操作</Radio>
      <Button type='primary' onClick={this.toggleDisabled}>
        控制能否操作
      </Button>
    </div>
  )
}
}
