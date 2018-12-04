import React from 'react';
import moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import Icon from '../icon';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';

export default function createPicker(TheCalendar) {
  class CalendarWrapper extends React.Component {
    static propTypes = {
      prefixCls: PropTypes.string,
      allowClear: PropTypes.bool,
      showToday: PropTypes.bool,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      locale: PropTypes.object,
      suffixIcon: PropTypes.element,
      style: PropTypes.object,
    }
    static defaultProps = {
      prefixCls: 'idoll-calendar',
      allowClear: true,
      showToday: true,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      let state = null;
      if ('value' in nextProps) {
        state = {
          value: nextProps.value,
        };
        if (nextProps.value !== prevState.value) {
          state = {
            ...state,
            showDate: nextProps.value,
          }
        }
      }
      return state;
    }
    constructor(props) {
      super(props);
      const value = props.value || props.defaultValue;
      if (value && !interopDefault(moment).isMoment(value)) {
        throw new Error(
          'The value/defaultValue of DatePicker or MonthPicker must be ' +
          'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value',
        )
      }
      this.state = {
        value,
        showDate: value,
      }
    }

    renderFooter = (...args) => {
      const { prefixCls, renderExtraFooter } = this.props;
      return renderExtraFooter ? (
        <div className={`${prefixCls}-footer-extra`}>
          {renderExtraFooter(...args)}
        </div>
      ) : null;
    }

    clearSelection = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.handleChange(null);
    }

    handleChange = (value) => {
      const props = this.props;
      if (!('value' in props)) {
        this.setState({
          value,
          showDate: value,
        })
      }
      props.onChange(value, (value && moment(value).format(props.format)) || '');
      this.focus();
    }

    handleCalendarChange = (value) => {
      this.setState({ showDate: value });
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
      const { value, showDate } = this.state;
      const props = omit(this.props, ['onChange']);
      const { prefixCls, locale, localeCode, suffixIcon } = props;

      const placeholder = ('placeholder' in props) ? props.placeholder : locale.lang.placeholder;

      const disabledTime = props.showTime ? props.disabledTime : null;

      const calendarClassName = classNames({
        [`${prefixCls}-time`]: props.showTime,
        [`${prefixCls}-month`]: MonthCalendar === TheCalendar,
      });

      if (value && localeCode) {
        value.locale(localeCode);
      }

      let pickerProps = {};
      let calendarProps = {};
      const pickerStyle = {};
      if (props.showTime) {
        calendarProps = {
          onSelect: this.handleChange,
        };
        pickerStyle.width = 195;
      } else {
        pickerProps = {
          onChange: this.handleChange,
        }
      }
      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      warning(!('onOk' in props), 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!')
      const calendar = (
        <TheCalendar
          {...calendarProps}
          disabledDate={props.disabledDate}
          disabledTime={disabledTime}
          locale={locale.lang}
          timePicker={props.timePicker}
          defaultValue={props.defaultPickerValue || interopDefault(moment)()}
          dateInoutPlaceholder={placeholder}
          prefixCls={prefixCls}
          className={calendarClassName}
          onOk={props.onOk}
          dateRender={props.dateRender}
          format={props.format}
          showToday={props.showToday}
          monthCellContentRender={props.monthCellContentRender}
          renderFooter={this.renderFooter}
          onPanelChange={props.onPanelChange}
          onChange={this.handleCalendarChange}
          value={showDate} />
      );

      const clearIcon = (!props.disabled && props.allowClear && value) ? (
        <Icon
          type='close-circle'
          className={`${prefixCls}-picker-clear`}
          onClick={this.clearSelection}
          theme='filled'
        />
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

        const dataOrAriaProps = getDataOrAriaProps(props);
        const input = ({ value: inputValue }) => (
          <div>
            <input
              ref={this.saveInput}
              disabeld={props.disabeld}
              readOnly
              value={(inputValue && inputValue.format(props.format)) || ''}
              placeholder={placeholder}
              className={props.pickerInputClass}
              {...dataOrAriaProps} />
            {clearIcon}
            {inputIcon}
          </div>
        );
        return (
          <span
            id={props.id}
            className={classNames(props.className, props.pickerClass)}
            style={{ ...pickerStyle, ...props.style }}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}>
            <RcDatePicker
              {...props}
              {...pickerProps}
              calendar={calendar}
              value={value}
              prefixCls={`${prefixCls}-picker-container`}
              style={props.popupStyle}>
              {input}
            </RcDatePicker>
          </span>
        )
    }
  }
  polyfill(CalendarWrapper);
  return CalendarWrapper;
}

// export default function createPicker(TheCalendar) {
//   return class CalenderWrapper extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: this.props.parseDateFromValue(this.props.value || this.props.defaultValue),
//       };
//     }

//     // 当传入新的props的时候触发
//     componentWillReceiveProps(nextProps) {
//       if ('value' in nextProps) {
//         this.setState({
//           value: nextProps.parseDateFromValue(nextProps.value),
//         });
//       }
//     }

//     clearSelection = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       this.setState({ value: null });
//       this.handleChange(null);
//     }

//     handleChange = (value) => {
//       const props = this.props;
//       if (!('value' in props)) {
//         this.setState({ value });
//       }
//       const timeValue = value ? new Date(value.getTime()) : null;
//       props.onChange(timeValue, value ? props.getFormatter().format(value) : '');
//     }

//     render() {
//       const props = this.props;
//       const locale = props.locale;
//       // 以下两行代码
//       // 给没有初始值的日期选择框提供本地化信息
//       // 否则会以周日开始排
//       let defaultCalendarValue = new GregorianCalendar(locale);
//       defaultCalendarValue.setTime(Date.now());

//       const placeholder = ('placeholder' in props)
//         ? props.placeholder : locale.lang.placeholder;

//       const disabledTime = props.showTime ? props.disabledTime : null;

//       const calendarClassName = classNames({
//         'idoll-calendar-time': props.showTime,
//         'idoll-calendar-month': MonthCalendar === TheCalendar,
//       });

//       // 需要选择时间时，点击 ok 时才触发 onChange
//       let pickerChangeHandler = {
//         onChange: this.handleChange,
//       };
//       let calendarHandler = {
//         onOk: this.handleChange,
//         // fix https://github.com/ant-design/ant-design/issues/1902
//         onSelect: (value, cause) => {
//           if (cause && cause.source === 'todayButton') {
//             this.handleChange(value);
//           }
//         },
//       };
//       if (props.showTime) {
//         pickerChangeHandler = {};
//       } else {
//         calendarHandler = {};
//       }

//       const calendar = (
//         <TheCalendar
//           formatter={props.getFormatter()}
//           disabledDate={props.disabledDate}
//           disabledTime={disabledTime}
//           locale={locale.lang}
//           timePicker={props.timePicker}
//           defaultValue={defaultCalendarValue}
//           dateInputPlaceholder={placeholder}
//           prefixCls='idoll-calendar'
//           className={calendarClassName}
//           onOk={props.onOk}
//           {...calendarHandler}
//         />
//       );

//       // 默认时间选择框的宽度
//       const pickerStyle = {};
//       if (props.showTime) {
//         pickerStyle.width = 180;
//       }

//       const clearIcon = (!props.disabled && this.state.value)
//         ? <Icon type='close-circle'
//           className='idoll-calendar-picker-clear '
//           onClick={this.clearSelection}
//         /> : null;
//         return (
//           <span className={props.pickerClass} style={{ ...pickerStyle, ...props.style }}>
//             <RcDatePicker
//               transitionName={props.transitionName}
//               disabled={props.disabled}
//               calendar={calendar}
//               value={this.state.value}
//               prefixCls='idoll-calendar-picker-container'
//               style={props.popupStyle}
//               align={props.align}
//               getCalendarContainer={props.getCalendarContainer}
//               open={props.open}
//               onOpen={props.toggleOpen}
//               onClose={props.toggleOpen}
//               {...pickerChangeHandler}
//             >
//               {
//                 ({ value }) => {
//                   return (
//                     <span>
//                       <input
//                         disabled={props.disabled}
//                         readOnly
//                         value={value ? props.getFormatter().format(value) : ''}
//                         placeholder={placeholder}
//                         className={props.pickerInputClass}
//                       />
//                       {clearIcon}
//                       <span className='idoll-calendar-picker-icon' />
//                     </span>
//                   );
//                 }
//               }
//             </RcDatePicker>
//           </span>
//       )
//     }
//   }
// }
