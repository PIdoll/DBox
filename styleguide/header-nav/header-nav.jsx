import React from 'react';
import Menu from 'components/menu';
import Select from 'components/select';

import './style/index';

const { Option } = Select;

export default class HeaderNav extends React.Component {
  render() {
    return (
      <div>
        <div className='nav_container'>
          <div className='nav_menu'>
            <Menu mode='horizontal' theme='light'>
              <Menu.Item key='homePage'>首页</Menu.Item>
              <Menu.Item key='design'>设计指南</Menu.Item>
              <Menu.Item key='component'>组件</Menu.Item>
              <Menu.Item key='resource'>资源</Menu.Item>
            </Menu>
          </div>
          <div style={{ marginTop: 10 }}>
            <Select labelInValue defaultValue={{ key: '1.0' }} style={{ width: 78 }}>
              <Option value='1.0'>V1.0</Option>
              <Option value='1.1'>V1.1</Option>
              <Option value='1.2'>V1.2</Option>
            </Select>
          </div>
        </div>
      </div>
    )
  }
}
