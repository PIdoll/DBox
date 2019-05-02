import React from 'react';
import {Checkbox, Button} from 'components';

export default class ControlCheckbox extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      disabled: false,
    }
    this.toggleChecked = this.toggleChecked.bind(this)
    this.toggleDisabled = this.toggleDisabled.bind(this)
    this.onChangeState = this.onChangeState.bind(this)
  }
  toggleChecked () {
    this.setState({ checked: !this.state.checked });
  }
  toggleDisabled () {
    this.setState({ disabled: !this.state.disabled });
  }
  onChangeState (e) {
    this.setState({
      checked: e.target.checked,
    });
  }
  render() {
    const label = `${this.state.checked ? '选中' : '非选中'}-${this.state.disabled ? '禁用' : '非禁用'}`
    return (
      <div>
        <Checkbox onChange={this.onChangeState} checked={this.state.checked} disabled={this.state.disabled} >{label}</Checkbox>
        <br />
        <Button onClick={this.toggleChecked}>选中切换</Button>  <Button onClick={this.toggleDisabled}>禁用切换</Button>
      </div>
    )
  }
}
