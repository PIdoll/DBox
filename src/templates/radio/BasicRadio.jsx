import React from 'react';
import {Radio} from 'components';

export default class BasicRadio extends React.Component {
  render () {
    return (
      <div>
        <Radio>A</Radio>
        <Radio checked>B</Radio>
        <Radio defaultChecked>C</Radio>
        <Radio readOnly>D</Radio>
      </div>
    )
  }
}

