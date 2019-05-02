import React from 'react';
import {Tag} from 'components';

const TagGroup = Tag.Group;
export default class BasicTag extends React.Component {
  render () {
    return (
      <TagGroup color='coral' tags={['吃', '喝', '玩']} id={0} text='技能' iconType='tag' />
    )
  }
}
