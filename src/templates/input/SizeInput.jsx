import React from 'react';

import Input from 'components/input';
const Search = Input.Search

export default class SizeInput extends React.Component {
  render() {
    return (
      <div style={{width: '200px'}}>
        <Input size='large' placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Input placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Input size='small' placeholder='请输入' style={{width: '200px'}} /><br /><br />
        <Search style={{ width: 200 }} size='large' onSearch={(value => console.log(value))} placeholder='请输入' /><br /><br />
        <Search style={{ width: 200 }} onSearch={(value => console.log(value))} placeholder='请输入' /><br /><br />
        <Search style={{ width: 200 }} size='small' onSearch={(value => console.log(value))} placeholder='请输入' /><br /><br />
      </div>
    )
  }
}
