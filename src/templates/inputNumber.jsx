
import React from 'react';
import InputNumber from '../../components/input-number';
import Button from '../../components/button';

export default class InputNumberView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  onChange = (value) => {
    console.log('changed', value)
  }
  handleToggle() {
    this.setState({
      disabled: !this.state.disabled
    })
  }
  render() {
    return (
      <div className='main-container' style={{margin: '10px 50px'}}>
        <h1>基本用法</h1>
        <InputNumber min={1} defaultValue={3} onChange={this.onChange} max={10} />
        <br />
        <br />
        <h1>三种尺寸</h1>
        <InputNumber size='large' min={1} max={1000} defaultValue={3} onChange={this.onChange} />
        <InputNumber min={1} max={1000} defaultValue={3} onChange={this.onChange} />
        <InputNumber size='small' min={1} max={1000} defaultValue={3} onChange={this.onChange} />
        <br />
        <br />
        <h1>小数</h1>
        <InputNumber min={0} max={10} defaultValue={1} step={0.1} />
        <br />
        <br />
        <h1>不可用状态切换</h1>
        <div>
          <InputNumber min={1} max={100} defaultValue={5} disabled={this.state.disabled} />
          <div style={{marginTop: '20px'}} >
            <Button type='primary' onClick={this.handleToggle}>Toggle disabled</Button>
          </div>
        </div>
      </div>
    )
  }
}
