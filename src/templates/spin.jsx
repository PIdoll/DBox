import React from 'react';
import Spin from 'components/spin/index';
import Alert from 'components/alert/index';
import Switch from 'components/switch/index';
import Icon from 'components/icon/index';

const container = (
  <Alert
    message='Alert message title'
    description='Further details about the context of this alert.'
    type='info'
  />
);

const antIcon = <Icon type='down' style={{ fontSize: 24 }} spin />

export default class SpinView extends React.Component {
  state = {
    loading: false
  }

  toggle = (value) => {
    this.setState({ loading: value });
  }
  render() {
    const style = {
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 4,
      marginBottom: 20,
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 50,
      paddingRight: 50,
      marginTop: 20,
      marginBotton: 20
    }
    return (
      <div id='main-container'>
        <h1 className='h1'>
          简单的加载中
        </h1>
        <Spin />
        <h1 className='h1'>
          三种不同大小的加载中
        </h1>
        <Spin size='small' />
        <Spin />
        <Spin size='large' />
        <h1 className='h1'>
          放在容器中
        </h1>
        <div style={style}>
          <Spin />
        </div>
        <h1 className='h1'>
          自定义描述文案
        </h1>
        <Spin tip='Loading...'>
          <Alert
            message='Alert信息标题'
            description='关于此警报上下文的详细信息.'
            type='info'
          />
        </Spin>
        <h1 className='h1'>
          卡片加载中
        </h1>
        <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<Switch onChange={this.toggle} />
        </div>
        <h1 className='h1'>
          自定义指示符
        </h1>
        <Spin indicator={antIcon} />
      </div>
    )
  }
}
