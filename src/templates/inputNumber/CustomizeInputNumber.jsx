import React from 'react';
import InputNumber from 'components/input-number';

export default class CustomizeInputNumber extends React.Component {
  render() {
    return (
      <div>
        <InputNumber min={0} max={100} defaultValue={100} formatter={value => `${value}%`} parser={value => value.replace('%', '')} style={{marginRight: '10px'}} />
        <InputNumber min={0} defaultValue={2600}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')} />
      </div>
    )
  }
}
