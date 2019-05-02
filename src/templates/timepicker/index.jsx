import React from 'react';
import BasicTimepickerDemo from './BasicTimepickerDemo';
import DifferentSizeTimePickerDemo from './DifferentSizeTimePickerDemo';
import AllowEmptyTimeDemo from './AllowEmptyTimeDemo';
import DisabledTimePickerDemo from './DisabledTimePickerDemo';
import CustomStyleTimePicker from './CustomStyleTimePicker';
import DefaultTimeDemo from './DefaultTimeDemo';
import CustomDisabledDemo from './CustomDisabledDemo';
import ControlledTimePickerDemo from './ControlledTimePickerDemo';

export default class TimePicker extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h2 className='h2'>一、基本用法(palceholder属性让你可以自定义在时间选择器为空的时候展示的文本)</h2>

          <BasicTimepickerDemo />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>二、提供三种不同尺寸的时间选择框(small、large、default)</h2>

          <DifferentSizeTimePickerDemo />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>三、是否展示清除按钮，并将时间选择器自动获取焦点</h2>

          <AllowEmptyTimeDemo />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>四、禁用时间选择</h2>

          <DisabledTimePickerDemo />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>五、提供className可以自定义时间选择器的样式</h2>

          <CustomStyleTimePicker />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>六、提供defaultValue可以给时间选择器设置默认时间,并且TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。</h2>

          <DefaultTimeDemo />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>七、提供了disabledHours、disabledMinutes、disabledSeconds三个函数用来自定义时间选择器的时分秒部分的禁用</h2>

          <CustomDisabledDemo />
        </div>

        <div style={styleObj}>
          <h2 className='h2'>八、通过给Timepicker设置value，将其变成受控组件，通过onChange来控制值的变化。
            注意：value 和 onChange 需要配合使用,同时onOpenChange函数，当选择时间面板打开后触发，打开true,关闭false
          </h2>

          <ControlledTimePickerDemo />
        </div>
      </div>
    )
  }
}
