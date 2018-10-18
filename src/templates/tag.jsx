import React from 'react';
import Tag from '../../components/tag';


const tag = () => (
  <div id='main-container'>
    <h1 className='h1'>展示功能标签</h1>
    <Tag color='primary'>primary</Tag>
    <Tag color='highlight'>highlight</Tag>
    <Tag color='success'>success</Tag>
    <Tag color='error'>error</Tag>
    <Tag color='warning'>warning</Tag>
    <h1 className='h1'>带有选择功能的标签</h1>
    <Tag hover checked>伯牙</Tag>
    <Tag hover checked={false}>子期</Tag>
    <h1 className='h1'>可移除标签</h1>
    <Tag closable size='small' hover>性别:男</Tag>
    <Tag size='small' closable hover>性别:女</Tag>
  </div>
);

export default tag;
