import React from 'react';
import {Tag} from 'components';

export default class ColorTag extends React.Component {
  render () {
    return (
      <div>
        <Tag color='peru'>peru</Tag>
        <Tag color='coral'>coral</Tag>
        <Tag color='hotpink'>hotpink</Tag>
        <Tag color='orange'>orang</Tag>
        <Tag color='limegreen'>limegreen</Tag>
        <Tag color='deepskyblue'>deepskyblue</Tag>
        <Tag color='mediumslateblue'>mediumslateblue</Tag>
        <Tag color='turquoise'>turquoise</Tag>
      </div>
    )
  }
}
