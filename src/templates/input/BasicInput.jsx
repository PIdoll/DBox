import React from 'react';

import Input from 'components/input';

export default class BasicInput extends React.Component {
  render() {
    return (
      <div style={{width: '200px'}}>
        <Input type='text' placeholder='请输入' clearable onPressEnter={this.handlePressEnter} /><br /><br />
        <Input type='text' disabled placeholder='请输入' /><br /><br />
        <Input type='text' readOnly value='请输入' />
      </div>
    )
  }
}
