import React from 'react';
import AsynModal from './AsynModal';
import BasicModal from './BasicModal';
import ComfirmModal from './ComfirmModal';
import InfoModal from './InfoModal';

export default class Modal extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>普通弹出框(可用于展示和提交)</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API wrapClassName对话框外层容器的类名(string)<br />
          2）测试API maskClosable点击蒙层是否允许关闭(bool)<br />
          3）测试API title标题(string)<br />
          4）测试API visible对话框是否可见(bool)<br />
          5）测试API onOk点击确定回调(function)<br />
          6）测试API onCancel取消回调(function)<br />
        </h2>
        <BasicModal />
        <br />
        <h1 className='h1'>异步关闭弹出框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API confirmLoading确定按钮loading(bool)<br />
          4）测试API visible对话框是否可见(bool)<br />
          5）测试API onOk点击确定回调(function)<br />
          6）测试API onCancel取消回调(function)<br />
        </h2>
        <AsynModal />
        <br />
        <h1 className='h1'>信息提示</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API title标题(string)<br />
          2）测试API content内容对话框是否可见(React.Element or String)<br />
          3）测试API onOk点击确定回调(function)<br />
          4）测试API onCancel取消回调(function)<br />
        </h2>
        <InfoModal />
        <br />
        <h1 className='h1'>确认对话框</h1>
        <h2 className='h2'>
        测试场景: <br />]
          1）测试API content内容对话框是否可见(React.Element or String)<br />
          2）测试API title标题(string)<br />
          3）测试API iconType图标Icon类型(string)<br />
          4）测试API okText确认按钮文字(string)<br />
          5）测试API cancelText取消按钮文字(string)<br />
          6）测试API onOk点击确定回调(function)<br />
          7）测试API onCancel取消回调(function)<br />
        </h2>
        <ComfirmModal />
        <br />
      </div>
    )
  }
}
