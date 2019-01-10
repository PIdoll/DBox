import React from 'react';

import Input from 'components/input';
import Icon from 'components/icon';

export default class PreixSuffixInput extends React.Component {
  render() {
    return (
      <div style={{width: '200px'}}>
        <Input placeholder='请输入' style={{ width: '250px' }} prefix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} /><br /><br />
        <Input placeholder='请输入' style={{ width: '250px' }} suffix={<Icon type='edit' />} onChange={(e) => console.log(e.target.value)} />
      </div>
    )
  }
}
