#### **何时使用**

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

#### **基本用法**

```jsx
const { RangePicker, MonthPicker, WeekPicker } = DatePicker;
const onPanelChange = (value, mode) => {
        console.log('onPanelChange', value, mode);
      }
const onChange = (date, dateString) => {
        console.log('onChange', date, dateString);
      }
<div>
  <div style={{ marginBottom: 15 }}>
    <DatePicker onPanelChange={onPanelChange} />
  </div>
  <div style={{ marginBottom: 15 }}>
    <MonthPicker onChange={this.onChange} placeholder='请选择月份' />
  </div>
</div>
```

#### **API**

以下API为DatePIcker、MonthPicker、RangePicker、WeekPicker共享API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | true |
| autoFocus | 自动获取焦点 | boolean | false |
| className | 选择器 className | string | '' |
| disabled | 禁用 | boolean | false |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |
| open | 控制弹层是否展开 | boolean | - |
| placeholder | 输入框提示文字 | string|RangePicker[] | - |
| size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px | string | 无 |
| style | 自定义输入框样式 | object | {} |
| onOpenChange | 弹出日历和关闭日历的回调 | function(status) | 无 |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |

#### **共同的方法**

| 名称 | 描述 |
| --- | --- | --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

#### **DatePicker**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | moment | 无 |
| defaultPickerValue | 默认面板日期 | moment | 无 |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js | string | string[] | "YYYY-MM-DD" |
| showTime | 增加时间选择功能 | Object , boolean | TimePicker Options |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | moment | moment() |
| showToday | 是否展示“今天”按钮 | boolean | true |
| value | 日期 | moment | 无 |
| onChange | 时间发生变化的回调 | function(date: moment, dateString: string) | 无 |
| onPanelChange | 日期面板变化时的回调 | function(value, mode) | - |

#### **MonthPicker**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | moment | 无 |
| defaultPickerValue | 默认面板日期 | moment | 无 |
| format | 展示的日期格式，配置参考 moment.js | string | "YYYY-MM" |
| value | 日期 | moment | 无 |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |

#### **RangePicker**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | moment[] | 无 |
| defaultPickerValue | 默认面板日期 | moment[] | 无 |
| disabledTime | 不可选择的时间(需结合showTime一起使用) | function(dates: moment, moment, partial: 'start'|'end') | 无 |
| showTime | 增加时间选择功能 | Object|boolean | TimePicker Options |
| format | 展示的日期格式 | string | "YYYY-MM-DD HH:mm:ss" |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | moment[] | moment() , moment() |
| value | 日期 | moment[] | 无 |
| onCalendarChange | 待选日期发生变化的回调 | function(dates: moment, moment, dateStrings: string, string) | 无 |
| onChange | 日期范围发生变化的回调 | function(dates: moment, moment, dateStrings: string, string) | 无 |
