import React from 'react';
import {Tag} from 'components';

function onClose () {
  console.log('标签已移除')
}
export default class BasicTag extends React.Component {
  render () {
    return (
      <div>
        <Tag closable onClose={onClose}>可移除标签</Tag>
        <Tag closable color='turquoise'>可移除标签</Tag>
      </div>
    )
  }
}
