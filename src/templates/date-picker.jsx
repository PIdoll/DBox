import React from 'react';
// import Icon from '../../components/icon';
import DatePicker from 'components/date-picker/index';
import Radio from 'components/radio/index';
import moment from 'moment';

const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
const { RangePicker, MonthPicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const dateFormat1 = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


export default class DatePickerView extends React.Component {
  state = {
    size: 'default',
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  // 自定义日期范围选择
  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onDiyChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onDiyChange('startValue', value);
    console.log('onStartChange', value)
  }

  onEndChange = (value) => {
    this.onDiyChange('endValue', value);
    console.log('onEndChange', value)
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }


  // 自定义日期范围选择

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  onPanelChange = (value, mode) => {
    console.log('onPanelChange', value, mode);
  }

  onChange = (date, dateString) => {
    console.log('onChange', date, dateString);
  }

  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
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

  onCalendarChange = (dates, dateString) => {
    console.log('onCalendarChange', dates, dateString);
  }

  onOk = () => {
    console.log('OK')
  }
  render() {
    const { size } = this.state;
    return (
      <div id='main-container'>
        <h1 className='h1'>基本使用</h1>
        <div style={{ marginBottom: 15 }}>
          <DatePicker onPanelChange={this.onPanelChange} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <MonthPicker onChange={this.onChange} placeholder='请选择月份' />
        </div>
        <div style={{ marginBottom: 15 }}>
          <RangePicker onChange={this.onChange} onOk={this.onOk} />
        </div>
        <h1 className='h1'>三种大小</h1>
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
        <h1 className='h1'>禁用</h1>
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
        <h1 className='h1'>日期格式</h1>
        <div style={{ marginBottom: 15 }}>
          <DatePicker defaultValue={moment('2015/01/01', dateFormat1)} format={dateFormat1} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <RangePicker
            onOk={this.onOk}
            defaultValue={[moment('2015/01/01', dateFormat1), moment('2015/01/01', dateFormat1)]}
            format={dateFormat1}
          />
        </div>
        <h1 className='h1'>日期时间选择</h1>
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
        <h1 className='h1'>不可选择日期和时间</h1>
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
    )
  }
}

