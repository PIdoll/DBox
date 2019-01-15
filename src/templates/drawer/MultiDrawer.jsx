import React from 'react';
import {Button, Drawer} from 'components';
export default class MultiDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false,
  	 placement: 'right',
  	 childrenDrawer: false,
    }
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
    this.showChildrenDrawer = this.showChildrenDrawer.bind(this)
    this.onChildrenDrawerClose = this.onChildrenDrawerClose.bind(this)
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
  }
  showChildrenDrawer () {
    this.setState({
      childrenDrawer: true,
    });
  };
  onChildrenDrawerClose () {
    this.setState({
      childrenDrawer: false,
    });
  };
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.showDrawer}>
      打开多层抽屉
      </Button>
      <Drawer
        title='多层级抽屉'
        width={520}
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
    >
        <Button type='primary' onClick={this.showChildrenDrawer}>
        打开次级抽屉
        </Button>
        <Drawer
          title='次级抽屉'
          width={320}
          closable={false}
          onClose={this.onChildrenDrawerClose}
          visible={this.state.childrenDrawer}
      >
        这是次级抽屉
        </Drawer>
        <div
          style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }}
      >
          <Button
            style={{
            marginRight: 8,
          }}
            onClick={this.onClose}
        >
          取消
          </Button>
          <Button onClick={this.onClose} type='primary'>
          提交
          </Button>
        </div>
      </Drawer>
    </div>
     )
  }
}
