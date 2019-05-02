import React from 'react';
import {Button, Drawer} from 'components';
export default class BasicDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  };
  showDrawer () {
    this.setState({
      visible: true,
    });
  }
  onClose () {
    this.setState({
      visible: false,
    });
  };
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.showDrawer}>
        打开基础抽屉
      </Button>
      <Drawer
        title='基础抽屉'
        placement='right'
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <p>一些基本内容...</p>
        <p style={{marginTop: 24, marginBottom: 24}}>一些基本内容...</p>
        <p>一些基本内容...</p>
      </Drawer>
    </div>
  )
}
}
