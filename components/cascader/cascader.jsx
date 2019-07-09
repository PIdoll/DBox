import React from 'react';
import RcCascader from 'rc-cascader';
import arrayTreeFilter from 'array-tree-filter';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import KeyCode from 'rc-util/lib/KeyCode';
import { polyfill } from 'react-lifecycles-compat';
import Input from '../input';
import Icon from '../icon';
import { ConfigConsumer } from '../config-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import warning from '../_util/warning';

// We limit the filtered item count by default
const defaultLimit = 50;

function highlightKeyword(str, keyword, prefixCls) {
  return str.split(keyword).map((node, index) =>
    index === 0
      ? node
      : [
        <span className={`${prefixCls}-menu-item-keyword`} key='seperator'>
          {keyword}
        </span>,
          node,
        ],
  );
}

function defaultFilterOption(
  inputValue,
  path,
  names,
) {
  return path.some(option => (option[names.label]).indexOf(inputValue) > -1);
}

function defaultRenderFilteredOption(
  inputValue,
  path,
  prefixCls,
  names,
) {
  return path.map((option, index) => {
    const label = option[names.label];
    const node =
      (label).indexOf(inputValue) > -1
        ? highlightKeyword(label, inputValue, prefixCls)
        : label;
    return index === 0 ? node : [' / ', node];
  });
}

function defaultSortFilteredOption(
  a,
  b,
  inputValue,
  names,
) {
  function callback(elem) {
    return (elem[names.label]).indexOf(inputValue) > -1;
  }

  return a.findIndex(callback) - b.findIndex(callback);
}

function getFieldNames(props) {
  const { fieldNames, filedNames } = props;
  if ('filedNames' in props) {
    return filedNames; // For old compatibility
  }
  return fieldNames;
}

function getFilledFieldNames(props) {
  const fieldNames = getFieldNames(props) || {};
  const names = {
    children: fieldNames.children || 'children',
    label: fieldNames.label || 'label',
    value: fieldNames.value || 'value',
  };
  return names;
}

function flattenTree(
  options,
  props,
  ancestor = [],
) {
  const names = getFilledFieldNames(props);
  let flattenOptions = [];
  const childrenName = names.children;
  options.forEach(option => {
    const path = ancestor.concat(option);
    if (props.changeOnSelect || !option[childrenName] || !option[childrenName].length) {
      flattenOptions.push(path);
    }
    if (option[childrenName]) {
      flattenOptions = flattenOptions.concat(flattenTree(option[childrenName], props, path));
    }
  });
  return flattenOptions;
}

const defaultDisplayRender = (label) => label.join(' / ');

class Cascader extends React.Component {
  static defaultProps = {
    placeholder: 'Please select',
    transitionName: 'slide-up',
    popupPlacement: 'bottomLeft',
    options: [],
    disabled: false,
    allowClear: true,
  };

  static propTypes = {
    defaultValue: PropTypes.array,
    filter: PropTypes.bool,
    matchInputWidth: PropTypes.number,
    className: PropTypes.string,
    value: PropTypes.string,
    popupClassName: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    inputPrefixCls: PropTypes.string,
    popupVisible: PropTypes.bool,
    changeOnSelect: PropTypes.bool,
    loadData: PropTypes.func,
    onChange: PropTypes.func,
    showSearch: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])
  }

  static getDerivedStateFromProps(nextProps, { prevProps }) {
    const newState = {
      prevProps: nextProps,
    };

    if ('value' in nextProps) {
      newState.value = nextProps.value || [];
    }
    if ('popupVisible' in nextProps) {
      newState.popupVisible = nextProps.popupVisible;
    }
    if (nextProps.showSearch && prevProps.options !== nextProps.options) {
      newState.flattenOptions = flattenTree(nextProps.options, nextProps);
    }

    return newState;
  }

  cachedOptions = [];


  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || [],
      inputValue: '',
      inputFocused: false,
      popupVisible: props.popupVisible,
      flattenOptions: props.showSearch ? flattenTree(props.options, props) : undefined,
      prevProps: props,
    };
  }

  handleChange = (value, selectedOptions) => {
    this.setState({ inputValue: '' });
    if (selectedOptions[0].__IS_FILTERED_OPTION) {
      const unwrappedValue = value[0];
      const unwrappedSelectedOptions = selectedOptions[0].path;
      this.setValue(unwrappedValue, unwrappedSelectedOptions);
      return;
    }
    this.setValue(value, selectedOptions);
  };

  handlePopupVisibleChange = (popupVisible) => {
    if (!('popupVisible' in this.props)) {
      this.setState(state => ({
        popupVisible,
        inputFocused: popupVisible,
        inputValue: popupVisible ? state.inputValue : '',
      }));
    }

    const onPopupVisibleChange = this.props.onPopupVisibleChange;
    if (onPopupVisibleChange) {
      onPopupVisibleChange(popupVisible);
    }
  };

  handleInputBlur = () => {
    this.setState({
      inputFocused: false,
    });
  };

  handleInputClick = (e) => {
    const { inputFocused, popupVisible } = this.state;
    // Prevent `Trigger` behaviour.
    if (inputFocused || popupVisible) {
      e.stopPropagation();
      if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
      }
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode === KeyCode.BACKSPACE) {
      e.stopPropagation();
    }
  };

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  setValue = (value, selectedOptions = []) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value, selectedOptions);
    }
  };

  getLabel() {
    const { options, displayRender = defaultDisplayRender } = this.props;
    const names = getFilledFieldNames(this.props);
    const value = this.state.value;
    const unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
    const selectedOptions = arrayTreeFilter(
      options,
      (o, level) => o[names.value] === unwrappedValue[level],
      { childrenKeyName: names.children },
    );
    const label = selectedOptions.map(o => o[names.label]);
    return displayRender(label, selectedOptions);
  }

  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.inputValue) {
      this.setValue([]);
      this.handlePopupVisibleChange(false);
    } else {
      this.setState({ inputValue: '' });
    }
  };

  generateFilteredOptions(prefixCls, renderEmpty) {
    const { showSearch, notFoundContent } = this.props;
    const names = getFilledFieldNames(this.props);
    const {
      filter = defaultFilterOption,
      render = defaultRenderFilteredOption,
      sort = defaultSortFilteredOption,
      limit = defaultLimit,
    } = showSearch;
    const { flattenOptions = [], inputValue } = this.state;

    // Limit the filter if needed
    let filtered;
    if (limit > 0) {
      filtered = [];
      let matchCount = 0;

      // Perf optimization to filter items only below the limit
      flattenOptions.some(path => {
        const match = filter(this.state.inputValue, path, names);
        if (match) {
          filtered.push(path);
          matchCount += 1;
        }
        return matchCount >= limit;
      });
    } else {
      warning(
        typeof limit !== 'number',
        'Cascader',
        "'limit' of showSearch should be positive number or false.",
      );
      filtered = flattenOptions.filter(path => filter(this.state.inputValue, path, names));
    }

    filtered.sort((a, b) => sort(a, b, inputValue, names));

    if (filtered.length > 0) {
      return filtered.map((path) => {
        return {
          __IS_FILTERED_OPTION: true,
          path,
          [names.label]: render(inputValue, path, prefixCls, names),
          [names.value]: path.map((o) => o[names.value]),
          disabled: path.some((o) => !!o.disabled),
        };
      });
    }
    return [
      {
        [names.label]: notFoundContent || renderEmpty('Cascader'),
        [names.value]: 'ANT_CASCADER_NOT_FOUND',
        disabled: true,
      },
    ];
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  saveInput = (node) => {
    this.input = node;
  };

  renderCascader = (
    { getPopupContainer: getContextPopupContainer, getPrefixCls, renderEmpty },
    locale,
  ) => {
    const { props, state } = this;
    const {
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      children,
      placeholder = locale.placeholder,
      size,
      disabled,
      className,
      style,
      allowClear,
      showSearch = false,
      suffixIcon,
      ...otherProps
    } = props;

    const { value, inputFocused } = state;

    const prefixCls = getPrefixCls('cascader', customizePrefixCls);
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

    const sizeCls = classNames({
      [`${inputPrefixCls}-lg`]: size === 'large',
      [`${inputPrefixCls}-sm`]: size === 'small',
    });
    const clearIcon =
      (allowClear && !disabled && value.length > 0) || state.inputValue ? (
        <Icon
          type='close-circle'
          theme='filled'
          className={`${prefixCls}-picker-clear`}
          onClick={this.clearSelection}
        />
      ) : null;
    const arrowCls = classNames({
      [`${prefixCls}-picker-arrow`]: true,
      [`${prefixCls}-picker-arrow-expand`]: state.popupVisible,
    });
    const pickerCls = classNames(className, `${prefixCls}-picker`, {
      [`${prefixCls}-picker-with-value`]: state.inputValue,
      [`${prefixCls}-picker-disabled`]: disabled,
      [`${prefixCls}-picker-${size}`]: !!size,
      [`${prefixCls}-picker-show-search`]: !!showSearch,
      [`${prefixCls}-picker-focused`]: inputFocused,
    });

    // Fix bug of https://github.com/facebook/react/pull/5004
    // and https://fb.me/react-unknown-prop
    const inputProps = omit(otherProps, [
      'onChange',
      'options',
      'popupPlacement',
      'transitionName',
      'displayRender',
      'onPopupVisibleChange',
      'changeOnSelect',
      'expandTrigger',
      'popupVisible',
      'getPopupContainer',
      'loadData',
      'popupClassName',
      'filterOption',
      'renderFilteredOption',
      'sortFilteredOption',
      'notFoundContent',
      'fieldNames',
      'filedNames', // For old compatibility
    ]);

    let options = props.options;
    if (state.inputValue) {
      options = this.generateFilteredOptions(prefixCls, renderEmpty);
    }
    // Dropdown menu should keep previous status until it is fully closed.
    if (!state.popupVisible) {
      options = this.cachedOptions;
    } else {
      this.cachedOptions = options;
    }

    const dropdownMenuColumnStyle = {};
    const isNotFound =
      (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
    if (isNotFound) {
      dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
    }
    // The default value of `matchInputWidth` is `true`
    const resultListMatchInputWidth =
      showSearch.matchInputWidth !== false;
    if (resultListMatchInputWidth && state.inputValue && this.input) {
      dropdownMenuColumnStyle.width = this.input.input.offsetWidth;
    }

    const inputIcon = (suffixIcon &&
      (React.isValidElement(suffixIcon) ? (
        React.cloneElement(suffixIcon, {
          className: classNames({
            [suffixIcon.props.className]: suffixIcon.props.className,
            [`${prefixCls}-picker-arrow`]: true,
          }),
        })
      ) : (
        <span className={`${prefixCls}-picker-arrow`}>{suffixIcon}</span>
      ))) || <Icon type='down' className={arrowCls} />;

    const input = children || (
      <span style={style} className={pickerCls}>
        <span className={`${prefixCls}-picker-label`}>{this.getLabel()}</span>
        <Input
          {...inputProps}
          tabIndex='-1'
          ref={this.saveInput}
          prefixCls={inputPrefixCls}
          placeholder={value && value.length > 0 ? undefined : placeholder}
          className={`${prefixCls}-input ${sizeCls}`}
          value={state.inputValue}
          disabled={disabled}
          readOnly={!showSearch}
          autoComplete='off'
          onClick={showSearch ? this.handleInputClick : undefined}
          onBlur={showSearch ? this.handleInputBlur : undefined}
          onKeyDown={this.handleKeyDown}
          onChange={showSearch ? this.handleInputChange : undefined}
        />
        {clearIcon}
        {inputIcon}
      </span>
    );

    const expandIcon = <Icon type='right' />;

    const loadingIcon = (
      <span className={`${prefixCls}-menu-item-loading-icon`}>
        <Icon type='redo' spin />
      </span>
    );

    const getPopupContainer = props.getPopupContainer || getContextPopupContainer;
    const rest = omit(props, ['inputIcon', 'expandIcon', 'loadingIcon']);

    return (
      <RcCascader
        {...rest}
        prefixCls={prefixCls}
        getPopupContainer={getPopupContainer}
        options={options}
        value={value}
        popupVisible={state.popupVisible}
        onPopupVisibleChange={this.handlePopupVisibleChange}
        onChange={this.handleChange}
        dropdownMenuColumnStyle={dropdownMenuColumnStyle}
        expandIcon={expandIcon}
        loadingIcon={loadingIcon}
      >
        {input}
      </RcCascader>
    );
  };

  render() {
    return (
      <ConfigConsumer>
        {(configArgument) => (
          <LocaleReceiver>{locale => this.renderCascader(configArgument, locale)}</LocaleReceiver>
        )}
      </ConfigConsumer>
    );
  }
}

polyfill(Cascader);

export default Cascader;
