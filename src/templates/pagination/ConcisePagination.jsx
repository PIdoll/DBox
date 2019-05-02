import React from 'react';
import {Pagination} from 'components';
export default class ConcisePagination extends React.Component {
  render () {
    return (
      <Pagination simple defaultPageSize={50} defaultCurrent={2} total={500} />
    )
  }
}
