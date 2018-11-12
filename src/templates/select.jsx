import React from 'react'

import Select from 'components/select'

const Option = Select.Option;

const select = () => (
  <div id='main-container'>
    <h1 className='h1'>基本使用</h1>
    <Select size='small' defaultValue='jane' style={{ width: 160 }}>
      <Option value='jane'>小尺寸1</Option>
      <Option value='mick'>小尺寸2</Option>
    </Select>
    <br /><br />
    <Select defaultValue='jane' style={{ width: 160 }}>
      <Option value='jane'>默认尺寸1</Option>
      <Option value='mick'>默认尺寸2</Option>
    </Select>
    <br /><br />
    <Select size='large' defaultValue='jane' style={{ width: 160 }}>
      <Option value='jane'>大尺寸1</Option>
      <Option value='mick'>大尺寸2</Option>
    </Select>
    <br /><br />
    <Select defaultValue='禁用状态' style={{ width: 160 }} disabled>
      <Option value='lucy'>禁用状态</Option>
    </Select>
    <br /><br />
    <h1 className='h1'>搜索下拉框</h1>
    <Select showSearch style={{ width: 160 }} placeholder='请选择' >
      <Option value='jane'>jane</Option>
      <Option value='mick' >mick</Option>
    </Select>
    <br />
    <h1 className='h1'>多选下拉框</h1>
    <Select mode='multiple' style={{ width: 160 }} placeholder='多选' >
      <Option value='jane'>小明</Option>
      <Option value='jack'>大明</Option>
      <Option value='mick' >大大明</Option>
    </Select>
    <br /><br />
    <Select mode='tags' style={{ width: 160 }} placeholder='可随意输入内容' >
      <Option value='jane'>小明</Option>
      <Option value='jack'>大明</Option>
      <Option value='mick' >大大明</Option>
    </Select>
  </div>
)

export default select;
