import React from 'react';
import {Dropdown, Menu} from 'components';
const MenuItem = Menu.MenuItem;
const SubMenu = Menu.SubMenu;
const menu1 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1.1'><a >操作选项</a></MenuItem>
    <MenuItem key='1.2'><a >操作选项</a></MenuItem>
    <SubMenu title='子菜单'>
      <MenuItem key='2.3'><a >操作选项</a></MenuItem>
      <MenuItem key='2.4'><a >操作选项</a></MenuItem>
    </SubMenu>
  </Menu>
)
function handleMenu1Click(e) {
  console.info('click', e);
};
const DropdownButton = Dropdown.DropdownButton;
export default class MutilDropdown extends React.Component {
  render () {
    return (
      <DropdownButton placement='bottomLeft' overlay={menu1} trigger={['hover']}>
        默认菜单
      </DropdownButton>
    )
  }
}
