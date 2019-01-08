
当用户需要一个日期(年、月、日、时、分、秒)，可以点击标准输入框，弹出日期面板进行选择。

##### **基本用法**

```jsx
import { DatePicker } from 'dbox-ui';

const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const WeekPicker = DatePicker.WeekPicker;

onPanelChange = (value, mode) => {
  console.log('onPanelChange', value, mode);
}
onChange = (date, dateString) => {
  console.log('onChange', date, dateString);
}
onOk = () => {
  console.log('OK')
}
<div>
  <div style={{ marginBottom: 15 }}>
    <DatePicker onPanelChange={this.onPanelChange} />
  </div>
  <div style={{ marginBottom: 15 }}>
    <MonthPicker onChange={this.onChange} placeholder='请选择月份' />
  </div>
  <div style={{ marginBottom: 15 }}>
    <RangePicker onChange={this.onChange} onOk={onOk} />
  </div>
</div>
```

##### **三种大小**

```jsx
import { Radio, DatePicker } from 'dbox-ui';

const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const WeekPicker = DatePicker.WeekPicker;

class DatePickerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'default',
    }
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.onOk = this.onOk.bind(this);
  }
  handleSizeChange(e) {
    this.setState({ size: e.target.value });
  }
  onOk() {
    console.log('OK')
  }
  render() {
    const { size } = this.state;
    return (
      <div>
        <RadioGroup value={size} onChange={this.handleSizeChange}>
          <RadioButton value='large'>大尺寸</RadioButton>
          <RadioButton value='default'>默认</RadioButton>
          <RadioButton value='small'>小尺寸</RadioButton>
        </RadioGroup>
        <br /><br />
        <div style={{ marginBottom: 15 }}>
          <DatePicker size={size} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <MonthPicker size={size} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <RangePicker size={size} onOk={this.onOk} />
        </div>
      </div>
    )
  }
}
<DatePickerView />
```

##### **禁用**

```jsx
import { DatePicker } from 'dbox-ui';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const WeekPicker = DatePicker.WeekPicker;
const dateFormat = 'YYYY-MM-DD';

onOk = () => {
  console.log('OK')
}
<div>
  <div style={{ marginBottom: 15 }}>
    <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
  </div>
  <div style={{ marginBottom: 15 }}>
    <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
  </div>
  <div style={{ marginBottom: 15 }}>
    <RangePicker
      onOk={this.onOk}
      disabled
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]} />
  </div>
</div>
```

##### **日期格式**

```jsx
import { DatePicker } from 'dbox-ui';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const WeekPicker = DatePicker.WeekPicker;
const dateFormat1 = 'YYYY/MM/DD';
const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY/MM';

<div>
  <div style={{ marginBottom: 15 }}>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat1)} format={dateFormat1} />
  </div>
  <div style={{ marginBottom: 15 }}>
    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
  </div>
  <div style={{ marginBottom: 15 }}>
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat1), moment('2015/01/01', dateFormat1)]}
      format={dateFormat1}
    />
  </div>
</div>
```

##### **日期时间选择**

```jsx
import { DatePicker } from 'dbox-ui';

const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const WeekPicker = DatePicker.WeekPicker;

onChange = (date, dateString) => {
  console.log('onChange', date, dateString);
}
onOk = () => {
  console.log('OK')
}
<div>
  <div style={{ marginBottom: 15 }}>
    <DatePicker
      showTime
      format='YYYY-MM-DD HH:mm:ss'
      placeholder='请选择时间'
      onChange={this.onChange}
      onOk={this.onOk}
    />
  </div>
  <div style={{ marginBottom: 15 }}>
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format='YYYY-MM-DD HH:mm'
      placeholder={['开始时间', '结束时间']}
      onChange={this.onChange}
      onOk={this.onOk}
    />
  </div>
</div>
```

##### **不可选择日期和时间**

```jsx
import { DatePicker } from 'dbox-ui';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;
const MonthPicker = DatePicker.MonthPicker;
const WeekPicker = DatePicker.WeekPicker;

disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}
range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}
disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => this.range(0, 60).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
    return {
      disabledHours: () => this.range(0, 60).splice(20, 4),
      disabledMinutes: () => this.range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }
<div>
  <div style={{ marginBottom: 15 }}>
    <DatePicker
      format='YYYY-MM-DD HH:mm:ss'
      disabledDate={this.disabledDate}
      disabledTime={this.disabledRangeTime}
      showTime
    />
  </div>
  <div style={{ marginBottom: 15 }}>
    <MonthPicker disabledDate={this.disabledDate} placeholder='请选择月份' />
  </div>
  <div style={{ marginBottom: 15 }}>
    <RangePicker
      onOk={this.onOk}
      disabledDate={this.disabledDate}
      disabledTime={this.disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }}
      format='YYYY-MM-DD HH:mm:ss'
    />
  </div>
</div>
```

#### **自定义日期范围选择**

```jsx
import { DatePicker } from 'components';
class DiyDatePickerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: null,
      endValue: null,
      endOpen: false,
    }
    this.disabledStartDate = this.disabledStartDate.bind(this);
    this.disabledEndDate = this.disabledEndDate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
    this.handleStartOpenChange = this.handleStartOpenChange.bind(this);
    this.handleEndOpenChange = this.handleEndOpenChange.bind(this);
  }

  disabledStartDate(startValue) {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate(endValue) {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  onStartChange(value) {
    this.onChange('startValue', value);
  }

  onEndChange(value) {
    this.onChange('endValue', value);
  }

  handleStartOpenChange(open) {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange(open) {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    )
  }

}
<DiyDatePickerView />
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

##### **共同的方法**

| 名称 | 描述 |
| --- | --- | --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

##### **DatePicker**

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

##### **MonthPicker**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | moment | 无 |
| defaultPickerValue | 默认面板日期 | moment | 无 |
| format | 展示的日期格式，配置参考 moment.js | string | "YYYY-MM" |
| value | 日期 | moment | 无 |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |

##### **RangePicker**

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


```jsx noeditor
import {BackTop} from 'dbox-ui';
import DataPickerView from '../prevPage/dataPicker';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <DataPickerView />
</div>
```
