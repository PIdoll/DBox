import React from 'react';
import {Switch} from 'components';

export default class BasicSwitch extends React.Component {
  render () {
    return (
      <div>
        <Switch defaultChecked />
        <br />
        <Switch checked />
      </div>
    )
  }
}
