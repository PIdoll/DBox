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
    <Input type='text' placeholder='请输入' style={{width: '160px'}} /><br /><br />
    <Input type='text' disabled placeholder='请输入' style={{width: '160px'}} /><br /><br />
    <Input type='text' readOnly value='请输入' style={{width: '160px'}} />

    <h1 className='h1'>前置／后置</h1>
    <Input type='text' addonBefore='姓名' placeholder='请输入' addonAfter='你好' style={{width: '160px'}} /><br />
    <Input type='text' addonBefore={selectBefore} placeholder='请输入' addonAfter={selectAfter} style={{width: '160px'}} />

    <h1 className='h1'>搜索</h1>
    <Search
      placeholder='请输入'
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    /><br /><br />
    <Search
      placeholder='请输入'
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
      enterButton
    /><br /><br />
    <Search style={{ width: 200 }} enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />
    <br /><br />
    <Search style={{ width: 200 }} size='large' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />

    <h1 className='h1'>前缀／后缀</h1>
    <Input placeholder='请输入' prefix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} />

    <h1 className='h1'>三种大小</h1>
    <Input size='large' placeholder='大尺寸' style={{width: '200px'}} /><br /><br />
    <Input placeholder='默认尺寸' style={{width: '200px'}} /><br /><br />
    <Input size='small' placeholder='小尺寸' style={{width: '200px'}} /><br /><br />
    <Search style={{ width: 200 }} size='large' onSearch={(value => console.log(value))} placeholder='大尺寸' /><br /><br />
    <Search style={{ width: 200 }} onSearch={(value => console.log(value))} placeholder='默认尺寸' /><br /><br />
    <Search style={{ width: 200 }} size='small' onSearch={(value => console.log(value))} placeholder='小尺寸' /><br /><br />

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
      <Input style={{width: '100px'}} defaultValue='0571' />
      <Input style={{width: '160px'}} defaultValue='26888888' />
    </InputGroup>
    <br /><br />

    <InputGroup compact>
      <Select defaultValue='Shanghai'>
        <Option value='Shanghai'>上海</Option>
        <Option value='Jiangsu'>江苏</Option>
      </Select>
      <Input style={{width: '160px'}} defaultValue='上海' />
    </InputGroup>
    <br /><br />
    <InputGroup compact>
      <Input style={{width: '160px'}} defaultValue='请输入' />
      <DatePicker style={{width: '100px'}} />
    </InputGroup>
    <br />

    <h1 className='h1'>文本框</h1>
    <Textarea style={{width: '200px'}} />
    <h1 className='h1'>高度可变文本框(设置高度范围为2-6)</h1>
    <Textarea style={{width: '200px'}} autosize={{minRows: 2, maxRows: 6}} />
  </div>
	)
