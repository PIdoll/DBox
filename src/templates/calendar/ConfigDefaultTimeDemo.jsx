import React from 'react';
import Calendar from 'components/calendar/index';
import moment from 'moment';

export default class ConfigDefaultTimeDemo extends React.Component {
  render() {
    return (
      <div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
        <Calendar
          validRange={[moment('2017-01'), moment('2038-12')]}
          />
      </div>
    )
  }
}
