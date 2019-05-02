
当您需要选择时间，包括年、月、日的时候。

##### **基本用法**

```jsx
import { Calendar } from 'dbox-ui';
import moment from 'moment';

<div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
  <Calendar validRange={[moment('2018-01'), moment('2028-12')]} />
</div>
```

##### **带有背景色头部选择**

```jsx
import { Calendar } from 'dbox-ui';
import moment from 'moment';

disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

onPanelChange = (value, mode) => {
  console.log('onPanelChange', moment(value).format('YYYY-MM-DD'));
}

onSelect = (date) => {
  console.log('onSelect', moment(date).format('YYYY-MM-DD'));
}

onChange = (date) => {
  console.log('onChange', moment(date).format('YYYY-MM-DD'));
}
<div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
  <Calendar
    mold='backdrop'
    disabledDate={this.disabledDate}
    onPanelChange={this.onPanelChange}
    onChange={this.onChange} />
</div>
```

##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mold | 不同选择时间的方式('backdrop') | string | 无 |
| value | 展示日期(不支持mold='backdrop') | moment | 当前日期 |
| defaultValue | 默认展示的日期 | moment | 默认日期 |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |
| onPanelChange | 日期面板变化回调 | function(date: moment, mode: string) | 无 |
| onChange | 日期变化回调 | function(date: moment) | 无 |
| onSelect | 点击选择日期回调(不支持mold='backdrop') | function(date: moment) | 无 |
| validRange | 设置可以显示的日期(不支持mold='backdrop') | [moment, moment] | 无 |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import CalendarView from '../prevPage/calendar';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <CalendarView />
</div>
```
