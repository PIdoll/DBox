import React from 'react';
import {Pagination} from 'components';
function showTotal(total) {
  return `总 ${total} 条`;
}
export default class MiniPagination extends React.Component {
  render () {
    return (
      <div>
        <Pagination size='small' total={50} />
        <br />
        <Pagination size='small' total={50} showSizeChanger showQuickJumper />
        <br />
        <Pagination size='small' total={50} showTotal={showTotal} />
      </div>
    )
  }
}
