import React from 'react';
import {Pagination} from 'components';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
};
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
};
export default class PagePagination extends React.Component {
  render () {
    return (
      <Pagination onChange={onChange} onShowSizeChange={onShowSizeChange} defaultCurrent={1} defaultPageSize={11} pageSizeOptions={['11', '21', '31', '41']} total={50} showSizeChanger />
    )
  }
}
