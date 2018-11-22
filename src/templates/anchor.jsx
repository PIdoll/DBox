import React from 'react';
import Anchor from 'components/anchor'

const { Link } = Anchor;

export default () =>
  (
    <div id='main-container'>
      <h1 className='h1'>基本使用</h1>
      <span className='demo-anchor'>
        <Anchor>
          <Link href='#components-anchor-demo-1' title='项目一' />
          <Link href='#components-anchor-demo-2' title='项目二' />
          <Link href='#components-anchor-demo-3' title='项目三' />
          <Link href='#components-anchor-demo-4' title='项目四' />
          <Link href='#components-anchor-demo-5' title='项目五' />
        </Anchor>
      </span>
      <h1 className='h1'>Tab样式的锚点</h1>
      <div className='demo-anchor'>
        <Anchor type='inline'>
          <Link href='#components-anchor-demo-1' title='项目一' />
          <Link href='#components-anchor-demo-2' title='项目二' />
          <Link href='#components-anchor-demo-3' title='项目三' />
          <Link href='#components-anchor-demo-4' title='项目四' />
          <Link href='#components-anchor-demo-5' title='项目五' />
        </Anchor>
      </div>
    </div>
  )
