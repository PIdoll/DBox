import React from 'react';
import {Pagination} from 'components';
export default class TotalPagination extends React.Component {
  render () {
    return (
      <Pagination showTotal={(total) => (`总 ${total} 条`)} defaultCurrent={2} total={5000} pageSize={50} showQuickJumper />
    )
  }
}
