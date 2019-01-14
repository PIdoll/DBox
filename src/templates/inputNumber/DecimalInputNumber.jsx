import React from 'react';
import InputNumber from 'components/input-number';

export default class BasicInputNumber extends React.Component {
  render() {
    return (
      <InputNumber min={1} step={0.2} defaultValue={3} max={10} />
    )
  }
}
