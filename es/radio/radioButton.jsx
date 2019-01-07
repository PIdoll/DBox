import React from 'react'
import PropTypes from 'prop-types'
import Radio from './radio'

export default class RadioButton extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-radio-button'
  }
  // 在这里声明 contextTypes 用于访问 radioGroup 组件中定义的Context数据.
  static contextTypes = {
    radioGroup: PropTypes.any
  }
  render() {
    const radioProps = Object.assign({}, this.props);
    if (this.context.radioGroup) {
      radioProps.onChange = this.context.radioGroup.onChange;
      radioProps.checked = this.props.value === this.context.radioGroup.value;
      radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
    }
    return (<Radio {...radioProps} />)
  }
}

