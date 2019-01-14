import React from 'react';
import Breadcrumb from 'components/breadcrumb';

export default class BasicBreadcrumb extends React.Component {
  render() {
    return (
      <Breadcrumb separator='>'>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item><a href='javascript:void(0);'>个人中心</a></Breadcrumb.Item>
        <Breadcrumb.Item>设置</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
