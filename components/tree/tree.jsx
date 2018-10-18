import React from 'react';
import RcTree, { TreeNode } from 'rc-tree';
import animation from '../_util/openAnimation';
import './style';

export default class Tree extends React.Component {
  static TreeNode = TreeNode;

  static defaultProps = {
    prefixCls: 'idoll-tree',
    checkable: false,
    showIcon: false,
    openAnimation: animation,
  };
	render() {
		const { prefixCls, className, children } = this.props;
		let checkable = this.props.checkable;
		return (
  <RcTree
    {...this.props}
    className={className}
    checkable={checkable ? <span className={`${prefixCls}-checkable-inner`} /> : checkable}
  >
    { children }
  </RcTree>
		);
	}
}
