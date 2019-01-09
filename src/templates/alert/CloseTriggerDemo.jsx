import React from 'react';
import Alert from 'components/alert/index';

export default class CloseTriggerDemo extends React.Component {
  state = {
    visible: true,
  }

  handleClose = () => {
    console.log(1)
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <Alert
          message='Alert Message Text'
          tyle='success'
          closable
          onClose={this.handleClose} />
      </div>
    )
  }
}
