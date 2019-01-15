import React from 'react';
import {Switch} from 'components';

function onClick () {
  console.log('onClick点击回调')
}
export default class TextSwitch extends React.Component {
  render () {
    return (
      <Switch checkedChildren={'1'} unCheckedChildren={'0'} onClick={onClick} />
    )
  }
}
