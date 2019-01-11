import React from 'react';
import {Switch} from 'components';

export default class ExecuteSwitch extends React.Component {
  render () {
    return (
      <div>
        <Switch disabled loading defaultChecked />
        <br />
        <Switch size='small' loading />
      </div>
    )
  }
}
