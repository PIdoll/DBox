import React from 'react';
import moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import Calendar from 'rc-calendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import interopDefault from '../_util/interopDefault';

function formatValue(value, format) {
  return (value && moment(value).format(format)) || '';
}

class WeekPicker extends React.Component {
  static propTypes = {
    format: PropTypes.string,
    allowClear: PropTypes.bool,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    pickerClass: PropTypes.string,
    popupStyle: PropTypes.object,
    style: PropTypes.object,
    suffixIcon: PropTypes.element,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    disabledDate: PropTypes.func,
    locale: PropTypes.object,
    localeCode: PropTypes.object,
  }
  static defaultProps = {
    format: 'gggg-wo',
    allowClear: true
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
      throw new Error(
        'The value/defaultValue of DatePicker or MonthPicker must be ',
        'see: https://u.ant.design/date-picker-value',
      );
    }
    this.state = {
      value
    };
  }

  weekDateRender = (current) => {
    const selectedValue = this.state.value;
    const { prefixCls } = this.props;
    if (selectedValue &&
      moment(current).year() === moment(selectedValue).year() &&
      moment(current).week() === moment(selectedValue).week()) {
        return (
          <div className={`${prefixCls}-selected-day`}>
            <div className={`${prefixCls}-date`}>
              { moment(current).date() }
            </div>
          </div>
        );
      }
      return (
        <div className={`${prefixCls}-date`}>
          { moment(current).date() }
        </div>
      )
  }

  handleChange = (value) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value, formatValue(value, this.props.format));
    this.focus();
  }

  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.handleChange(null);
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  saveInput = (node) => {
    this.input = node;
  }

  render() {
    const {
      prefixCls, className, disabled, pickerClass, popupStyle,
      pickerInputClass, format, allowClear, locale, localeCode, disabledDate,
      style, onFocus, onBlur, id, suffixIcon
    } = this.props;

    const pickerValue = this.state.value;
    if (pickerValue && localeCode) {
      moment(pickerValue).locale(localeCode);
    }

    const placeholder = ('placeholder' in this.props)
      ? this.props.placeholder : locale.lang.placeholder;

      const calendar = (
        <Calendar
          showWeekNumber
          dateRender={this.weekDateRender}
          prefixCls={prefixCls}
          format={format}
          locale={locale.lang}
          showDateInput={false}
          showToday={false}
          disabledDate={disabledDate} />
      );

      const clearIcon = (!disabled && allowClear && this.state.value) ? (
        <Icon
          type='close-circle'
          className={`${prefixCls}-picker-clear`}
          onClick={this.clearSelection}
          theme='filled' />
      ) : null;

      const inputIcon = (suffixIcon && (
        React.isValidElement(suffixIcon)
          ? React.cloneElement(
            suffixIcon,
            {
              className: classNames({
                [suffixIcon.props.className]: suffixIcon.props.className,
                [`${prefixCls}-picker-icon`]: true,
              }),
            },
          ) : <span className={`${prefixCls}-picker-icon`}>{suffixIcon}</span>)) || (
          <Icon type='calendar' className={`${prefixCls}-picker-icon`} />
        );

        const input = ({ value }) => {
          return (
            <span>
              <input
                ref={this.saveInput}
                disabled={disabled}
                readOnly
                value={(value && moment(value).format(format)) || ''}
                placeholder={placeholder}
                className={pickerInputClass}
                onFocus={onFocus}
                onBlur={onBlur} />
              {clearIcon}
              {inputIcon}
            </span>
          );
        };
        return (
          <span
            className={classNames(className, pickerClass)}
            style={style}
            id={id}>
            <RcDatePicker
              {...this.props}
              calendar={calendar}
              prefixCls={`${prefixCls}-picker-container`}
              value={pickerValue}
              onChange={this.handleChange}
              style={popupStyle}>
              {input}
            </RcDatePicker>
          </span>
        );
  }
}

polyfill(WeekPicker);

export default WeekPicker;
