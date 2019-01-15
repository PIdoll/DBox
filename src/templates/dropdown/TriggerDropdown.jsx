import React from 'react';
import { Button, Dropdown, Menu } from 'components'
import { MenuItem } from 'components/menu';
const DropdownNormal = Dropdown.DropdownNormal;
const menu = (
  <Menu theme='light'onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
const menu2 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
function handleButtonClick(e) {
  console.info('click left button', e);
};
function onVisibleChangeBtn (visible) {
  console.log(`按钮菜单发生了变化====>${visible}`)
};
export default class TriggerDropdown extends React.Component {
  render () {
    return (
      <div>
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          点击下拉菜单
        </DropdownNormal>
        <Dropdown overlay={menu} trigger={['hover']} onVisibleChange={onVisibleChangeBtn} onClick={handleButtonClick}>
          <Button>
          hover默认菜单
          </Button>
        </Dropdown>
      </div>
    )
  }
}
