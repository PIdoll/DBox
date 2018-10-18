import React from 'react'

import Affix from 'components/affix';
import Button from 'components/button';

export default class Demo extends React.Component {
  render() {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本用法</h1>
        <Affix>
          <Button type='primary'>固定在顶部</Button>
        </Affix>
        <br />
        <Affix offsetBottom={0}>
          <Button type='primary'>固定在底部</Button>
        </Affix>
        <h1 className='h1'>固定状态改变的回调</h1>
        <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
          <Button>在距离顶部120px的地方固定住</Button>
        </Affix>
        <h1 className='h1'>滚动容器</h1>
        <div className='scrollable-container' ref={node => { this.container = node }}>
          <div className='background'>
            <Affix target={() => (this.container)}>
              <Button type='primary'>固定在容器的顶部</Button>
            </Affix>
          </div>
        </div>
      </div>
    )
  };
}
