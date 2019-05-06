import React from 'react';
import BasicEmpty from './BasicEmpty';
import ChooseImage from './ChooseImgae';
import GlobalConfig from './GlobalConfig';

export default class Empty extends React.Component {
    render() {
        return (
          <div id='main-container'>
            <h1 className='h1'>1、基本使用</h1>
            <h2 className='h2'>简单的展示。</h2>
            <BasicEmpty />
            <h1 className='h1'>自定义</h1>
            <h2 className='h2'>自定义图片链接、图片大小、描述、附属内容。</h2>
            <ChooseImage />
            <h1 className='h1'>全局化配置</h1>
            <h2 className='h2'>自定义全局组件的 Empty 样式。</h2>
            <GlobalConfig />
          </div>
        )
    }
}
