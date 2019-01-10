import React from 'react';

import Input from 'components/input';
import Grid from 'components/grid';
import Select from 'components/select';
import DatePicker from 'components/date-picker/index'
const InputGroup = Input.Group
const Col = Grid.Col;
const Option = Select.Option;

export default class GroupInput extends React.Component {
  render() {
    return (
      <div style={{width: '600px'}}>
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
      </div>
    )
  }
}
