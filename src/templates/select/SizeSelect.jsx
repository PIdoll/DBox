import React from 'react';

import Select from 'components/select';
const {Option} = Select;
export default class SizeSelect extends React.Component {
  render() {
    return (
      <div>
        <Select size='small' defaultValue='shanghai'>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
        <br /><br />

        <Select defaultValue='shanghai'>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
        <br /><br />

        <Select size='large' defaultValue='shanghai'>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
      </div>
    )
  }
}
