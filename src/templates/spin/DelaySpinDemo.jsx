import React from 'react';
import Spin from 'components/spin/index';
import Switch from 'components/switch/index';
import Alert from 'components/alert/index';

const container = (
  <Alert
    message='Alert message title'
    description='Further details about the context of this alert.'
    type='info'
  />
);

export default class DelaySpinDemo extends React.Component {
  state = {
    loading: false
  }
  toggle = (value) => {
    this.setState({ loading: value });
  }
  render() {
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch onChange={this.toggle} />
        </div>
      </div>
    )
  }
}
