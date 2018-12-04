import React from 'react';
import moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';
import Icon from '../icon';
import Tag from '../tag';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';

function getShowDateFromValue(value) {
  const [start, end] = value;
  if (!start && !end) {
    return false;
  }
  const newEnd = end && moment(end).isSame(start, 'momth') ? moment(end).clone().add(1, 'month') : end;
  return [start, newEnd]
}

function formatValue(value, format) {
  return (value && moment(value).format(format)) || '';
}

function pickerValueAdapter(value) {
  if (!value) {
    return false;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value, moment(value).clone().add(1, 'month')]
}

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(i => i);
  }
  return false;
}

function fixLocale(value, localeCode) {
  if (!localeCode) {
    return false;
  }
  if (!value || value.length === 0) {
    return false;
  }
  if (value[0]) {
    moment(value[0]).locale(localeCode);
  }
  if (value[1]) {
    moment(value[1]).locale(localeCode);
  }
}
class RangePicker extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    tagPrefixCls: PropTypes.string,
    allowClear: PropTypes.bool,
    showToday: PropTypes.bool,
    open: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    popupStyle: PropTypes.object,
    style: PropTypes.object,
    disabledDate: PropTypes.func,
    disabledTime: PropTypes.func,
    showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    onOk: PropTypes.func,
    locale: PropTypes.object,
    format: PropTypes.string,
    onCalendarChange: PropTypes.func,
    suffixIcon: PropTypes.element
  }
  static defaultProps = {
    prefixCls: 'idoll-calendar',
    tagPrefixCls: 'idoll-tag',
    allowClear: true,
    showToday: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = null;
    if ('value' in nextProps) {
      const value = nextProps.value || [];
      state = {
        value,
      };
      if (!shallowequal(nextProps.value, prevState.value)) {
        state = {
          ...state,
          showToday: getShowDateFromValue(value) || prevState.showDate,
        };
      }
    }
    if (('open' in nextProps) && prevState.open !== nextProps.open) {
      state = {
        ...state,
        open: nextProps.open,
      }
    }
    return state;
  }

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue || [];
    if ((value[0] && !interopDefault(moment).isMoment(value[0])) ||
        (value[1] && !interopDefault(moment).isMoment(value[1]))) {
          throw new Error(
            'The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' +
            'see: https://u.ant.design/date-picker-value',
          );
        }
        const pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
        this.state = {
          value,
          showDate: pickerValueAdapter(pickerValue || interopDefault(moment)()),
          open: props.open,
          hoverValue: [],
        };
  }

  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ value: [] });
    this.handleChange([]);
  }

  clearHoverValue = (value) => this.setState({ hoverValue: [] });

  handleChange = (value) => {
    const props = this.props;
    if (!('value' in props)) {
      this.setState(({ showDate }) => ({
        value,
        showDate: getShowDateFromValue(value) || showDate,
      }));
    }
    props.onChange(value, [
      formatValue(value[0], props.format),
      formatValue(value[1], props.format),
    ]);
    this.focus();
  }

  handleOpenChange = (open) => {
    if (!('open' in this.props)) {
      this.setState({ open });
    }

    if (open === false) {
      this.clearHoverValue();
    }

    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
  }

  handleShowDateChange = (showDate) => this.setState({ showDate });

  handleHoverChange = (hoverValue) => this.setState({ hoverValue });

  handleRangeMouseLeave = () => {
    if (this.state.open) {
      this.clearHoverValue();
    }
  }

  handleCalendarInputSelect = (value) => {
    if (!value[0]) {
      return false;
    }
    this.setState(({ showDate }) => ({
      value,
      showDate: getShowDateFromValue(value) || showDate
    }));
  }

  hanldeRangeClick = (value) => {
    if (typeof value === 'function') {
      value = value();
    }
    this.setValue(value, true);

    const { onOk, onOpenChange } = this.props;
    if (onOk) {
      onOk(value);
    }

    if (onOpenChange) {
      onOpenChange(false);
    }
  }

  setValue(value, hidePanel) {
    this.handleChange(value);
    if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
      this.setState({ open: false });
    }
  }

  focus() {
    this.picker.focus();
  }

  blur() {
    this.picker.blur();
  }

  savePixker = (node) => {
    this.picker = node;
  }

  renderFooter = (...args) => {
    const { prefixCls, ranges, renderExtraFooter, tagPrefixCls } = this.props;
    if (!ranges && !renderExtraFooter) {
      return null;
    }
    const customFooter = renderExtraFooter ? (
      <div className={`${prefixCls}-footer-extra`} key='extra'>
        {renderExtraFooter(...args)}
      </div>
    ) : null;
    const operations = Object.keys(ranges || {}).map((range) => {
      const value = ranges[range];
      return (
        <Tag
          key={range}
          prefixCls={tagPrefixCls}
          color='blue'
          onClick={() => this.handleRangeClick(value)}
          onMouseEnter={() => this.setState({ hoverValue: value })}
          onMouseLeave={this.handleRangeMouseLeave}>
          {range}
        </Tag>
      );
    });
    const rangeNode = (operations && operations.length > 0) ? (
      <div className={`${prefixCls}-footer-extra ${prefixCls}-range-quick-selector`} key='range'>
        {operations}
      </div>
    ) : null;
    return [rangeNode, customFooter];
  }

  render() {
    const { state, props } = this;
    const { value, showDate, hoverValue, open } = state;
    const {
      prefixCls, popupStyle, style,
      disabledDate, disabledTime,
      showTime, showToday,
      ranges, onOk, locale,
      localeCode, format, dateRender,
      onCalendarChange, suffixIcon
    } = props;
    fixLocale(value, localeCode);
    fixLocale(showDate, localeCode);

    warning(!('onOK' in props), 'It should be `RangePicker[onOk]`, instead of `onOK`!');

    const calendarClassName = classNames({
      [`${prefixCls}-time`]: showTime,
      [`${prefixCls}-range-with-ranges`]: ranges,
    });

    // 需要选择时间, 点击 ok 时才触发 onChange
    let pickerChangeHandler = {
      onChange: this.handleChange,
    };
    let calendarProps = {
      onOk: this.handleChange,
    };
    if (props.timePicker) {
      pickerChangeHandler.onChange = changedValue => this.handleChange(changedValue);
    } else {
      calendarProps = {};
    }
    if ('mode' in props) {
      calendarProps.mode = props.mode;
    }

    const startPlaceholder = ('placeholder' in props)
    ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
    const endPlaceholder = ('placeholder' in props)
    ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

    const calendar = (
      <RangeCalendar
        {...calendarProps}
        onChange={onCalendarChange}
        format={format}
        prefixCls={prefixCls}
        className={calendarClassName}
        renderFooter={this.renderFooter}
        timePicker={props.timePicker}
        disabledDate={disabledDate}
        disabledTime={disabledTime}
        dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
        locale={locale.lang}
        onOk={onOk}
        dateRender={dateRender}
        value={showDate}
        onValueChange={this.handleShowDateChange}
        hoverChange={hoverValue}
        onHoverChange={this.handleHoverChange}
        onPanelChange={props.onPanelChange}
        showToday={showToday}
        onInputSelect={this.handleCalendarInputSelect} />
    );

    const pickerStyle = {};
    if (props.showTime) {
      pickerStyle.width = (style && style.width) || 350;
    }

    const clearIcon = (!props.disabled && props.allowClear && value && (value[0] || value[1])) ? (
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

      const input = ({ value: inputValue }) => {
        const start = inputValue[0];
        const end = inputValue[1];
        return (
          <span className={props.pickerInputClass}>
            <input
              disabled={props.disabled}
              readOnly
              value={(start && moment(start).format(props.format))}
              placeholder={startPlaceholder}
              className={`${prefixCls}-range-picker-input`}
              tabIndex={-1} />
            <span className={`${prefixCls}-range-picker-separator`}> ~ </span>
            <input
              disabled={props.disabled}
              readOnly
              value={(end && moment(end).format(props.format)) || ''}
              placeholder={endPlaceholder}
              className={`${prefixCls}-range-picker-input`}
              tabIndex={-1} />
            {clearIcon}
            {inputIcon}
          </span>
        );
      };
      return (
        <span
          ref={this.savePicker}
          id={props.id}
          className={classNames(props.className, props.pickerClass)}
          style={{ ...style, ...pickerStyle }}
          tabIndex={props.disabled ? -1 : 0}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}>
          <RcDatePicker
            {...props}
            {...pickerChangeHandler}
            calendar={calendar}
            value={value}
            open={open}
            onOpenChange={this.handleOpenChange}
            prefixCls={`${prefixCls}-picker-container`}
            style={popupStyle}>
            {input}
          </RcDatePicker>
        </span>
      );
  }
}

polyfill(RangePicker);

export default RangePicker;

// export default class RangePicker extends React.Component {
//   static defaultProps = {
//     defaultValue: [],
//   }

//   constructor(props) {
//     super(props);
//     const { value, defaultValue, parseDateFromValue } = this.props;
//     const start = (value && value[0]) || defaultValue[0];
//     const end = (value && value[1]) || defaultValue[1];
//     this.state = {
//       value: [
//         parseDateFromValue(start),
//         parseDateFromValue(end),
//       ],
//     };
//   }

//   componentWillReceiveProps(nextProps) {
//     if ('value' in nextProps) {
//       const value = nextProps.value || [];
//       const start = nextProps.parseDateFromValue(value[0]);
//       const end = nextProps.parseDateFromValue(value[1]);
//       this.setState({
//         value: [start, end],
//       });
//     }
//   }

//   // 清空日历选择框
//   clearSelection = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     this.setState({ value: [] });
//     this.handleChange([]);
//   }

//   handleChange = (value) => {
//     const props = this.props;
//     if (!('value' in props)) {
//       this.setState({ value });
//     }
//     const startDate = value[0] ? new Date(value[0].getTime()) : null;
//     const endDate = value[1] ? new Date(value[1].getTime()) : null;
//     const startDateString = value[0] ? props.getFormatter().format(value[0]) : '';
//     const endDateString = value[1] ? props.getFormatter().format(value[1]) : '';
//     props.onChange([startDate, endDate], [startDateString, endDateString]);
//   }

//   render() {
//     const props = this.props;
//     const locale = props.locale;
//     // 以下两行代码
//     // 给没有初始值的日期选择框提供本地化信息
//     // 否则会以周日开始排
//     let defaultCalendarValue = new GregorianCalendar(locale);
//     defaultCalendarValue.setTime(Date.now());


//     const { disabledDate, showTime, getCalendarContainer,
//       transitionName, disabled, popupStyle, align, style, onOk } = this.props;
//     const state = this.state;


//     const calendarClassName = classNames({
//       'idoll-calendar-time': showTime,
//     });

//       // 需要选择时间的时候，点击 Ok 时才能触发 onChange
//       let pickerChangeHandler = {
//         onChange: this.handleChange,
//       };
//       let calendarHandler = {
//         onOk: this.handleChange,
//       };
//       if (props.timePicker) {
//         pickerChangeHandler = {};
//       } else {
//         calendarHandler = {};
//       }

//       const startPlaceholder = ('startPlaceholder' in this.props)
//         ? props.startPlaceholder : locale.lang.rangePlaceholder[0];
//       const endPlaceholder = ('endPlaceholder' in props)
//         ? props.endPlaceholder : locale.lang.rangePlaceholder[1];


//       const calendar = (
//         <RangeCalendar
//           prefixCls='idoll-calendar'
//           className={calendarClassName}
//           timePicker={props.timePicker}
//           disabledDate={disabledDate}
//           dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
//           locale={locale.lang}
//           onOk={onOk}
//           defaultValue={[defaultCalendarValue, defaultCalendarValue]}
//           {...calendarHandler}
//         />
//       );
//       const clearIcon = (!props.disabled && state.value && (state.value[0] || state.value[1]))
//       ? <Icon
//         type='close-circle'
//         className='idoll-calendar-picker-clear '
//         onClick={this.clearSelection}
//       /> : null;

//       return (<span className={props.pickerClass} style={style}>
//         <RcDatePicker
//           formatter={props.getFormatter()}
//           transitionName={transitionName}
//           disabled={disabled}
//           calendar={calendar}
//           value={state.value}
//           prefixCls='idoll-calendar-picker-container'
//           style={popupStyle}
//           align={align}
//           getCalendarContainer={getCalendarContainer}
//           onOpen={props.toggleOpen}
//           onClose={props.toggleOpen}
//           {...pickerChangeHandler}
//         >
//           {
//             ({ value }) => {
//               const start = value[0];
//               const end = value[1];
//               return (
//                 <span className={props.pickerInputClass} disabled={disabled}>
//                   <input
//                     disabled={disabled}
//                     readOnly
//                     value={start ? props.getFormatter().format(start) : ''}
//                     placeholder={startPlaceholder}
//                     className='idoll-calendar-range-picker-input'
//                   />
//                   <span className='idoll-calendar-range-picker-separator'> ~ </span>
//                   <input
//                     disabled={disabled}
//                     readOnly
//                     value={end ? props.getFormatter().format(end) : ''}
//                     placeholder={endPlaceholder}
//                     className='idoll-calendar-range-picker-input'
//                   />
//                   {clearIcon}
//                   <span className='idoll-calendar-picker-icon' />
//                 </span>
//               );
//             }
//           }
//         </RcDatePicker>
//       </span>);
//   }
// }
