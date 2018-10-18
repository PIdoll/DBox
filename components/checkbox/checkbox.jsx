import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RcCheckbox from 'rc-checkbox'
import shallowEqual from 'shallowequal'
import './style/index.jsx'

export default class Checkbox extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-checkbox',
    indeterminate: false
  }
  // 在这里声明 contextTypes 用于访问 checkboxGroup 组件中定义的Context数据.
  static contextTypes = {
    checkboxGroup: PropTypes.any
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup)
  }
  focus() {
    this.rcCheckbox.focus();
  }
  blur() {
    this.rcCheckbox.blur();
  }
  saveCheckbox = (node) => {
    this.rcCheckbox = node;
  }
  render() {
    const { props, context } = this;
    const { prefixCls, className, children, indeterminate, style, onMouseEnter, onMouseLeave, ...restProps } = this.props;
    const { checkboxGroup } = context;
    let checkboxProps = { ...restProps };
    if (checkboxGroup) {
      checkboxProps.onChange = () => checkboxGroup.toggleOption({label: children, value: props.value});
      checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
      checkboxProps.disabled = checkboxGroup.disabled || props.disabled;
    }
    const classString = classNames(className, {
      [`${prefixCls}-wrapper`]: true
    })
    const checkboxClass = classNames({
      [`${prefixCls}-indeterminate`]: indeterminate
    })
    return (
      <label className={classString} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <RcCheckbox {...checkboxProps} prefixCls={prefixCls} className={checkboxClass} ref={this.saveCheckbox} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    )
  }
}
















