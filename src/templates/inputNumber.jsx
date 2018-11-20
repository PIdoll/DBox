
import React from 'react';
import InputNumber from '../../components/input-number/index';

export default class InputNumberView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  onChange = (value) => {
    console.log('changed', value)
  }
  render() {
    return (
      <div className='main-container'>
        <h1>基本用法</h1>
        <InputNumber min={1} defaultValue={3} onChange={this.onChange} />
        <h1>三种尺寸</h1>
        <inputNumber size='large' min={1} max={1000} defaultValue={3} onChange={this.onChange} />
        <inputNumber min={1} max={1000} defaultValue={3} onChange={this.onChange} />
        <inputNumber size='small' min={1} max={1000} defaultValue={3} onChange={this.onChange} />
        <h1>不可用切换</h1>
        <input />
      </div>
    )
  }
}
