import React from 'react';
import {Pagination} from 'components';
export default class JumpPagination extends React.Component {
  render () {
    return (
      <Pagination defaultCurrent={2} total={500} showQuickJumper />
    )
  }
}
