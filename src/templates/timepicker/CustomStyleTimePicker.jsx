import React from 'react';
import TimePicker from 'components/time-picker/index';

import './style/index.less';

export default class CustomStyleTimePicker extends React.Component {
  render() {
    return (
      <TimePicker className='custom-style' />
    )
  }
}
