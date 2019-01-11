import React from 'react';

import Select from 'components/select';
const {Option} = Select;
export default class SearchSelect extends React.Component {
  render() {
    return (
      <Select showSearch style={{ width: 200 }} placeholder='请选择' >
        <Option value='beijing'>北京</Option>
        <Option value='shanghai'>上海</Option>
        <Option value='guangzhou'>广州</Option>
        <Option value='shenzhen'>深圳</Option>
      </Select>
    )
  }
}
