/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-call-spacing */
import React from 'react';
import moment from 'moment';
// import { polyfill } from 'react-lifecycles-compat';
import RcTimePicker from 'rc-time-picker/lib/TimePicker';
import classNames from 'classnames';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from './locale/zh_CN';
import PropTypes from 'prop-types';
import interopDefault from '../_util/interopDefault';
import Icon from '../icon';

export function generateShowHourMinutesSecond(format) {
  return {
    showHour: (
      format.indexOf('H') > -1 ||
      format.indexOf('h') > -1 ||
      format.indexOf('k') > -1
    ),
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}

function handleTimeFormat(timeValue) {
  if (timeValue < 10) {
    timeValue = '0' + timeValue;
  }
  return timeValue;
}

class TimePicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    open: PropTypes.bool,
    format: PropTypes.string,
    onChange: PropTypes.func,
    onOpenChange: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    prefixCls: PropTypes.string,
    hideDisabledOptions: PropTypes.bool,
    disabledHours: PropTypes.func,
    disabledMinutes: PropTypes.func,
    disabledSeconds: PropTypes.func,
    style: PropTypes.object,
    getPopupContainer: PropTypes.func,
    addon: PropTypes.func,
    use12Hours: PropTypes.bool,
    focusOnOpen: PropTypes.bool,
    hourStep: PropTypes.number,
    minuteStep: PropTypes.number,
    secondStep: PropTypes.number,
    allowEmpty: PropTypes.bool,
    inputReadOnly: PropTypes.bool,
    clearText: PropTypes.string,
    popupClassName: PropTypes.string,
    suffixIcon: PropTypes.element,
    align: PropTypes.object,
    placement: PropTypes.string,
    transitionName: PropTypes.string,
    autoFocus: PropTypes.bool,
  }

  static defaultProps = {
    prefixCls: 'idoll-time-picker',
    align: {
      offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true
  };

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return { value: nextProps.value };
    }
    return null;
  }
  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue;
    if (value && !interopDefault(moment).isMoment(value)) {
      throw new Error (
        'The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' +
        'see: https://u.ant.design/time-picker-value',
      );
    }
    this.state = {
      value,
      defaultOpenValue: null
    }
  }

  handleChange = (value) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const { onChange, format = 'HH:mm:ss' } = this.props;
    if (onChange) {
      onChange(value, (value && value.format(format)) || '');
    }
  }

  handleOpenClose = (open) => {
    const date = new Date();
    const timeValue = handleTimeFormat(date.getHours()) + ':' + handleTimeFormat(date.getMinutes()) + ':' + handleTimeFormat(date.getSeconds());
    this.setState({
      defaultOpenValue: moment(timeValue, 'HH:mm:ss')
    })
    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
  }

  saveTimePicker = (timePickerRef) => {
    this.timePickerRef = timePickerRef
  }

  focus() {
    this.timePickerRef.focus();
  }

  blur() {
    this.timePickerRef.blur();
  }

  getDefaultFormat() {
    const { format, use12Hours } = this.props;
    if (format) {
      return format;
    } else if (use12Hours) {
      return 'h:mm:ss a';
    }
    return 'HH:mm:ss'
  }

  renderTimePicker = (locale) => {
    console.log(this.props)
    const props = {
      ...this.props
    };
    delete props.defaultValue;

    const format = this.getDefaultFormat();
    const className = classNames(props.className, {
      [`${props.prefixCls}-${props.size}`]: !!props.size
    });

    const addon = (panel) => (
      props.addon ? (
        <div className={`${props.prefixCls}-panel-addon`}>
          {props.addon(panel)}
        </div>
      ) : null
    );

    const { suffixIcon, prefixCls } = props;
    const clockIcon = (suffixIcon && (
      React.isValidElement(suffixIcon)
      ? React.cloneElement(
        suffixIcon,
        {
          className: classNames({
            [suffixIcon.props.className]: suffixIcon.props.className,
            [`${prefixCls}-clock-icon`]: true,
          }),
        },
      ) : <span className={`${prefixCls}-clock-icon`}>{suffixIcon}</span>)) || (
        <Icon
        type='clock-o'
        className={`${prefixCls}-clock-icon`}
        theme='outlined'/>
    );

    const inputIcon = (
      <span className={`${prefixCls}-icon`}>
        {clockIcon}
      </span>
    );

    const clearIcon = (
      <Icon
      type='close-circle'
      className={`${prefixCls}-panel-clear-btn-icon`}
      theme='filled' />
    );
    return (
      <RcTimePicker
      {...generateShowHourMinutesSecond(format)}
      {...props}
      defaultOpenValue={this.state.defaultOpenValue}
      ref={this.saveTimePicker}
      format={format}
      className={className}
      value={this.state.value}
      placeholder={props.placeholder === undefined ? locale.placeholder : props.placeholder}
      onChange={this.handleChange}
      onOpen={this.handleOpenClose}
      onClose={this.handleOpenClose}
      addon={addon}
      inputIcon={inputIcon}
      clearIcon={clearIcon}/>
    );
  }
  render() {
    return (
      <LocaleReceiver
      componentName='TimePicker'
      defaultLocale={defaultLocale}>
      {this.renderTimePicker}
      </LocaleReceiver>
    )
  }
}
// polyfill(TimePicker);

export default TimePicker;
