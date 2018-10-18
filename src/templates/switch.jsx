import React from 'react';
import Switch from 'components/switch';


const swicth = () => (
  <div id='main-container'>
    <h1 className='h1'>基本用法</h1>
    <Switch defaultChecked />
    <h1 className='h1'>两种大小</h1>
    <Switch />
    <br />
    <Switch size='small' />
    <h1 className='h1'>指定当前是否被选中</h1>
    <Switch checked />
    <h1 className='h1'>带有文字和图标</h1>
    <Switch checkedChildren={'开'} unCheckedChildren={'关'} />
    <br />
    <Switch checkedChildren={'1'} unCheckedChildren={'0'} defaultChecked />
    <br />
    {/* <Switch checkedChildren={<Icon type='check' />} unCheckedChildren={<Icon type='cross' />} /> */}
    <h1 className='h1'>失效状态</h1>
    <Switch disabled />
    <h1 className='h1'>加载中</h1>
    <Switch loading defaultChecked />
    <br />
    <Switch size='small' loading />
  </div>
)

export default swicth;
