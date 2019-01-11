import React from 'react';
import {Pagination} from 'components';
export default class MorePagination extends React.Component {
  render () {
    return (
      <Pagination defaultCurrent={6} total={500} />
    )
  }
}
