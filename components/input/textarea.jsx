import React, { Component } from 'react'
import classNames from 'classnames'
import { PropTypes } from 'prop-types'
import omit from 'object.omit'

import calculateNodeHeight from './calculateNodeHeight'
import './style'

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.calculateNodeHeight) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

export default class TextArea extends Component {
  static defaultProps = {
    defaultValue: '',
    disabled: false,
    prefixCls: 'idoll-input',
    onKeyDown() {},
    onChange() {}
  };

  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    autosize: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    maxLength: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    autoFocus: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  constructor (props) {
    super(props);
    this.state = {
      textareaStyles: null
    };
  }

  componentDidMount() {
    this.resizeTextarea();
  }

  componentWillReceiveProps(nextProps) {
    // re-render with the new content then recalculate the height
    if (this.props.value !== nextProps.value) {
      if (this.nextFrameActionId) {
        clearNextFrameAction(this.nextFrameActionId)
      }
      this.nextFrameActionId = onNextFrame(this.resizeTextarea);
    }
  }

  focus() {
    this.textareaRef.focus();
  }

  blur() {
    this.textareaRef.blur();
  }

  handleTextareaChange = (e) => {
    if (!('value' in this.props)) {
      this.resizeTextarea();
    }
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  resizeTextarea = () => {
    const { autosize } = this.props;
    if (!autosize || !this.textareaRef) {
      return;
    }
    const minRows = autosize ? autosize.minRows : null;
    const maxRows = autosize ? autosize.maxRows : null;
    const textareaStyles = calculateNodeHeight(this.textareaRef, false, minRows, maxRows);
    this.setState({ textareaStyles });
  }

  getTextAreaClassName() {
    const { prefixCls, className, disabled } = this.props;
    const className1 = classNames(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled
    });
    return className1;
  }

  saveTextAreaRef = (node) => {
    this.textareaRef = node;
  }

  render() {
    const props = this.props;
    const otherProps = omit(props, [
      'prefixCls',
      'onPressEnter',
      'autosize'
    ]);
    const style = {
      ...props.style,
      ...this.state.textareaStyles
    }

    // Make sure it could be reset when using form.getFieldDecorator
    if ('value' in otherProps) {
      otherProps.value = otherProps.value || '';
    }
    return (
      <textarea
        {...otherProps}
        className={this.getTextAreaClassName()}
        style={style}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleTextareaChange}
        ref={this.saveTextAreaRef}
        />
    );
  }
}

