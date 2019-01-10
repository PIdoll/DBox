import React from 'react';

import Input from 'components/input';
const Search = Input.Search

export default class SearchInput extends React.Component {
  render() {
    return (
      <div style={{width: '200px'}}>
        <Search
          placeholder='请输入'
          onSearch={value => console.log(value)}
          style={{ width: '250px' }}
        />
        <br /><br />
        <Search
          placeholder='请输入'
          onSearch={value => console.log(value)}
          style={{ width: '250px' }}
          enterButton
        />
        <br /><br />
        <Search style={{ width: '250px' }} size='small' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />
        <br /><br />
        <Search style={{ width: '250px' }} enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />
        <br /><br />
        <Search style={{ width: '250px' }} size='large' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} />
      </div>
    )
  }
}
