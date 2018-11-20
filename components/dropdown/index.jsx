import Dropdown from './dropdown';
import DropdownButton from './dropdown-button';
import DropdownNormal from './dropdown-normal';
import Menu, { MenuItem, SubMenu } from 'rc-menu';


Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.SubMenu = SubMenu;
Dropdown.DropdownButton = DropdownButton;
Dropdown.DropdownNormal = DropdownNormal;
export { DropdownButton, DropdownNormal };
export default Dropdown;
