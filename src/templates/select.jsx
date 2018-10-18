import React from 'react'

import Select from 'components/select'

const Option = Select.Option;

const select = () => (
  <div id='main-container'>
    <h1 className='h1'>普通下拉框</h1>
    <Select defaultValue='jane' style={{ width: 120, margin: 30 }}>
      <Option value='jane'>大明</Option>
      <Option value='mick'>大大</Option>
    </Select>
    <br />
    <h1 className='h1'>搜索下拉框</h1>
    <Select showSearch style={{ width: 160, margin: 30 }} placeholder='请选择' >
      <Option value='jane'>小小</Option>
      <Option value='mick' disabled >大明</Option>
    </Select>
    <br />
    <h1 className='h1'>多选下拉框</h1>
    <Select mode='multiple' style={{ width: 160, margin: 30 }} placeholder='请选择' >
      <Option value='jane'>小明</Option>
      <Option value='jack'>大明</Option>
      <Option value='mick' >大大明</Option>
    </Select>
  </div>
)

export default select;
