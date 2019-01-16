import React from 'react';
import CheckForm from './CheckForm';
import CompactSearchForm from './CompactSearchForm';
import DsynForm from './DsynForm';
import LinkForm from './LinkForm';
import LoginForm from './LoginForm';
import ModalForm from './ModalForm';
import OtherForm from './OtherForm';
import RegistrationForm from './RegistrationForm';
import SearchForm from './SearchForm';

export default class FormView extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>普通登录框</h1>
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
        <LoginForm />
        <br />
        <h1 className='h1'>注册</h1>
        <RegistrationForm />
        <br />
        <h1 className='h1'>搜索</h1>
        <SearchForm />
        <br />
        <h1 className='h1'>紧凑型表单</h1>
        <CompactSearchForm />
        <br />
        <h1 className='h1'>弹出层中新建表单</h1>
        <ModalForm />
        <br />
        <h1 className='h1'>表单联动</h1>
        <LinkForm />
        <br />
        <h1 className='h1'>自定义校验</h1>
        <CheckForm />
        <br />
        <h1 className='h1'>动态校验规则</h1>
        <DsynForm />
        <br />
        <h1 className='h1'>校验其他组件</h1>
        <OtherForm />
        <br />
      </div>
    )
  }
}
