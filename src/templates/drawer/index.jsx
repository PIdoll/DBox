import React from 'react';
import BasicDrawer from './BasicDrawer';
import FormDrawer from './FormDrawer';
import InfoDrawer from './InfoDrawer';
import MultiDrawer from './MultiDrawer';
import PositionDrawer from './PositionDrawer';

export default class DrawerView extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>基本用法</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API maskStyle遮罩层样式 (string)<br />
          2）测试API title遮罩层的标题 (string)<br />
          3）测试API placement遮罩层的出现位置 (string)<br />
          4）测试API onClose遮罩层关闭的回调函数 (function)<br />
          5）测试API maskClosable遮罩层是否关闭 (bool)<br />
          6）测试API visible抽屉是否显示 (bool)<br />
          7）测试API destroyOnClose关闭遮罩层时销毁其内子元素 (bool)<br />
        </h2>
        <BasicDrawer />
        <br />
        <h1 className='h1'>四种方位</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API className抽屉的类名 (string)<br />
          2）测试API title遮罩层的标题 (string)<br />
          3）测试API placement遮罩层的出现位置 (string)<br />
          4）测试API onClose遮罩层关闭的回调函数 (function)<br />
          5）测试API closable显示遮罩层右上角的关闭图标 (bool)<br />
          6）测试API visible抽屉是否显示 (bool)<br />
        </h2>
        <PositionDrawer />
        <br />
        <h1 className='h1'>信息预览</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API width遮罩层的宽度 (bumber)<br />
          2）测试API zindex抽屉的层级 (number)<br />
          3）测试API title遮罩层的标题 (string)<br />
          4）测试API placement遮罩层的出现位置 (string)<br />
          5）测试API onClose遮罩层关闭的回调函数 (function)<br />
          6）测试API closable显示遮罩层右上角的关闭图标 (bool)<br />
          7）测试API visible抽屉是否显示 (bool)<br />
        </h2>
        <InfoDrawer />
        <br />
        <h1 className='h1'>多层抽屉</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API width遮罩层的宽度 (bumber)<br />
          2）测试API title遮罩层的标题 (string)<br />
          3）测试API placement遮罩层的出现位置 (string)<br />
          4）测试API onClose遮罩层关闭的回调函数 (function)<br />
          5）测试API closable显示遮罩层右上角的关闭图标 (bool)<br />
          6）测试API visible抽屉是否显示 (bool)<br />
        </h2>
        <MultiDrawer />
        <br />
        <h1 className='h1'>表单抽屉</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API mask遮罩层是否显示 (bool)<br />
          2）测试API width遮罩层的宽度 (bumber)<br />
          3）测试API style抽屉样式 (object)<br />
          4）测试API title遮罩层的标题 (string)<br />
          5）测试API placement遮罩层的出现位置 (string)<br />
          6）测试API onClose遮罩层关闭的回调函数 (function)<br />
          7）测试API closable显示遮罩层右上角的关闭图标 (bool)<br />
          8）测试API visible抽屉是否显示 (bool)<br />
        </h2>
        <FormDrawer />
        <br />
      </div>
    )
  }
}
