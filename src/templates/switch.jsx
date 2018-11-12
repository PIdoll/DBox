import React from 'react';
import Switch from 'components/switch';
import Button from 'components/button';


export default class SwitchView extends React.Component {
  state = {
    disabled: true
  }
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <p>直接引用组件默认选中属性为defaultChecked</p>
        <Switch defaultChecked />
        <h1 className='h1'>按钮操作</h1>
        <p>通过操作按钮切换开关的禁用状态</p>
        <Switch disabled={this.state.disabled} />
        <br />
        <Button onClick={this.toggle} >改变禁用状态</Button>
        <h1 className='h1'>两种大小</h1>
        <p>通过添加属性size为small来改变开关大小，不传为默认</p>
        <Switch />
        <br />
        <Switch size='small' />
        <h1 className='h1'>带有文字的按钮</h1>
        <p>可通过checkedChildren和unCheckedChildren来设置开关内的文字，图标等</p>
        <Switch checkedChildren={'1'} unCheckedChildren={'0'} />
        <h1 className='h1'>执行中</h1>
        <p>通过添加loading属性来改变开关样式</p>
        <Switch loading disabled defaultChecked />
        <br />
        <Switch disabled size='small' loading />
      </div>
    )
  }
}
