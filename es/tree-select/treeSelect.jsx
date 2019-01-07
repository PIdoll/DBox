import React from 'react';
import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from 'rc-tree-select';
import classNames from 'classnames';
import Icon from '../icon';
import './style';

export default class TreeSelect extends React.Component {
  static TreeNode = TreeNode;
  static SHOW_ALL = SHOW_ALL;
  static SHOW_PARENT = SHOW_PARENT;
  static SHOW_CHILD = SHOW_CHILD;

  static defaultProps = {
    prefixCls: 'idoll-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
    dropdownClassName: 'idoll-select-tree-dropdown',
  }

  render() {
    const props = this.props;
    let {
      size, className, combobox, notFoundContent, prefixCls,
    } = this.props;

    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className]: !!className,
    });

    const { antLocale } = this.context;
    if (antLocale && antLocale.Select) {
      notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
    }

    let checkable = props.treeCheckable;
    if (checkable) {
      checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
    }
    const clearIcon = (
      <Icon
        type='close-circle-o'
        className={`${prefixCls}-picker-clear`}
      />
    );
    const removeIcon = (
      <Icon type='close' className={`${prefixCls}-remove-icon`} />
    );

    return (
      <RcTreeSelect {...this.props}
        treeCheckable={checkable}
        removeIcon={removeIcon}
        clearIcon={clearIcon}
        className={cls}
        notFoundContent={notFoundContent}
      />
    );
  }
}
