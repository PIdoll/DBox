import React from 'react';
import Spin from 'components/spin/index';

export default class BasicSpinDemo extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 51, marginLeft: 100 }}>
        <Spin />
      </div>
    )
  }
}
