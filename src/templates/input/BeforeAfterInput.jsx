import React from 'react';

import Input from 'components/input';
import Select from 'components/select';
const Option = Select.Option;
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

export default class BasicInput extends React.Component {
  render() {
    return (
      <div style={{width: '400px'}}>
        <Input type='text' addonBefore='邮政编码' placeholder='请输入' beforelength='100px' /><br /><br />
        <Input type='text' placeholder='请输入' addonAfter='.com' afterlength='80px' /><br /><br />
        <Input type='text' addonBefore={selectBefore} placeholder='请输入' addonAfter={selectAfter} beforelength='100px' afterlength='80px' />
      </div>
    )
  }
}
