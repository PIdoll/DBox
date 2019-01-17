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
          1）测试输入框为空提示<br />
          2）测试validateFields字段，校验校验并获取一组输入域的值<br />
          3) 测试getFiledDecorator字段和表单进行双向绑定<br />
          4) 测试form字段包装过的组件<br />
          5）测试Checkbox的选中与为选中状态<br />
          6）测试点击登陆按钮在输入框为空的情况下进行提示<br />
          7）测试点击注册跳转注册页面<br />
          8）测试点击忘记密码跳转忘记密码页面<br />
        </h2>
        <LoginForm />
        <br />
        <h1 className='h1'>注册</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试邮箱格式提醒验证<br />
          2）测试密码和确认密码的正常使用<br />
          3) 测试注册按钮点击为空的的校验<br />
        </h2>
        <RegistrationForm />
        <br />
        <h1 className='h1'>搜索</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试邮箱格式提醒验证<br />
          2）测试密码和确认密码的正常使用<br />
          3) 测试注册按钮点击为空的的校验<br />
        </h2>
        <SearchForm />
        <br />
        <h1 className='h1'>紧凑型表单</h1>
        <h2 className='h2'>
        测试场景: <br />
        1) 测试使用formType实现紧凑型表单样式<br />
        2）测试各个输入框的非空校验<br />
        </h2>

        <CompactSearchForm />
        <br />
        <h1 className='h1'>弹出层中新建表单</h1>
        <h2 className='h2'>
        测试场景: <br />
        1) 测试点击注册按钮，visible字段置为true<br />
        2）测试各个输入框的非空校验<br />
        3）测试点击确认按钮，进行整个输入框的非必填项的非空判断
        </h2>
        <ModalForm />
        <br />
        <h1 className='h1'>表单联动</h1>
        <h2 className='h2'>
        测试场景: <br />
        1) 测试输入内容，在点击提交按钮时，邮箱号中的value内容是否可自动补上邮箱类型<br />
        2） 测试使用setFieldValue动态改变邮箱号中的类型
        </h2>
        <LinkForm />
        <br />
        <h1 className='h1'>自定义校验</h1>
        <h2 className='h2'>
        测试场景: <br />
        1) 测试validateStatus的校验状态，可选‘success’，'warning','error','validating'<br />
        2）测试各个输入框的非空校验<br />
        </h2>
        <CheckForm />
        <br />
        <h1 className='h1'>动态校验规则</h1>
        <h2 className='h2'>
        测试场景: <br />
        1) 测试点击复选框按钮，切换手机号校验是否为必填项<br />
        2）测试各个输入框的非空校验<br />
        </h2>
        <DsynForm />
        <br />
        <h1 className='h1'>校验其他组件</h1>
        <h2 className='h2'>
        测试场景: <br />
        1) 测试hasFeedback并配合validateStatus属性校验单选框在为空和不为空时的状态<br />
        2）测试getFieldDecorator注册的多选框组件经form包装的可用性<br />
        3）测试数字输入框注册进入getFieldDecorator后的可用状态<br />
        </h2>
        <OtherForm />
        <br />
      </div>
    )
  }
}
