import React from 'react';
import Spin from 'components/spin/index';

export default class DifferentSizeSpinDemo extends React.Component {
  render() {
    return (
      <div>
        <Spin size='small' />
        <Spin />
        <Spin size='large' />
      </div>
    )
  }
}
