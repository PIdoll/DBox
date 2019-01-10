import React from 'react';
import BasicInput from './BasicInput';
import BeforeAfterInput from './BeforeAfterInput';
import SearchInput from './SearchInput';
import PrefixSuffixInput from './PrefixSuffixInput';
import SizeInput from './SizeInput';
import GroupInput from './GroupInput';
import TextareaInput from './TextareaInput';


export default class Input extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本使用输入框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)type属性同原生input一样 <br />
          2)设置clearable属性，测试是否可清空输入框，当输入框有值或者为空情形下，鼠标移入和移出关闭icon显示效果<br />
          3)设置disabled属性，测试输入框是否禁用<br />
          4)设置readOnly属性，测试输入框是否只读<br />
          5)设置onPressEnter属性，测试按下enter键后是否能调函数
        </h2>
        <BasicInput />

        <h1 className='h1'>2.前置／后置</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置addonBefore和beforelength属性为前置内容和长度，设置addonAfter和afterlength属性为后置内容和长度 <br />
        </h2>
        <BeforeAfterInput />

        <h1 className='h1'>3.搜索</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Input.Search组件，测试组件是否显示正常<br />
          2)设置enterButton属性，测试不传值与传值区别<br />
          3)设置size属性，测试样式是否正常<br />
          4)设置onSearch函数，测试是否能正常调用
        </h2>
        <SearchInput />

        <h1 className='h1'>4.前缀／后缀</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置prefix，suffix属性，测试传入icon显示是否正常<br />
        </h2>
        <PrefixSuffixInput />

        <h1 className='h1'>5.三种大小</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置size属性，测试input框大小是否正常<br />
        </h2>
        <SizeInput />

        <h1 className='h1'>6.输入框组合</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Input.Group，测试输入框组合是否正常<br />
          2)使用Input.Group，并且设置compact属性,测试输入框是否紧凑在一起
        </h2>
        <GroupInput />

        <h1 className='h1'>7.文本框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Input.Textarea，测试文本域显示是否正常<br />
          2)使用Input.Group，并且设置autosize、defaultValue属性,测试输入框显示是否正常<br />
        </h2>
        <TextareaInput />
      </div>
    )
  }
}
