import React from 'react';
import Alert from 'components/alert/index';

export default class UninstallDemo extends React.Component {
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
        {
          this.state.visible ? (
            <Alert
              message='Alert Message Text'
              tyle='success'
              closable
              afterClose={this.handleClose} />
            ) : null
          }
      </div>
    )
  }
}
