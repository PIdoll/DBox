import React from 'react';
import RcTree, { TreeNode } from 'rc-tree';
// import animation from '../_util/openAnimation';
import './style';
import Icon from '../../components/icon'

export default class Tree extends React.Component {
  static TreeNode = TreeNode;

  static defaultProps = {
    prefixCls: 'idoll-tree',
    checkable: false,
    showIcon: false,
    // loadedKeys: [],
    // onLoaded: (loadedKeys: string[], info: { event: 'load', node: AntTreeNode; }) => void;
    // openAnimation: animation,
  };

  renderSwitcherIcon = (isLeaf, loading) => {
    const {
      prefixCls,
    } = this.props;
    console.log('isLeaf', isLeaf);
    console.log('loading', loading);
    if (JSON.stringify(loading) !== '{}') {
      return (
        <Icon
          type='pro-loading'
          className={`${prefixCls}-switcher-loading-icon`}
        />
      );
    } else {
      if (isLeaf) {
        return null;
      }
      return (
        <Icon type='caret-down' className={`${prefixCls}-switcher-icon`} theme='filled' />
      );
    }
  }
	render() {
		const { prefixCls, className, children } = this.props;
		let checkable = this.props.checkable;
		return (
  <RcTree
    {...this.props}
    className={className}
    checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
    // switcherIcon={this.renderSwitcherIcon}
  >
    { children }
  </RcTree>
		);
	}
}
