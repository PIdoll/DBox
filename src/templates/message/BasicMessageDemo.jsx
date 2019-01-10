import React from 'react';
import Button from 'components/button';
import Message from 'components/message/index';
import Switch from 'components/switch/index';

export default class BasicMessageDemo extends React.Component {
  state = {
    normal: false
  }
  onChange = (checked) => {
    this.setState({ normal: !this.state.normal });
  }
  render() {
    const { normal } = this.state;
    Message.config({
      top: 30,
      duration: 10,
      maxCount: 3,
    });
    const success = () => {
      Message.success('这是成功信息提示', () => console.log(1111), normal);
    };

    const error = () => {
      Message.error('这是错误信息提示', normal);
    }

    const warn = () => {
      Message.warn('这是警告信息提示', 3, normal);
    };

    const info = () => {
      Message.info('这是基本的信息提示', 3, () => console.log('关闭回调'), normal);
    };
    return (
      <div>
        <div>
          <div>
            <h3>切换message是否以背景颜色来展示</h3>
            <Switch defaultChecked onChange={this.onChange} /><br />
            <Button style={{ marginRight: 10 }} onClick={success}>成功</Button>
            <Button type='danger' style={{ marginRight: 10 }} onClick={error}>失败</Button>
            <Button onClick={warn} style={{ marginRight: 10 }}>警告</Button>
            <Button onClick={info}>信息</Button>
          </div>
        </div>
      </div>
    )
  }
}
