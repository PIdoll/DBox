import React from 'react';
import RcSelect, { Option, OptGroup } from 'rc-select';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import './style'

export default class Select extends React.Component {
  static Option = Option;
  static OptGroup = OptGroup;

  static defaultProps = {
    prefixCls: 'idoll-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false
  }

  static contextTypes = {
    antLocale: PropTypes.object
  }

  render() {
    let {
      size, className, mode, notFoundContent, prefixCls, showSearch, optionLabelProp
    } = this.props;

    const classs = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [className]: !!className,
      [`${prefixCls}-show-search`]: showSearch
    });

    const { antLocale } = this.context;
    if (antLocale && antLocale.Select) {
      notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
    }
    const isCombobox = mode === 'combobox';
    if (isCombobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    const modeConfig = {
      multiple: mode === 'multiple',
      tags: mode === 'tags',
      combobox: isCombobox,
    };

    return (
      <RcSelect {...this.props}
        {...modeConfig}
        className={classs}
        optionLabelProp={optionLabelProp || 'children'}
        notFoundContent={notFoundContent}
      />
    );
  }
}

