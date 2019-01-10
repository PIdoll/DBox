import React from 'react';
import InputNumber from 'components/input-number';
import Button from 'components/button';

export default class BasicInputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      disabled: !this.state.disabled,
    })
  }
  render() {
    return (
      <div>
        <InputNumber min={1} max={100} defaultValue={5} disabled={this.state.disabled} />
        <div style={{marginTop: '20px'}} >
          <Button type='primary' onClick={this.handleToggle}>切换按钮</Button>
        </div>
      </div>
    )
  }
}
