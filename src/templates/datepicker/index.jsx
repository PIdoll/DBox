import React from 'react';
import BasicDatePickerDemo from './BasicDatePickerDemo';
import DifferentSizeDemo from './DifferentSizeDemo';
import DatePickerBasicDemo from './DatePickerBasicDemo';
import DatePickerShowTimeDemo from './DatePickerShowTimeDemo';
import MonthPickerDemo from './MonthPickerDemo';
import ControlledMonthPickerDemo from './ControlledMonthPickerDemo';
import RangePickerBasicDemo from './RangePickerBasicDemo';
import ControlledRangePickerDemo from './ControlledRangePickerDemo';
import DisabledDatePicker from './DisabledDatePicker';
import AdditionalFooter from './ AdditionalFooter';
export default class DatePicker extends React.Component {
  render() {
    const styleObj = {
      marginTop: 40,
    }
    return (
      <div id='main-container'>
        <div style={styleObj}>
          <h1 className='h1'>一、基本使用(DatePicker、RangePicker、MonthPicker共享API)</h1>
          <h2 className='h2'>提供基本的三种日期选择框</h2>
          <h2 className='h2'>palceholder: 可自定义时间选择框内的提示文本</h2>
          <h2 className='h2'>autoFocus: 可让时间选择框自动获取焦点</h2>
          <h2 className='h2'>open: open为true时，时间选择框会自动打开选择面板</h2>
          <h2 className='h2'>allowClear: 默认时间选择框中带有清空按钮，如果不需要只需要将allowClear设置为false</h2>

          <BasicDatePickerDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>二、三种大小</h1>
          <h2 className='h2'>size:通过该属性可设置三种时间选择器的尺寸</h2>
          <h2 className='h2'>disabled:该属性可以设置时间选择器是否可以选择的状态</h2>
          <h2 className='h2'>disabledDate:该属性可以根据需要自定义时间选择的范围</h2>
          <h2 className='h2'>style:如果默认的输入框样式不满足需求，可通过该属性自定义样式</h2>
          <DifferentSizeDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>三、基本的DatePicker使用</h1>
          <h2 className='h2'>defaultValue:该属性可自定义设置默认显示的时间，不设置则为空</h2>
          <h2 className='h2'>defaultPickerValue:该属性可自定义设置打开日期面板后默认显示的时间，不设置则默认是当前时间</h2>
          <h2 className='h2'>format:该属性可自定义设置显示时间的格式，默认是YYYY:MM:DD</h2>
          <h2 className='h2'>onChange:该属性可在日期发生改变以后触发的回调函数</h2>
          <h2 className='h2'>onPanelChange:该属性可在日期面板发生改变时触发的回调函数</h2>

          <DatePickerBasicDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>四、带有时、分、秒的DatePicker使用</h1>
          <h2 className='h2'>format:该属性可设置显示时间的时间格式，默认带有时、分、秒的格式是'YYYY-MM-DD HH:mm:ss'</h2>
          <h2 className='h2'>showTime: 设置该属性可显示时、分、秒选择面板</h2>
          <h2 className='h2'>showToday: 是否展示“今天”按钮，默认不显示</h2>
          <h2 className='h2'>value: 设置选择器默认值</h2>
          <h2 className='h2' style={{color: 'red'}}>说明: 设置了value属性，时间选择框就变成了，受控组件，要想改变其值，需通过onChange</h2>
          <DatePickerShowTimeDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>五、月份选择器</h1>
          <h2 className='h2'>defaultValue:该属性可设置月份时间选择器的默认时间展示</h2>
          <h2 className='h2'>format:该属性可设置显示时间的时间格式</h2>
          <h2 className='h2'>defaultPickerValue:该属性可设置打开月份选择面板显示时间(注意：如果设置了defaultValue，该属性不生效)</h2>

          <MonthPickerDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>六、受控月份选择器</h1>
          <h2 className='h2'>value: 该属性用来设置月份时间选择器默认选择时间</h2>
          <h2 className='h2'>onChange: 设置value之后,月份选择器变成受控组件，通过onChange改变其值</h2>

          <ControlledMonthPickerDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>七、时间范围选择器</h1>
          <h2 className='h2'>format:该属性可设置显示时间的时间格式</h2>
          <h2 className='h2'>defaultValue: 该属性可设置范围时间选择器的默认时间展示</h2>
          <h2 className='h2'>defaultPickerValue:该属性可设置打开月份选择面板显示时间(注意：如果设置了defaultValue，该属性不生效)</h2>

          <RangePickerBasicDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>八、受控时间范围选择器</h1>
          <h2 className='h2'>format: 该属性可设置显示时间的时间格式</h2>
          <h2 className='h2'>showTime: 设置该属性可显示时、分、秒选择面板</h2>
          <h2 className='h2'>disabledTime: 设置该属性可控制时、分、秒选择范围，但是必须和showTime一起使用</h2>
          <h2 className='h2'>onCalendarChange: 待选日期发生变化的回调</h2>
          <h2 className='h2'>value: 设置时间选择框的值，此设置会将时间选择器变成受控组件，需通过onChange一起使用</h2>

          <ControlledRangePickerDemo />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>九、禁用</h1>
          <h2 className='h2'>选择框不可用状态</h2>

          <DisabledDatePicker />
        </div>

        <div style={styleObj}>
          <h1 className='h1'>十、额外的页脚</h1>
          <h2 className='h2'>在悬浮层中加入额外的页脚，以满足某些定制信息的需求</h2>

          <AdditionalFooter />
        </div>
      </div>
    )
  }
}
