import React from 'react';
import DatePicker from 'components/date-picker/index';

const { RangePicker, MonthPicker } = DatePicker;
export default class AdditionalFooter extends React.Component {
    render() {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <DatePicker renderExtraFooter={() => 'extra footer'} />
            </div>
            <div style={{ marginBottom: 15 }}>
              <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
            </div>
            <div style={{ marginBottom: 15 }}>
              <RangePicker renderExtraFooter={() => 'extra footer'} />
            </div>
            <div style={{ marginBottom: 15 }}>
              <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            </div>
            <div style={{ marginBottom: 15 }}>
              <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder='选择月份' />
            </div>
          </div>
        )
    }
}
