import React from 'react';
import {Icon, Button, Dropdown, Menu} from 'components';
const MenuItem = Menu.MenuItem;
const DropdownButton = Dropdown.DropdownButton;
const DropdownNormal = Dropdown.DropdownNormal;
const menu4 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='javascript:;' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
    <MenuItem key='2'><a href='javascript:;' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
    <MenuItem key='3'><a href='javascript:;' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
  </Menu>
);
const menu2 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a href='javascript:;' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.2'><a href='javascript:;' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.3'><a href='javascript:;' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleButtonClick(e) {
  console.info('click left button', e);
};
function handleMenu1Click(e) {
  console.info('click', e);
};
export default class BasicDropdown extends React.Component {
  render () {
    return (
      <div>
        <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
          <Button>
            默认菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
          <Button style={{marginLeft: 10, marginRight: 10}} type='primary'>
            主要菜单
          </Button>
        </Dropdown>
        <Dropdown overlay={menu4} trigger={['click']} onClick={handleButtonClick}>
          <Button type='secondary'>
            次要菜单
          </Button>
        </Dropdown>
        <DropdownButton style={{marginLeft: 10, marginRight: 10}} disabled overlay={menu4} trigger={['click']} onClick={handleButtonClick}>
          禁用菜单
        </DropdownButton>
        <DropdownNormal visible overlay={menu2} type='caret-down' trigger={['hover']} >
          文本菜单
        </DropdownNormal>
      </div>
    )
  }
}

