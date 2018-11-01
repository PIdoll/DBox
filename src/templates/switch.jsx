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
        <Switch defaultChecked />
        <h1 className='h1'>指定当前是否被选中</h1>
        <Switch checked />
        <h1 className='h1'>失效状态</h1>
        <Switch disabled />
        <h1 className='h1'>按钮操作</h1>
        <Switch disabled={this.state.disabled} />
        <br />
        <Button onClick={this.toggle} >改变禁用状态</Button>
        <h1 className='h1'>两种大小</h1>
        <Switch />
        <br />
        <Switch size='small' />
        <h1 className='h1'>带有文字和图标</h1>
        <Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked />
        <br />
        <Switch checkedChildren={'1'} unCheckedChildren={'0'} />
        <br />
        <Switch checkedChildren={'✔'} unCheckedChildren={'X'} />
        <h1 className='h1'>加载中</h1>
        <Switch loading defaultChecked />
        <br />
        <Switch size='small' loading />
      </div>
    )
  }
}
