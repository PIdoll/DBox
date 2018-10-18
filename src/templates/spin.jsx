import React from 'react';
import Spin from 'components/spin/index';

export default class SpinView extends React.Component {
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
          <Spin size='large' />
        </div>
      </div>
    )
  }
}
