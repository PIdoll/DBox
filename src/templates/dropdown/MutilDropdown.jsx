import React from 'react';
import {Dropdown, Menu} from 'components'
import { MenuItem, SubMenu } from 'components/menu';
const menu1 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='1.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <SubMenu title='子菜单'>
      <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
      <MenuItem key='2.4'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
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
