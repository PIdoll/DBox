import React from 'react'
import PropTypes from 'prop-types'
import RcCheckbox from 'rc-checkbox'
import classNames from 'classnames'
import shallowEqual from 'shallowequal'
import './style/index.jsx'
export default class Radio extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-radio',
    type: 'radio'
  }
  // 在这里声明 contextTypes 用于访问 radioGroup 组件中定义的Context数据.
  static contextTypes = {
    radioGroup: PropTypes.any
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
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
    const { prefixCls, className, children, style, ...restProps } = props;
    const { radioGroup } = context;
    let radioProps = Object.assign({}, restProps);
    if (radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = props.value === radioGroup.value;
      radioProps.disabled = props.disabled || radioGroup.disabled;
    }
    const wrapperClassString = classNames(className, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: radioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled
    })
    return (
      <label className={wrapperClassString} style={style} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        <RcCheckbox {...radioProps} prefixCls={prefixCls} ref={this.saveCheckbox} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    )
  }
}


