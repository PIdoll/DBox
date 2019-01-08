import React from 'react';
import Button from 'components/button';
import Message from 'components/message/index';
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

    const DelayInfo = () => {
      Message.info('这是基本的信息提示，并且在10s之后会自动关闭', 10, normal);
    };

    const LoadingSuccess = () => {
      const hide = Message.loading('活动加载中..', 0, normal);
      // Dismiss manually and asynchronously
      setTimeout(hide, 2500);
    };

    const PromiseSuccess = () => {
      Message.loading('活动加载中..', 2.5)
      Message.open({
        content: 'open触发了',
        icon: <Icon type='check-circle' />,
      })
        .then(() => Message.success('加载结束', 2.5))
        .then(() => Message.info('加载中的加载结束', 2.5));
    };
    return (
      <div id='main-container'>
        <div>
          <div>
            <h1 style={{ marginTop: 40 }}>切换message是否以背景颜色来展示</h1>
            <Switch defaultChecked onChange={this.onChange} />
            <h1 className='h1'>基本类型信息提示</h1>
            <h2 className='h2'>提供，成功、失败、警告、普通信息四种基本的信息提示，并且提供回调函数，用于关闭后触发</h2>
            <Button style={{ marginRight: 10 }} onClick={success}>成功</Button>
            <Button type='danger' style={{ marginRight: 10 }} onClick={error}>失败</Button>
            <Button onClick={warn} style={{ marginRight: 10 }}>警告</Button>
            <Button onClick={info}>信息</Button>
            <h1 className='h1'>修改延时</h1>
            <h2 className='h2'>自定义时长 10s，默认时长为 3s。</h2>
            <Button onClick={DelayInfo}>10s后关闭</Button>
            <h1 className='h1'>加载中...</h1>
            <h2 className='h2'>进行全局 loading，异步自行移除。</h2>
            <Button onClick={LoadingSuccess}>加载中</Button>
            <h1 className='h1'>Promise接口</h1>
            <h2 className='h2'>可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。并且可以自定义图标</h2>
            <Button onClick={PromiseSuccess}>Promise</Button>
            <h1 className='h1'>全局方法</h1>
            <h2 className='h2'>还提供了全局配置和全局销毁方法。</h2>
          </div>
        </div>
      </div>
    )
  }
}
