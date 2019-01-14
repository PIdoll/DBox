import React from 'react';
import InputNumber from 'components/input-number';

const gutterInputNumber = {
  marginLeft: '10px'
}
export default class SizeInputNumber extends React.Component {
  render() {
    return (
      <div>
        <InputNumber size='small' min={1} defaultValue={3} max={10} />
        <InputNumber min={1} defaultValue={3} max={10} style={gutterInputNumber} />
        <InputNumber size='large' min={1} defaultValue={3} max={10} style={gutterInputNumber} />
      </div>
    )
  }
}
