import React from 'react';
import TimePicker from 'components/time-picker/index';
import moment from 'moment';

export default class DefaultTimeDemo extends React.Component {
  render() {
    return (
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm')} format='HH:mm' />
    )
  }
}
