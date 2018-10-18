import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import Checkbox from './checkbox';

export default class checkboxGroup extends React.Component {
  static defaultProps = {
    options: [],
    prefixCls: 'idoll-checkbox-group'
  }
  static propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
  }
  // 声明子Context类型
  static childContextTypes = {
    checkboxGroup: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || []
    }
  }
  // 定义Context需要实现的方法
  getChildContext() {
    return {
      checkboxGroup: {
        toggleOption: this.toggleOption,
        value: this.state.value,
        disabled: this.props.disabled
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || []
      })
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  }
  getOptions() {
    const { options } = this.props;
    return options.map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        }
      }
      return option;
    })
  }
  toggleOption = (option) => {
    const optionIndex = this.state.value.indexOf(option.value);
    const value = [...this.state.value];
    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({
        value
      })
    }
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value);
    }
  }
  render() {
    const { props, state } = this;
    const { prefixCls, className, style, options } = props;
    let children = props.children;
    if (options && options.length > 0) {
      children = this.getOptions().map(option => (
        <Checkbox key={option.value} disabled={'disabled' in option ? option.disabled : props.disabled} value={option.value} checked={state.value.indexOf(option.value) !== -1} onChange={() => this.toggleOption(option)} className={`${prefixCls}-item`}>
          {option.label}
        </Checkbox>
      ));
    }
    const classString = classNames(prefixCls, className);
    return (
      <div className={classString} style={style}>
        {children}
      </div>
    )
  }
}













