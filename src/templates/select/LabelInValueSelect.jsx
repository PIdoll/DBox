import React from 'react';

import Select from 'components/select';
const {Option} = Select;
export default class LabelInValueSelect extends React.Component {
  handleChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <Select labelInValue defaultValue={{ key: 'beijing' }} style={{ width: 200 }} onChange={this.handleChange}>
        <Option value='beijing'>北京</Option>
        <Option value='shanghai'>上海</Option>
        <Option value='guangzhou'>广州</Option>
        <Option value='shenzhen'>深圳</Option>
      </Select>
    )
  }
}
