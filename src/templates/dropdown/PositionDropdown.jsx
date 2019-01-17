import React from 'react';
import {Button, Dropdown, Menu} from 'components';
const MenuItem = Menu.MenuItem;
const menu = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a >操作选项</a></MenuItem>
    <MenuItem key='2'><a >操作选项</a></MenuItem>
    <MenuItem key='3'><a >操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
function handleButtonClick(e) {
  console.info('click left button', e);
};
export default class PositionDropdown extends React.Component {
  render () {
    return (
      <div>
        <Dropdown overlay={menu} placement='topLeft'>
          <Button>上左</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topCenter'>
          <Button>上中</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topRight'>
          <Button>上右</Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button>下左</Button>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']} onClick={handleButtonClick} placement='bottomCenter'>
          <Button>下中</Button>
        </Dropdown>
        <Dropdown overlay={menu} visible placement='bottomRight'>
          <Button>下右</Button>
        </Dropdown>
      </div>
    )
  }
}
