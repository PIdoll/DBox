import React from 'react';
import {Tag} from 'components';


export default class BasicTag extends React.Component {
  render () {
    return (
      <div>
        <span style={{marginRight: 8}}>热门话题:</span>
        <Tag hot>电影</Tag>
        <Tag hot checked>书籍</Tag>
        <Tag hot>音乐</Tag>
        <Tag hot>运动</Tag>
      </div>
    )
  }
}
