import React from 'react';

import Input from 'components/input';
import Icon from 'components/icon';

// const InputGroup = Input.Group
const Textarea = Input.Textarea
const Search = Input.Search

export default () => (
  <div id='main-container'>
    <h1 className='h1'>基本使用输入框</h1>
    <Input type='text' placeholder='请输入姓名' />
    <h1 className='h1'>前置／后置</h1>
    <Input type='text' addonBefore='姓名' placeholder='黄晓明' addonAfter='你好' />
    <h1 className='h1'>搜索</h1>
    <Search style={{ width: 200 }} enterButton='搜索' onSearch={(value => console.log(value))} />
    <h1 className='h1'>前缀／后缀</h1>
    <Input placeholder='请输入姓名' prefix={<Icon type='user' />} suffix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} />
    <h1 className='h1'>文本框</h1>
    <Textarea />
    <h1 className='h1'>高度可变文本框(设置高度范围为2-6)</h1>
    <Textarea autosize={{minRows: 2, maxRows: 6}} />
  </div>
	)
