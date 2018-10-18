import React from 'react';
import Anchor from 'components/anchor'

const Link = Anchor.Link;

export default () =>
  (
    <div id='main-container'>
      <h1 className='h1'>有圈锚点</h1>
      <span className='demo-anchor'>
        <Anchor>
          <Link href='#one' title='基础模型' />
          <Link href='#two' title='固定模型' />
          <Link href='#three' title='API' >
            <Link href='#four' title='锚点属性' />
            <Link href='#five' title='链接属性' />
          </Link>
        </Anchor>
      </span>
      <dr />
      <h1 className='h1'>无圈锚点</h1>
      <span>
        <Anchor affix={false}>
          <Link href='#one' title='基础模型' />
          <Link href='#two' title='固定模型' />
          <Link href='#three' title='API' >
            <Link href='#four' title='锚点属性' />
            <Link href='#five' title='链接属性' />
          </Link>
        </Anchor>
      </span>

      <div id='one' >
        锚点一
      </div>
      <div id='two'>
        锚点二
      </div>
      <div id='three' >
        锚点三
      </div>
      <div id='four'>
        锚点四
      </div>
      <div id='five'>
        锚点四
      </div>
    </div>
  )
