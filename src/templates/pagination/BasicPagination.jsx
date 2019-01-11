import React from 'react';
import {Pagination} from 'components';
export default class BasicPagination extends React.Component {
  render () {
    return (
      <Pagination defaultCurrent={5} total={500} showLessItems />
    )
  }
}
