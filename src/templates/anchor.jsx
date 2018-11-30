/* eslint-disable react/jsx-indent */
import React from 'react';
import Anchor from 'components/anchor';

const { Link } = Anchor;

const anchorStyle = {
  width: 500,
  padding: 20,
  border: '1px solid #ccc',
}
const titleStyle = {
  height: 40,
  lineHeight: '40px',
  paddingLeft: 30,
}

const contentStyle = {
  paddingLeft: 30,
}

const handleClick = (e, link) => {
  // e.preventDefault();
  console.log(link);
};

export default () =>
  (
    <div id='main-container'>
      {/* <h1 className='h1'>Tab样式的锚点</h1>
      <div className='anchor' style={anchorStyle}>
        <Anchor type='inline'>
          <Link href='#components-anchor-demo-1_1' title='项目一' />
          <Link href='#components-anchor-demo-2_2' title='项目二' />
          <Link href='#components-anchor-demo-3_3' title='项目三' />
        </Anchor>
        <div id='components-anchor-demo-1_1'>
          <div style={titleStyle}>项目一</div>
          <div style={contentStyle}>这里是内容...</div>
        </div>
        <div id='components-anchor-demo-2_2'>
          <div style={titleStyle}>项目二</div>
          <div style={contentStyle}>这里是内容...</div>
        </div>
        <div id='components-anchor-demo-3_3'>
          <div style={titleStyle}>项目三</div>
          <div style={contentStyle}>这里是内容...</div>
        </div>
      </div>
      <h1 className='h1'>基本使用</h1>
      <div className='demo-anchor'>
        <Anchor onClick={handleClick}>
          <Link href='#components-anchor-demo-1' title='项目一' />
          <Link href='#components-anchor-demo-2' title='项目二' />
          <Link href='#components-anchor-demo-3' title='项目三' />
          <Link href='#components-anchor-demo-4' title='项目四' />
          <Link href='#components-anchor-demo-5' title='项目五' />
        </Anchor>
      </div> */}
      <h1 className='h1'>书签类型</h1>
      // eslint-disable-next-line no-return-assign
      // eslint-disable-next-line no-return-assign
      <div className='demo-anchor' style={{ display: 'flex' }}>
        <Anchor type='bookmark'>
          <Link href='#components-anchor-demo-1' title='项目一' />
          <Link href='#components-anchor-demo-2' title='项目二' />
          <Link href='#components-anchor-demo-3' title='项目三' />
          <Link href='#components-anchor-demo-4' title='项目四' />
          <Link href='#components-anchor-demo-5' title='项目五' />
        </Anchor>
        <div style={{width: 400, height: 600, backgroundColor: '#ccc'}}>
          <div id='components-anchor-demo-1'>
            <div style={titleStyle}>项目一</div>
            <div style={contentStyle}>这里是内容...</div>
          </div>
          <div id='components-anchor-demo-2'>
            <div style={titleStyle}>项目二</div>
            <div style={contentStyle}>这里是内容...</div>
          </div>
          <div id='components-anchor-demo-3'>
            <div style={titleStyle}>项目三</div>
            <div style={contentStyle}>这里是内容...</div>
          </div>
        </div>
      </div>
    </div>
  )
