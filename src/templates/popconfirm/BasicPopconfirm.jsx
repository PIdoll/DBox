import React from 'react';
import Message from 'components/message';
import Popconfirm from 'components/popconfirm';
import Icon from '../../../components/icon';

export default class BasicPopconfirm extends React.Component {
    confirm = () => {
        this.setState({ visible: false });
        Message.success('删除成功');
    }
    cancel = () => {
        this.setState({ visible: false });
    }
    getIcon = () => {
        return <Icon type='plus' />
    }
    render() {
        return (
          <div>
            <Popconfirm title='确定删除当前信息?' onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
              <a href='#'>删除</a>
            </Popconfirm>
            <br /><br />
            <Popconfirm title='确定删除当前信息?' icon={this.getIcon()} okType='primary' onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
              <a href='#'>删除</a>
            </Popconfirm>
          </div>
        )
    }
}
