import React from 'react';
import {Button, Dropdown, Menu} from 'components';
const MenuItem = Menu.MenuItem;
const ButtonGroup = Button.Group;
const DropdownButton = Dropdown.DropdownButton;
const menu1 = (
  <Menu theme='light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='javascript:;' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='javascript:;' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='javascript:;' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
function handleButtonClick(e) {
  console.info('click left button', e);
};
export default class GroupDropdown extends React.Component {
  render () {
    return (
      <ButtonGroup className='buttonGroup'>
        <Button>
          操作一
        </Button>
        <Button>
          操作二
        </Button>
        <DropdownButton visible overlay={menu1} onClick={handleButtonClick} trigger={['hover']}>
        操作三
        </DropdownButton>
      </ButtonGroup>
    )
  }
}
