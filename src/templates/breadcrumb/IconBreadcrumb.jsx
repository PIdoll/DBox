import React from 'react';
import Breadcrumb from 'components/breadcrumb';
import Icon from 'components/icon';

export default class BasicBreadcrumb extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='javascript:void(0);'>
          <Icon type='home' />
        </Breadcrumb.Item>
        <Breadcrumb.Item href='javascript:void(0);'>
          <Icon type='user' />
          <span>点击</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          点击
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
