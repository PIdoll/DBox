#### **何时使用**

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

#### **基本用法**

```jsx
const moment = require('../../node_modules/moment');
onChange = (time, timeString) => {
    console.log(time, timeString);
  }
<TimePicker onChange={this.onChange} />
```

#### **三种尺寸**

```jsx
const moment = require('../../node_modules/moment');
<div style={{ display: 'flex' }}>
  <div style={{marginRight: 10}}>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='large' />
  </div>
  <div style={{marginRight: 10}}>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
  </div>
    <div style={{marginRight: 10}}>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='small' />
    </div>
</div>
```

#### **禁用**

```jsx
const moment = require('../../node_modules/moment');
<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
```

#### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowEmpty | 是否展示清除按钮 | boolean | true |
| autoFocus | 自动获取焦点 | boolean | false |
| className | 选择器类名 | string | '' |
| clearText | 清除按钮的提示文案 | string | clear |
| defaultValue | 默认时间 | moment | 无 |
| disabled | 禁用全部操作 | boolean | false |
| disabledHours | 禁止选择部分小时选项 | function() | 无 |
| disabledMinutes | 禁止选择部分分钟选项 | function(selectedHour) | 无 |
| disabledSeconds | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | 无 |
| format | 展示的时间格式 | string | "HH:mm:ss" |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |
| placeholder | 没有值的时候显示的内容 | string | "请选择时间" |
| onChange | 时间发生变化的回调 | function(time: moment, timeString: string): void | 无 |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean): void | 无 |
| value | 当前时间 | moment | 无 |