
当用户需要一个准确的时间的时候，可以点击标准输入框，弹出时间面板进行选择准确的时间节点。

##### **基本用法**

```jsx
import { TimePicker } from 'dbox-ui';
import moment from 'moment';
onChange = (time, timeString) => {
    console.log(time, timeString);
  }
<TimePicker onChange={this.onChange} />
```

##### **三种尺寸**

```jsx
import { TimePicker } from 'dbox-ui';
import moment from 'moment';

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

##### **禁用**

```jsx
import { TimePicker } from 'dbox-ui';
import moment from 'moment';

<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
```

##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowEmpty | 是否展示清除按钮 | boolean | true |
| autoFocus | 自动获取焦点 | boolean | false |
| className | 选择器类名 | string | '' |
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


```jsx noeditor
import {BackTop} from 'dbox-ui';
import TimePickerView from '../prevPage/timePicker';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <TimePickerView />
</div>
```
