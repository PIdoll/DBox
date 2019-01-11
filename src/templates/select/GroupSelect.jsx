import React from 'react';

import Select from 'components/select';
const {Option, OptGroup} = Select;
export default class GroupSelect extends React.Component {
  render() {
    return (
      <Select
        defaultValue='hefei'
        style={{ width: 200 }}
        onChange={this.handleChange}
      >
        <OptGroup label='安徽'>
          <Option value='xuancheng'>宣城</Option>
          <Option value='hefei'>合肥</Option>
        </OptGroup>
        <OptGroup label='江苏'>
          <Option value='nanjing'>南京</Option>
          <Option value='suzhou'>苏州</Option>
        </OptGroup>
      </Select>
    )
  }
}
