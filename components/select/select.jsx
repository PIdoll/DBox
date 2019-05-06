// import React from 'react';
// import RcSelect, { Option, OptGroup } from 'rc-select';
// import { PropTypes } from 'prop-types';
// import classNames from 'classnames';
// import { ConfigConsumer } from '../config-provider';
// import Icon from '../icon';

// import './style'

// export default class Select extends React.Component {
//   static Option = Option;
//   static OptGroup = OptGroup;

//   static defaultProps = {
//     prefixCls: 'idoll-select',
//     transitionName: 'slide-up',
//     choiceTransitionName: 'zoom',
//     showSearch: false
//   }

//   static contextTypes = {
//     idollLocale: PropTypes.object
//   }

//   render() {
//     let {
//       size, className, mode, notFoundContent, prefixCls, showSearch, optionLabelProp
//     } = this.props;

//     const classs = classNames({
//       [`${prefixCls}-lg`]: size === 'large',
//       [`${prefixCls}-sm`]: size === 'small',
//       [className]: !!className,
//       [`${prefixCls}-show-search`]: showSearch
//     });

//     const { idollLocale } = this.context;
//     if (idollLocale && idollLocale.Select) {
//       notFoundContent = notFoundContent || idollLocale.Select.notFoundContent;
//     }
//     const isCombobox = mode === 'combobox';
//     if (isCombobox) {
//       notFoundContent = null;
//       // children 带 dom 结构时，无法填入输入框
//       optionLabelProp = optionLabelProp || 'value';
//     }

//     const modeConfig = {
//       multiple: mode === 'multiple',
//       tags: mode === 'tags',
//       combobox: isCombobox,
//     };

//     const clearIcon = (
//       <Icon
//         type='close-circle'
//         className={`${prefixCls}-picker-clear`}
//     />
//     );

//     const removeIcon = (
//       <Icon type='close' className={`${prefixCls}-remove-icon`} />
//     );


//     size = size === 'small' ? 'small' : null;
//     return (
//       <RcSelect {...this.props}
//         {...modeConfig}
//         removeIcon={removeIcon}
//         clearIcon={clearIcon}
//         dropdownClassName={size}
//         className={classs}
//         optionLabelProp={optionLabelProp || 'children'}
//         notFoundContent={notFoundContent}
//       />
//     );
//   }
// }
import React from 'react';
import PropTypes from 'prop-types';
import RcSelect, { Option, OptGroup } from 'rc-select';
import classNames from 'classnames';
import { ConfigConsumer } from '../config-provider';
import omit from 'omit.js';
import warning from '../_util/warning';
import Icon from '../icon';
import './index';

export default class Select extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['default', 'large', 'small']),
    notFoundContent: PropTypes.any,
    showSearch: PropTypes.bool,
    optionLabelProp: PropTypes.string,
    transitionName: PropTypes.string,
    choiceTransitionName: PropTypes.string,
    id: PropTypes.string,
  }
  static Option = Option;
  static OptGroup = OptGroup;
  static SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
  constructor(props) {
    super(props);
    warning(
      props.mode !== 'combobox',
      'Select',
      'The combobox mode is deprecated,' +
      'it will be removed in next major, version, ' +
      'please use AutoComplete instead',
    );
  }

  focus() {
    this.rcSelect.focus();
  }

  blur() {
    this.rcSelect.blur();
  }

  saveSelect = (node) => {
    this.rcSelect = node;
  }

  getNotFoundContent(renderEmpty) {
    const { notFoundContent } = this.props;
    if (notFoundContent !== undefined) {
      return notFoundContent;
    }
    if (this.isCombobox()) {
      return null;
    }
    return renderEmpty('Select');
  }

  isCombobox() {
    const { mode } = this.props;
    return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
  }

  renderSuffixIcon(prefixCls) {
    const { loading, suffixIcon } = this.props;
    if (suffixIcon) {
      return React.isValidElement(suffixIcon)
      ? React.cloneElement(suffixIcon, {
        className: classNames(suffixIcon.props.className, `${prefixCls}-arrow-icon`),
      })
      : suffixIcon;
    }
    if (loading) {
      return <Icon type='loading' />;
    }
    return <Icon type='down' className={`${prefixCls}-arrow-icon`} />;
  }

  renderSelect = ({
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
  }) => {
    const {
      prefixCls: customizePrefixCls,
      className = '',
      size,
      mode,
      getPopupContainer,
      removeIcon,
      clearIcon,
      menuItemSelectedIcon,
      showArrow,
      ...restProps
    } = this.props;
    const rest = omit(restProps, ['imputIcon']);

    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const cls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-show-arrow`]: showArrow,
    }, className);
    let { optionLabelProp } = this.props;
    if (this.isCombobox()) {
      optionLabelProp = optionLabelProp || 'value';
    }

    const modeConfig = {
      multiple: mode === 'multiple',
      tags: mode === 'tags',
      combobox: this.isCombobox(),
    };

    const finalRemoveIcon = (removeIcon &&
      (React.isValidElement(removeIcon)
      ? React.cloneElement(removeIcon, {
        className: classNames(removeIcon.props.className, `${prefixCls}-remove-icon`),
      })
      : removeIcon)) || <Icon type='close' className={`${prefixCls}-remove-icon`} />;

    const finalClearIcon = (clearIcon &&
      (React.isValidElement(clearIcon)
      ? React.cloneElement(clearIcon, {
        className: classNames(clearIcon.props.className, `${prefixCls}-clear-icon`),
      })
      : clearIcon)) || (
        <Icon type='close-circle' theme='filled' className={`${prefixCls}-clear-icon`} />
      );

      const finalMenuItemSelectedIcon = (menuItemSelectedIcon &&
        (React.isValidElement(menuItemSelectedIcon)
        ? React.cloneElement(menuItemSelectedIcon, {
          className: classNames(
            menuItemSelectedIcon.props.className,
            `${prefixCls}-selected-icon`,
          ),
        })
        : menuItemSelectedIcon)) || <Icon type='check' className={`${prefixCls}-selected-icon`} />;

        return (
          <RcSelect
            inputIcon={this.renderSuffixIcon(prefixCls)}
            removeIcon={finalRemoveIcon}
            clearIcon={finalClearIcon}
            menuItemSelectedIcon={finalMenuItemSelectedIcon}
            showArrow={showArrow}
            {...rest}
            {...modeConfig}
            prefixCls={prefixCls}
            className={cls}
            optionLabelProp={optionLabelProp || 'children'}
            notFoundContent={this.getNotFoundContent(renderEmpty)}
            ref={this.saveSelect}
            getPopupContainer={getPopupContainer || getContextPopupContainer} />
        );
  };
  render() {
    return (
      <ConfigConsumer>{ this.renderSelect }</ConfigConsumer>
    )
  }
}
