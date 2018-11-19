import React from 'react';
import Button from 'components/button';
import message from 'components/message/index';
import Icon from 'components/icon/index';
import Switch from '../../components/switch';

export default class messageView extends React.Component {
  state = {
    normal: false
  }
  onChange = (checked) => {
    this.setState({ normal: !this.state.normal });
  }
  render() {
    const { normal } = this.state;
    // message.config({
    //   top: 100,
    //   duration: 10,
    //   maxCount: 3,
    // });
    const success = () => {
      message.success('这是成功信息提示', 30, () => console.log(1111), normal);
    };

    const error = () => {
      message.error('这是错误信息提示', normal);
    }

    const warn = () => {
      message.warn('这是警告信息提示', 3, normal);
    };

    const info = () => {
      message.info('这是基本的信息提示', 3, () => console.log('关闭回调'), normal);
    };

    const DelayInfo = () => {
      message.info('这是基本的信息提示，并且在10s之后会自动关闭', 10, normal);
    };

    const LoadingSuccess = () => {
      const hide = message.loading('活动加载中..', 0, normal);
      // Dismiss manually and asynchronously
      setTimeout(hide, 250000);
    };

    const PromiseSuccess = () => {
      message.loading('活动加载中..', 2.5)
      message.open({
        content: 'open触发了',
        normal: false,
        icon: <Icon type='down-circle' />,
      })
        .then(() => message.success('加载结束', 2.5))
        .then(() => message.info('加载中的加载结束', 2.5));
    };
    return (
      <div id='main-container'>
        <div>
          <div>
            <h1 style={{ marginTop: 40 }}>切换message是否以背景颜色来展示</h1>
            <Switch defaultChecked onChange={this.onChange} />
            <h1 className='h1'>基本类型信息提示</h1>
            <Button style={{ marginRight: 10 }} onClick={success}>成功</Button>
            <Button type='danger' style={{ marginRight: 10 }} onClick={error}>失败</Button>
            <Button onClick={warn} style={{ marginRight: 10 }}>警告</Button>
            <Button onClick={info}>信息</Button>
            <h1 className='h1'>修改延时</h1>
            <Button onClick={DelayInfo}>10s后关闭</Button>
            <h1 className='h1'>加载中...</h1>
            <Button onClick={LoadingSuccess}>加载中</Button>
            <h1 className='h1'>Promise接口</h1>
            <Button onClick={PromiseSuccess}>Promise</Button>
          </div>
        </div>
      </div>
    )
  }
}
