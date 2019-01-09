import React from 'react';

import Input from 'components/input';
import Icon from 'components/icon';
import Select from 'components/select';
import Grid from 'components/grid';
import DatePicker from 'components/date-picker/index'


const InputGroup = Input.Group
const Textarea = Input.Textarea
const Search = Input.Search
const Option = Select.Option;
const Col = Grid.Col;

const selectBefore = (
  <Select defaultValue='Http://' style={{ width: '90px' }}>
    <Option value='Http://'>Http://</Option>
    <Option value='Https://'>Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue='.com' style={{ width: '80px' }}>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </Select>
);

export default class InputView extends React.Component {
  handlePressEnter = () => {
    console.log('pressEnter');
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本使用输入框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)type属性同原生input一样 <br />
          2)设置clearable属性，测试是否可清空输入框，当输入框有值或者为空情形下，鼠标移入和移出关闭icon显示效果<br />
          3)设置disabled属性，测试输入框是否禁用<br />
          4)设置readOnly属性，测试输入框是否只读<br />
          5)设置onPressEnter属性，测试按下enter键后是否能调函数
        </h2>
        <Input type='text' placeholder='请输入' style={{width: '200px'}} clearable onPressEnter={this.handlePressEnter} /><br /><br />
        <Input type='text' disabled placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Input type='text' readOnly value='请输入' style={{width: '200px'}} />

        <h1 className='h1'>2.前置／后置</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置addonBefore和beforelength属性为前置内容和长度，设置addonAfter和afterlength属性为后置内容和长度 <br />
        </h2>
        <div style={{width: '400px'}} >
          <Input type='text' addonBefore='邮政编码' placeholder='请输入' beforelength='100px' />
        </div>
        <br />
        <div style={{width: '400px'}} >
          <Input type='text' placeholder='请输入' addonAfter='.com' afterlength='80px' />
        </div>
        <br />
        <div style={{width: '400px'}} >
          <Input type='text' addonBefore={selectBefore} placeholder='请输入' addonAfter={selectAfter} beforelength='100px' afterlength='80px' />
        </div>


        <h1 className='h1'>3.搜索</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Input.Search组件，测试组件是否显示正常<br />
          2)设置enterButton属性，测试不传值与传值区别<br />
          3)设置size属性，测试样式是否正常<br />
          4)设置onSearch函数，测试是否能正常调用
        </h2>
        <Search
          placeholder='请输入'
          onSearch={value => console.log(value)}
          style={{ width: '250px' }}
        />
        <br /><br />
        <Search
          placeholder='请输入'
          onSearch={value => console.log(value)}
          style={{ width: '250px' }}
          enterButton
        />
        <br /><br />
        <Search style={{ width: '250px' }} size='small' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />
        <br /><br />
        <Search style={{ width: '250px' }} enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />
        <br /><br />
        <Search style={{ width: '250px' }} size='large' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />


        <h1 className='h1'>4.前缀／后缀</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置prefix，suffix属性，测试传入icon显示是否正常<br />
        </h2>
        <div >
          <Input placeholder='请输入' style={{ width: '250px' }} prefix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} /><br /><br />
          <Input placeholder='请输入' style={{ width: '250px' }} suffix={<Icon type='edit' />} onChange={(e) => console.log(e.target.value)} />
        </div>

        <h1 className='h1'>5.三种大小</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置size属性，测试input框大小是否正常<br />
        </h2>
        <Input size='large' placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Input placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Input size='small' placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Search style={{ width: 200 }} size='large' onSearch={(value => console.log(value))} placeholder='请输入' /><br /><br />
        <Search style={{ width: 200 }} onSearch={(value => console.log(value))} placeholder='请输入' /><br /><br />
        <Search style={{ width: 200 }} size='small' onSearch={(value => console.log(value))} placeholder='请输入' /><br /><br />

        <h1 className='h1'>6.输入框组合</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Input.Group，测试输入框组合是否正常<br />
          2)使用Input.Group，并且设置compact属性,测试输入框是否紧凑在一起
        </h2>
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
          <Select defaultValue='Shanghai' style={{width: '160px'}}>
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

        <h1 className='h1'>7.文本框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Input.Textarea，测试文本域显示是否正常<br />
          2)使用Input.Group，并且设置autosize、defaultValue属性,测试输入框显示是否正常<br />
        </h2>
        <Textarea style={{width: '400px'}} /><br /><br />
        <Textarea style={{width: '400px'}} autosize={{minRows: 2, maxRows: 3}}
          defaultValue='高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)
          高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)高度可变文本框(设置高度范围为2-6)' />
      </div>
    )
  }
}
