// import React from 'react';
// import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from 'rc-tree-select';
// import classNames from 'classnames';
// import Icon from '../icon';
// import './style';

// export default class TreeSelect extends React.Component {
//   static TreeNode = TreeNode;
//   static SHOW_ALL = SHOW_ALL;
//   static SHOW_PARENT = SHOW_PARENT;
//   static SHOW_CHILD = SHOW_CHILD;

//   static defaultProps = {
//     prefixCls: 'idoll-select',
//     transitionName: 'slide-up',
//     choiceTransitionName: 'zoom',
//     showSearch: false,
//     dropdownClassName: 'idoll-select-tree-dropdown',
//   }

//   render() {
//     const props = this.props;
//     let {
//       size, className, combobox, notFoundContent, prefixCls,
//     } = this.props;

//     const cls = classNames({
//       [`${prefixCls}-lg`]: size === 'large',
//       [`${prefixCls}-sm`]: size === 'small',
//       [className]: !!className,
//     });

//     const { antLocale } = this.context;
//     if (antLocale && antLocale.Select) {
//       notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
//     }

//     if (combobox) {
//       notFoundContent = null;
//     }

//     let checkable = props.treeCheckable;
//     if (checkable) {
//       checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
//     }
//     const clearIcon = (
//       <Icon
//         type='close-circle'
//         className={`${prefixCls}-picker-clear`}
//       />
//     );
//     const removeIcon = (
//       <Icon type='close' className={`${prefixCls}-remove-icon`} />
//     );

//     return (
//       <RcTreeSelect {...this.props}
//         treeCheckable={checkable}
//         removeIcon={removeIcon}
//         clearIcon={clearIcon}
//         className={cls}
//         notFoundContent={notFoundContent}
//       />
//     );
//   }
// }

import React from 'react';
import RcTreeSelect, { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from 'rc-tree-select';
import classNames from 'classnames';
import { ConfigConsumer } from '../config-provider';
import warning from '../_util/warning';
import Icon from '../icon';
import omit from 'omit.js';
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
    dropdownClassName: 'idoll-select-tree-dropdown',
    showSearch: false,
  };

  constructor(props) {
    super(props);

    warning(
      props.multiple !== false || !props.treeCheckable,
      'TreeSelect',
      '`multiple` will alway be `true` when `treeCheckable` is true',
    );
  }

  focus() {
    this.rcTreeSelect.focus();
  }

  blur() {
    this.rcTreeSelect.blur();
  }

  saveTreeSelect = (node) => {
    this.rcTreeSelect = node;
  };

  renderSwitcherIcon = (prefixCls, { isLeaf, loading }) => {
    if (loading) {
      return <Icon type='loading' className={`${prefixCls}-switcher-loading-icon`} />;
    }
    if (isLeaf) {
      return null;
    }
    return <Icon type='caret-down' className={`${prefixCls}-switcher-icon`} />;
  };

  renderTreeSelect = ({
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
  }) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      size,
      notFoundContent,
      dropdownStyle,
      dropdownClassName,
      suffixIcon,
      getPopupContainer,
      ...restProps
    } = this.props;
    const rest = omit(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);

    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const cls = classNames(
      {
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
      },
      className,
    );

    let checkable = rest.treeCheckable;
    if (checkable) {
      checkable = <span className={`${prefixCls}-tree-checkbox-inner`} />;
    }

    const inputIcon = (suffixIcon &&
      (React.isValidElement(suffixIcon)
        ? React.cloneElement(suffixIcon)
        : suffixIcon)) || <Icon type='down' className={`${prefixCls}-arrow-icon`} />;

    const removeIcon = <Icon type='close' className={`${prefixCls}-remove-icon`} />;

    const clearIcon = (
      <Icon type='close-circle' className={`${prefixCls}-clear-icon`} theme='filled' />
    );

    return (
      <RcTreeSelect
        switcherIcon={(nodeProps) =>
          this.renderSwitcherIcon(prefixCls, nodeProps)
        }
        inputIcon={inputIcon}
        removeIcon={removeIcon}
        clearIcon={clearIcon}
        {...rest}
        getPopupContainer={getPopupContainer || getContextPopupContainer}
        dropdownClassName={classNames(dropdownClassName, `${prefixCls}-tree-dropdown`)}
        prefixCls={prefixCls}
        className={cls}
        dropdownStyle={{ maxHeight: '100vh', overflow: 'auto', ...dropdownStyle }}
        treeCheckable={checkable}
        notFoundContent={notFoundContent || renderEmpty('Select')}
        ref={this.saveTreeSelect}
      />
    );
  };

  render() {
    return <ConfigConsumer>{this.renderTreeSelect}</ConfigConsumer>;
  }
}

