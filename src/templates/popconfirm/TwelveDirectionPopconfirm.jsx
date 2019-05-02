import React from 'react';
import Button from 'components/button';
import Popconfirm from 'components/popconfirm';
import Message from 'components/message';
const buttonWidth = '70px';
const text = '确定要删除吗';
export default class TwelveDirectionPopconfirm extends React.Component {
    constructor() {
        super();
        this.state = {
             visible: false,
        }
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    confirm() {
        this.setState({ visible: false });
        Message.success('删除成功');
    }
    cancel() {
        this.setState({ visible: false });
        console.log('click cancel');
    }
    render() {
        return (
          <div>
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
              <Popconfirm placement='topLeft' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>TL</Button>
              </Popconfirm>
              <Popconfirm placement='top' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Top</Button>
              </Popconfirm>
              <Popconfirm placement='topRight' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>TR</Button>
              </Popconfirm>
            </div>
            <div style={{ width: buttonWidth, float: 'left' }}>
              <Popconfirm placement='leftTop' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>LT</Button>
              </Popconfirm>
              <Popconfirm placement='left' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Left</Button>
              </Popconfirm>
              <Popconfirm placement='leftBottom' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>LB</Button>
              </Popconfirm>
            </div>
            <div style={{ width: buttonWidth, marginLeft: (70 * 4) + 24 }}>
              <Popconfirm placement='rightTop' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>RT</Button>
              </Popconfirm>
              <Popconfirm placement='right' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Right</Button>
              </Popconfirm>
              <Popconfirm placement='rightBottom' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>RB</Button>
              </Popconfirm>
            </div>
            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <Popconfirm placement='bottomLeft' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>BL</Button>
              </Popconfirm>
              <Popconfirm placement='bottom' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Bottom</Button>
              </Popconfirm>
              <Popconfirm placement='bottomRight' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>BR</Button>
              </Popconfirm>
            </div>
          </div>
        )
    }
}
