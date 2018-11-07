import React from 'react';

import Input from 'components/input';
import Icon from 'components/icon';
import Select from 'components/Select';
import Grid from 'components/Grid';
import DatePicker from 'components/date-picker/index'


const InputGroup = Input.Group
const Textarea = Input.Textarea
const Search = Input.Search
const Option = Select.Option;
const Col = Grid.Col;

const selectBefore = (
  <Select defaultValue='Http://' style={{ width: 90 }}>
    <Option value='Http://'>Http://</Option>
    <Option value='Https://'>Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue='.com' style={{ width: 80 }}>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </Select>
);

export default () => (
  <div id='main-container'>
    <h1 className='h1'>基本使用输入框</h1>
    <Input type='text' placeholder='请输入姓名' /><br /><br />
    <Input type='text' disabled placeholder='禁用状态' /><br /><br />
    <Input type='text' readOnly value='只读状态' />

    <h1 className='h1'>前置／后置</h1>
    <Input type='text' addonBefore='姓名' placeholder='黄晓明' addonAfter='你好' /><br />
    <Input type='text' addonBefore={selectBefore} placeholder='请输入网址' addonAfter={selectAfter} />

    <h1 className='h1'>搜索</h1>
    <Search
      placeholder='请输入搜索内容'
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    /><br /><br />
    <Search
      placeholder='请输入搜索内容'
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
      enterButton
    /><br /><br />
    <Search style={{ width: 200 }} enterButton='搜索' onSearch={(value => console.log(value))} />
    <br /><br />
    <Search style={{ width: 200 }} size='large' enterButton='搜索' onSearch={(value => console.log(value))} />

    <h1 className='h1'>前缀／后缀</h1>
    <Input placeholder='请输入姓名' prefix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} />

    <h1 className='h1'>三种大小</h1>
    <Input size='large' placeholder='大尺寸' /><br /><br />
    <Input placeholder='默认尺寸' /><br /><br />
    <Input size='small' placeholder='小尺寸' /><br /><br />
    <Search style={{ width: 200 }} size='large' onSearch={(value => console.log(value))} /><br /><br />
    <Search style={{ width: 200 }} onSearch={(value => console.log(value))} /><br /><br />
    <Search style={{ width: 200 }} size='small' onSearch={(value => console.log(value))} /><br /><br />

    <h1 className='h1'>输入框组合</h1>
    <InputGroup size='large'>
      <Col span={3}>
        <Input defaultValue='021' />
      </Col>
      <Col span={8}>
        <Input defaultValue='12345678' />
      </Col>
    </InputGroup>
    <br /><br />
    <InputGroup compact>
      <Input style={{ width: '20%' }} defaultValue='0571' />
      <Input style={{ width: '30%' }} defaultValue='26888888' />
    </InputGroup>
    <br /><br />

    <InputGroup compact>
      <Select defaultValue='Shanghai'>
        <Option value='Shanghai'>上海</Option>
        <Option value='Jiangsu'>江苏</Option>
      </Select>
      <Input style={{ width: '50%' }} defaultValue='上海' />
    </InputGroup>
    <br /><br />
    <InputGroup compact>
      <Input style={{ width: '50%' }} defaultValue='输入内容' />
      <DatePicker />
    </InputGroup>
    <br />

    <h1 className='h1'>文本框</h1>
    <Textarea />
    <h1 className='h1'>高度可变文本框(设置高度范围为2-6)</h1>
    <Textarea autosize={{minRows: 2, maxRows: 6}} />
  </div>
	)
