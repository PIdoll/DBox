// import React from 'react';
// import moment from 'moment';
// import { polyfill } from 'react-lifecycles-compat';
// import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
// import RcDatePicker from 'rc-calendar/lib/Picker';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import shallowequal from 'shallowequal';
// import Icon from '../icon';
// import Tag from '../tag';
// // import warning from '../_util/warning';
// import interopDefault from '../_util/interopDefault';

// function getShowDateFromValue(value) {
//   const [start, end] = value;
//   // value could be an empty array, then we should not reset showDate
//   if (!start && !end) {
//     return;
//   }
//   const newEnd = end && moment(end).isSame(start, 'month') ? moment(end).clone().add(1, 'month') : end;
//   return [start, newEnd];
// }

// function formatValue(value, format) {
//   return (value && moment(value).format(format)) || '';
// }

// function pickerValueAdapter(value) {
//   if (!value) {
//     return;
//   }
//   if (Array.isArray(value)) {
//     return value;
//   }
//   return [value, moment(value).clone().add(1, 'month')];
// }

// function isEmptyArray(arr) {
//   if (Array.isArray(arr)) {
//     return arr.length === 0 || arr.every(i => !i);
//   }
//   return false;
// }

// function fixLocale(value, localeCode) {
//   if (!localeCode) {
//     return;
//   }
//   if (!value || value.length === 0) {
//     return;
//   }
//   if (value[0]) {
//     moment(value[0]).locale(localeCode);
//   }
//   if (value[1]) {
//     moment(value[1]).locale(localeCode);
//   }
// }

// class RangePicker extends React.Component {
//     static propTypes = {
//     prefixCls: PropTypes.string,
//     tagPrefixCls: PropTypes.string,
//     allowClear: PropTypes.bool,
//     showToday: PropTypes.bool,
//     open: PropTypes.bool,
//     onFocus: PropTypes.func,
//     onBlur: PropTypes.func,
//     popupStyle: PropTypes.object,
//     style: PropTypes.object,
//     disabledDate: PropTypes.func,
//     disabledTime: PropTypes.func,
//     showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//     onOk: PropTypes.func,
//     locale: PropTypes.object,
//     format: PropTypes.string,
//     onCalendarChange: PropTypes.func,
//     suffixIcon: PropTypes.element
//   }
//   static defaultProps = {
//     prefixCls: 'idoll-calendar',
//     tagPrefixCls: 'idoll-tag',
//     allowClear: true,
//     showToday: false,
//   };

//   static getDerivedStateFromProps(nextProps, prevState) {
//     let state = null;
//     if ('value' in nextProps) {
//       const value = nextProps.value || [];
//       state = {
//         value,
//       };
//       if (!shallowequal(nextProps.value, prevState.value)) {
//         state = {
//           ...state,
//           showDate: getShowDateFromValue(value) || prevState.showDate,
//         };
//       }
//     }
//     if (('open' in nextProps) && prevState.open !== nextProps.open) {
//       state = {
//         ...state,
//         open: nextProps.open,
//       };
//     }
//     return state;
//   }

//   constructor(props) {
//     super(props);
//     const value = props.value || props.defaultValue || [];
//     if (
//       (value[0] && !interopDefault(moment).isMoment(value[0])) ||
//       (value[1] && !interopDefault(moment).isMoment(value[1]))
//     ) {
//       throw new Error(
//         '',
//       );
//     }
//     const pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
//     this.state = {
//       value,
//       showDate: pickerValueAdapter(pickerValue || interopDefault(moment)()),
//       open: props.open,
//       hoverValue: [],
//     };
//   }

//   clearSelection = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     this.setState({ value: [] });
//     this.handleChange([]);
//   }

//   clearHoverValue = () => this.setState({ hoverValue: [] });

//   handleChange = (value) => {
//     const props = this.props;
//     if (!('value' in props)) {
//       this.setState(({ showDate }) => ({
//         value,
//         showDate: getShowDateFromValue(value) || showDate,
//       }));
//     }
//     props.onChange(value, [
//       formatValue(value[0], props.format),
//       formatValue(value[1], props.format),
//     ]);
//     this.focus();
//   }

//   handleOpenChange = (open) => {
//     if (!('open' in this.props)) {
//       this.setState({ open });
//     }

//     if (open === false) {
//       this.clearHoverValue();
//     }

//     const { onOpenChange } = this.props;
//     if (onOpenChange) {
//       onOpenChange(open);
//     }
//   }

//   handleShowDateChange = (showDate) => this.setState({ showDate });

//   handleHoverChange = (hoverValue) => this.setState({ hoverValue });

//   handleRangeMouseLeave = () => {
//     if (this.state.open) {
//       this.clearHoverValue();
//     }
//   }

//   handleCalendarInputSelect = (value) => {
//     if (!value[0]) {
//       return;
//     }
//     this.setState(({ showDate }) => ({
//       value,
//       showDate: getShowDateFromValue(value) || showDate,
//     }));
//   }

//   handleRangeClick = (value) => {
//     if (typeof value === 'function') {
//       value = value();
//     }

//     this.setValue(value, true);

//     const { onOk, onOpenChange } = this.props;
//     if (onOk) {
//       onOk(value);
//     }

//     if (onOpenChange) {
//       onOpenChange(false);
//     }
//   }

//   setValue(value, hidePanel) {
//     this.handleChange(value);
//     if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
//       this.setState({ open: false });
//     }
//   }

//   focus() {
//     this.picker.focus();
//   }

//   blur() {
//     this.picker.blur();
//   }

//   savePicker = (node) => {
//     this.picker = node;
//   }

//   renderFooter = (...args) => {
//     const { prefixCls, ranges, renderExtraFooter, tagPrefixCls } = this.props;
//     if (!ranges && !renderExtraFooter) {
//       return null;
//     }
//     const customFooter = renderExtraFooter ? (
//       <div className={`${prefixCls}-footer-extra`} key='extra'>
//         {renderExtraFooter(...args)}
//       </div>
//     ) : null;
//     const operations = Object.keys(ranges || {}).map((range) => {
//       const value = ranges[range];
//       return (
//         <Tag
//           key={range}
//           prefixCls={tagPrefixCls}
//           color='rgba(0, 191, 255, 0.3)'
//           onClick={() => this.handleRangeClick(value)}
//           onMouseEnter={() => this.setState({ hoverValue: value })}
//           onMouseLeave={this.handleRangeMouseLeave}
//         >
//           {range}
//         </Tag>
//       );
//     });
//     const rangeNode = (operations && operations.length > 0) ? (
//       <div className={`${prefixCls}-footer-extra ${prefixCls}-range-quick-selector`} key='range'>
//         {operations}
//       </div>
//     ) : null;
//     return [rangeNode, customFooter];
//   }

//   render() {
//     const { state, props } = this;
//     const { value, showDate, hoverValue, open } = state;
//     const {
//       prefixCls, popupStyle, style,
//       disabledDate, disabledTime,
//       showTime, showToday,
//       ranges, onOk, locale, localeCode, format,
//       dateRender, onCalendarChange, suffixIcon,
//     } = props;

//     fixLocale(value, localeCode);
//     fixLocale(showDate, localeCode);

//     // warning(!('onOK' in props), 'It should be `RangePicker[onOk]`, instead of `onOK`!');

//     const calendarClassName = classNames({
//       [`${prefixCls}-time`]: showTime,
//       [`${prefixCls}-range-with-ranges`]: ranges,
//     });

//     // 需要选择时间时，点击 ok 时才触发 onChange
//     let pickerChangeHandler = {
//       onChange: this.handleChange,
//     };
//     let calendarProps = {
//       onOk: this.handleChange,
//     };
//     if (props.timePicker) {
//       pickerChangeHandler.onChange = changedValue => this.handleChange(changedValue);
//     } else {
//       calendarProps = {};
//     }
//     if ('mode' in props) {
//       calendarProps.mode = props.mode;
//     }

//     const startPlaceholder = ('placeholder' in props)
//       ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
//     const endPlaceholder = ('placeholder' in props)
//       ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

//     const calendar = (
//       <RangeCalendar
//         {...calendarProps}
//         onChange={onCalendarChange}
//         format={format}
//         prefixCls={prefixCls}
//         className={calendarClassName}
//         renderFooter={this.renderFooter}
//         timePicker={props.timePicker}
//         disabledDate={disabledDate}
//         disabledTime={disabledTime}
//         dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
//         locale={locale.lang}
//         onOk={onOk}
//         dateRender={dateRender}
//         value={showDate}
//         onValueChange={this.handleShowDateChange}
//         hoverValue={hoverValue}
//         onHoverChange={this.handleHoverChange}
//         onPanelChange={props.onPanelChange}
//         showToday={showToday}
//         onInputSelect={this.handleCalendarInputSelect}
//       />
//     );

//     // default width for showTime
//     const pickerStyle = {};
//     if (props.showTime) {
//       pickerStyle.width = (style && style.width) || 350;
//     }

//     const clearIcon = (!props.disabled && props.allowClear && value && (value[0] || value[1])) ? (
//       <Icon
//         type='close-circle'
//         className={`${prefixCls}-picker-clear`}
//         onClick={this.clearSelection}
//         theme='filled'
//       />
//     ) : null;

//     const inputIcon = (suffixIcon && (
//       React.isValidElement(suffixIcon)
//         ? React.cloneElement(
//           suffixIcon,
//           {
//             className: classNames({
//               [suffixIcon.props.className]: suffixIcon.props.className,
//               [`${prefixCls}-picker-icon`]: true,
//             }),
//           },
//         ) : <span className={`${prefixCls}-picker-icon`}>{suffixIcon}</span>)) || (
//         <Icon type='calendar' className={`${prefixCls}-picker-icon`} />
//       );

//     const input = ({ value: inputValue }) => {
//       const start = inputValue[0];
//       const end = inputValue[1];
//       return (
//         <span className={props.pickerInputClass}>
//           <input
//             disabled={props.disabled}
//             readOnly
//             value={(start && moment(start).format(props.format)) || ''}
//             placeholder={startPlaceholder}
//             className={`${prefixCls}-range-picker-input`}
//             tabIndex={-1}
//           />
//           <span className={`${prefixCls}-range-picker-separator`}> ~ </span>
//           <input
//             disabled={props.disabled}
//             readOnly
//             value={(end && moment(end).format(props.format)) || ''}
//             placeholder={endPlaceholder}
//             className={`${prefixCls}-range-picker-input`}
//             tabIndex={-1}
//           />
//           {clearIcon}
//           {inputIcon}
//         </span>
//       );
//     };

//     return (
//       <span
//         ref={this.savePicker}
//         id={props.id}
//         className={classNames(props.className, props.pickerClass)}
//         style={{ ...style, ...pickerStyle }}
//         tabIndex={props.disabled ? -1 : 0}
//         onFocus={props.onFocus}
//         onBlur={props.onBlur}
//         onMouseEnter={props.onMouseEnter}
//         onMouseLeave={props.onMouseLeave}
//       >
//         <RcDatePicker
//           {...props}
//           {...pickerChangeHandler}
//           calendar={calendar}
//           value={value}
//           open={open}
//           onOpenChange={this.handleOpenChange}
//           prefixCls={`${prefixCls}-picker-container`}
//           style={popupStyle}
//         >
//           {input}
//         </RcDatePicker>
//       </span>
//     );
//   }
// }

// polyfill(RangePicker);

// export default RangePicker;

/* tslint:disable jsx-no-multiline-js */
import React from 'react';
import moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import Icon from '../icon';
import Tag from '../tag';
import { ConfigConsumer } from '../config-provider';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';

function formatDate(
  value,
  format,
) {
  if (!value) {
    return '';
  }
  if (Array.isArray(format)) {
    format = format[0];
  }
  return value.format(format);
}

function getShowDateFromValue(value) {
  console.log('getShowDateFromValue', value)
  const [start, end] = value;
  // value could be an empty array, then we should not reset showDate
  if (!start && !end) {
    return;
  }
  const newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
  return [start, newEnd];
}

function pickerValueAdapter(
  value,
) {
  console.log('pickerValueAdapter')
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value, value.clone().add(1, 'month')];
}

function isEmptyArray(arr) {
  console.log('isEmptyArray')
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(i => !i);
  }
  return false;
}

function fixLocale(value, localeCode) {
  console.log('fixLocale')
  if (!localeCode) {
    return;
  }
  if (!value || value.length === 0) {
    return;
  }
  const [start, end] = value;
  if (start) {
    start.locale(localeCode);
  }
  if (end) {
    end.locale(localeCode);
  }
}

class RangePicker extends React.Component {
  static defaultProps = {
    allowClear: true,
    showToday: false,
    separator: '~',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = null;
    if ('value' in nextProps) {
      const value = nextProps.value || [];
      state = {
        value,
      };
      if (!shallowequal(nextProps.value, prevState.value)) {
        console.log('getDerivedStateFromProps')
        state = {
          ...state,
          showDate: getShowDateFromValue(value) || prevState.showDate,
        };
      }
    }
    if ('open' in nextProps && prevState.open !== nextProps.open) {
      state = {
        ...state,
        open: nextProps.open,
      };
    }
    return state;
  }

  constructor(props) {
    super(props);
    const value = props.value || props.defaultValue || [];
    const [start, end] = value;
    if (
      (start && !interopDefault(moment).isMoment(start)) ||
      (end && !interopDefault(moment).isMoment(end))
    ) {
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

  componentDidUpdate(_, prevState) {
    if (!('open' in this.props) && prevState.open && !this.state.open) {
      this.focus();
    }
  }

  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ value: [] });
    this.handleChange([]);
  };

  clearHoverValue = () => this.setState({ hoverValue: [] });

  handleChange = (value) => {
    const props = this.props;
    if (!('value' in props)) {
      console.log('value', value)
      this.setState(({ showDate }) => ({
        value,
        showDate: getShowDateFromValue(value) || showDate,
      }));
    }
    const [start, end] = value;
    props.onChange(value, [formatDate(start, props.format), formatDate(end, props.format)]);
  };

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
  };

  handleShowDateChange = (showDate) => this.setState({ showDate });

  handleHoverChange = (hoverValue) => this.setState({ hoverValue });

  handleRangeMouseLeave = () => {
    if (this.state.open) {
      this.clearHoverValue();
    }
  };

  handleCalendarInputSelect = (value) => {
    const [start] = value;
    if (!start) {
      return;
    }
    this.setState(({ showDate }) => ({
      value,
      showDate: getShowDateFromValue(value) || showDate,
    }));
  };

  handleRangeClick = (value) => {
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
  };

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

  savePicker = (node) => {
    this.picker = node;
  };

  renderFooter = (...args) => {
    const { ranges, renderExtraFooter } = this.props;
    const { prefixCls, tagPrefixCls } = this;
    if (!ranges && !renderExtraFooter) {
      return null;
    }
    const customFooter = renderExtraFooter ? (
      <div className={`${prefixCls}-footer-extra`} key='extra'>
        {renderExtraFooter(...args)}
      </div>
    ) : null;
    const operations = Object.keys(ranges || {}).map(range => {
      const value = ranges[range];
      return (
        <Tag
          key={range}
          prefixCls={tagPrefixCls}
          color='blue'
          onClick={() => this.handleRangeClick(value)}
          onMouseEnter={() => this.setState({ hoverValue: value })}
          onMouseLeave={this.handleRangeMouseLeave}
        >
          {range}
        </Tag>
      );
    });
    const rangeNode =
      operations && operations.length > 0 ? (
        <div className={`${prefixCls}-footer-extra ${prefixCls}-range-quick-selector`} key='range'>
          {operations}
        </div>
      ) : null;
    return [rangeNode, customFooter];
  };

  renderRangePicker = ({ getPrefixCls }) => {
    const { state, props } = this;
    const { value, showDate, hoverValue, open } = state;
    const {
      prefixCls: customizePrefixCls,
      tagPrefixCls: customizeTagPrefixCls,
      popupStyle,
      style,
      disabledDate,
      disabledTime,
      showTime,
      showToday,
      ranges,
      onOk,
      locale,
      localeCode,
      format,
      dateRender,
      onCalendarChange,
      suffixIcon,
      separator,
    } = props;

    const prefixCls = getPrefixCls('calendar', customizePrefixCls);
    const tagPrefixCls = getPrefixCls('tag', customizeTagPrefixCls);
    // To support old version react.
    // Have to add prefixCls on the instance.
    // https://github.com/facebook/react/issues/12397
    this.prefixCls = prefixCls;
    this.tagPrefixCls = tagPrefixCls;

    fixLocale(value, localeCode);
    fixLocale(showDate, localeCode);

    warning(
      !('onOK' in props),
      'RangePicker',
      'It should be `RangePicker[onOk]`, instead of `onOK`!',
    );

    const calendarClassName = classNames({
      [`${prefixCls}-time`]: showTime,
      [`${prefixCls}-range-with-ranges`]: ranges,
    });

    // 需要选择时间时，点击 ok 时才触发 onChange
    const pickerChangeHandler = {
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

    const startPlaceholder =
      'placeholder' in props ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
    const endPlaceholder =
      'placeholder' in props ? props.placeholder[1] : locale.lang.rangePlaceholder[1];

    const calendar = (
      <RangeCalendar
        {...calendarProps}
        seperator={separator}
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
        hoverValue={hoverValue}
        onHoverChange={this.handleHoverChange}
        onPanelChange={props.onPanelChange}
        showToday={showToday}
        onInputSelect={this.handleCalendarInputSelect}
      />
    );

    // default width for showTime
    const pickerStyle = {};
    if (props.showTime) {
      pickerStyle.width = (style && style.width) || 350;
    }
    const [startValue, endValue] = value;
    const clearIcon =
      !props.disabled && props.allowClear && value && (startValue || endValue) ? (
        <Icon
          type='close-circle'
          className={`${prefixCls}-picker-clear`}
          onClick={this.clearSelection}
          theme='filled'
        />
      ) : null;

    const inputIcon = (suffixIcon &&
      (React.isValidElement(suffixIcon) ? (
        React.cloneElement(suffixIcon, {
          className: classNames({
            [suffixIcon.props.className]: suffixIcon.props.className,
            [`${prefixCls}-picker-icon`]: true,
          }),
        })
      ) : (
        <span className={`${prefixCls}-picker-icon`}>{suffixIcon}</span>
      ))) || <Icon type='calendar' className={`${prefixCls}-picker-icon`} />;

    const input = ({ value: inputValue }) => {
      const [start, end] = inputValue;
      return (
        <span className={props.pickerInputClass}>
          <input
            disabled={props.disabled}
            readOnly
            value={formatDate(start, props.format)}
            placeholder={startPlaceholder}
            className={`${prefixCls}-range-picker-input`}
            tabIndex={-1}
          />
          <span className={`${prefixCls}-range-picker-separator`}> {separator} </span>
          <input
            disabled={props.disabled}
            readOnly
            value={formatDate(end, props.format)}
            placeholder={endPlaceholder}
            className={`${prefixCls}-range-picker-input`}
            tabIndex={-1}
          />
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
        onMouseLeave={props.onMouseLeave}
      >
        <RcDatePicker
          {...props}
          {...pickerChangeHandler}
          calendar={calendar}
          value={value}
          open={open}
          onOpenChange={this.handleOpenChange}
          prefixCls={`${prefixCls}-picker-container`}
          style={popupStyle}
        >
          {input}
        </RcDatePicker>
      </span>
    );
  };

  render() {
    console.log(moment('20190909').format('YYYY-MM-DD'))
    return <ConfigConsumer>{this.renderRangePicker}</ConfigConsumer>;
  }
}

polyfill(RangePicker);

export default RangePicker;

