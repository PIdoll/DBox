

##### **概述**

使用下拉菜单从一组选项中选择一个或多个选项，下拉菜单中的选项一般为5-15个

##### **基本用法**
只允许用户选择单个选项，其中按钮提供文字按钮和默认按钮两种样式。触发对象可以是链接、按钮等各种元素。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const DropdownButton = Dropdown.DropdownButton;
const DropdownNormal = Dropdown.DropdownNormal;
const menu2 = (
      <Menu theme = 'light' onClick={handleMenu1Click}>
        <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
        <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
      </Menu>
    );
const menu1 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleButtonClick(e) {
  console.info('click left button', e);
};
function handleMenu1Click(e) {
  console.info('click', e);
};
<div>
	<DropdownNormal overlay={menu2} type='caret-down' trigger={['hover']} >
	  下拉菜单
	</DropdownNormal>
	<Dropdown overlay={menu1} trigger={['hover']} onClick={this.handleButtonClick}>
	  <Button>
	  默认菜单
	  </Button>
	</Dropdown>
</div>
```

##### **常用类型**
通过 type 属性可设置下拉菜单按钮的样式。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const DropdownButton = Dropdown.DropdownButton;
const DropdownNormal = Dropdown.DropdownNormal;
const menu4 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'><Icon type='bars' />操作选项</a></MenuItem>
  </Menu>
);
const menu2 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
const menu = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleButtonClick(e) {
  console.info('click left button', e);
};
function handleMenu1Click(e) {
  console.info('click', e);
};
<div>
    <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
      <Button>
        默认菜单
      </Button>
    </Dropdown>
    <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
      <Button style={{marginLeft: '50px', marginRight: '50px' }} type='primary'>
        主要菜单
      </Button>
    </Dropdown>
    <Dropdown overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
      <Button type='secondary'>
        次要菜单
      </Button>
    </Dropdown>
    <DropdownButton  style={{marginLeft: '50px', marginRight: '50px' }} disabled overlay={menu4} trigger={['hover']} onClick={handleButtonClick}>
      禁用菜单
    </DropdownButton>
    <DropdownNormal overlay={menu2} type='caret-down' trigger={['hover']} >
      文本菜单
    </DropdownNormal>
</div>
```

##### **组合使用**
在一组按钮中可放置一个Dropdown按钮，常置于最右侧。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const ButtonGroup = Button.Group;
const DropdownButton = Dropdown.DropdownButton;const menu1 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};

<ButtonGroup className='ButtonGroup'>
  <Button>
    操作一
  </Button>
  <Button>
    操作二
  </Button>
  <DropdownButton style={{float: 'none'}} overlay={menu1} trigger={['hover']}>
  操作三
  </DropdownButton>
</ButtonGroup>
```

##### **三种尺寸**
通过 size 属性设置为 large small 来控制大、小尺寸，默认尺寸为中。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const DropdownButton = Dropdown.DropdownButton;
const menu2 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
<div>
	<DropdownButton size='small' overlay={menu2} trigger={['hover']}>
      默认菜单
    </DropdownButton>
    <DropdownButton style={{marginLeft: '50px', marginRight: '50px' }} overlay={menu2} trigger={['hover']}>
      默认菜单
    </DropdownButton>
    <DropdownButton size='large' overlay={menu2} trigger={['hover']}>
      默认菜单
    </DropdownButton>
</div>
```

##### **弹出位置**
通过 placement 属性来设置弹框弹出位置，支持6个方向。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const menu = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
<div>
	<Dropdown overlay={menu} placement='topLeft'>
      <Button>上左</Button>
    </Dropdown>
    <Dropdown overlay={menu} style={{marginLeft: '10px', marginRight: '10px'}} placement='topCenter'>
      <Button>上中</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement='topRight'>
      <Button>上右</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement='bottomLeft'>
      <Button>下左</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement='bottomCenter'>
      <Button>下中</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement='bottomRight'>
      <Button>下右</Button>
    </Dropdown>
</div>
```

##### **触发方式**
通过 trigger 属性设置为 hover click 来控制触发方式，默认鼠标移入触发弹框。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const DropdownNormal = Dropdown.DropdownNormal;
const menu = (
  <Menu theme = 'light'onClick={handleMenu1Click}>
    <MenuItem key='1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
const menu2 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
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
<div>
	<DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
      点击下拉菜单
    </DropdownNormal>
    <Dropdown overlay={menu} trigger={['hover']} onClick={handleButtonClick}>
      <Button>
      hover默认菜单
      </Button>
    </Dropdown>
</div>
```

##### **触发事件**
点击菜单触发相应事件，用户可以通过相应的菜单项 key 进行不同的操作。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const menu = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
    <MenuItem key='2.1'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.2'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
    <MenuItem key='2.3'><a href='https://www.baidu.com' target='_blank'>操作选项</a></MenuItem>
  </Menu>
);
function handleMenu1Click(e) {
  console.info('click', e);
};
onVisibleChangeBtn = (visible) => {
console.log(`按钮菜单发生了变化====>${visible}`)
};
function handleButtonClick(e) {
  console.info('click left button', e);
};
<Dropdown overlay={menu} trigger={['hover']} onVisibleChange={this.onVisibleChangeBtn} onClick={handleButtonClick}>
  <Button>
  hover默认菜单
  </Button>
</Dropdown>
```

##### **多级菜单**
弹出框里的菜单支持多级传入。
```jsx
import {Icon, Button, Dropdown, Menu} from 'components'
import { MenuItem, SubMenu} from 'components/menu';
const menu1 = (
  <Menu theme = 'light' onClick={handleMenu1Click}>
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
};const DropdownButton = Dropdown.DropdownButton;
<DropdownButton placement='bottomLeft' overlay={menu1} trigger={['hover']}>
  默认菜单
</DropdownButton>
```



#### **API**


| 参数        | 说明        | 类型        | 默认值       |
|------------|------------|-------------|-------------|
| trigger     | 触发下拉的行为   | ['click'] or ['hover'] | ['hover']        |
| placement   | 菜单弹出位置   | string (`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`) | `bottomLeft`|
| overlay     | 菜单  | Menu | - |
| disabled     | 菜单是否禁用搭配按钮一起使用并放置于按钮身上 | `boolean` | false    |
| visible     | 菜单是否显示 | Bool   | 无           |
| onVisibleChange  | 菜单显示状态改变时调用，参数为 { visible } | Function | - |

#### **DropdownButton**

| 参数        | 说明        | 类型        | 默认值       |
|------------|------------|-------------|-------------|
| type        | 按钮类型，和 `Button` 一致 | String | - |
| onClick     | 点击左侧按钮的回调，和 `Button` 一致 | Function   | - |
| trigger     | 触发下拉的行为   | ['click'] or ['hover'] | ['hover']        |
| overlay     | 菜单         | `Menu` | -     |
| disabled     | 菜单是否禁用         | `boolean` | false    |
| visible     | 菜单是否显示 | Bool   | 无           |
| placement   | 菜单弹出位置   | string (`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`) | `bottomLeft`|
| size     | 按钮菜单大小和Button一致 | string (`large` `small`) | - |


```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
