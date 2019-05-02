import React from 'react';
import DatePicker from 'components/date-picker/index';
import Radio from 'components/radio/index';
import moment from 'moment';

import './style/index.less';

const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
const { RangePicker, MonthPicker } = DatePicker;

export default class DifferentSizeDemo extends React.Component {
  state = {
    size: 'default',
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  onOpenChange = (status) => {
    console.log('onOpenChange', status);
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
          <DatePicker
            className='custom-style'
            disabledDate={this.disabledDate}
            size={size}
            onOpenChange={this.onOpenChange}
            style={{width: 300}} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <MonthPicker disabled size={size} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <RangePicker size={size} />
        </div>
      </div>
    )
  }
}
