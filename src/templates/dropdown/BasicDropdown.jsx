import React from 'react';
import {Button, Dropdown, Menu} from 'components'
const MenuItem = Menu.MenuItem;
const DropdownNormal = Dropdown.DropdownNormal;
const DropdownButton = Dropdown.DropdownButton;
const menu3 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='3.1'><a >操作选项</a></MenuItem>
    <MenuItem key='3.2'><a >操作选项</a></MenuItem>
    <MenuItem key='3.3' disabled><a >操作选项</a></MenuItem>
  </Menu>
  );
const menu2 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a >操作选项</a></MenuItem>
    <MenuItem key='2.2'><a >操作选项</a></MenuItem>
    <MenuItem key='2.3'><a >操作选项</a></MenuItem>
  </Menu>
    );
const menu1 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a >操作选项</a></MenuItem>
    <MenuItem key='2'><a >操作选项</a></MenuItem>
    <MenuItem key='3'><a >操作选项</a></MenuItem>
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
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          下拉菜单
        </DropdownNormal>
        <Dropdown overlay={menu1} trigger={['hover']} onClick={handleButtonClick}>
          <Button>
          默认菜单
          </Button>
        </Dropdown>
        <DropdownButton overlay={menu3} trigger={['hover']} onClick={handleButtonClick}>
          按钮菜单
        </DropdownButton>
      </div>
    )
  }
}

