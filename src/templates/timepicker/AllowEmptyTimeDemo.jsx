import React from 'react';
import TimePicker from 'components/time-picker/index';

export default class AllowEmptyTimeDemo extends React.Component {
  render() {
    return (
      <div>
        <TimePicker allowEmpty={false} autoFocus />
      </div>
    )
  }
}
