import React from 'react';

import Select from 'components/select';
const {Option} = Select;
export default class MultipleSelect extends React.Component {
  render() {
    return (
      <div>
        <Select mode='multiple' style={{ width: 200 }} placeholder='多选'>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br /><br />

        <Select mode='multiple' style={{ width: 200 }} placeholder='多选' autoClearSearchValue={false}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br /><br />

        <Select mode='tags' style={{ width: 200 }} placeholder='可随意输入内容' maxTagCount={2} maxTagPlaceholder={'more'}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
      </div>
    )
  }
}
