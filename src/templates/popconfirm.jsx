import React from 'react';
import Popconfirm from 'components/popconfirm';
import message from 'components/message';
import Button from 'components/button';
import Switch from 'components/switch';


const buttonWidth = 70;
const text = '确定要删除吗';
export default class PopconfirmDemo extends React.Component {
  state = {
    visible: false,
    condition: true, // 无论是否满足条件，都不显示popconfirm
  }
  confirm = () => {
    this.setState({ visible: false });
    message.success('删除成功');
  }
  changeCondition = (value) => {
    this.setState({ condition: value });
  }
  cancel = () => {
    this.setState({ visible: false });
    message.error('点击了取消');
  }
  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // 在显示popconfirm之前确认状态
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // 显示popconfirm
    }
  }
  render() {
    return (
      <div id='main-container' className='demo-popover'>
        <h1 className='h1'>基本用法</h1>
        <Popconfirm title='确定要删除吗?' onConfirm={this.confirm} onCancel={cancel} okText='确认' cancelText='取消'>
          <a href='#'>删除</a>
        </Popconfirm>
        <h1 className='h1'>12个方向</h1>
        <div className='placement'>
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Popconfirm placement='topLeft' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>TL</Button>
            </Popconfirm>
            <Popconfirm placement='top' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>Top</Button>
            </Popconfirm>
            <Popconfirm placement='topRight' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>TR</Button>
            </Popconfirm>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Popconfirm placement='leftTop' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>LT</Button>
            </Popconfirm>
            <Popconfirm placement='left' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>Left</Button>
            </Popconfirm>
            <Popconfirm placement='leftBottom' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>LB</Button>
            </Popconfirm>
          </div>
          <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
            <Popconfirm placement='rightTop' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>RT</Button>
            </Popconfirm>
            <Popconfirm placement='right' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>Right</Button>
            </Popconfirm>
            <Popconfirm placement='rightBottom' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>RB</Button>
            </Popconfirm>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popconfirm placement='bottomLeft' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>BL</Button>
            </Popconfirm>
            <Popconfirm placement='bottom' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>Bottom</Button>
            </Popconfirm>
            <Popconfirm placement='bottomRight' title={text} onConfirm={confirm} okText='确认' cancelText='取消'>
              <Button>BR</Button>
            </Popconfirm>
          </div>
        </div>
        <h1 className='h1'>条件触发</h1>
        <Popconfirm
          title='确定要删除吗？'
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText='确定'
          cancelText='取消'
        >
          <a href='#'>删除任务</a>
        </Popconfirm>
        <br />
        <br />
        是否直接删除：<Switch defaultChecked onChange={this.changeCondition} />
      </div>
    )
  };
}


const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
}

const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
}
