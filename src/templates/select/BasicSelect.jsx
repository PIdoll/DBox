import React from 'react';

import Select from 'components/select';
const {Option} = Select;
export default class BasicSelect extends React.Component {
  handleDropDown = () => {
    console.log('handleDropDown...')
  }
  render() {
    return (
      <div>
        <Select defaultValue='shanghai' allowClear>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br />
        <br />

        <Select defaultValue='shanghai' autoFocus>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br />
        <br />

        <Select style={{width: 100}} defaultActiveFirstOption={false}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br />
        <br />

        <Select style={{width: 100}} >
          <Option value='beijing'>北京</Option>
          <Option value='shanghai' disabled>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <Select style={{width: 100}} disabled>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br />
        <br />

        <Select style={{width: 100}} dropdownClassName="color: 'red'">
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br />
        <br />

        <Select style={{width: 100}} notFoundContent={'找不到'} />
        <br />
        <br />
        <Select style={{width: 100}} notFoundContent={'找不到'} onDropdownVisibleChange={this.handleDropDown} />

        <br />
        <br />
        <Select style={{width: 100}} dropdownMatchSelectWidth={false}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
      </div>
    )
  }
}
