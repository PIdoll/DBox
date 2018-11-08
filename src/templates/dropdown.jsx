import React from 'react';
import Dropdown from 'components/dropdown';
import Menu, { MenuItem, SubMenu } from 'rc-menu';
import Button from 'components/button'
import Icon from 'components/icon'
import './dropdown.less'
const DropdownButton = Dropdown.Button;
const DropdownNormal = Dropdown.Normal;

function handleButtonClick(e) {
  console.info('click left button', e);
}

function handleMenu1Click(e) {
  console.info('click', e);
}

const menu = (
  <Menu onClick={handleMenu1Click}>
    <MenuItem key='1'>第一个选项111111</MenuItem>
    <MenuItem key='2'>第二个选项222222</MenuItem>
    <MenuItem key='3'>第三个选项333333</MenuItem>
  </Menu>
)
const menu4 = (
  <Menu onClick={handleMenu1Click}>
    <MenuItem key='1'><Icon type='bars' />  第一个选项111111</MenuItem>
    <MenuItem key='2'><Icon type='bars' />  第二个选项222222</MenuItem>
    <MenuItem key='3'><Icon type='bars' />  第三个选项333333</MenuItem>
  </Menu>
)
export default class DropView extends React.Component {
  state = {
    visible: false,
    size: 'default'
  };
  handleMenuClick = (e) => {
    if (e.key === '2.3') {
      this.setState({
        visible: false
      });
    }
  }
  handleVisibleChange = (flag) => {
    this.setState({
      visible: flag
    });
  }
  refCb = (e) => {
    if (e !== null) {
      this.setState({
        size: e.props.size
      })
    }
    }
  render() {
    const menu1 = (
      <Menu onClick={handleMenu1Click}>
        <MenuItem key='1.1'>第一个选项</MenuItem>
        <MenuItem key='1.2'>第二个选项</MenuItem>
        <SubMenu popupClassName={this.state.size} title='子菜单'>
          <MenuItem key='2.3'>第三个选项</MenuItem>
          <MenuItem key='2.4'>第四个选项</MenuItem>
        </SubMenu>
      </Menu>
    )
    const menu2 = (
      <Menu onClick={this.handleMenuClick}>
        <MenuItem key='2.1'>点我会展现菜单2.1.</MenuItem>
        <MenuItem key='2.2'>点我会展现菜单2.2.</MenuItem>
        <MenuItem key='2.3'>点我会展现菜单2.3.</MenuItem>
      </Menu>
    );
    const menu3 = (
      <Menu onClick={this.handleMenuClick}>
        <MenuItem key='2.1'>点我会展现菜单2.1.</MenuItem>
        <MenuItem key='2.2'>点我会展现菜单2.2.</MenuItem>
        <MenuItem key='2.3' disabled>点我会展现菜单2.3.</MenuItem>
      </Menu>
    );
    return (
      <div id='main-container'>
        <h1 className='h1'>鼠标点击，显示菜单</h1>
        <p>点击按钮弹出菜单，菜单展出方式可通过placement改变`bottomLeft``bottomCenter``bottomRight``topLeft``topCenter``topRigh；亦可通过trigger值为click改变激活方式；通过overlay值为menu改变预设菜单文本</p>
        <Dropdown overlay={menu} trigger={['click']} onClick={handleButtonClick}>
          <Button type='normal'>
            按钮
          </Button>
        </Dropdown>
        <h1 className='h1'>鼠标点击，显示图标菜单</h1>
        <p>点击按钮弹出菜单，菜单展出方式可通过placement改变`bottomLeft``bottomCenter``bottomRight``topLeft``topCenter``topRigh；亦可通过trigger值为click改变激活方式；通过overlay值为menu改变预设菜单文本;可在文本前直接加入组件Icon即可</p>
        <Dropdown overlay={menu4} trigger={['click']} onClick={handleButtonClick}>
          <Button type='normal'>
            按钮
          </Button>
        </Dropdown>
        <h1 className='h1'>鼠标移入,显示菜单,含有二级菜单</h1>
        <p>点击按钮弹出菜单，菜单展出方式可通过placement改变`bottomLeft``bottomCenter``bottomRight``topLeft``topCenter``topRigh；亦可通过trigger值为click改变激活方式；为DropdownButton组件添加size同时添加ref属性即可</p>
        <DropdownButton size='large' ref={this.refCb} overlay={menu1} trigger={['hover']}>
          功能按钮
        </DropdownButton>
        <h1 className='h1'>在下拉列表中点击内容关闭菜单</h1>
        <DropdownNormal overlay={menu2} type='caret-down' trigger={['click']} >
          下拉菜单
        </DropdownNormal>
        <h1 className='h1'>下拉菜单中不可用菜单项</h1>
        <p>直接在菜单项加入disabled即可</p>
        <DropdownNormal overlay={menu3} type='caret-down' trigger={['click']} >
          下拉菜单
        </DropdownNormal>
        <h1 className='h1'>下拉菜单展示位置</h1>
        <p>菜单展出方式可通过placement改变`bottomLeft``bottomCenter``bottomRight``topLeft``topCenter``topRigh</p>
        <Dropdown overlay={menu} placement='bottomLeft'>
          <Button>下左</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='bottomCenter'>
          <Button>下中</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='bottomRight'>
          <Button>下右</Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement='topLeft'>
          <Button>上左</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topCenter'>
          <Button>上中</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement='topRight'>
          <Button>上右</Button>
        </Dropdown>
      </div>
    )
  }
}
