import React from 'react';
import {Tag} from 'components';

export default class BasicTag extends React.Component {
  render () {
    return (
      <div>
        <Tag>标签</Tag>
        <Tag href='javascript:;' target='_black'>链接</Tag>
      </div>
    )
  }
}
