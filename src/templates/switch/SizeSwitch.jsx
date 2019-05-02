import React from 'react';
import {Switch} from 'components';

export default class SizeSwitch extends React.Component {
  render () {
    return (
      <div>
        <Switch defaultChecked />
        <br />
        <Switch size='small' />
      </div>
    )
  }
}
