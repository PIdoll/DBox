import React from 'react';
import BasicDemo from './basic-demo';
import CustomClass from './custom-class';
import LazyDemo from './lazy-demo';
import CustomTransferStyle from './custom-transfer-style';

export default class Transfer extends React.Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <BasicDemo />
        <CustomClass />
        <LazyDemo />
        <CustomTransferStyle />
      </div>
    )
  }
}
