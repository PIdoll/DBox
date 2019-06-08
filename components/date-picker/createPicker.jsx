// import React from 'react';
// import moment from 'moment';
// import { polyfill } from 'react-lifecycles-compat';
// import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
// import RcDatePicker from 'rc-calendar/lib/Picker';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import omit from 'omit.js';
// import Icon from '../icon';
// // import warning from '../_util/warning';
// import interopDefault from '../_util/interopDefault';
// import getDataOrAriaProps from '../_util/getDataOrAriaProps';
// // 设置全局时间语言环境
// moment.locale('zh_cn');

// export default function createPicker(TheCalendar) {
//   class CalendarWrapper extends React.Component {
//     static propTypes = {
//       prefixCls: PropTypes.string,
//       allowClear: PropTypes.bool,
//       showToday: PropTypes.bool,
//       onFocus: PropTypes.func,
//       onBlur: PropTypes.func,
//       onChange: PropTypes.func,
//       locale: PropTypes.object,
//       suffixIcon: PropTypes.element,
//       style: PropTypes.object,
//     }
//     static defaultProps = {
//       prefixCls: 'idoll-calendar',
//       allowClear: true,
//       showToday: false,
//     };

//     static getDerivedStateFromProps(nextProps, prevState) {
//       let state = null;
//       if ('value' in nextProps) {
//         state = {
//           value: nextProps.value,
//         };
//         if (nextProps.value !== prevState.value) {
//           state = {
//             ...state,
//             showDate: nextProps.value,
//           }
//         }
//       }
//       return state;
//     }
//     constructor(props) {
//       super(props);
//       const value = props.value || props.defaultValue;
//       if (value && !interopDefault(moment).isMoment(value)) {
//         throw new Error(
//           '',
//         )
//       }
//       this.state = {
//         value,
//         showDate: value,
//       }
//     }

//     renderFooter = (...args) => {
//       const { prefixCls, renderExtraFooter } = this.props;
//       return renderExtraFooter ? (
//         <div className={`${prefixCls}-footer-extra`}>
//           {renderExtraFooter(...args)}
//         </div>
//       ) : null;
//     }

//     clearSelection = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//       this.handleChange(null);
//     }

//     handleChange = (value) => {
//       const props = this.props;
//       if (!('value' in props)) {
//         this.setState({
//           value,
//           showDate: value,
//         })
//       }
//       props.onChange(value, (value && moment(value).format(props.format)) || '');
//       this.focus();
//     }

//     handleCalendarChange = (value) => {
//       this.setState({ showDate: value });
//     }

//     focus() {
//       this.input.focus();
//     }

//     blur() {
//       this.input.blur();
//     }

//     saveInput = (node) => {
//       this.input = node;
//     }

//     render() {
//       const { value, showDate } = this.state;
//       const props = omit(this.props, ['onChange']);
//       const { prefixCls, locale, localeCode, suffixIcon } = props;

//       const placeholder = ('placeholder' in props) ? props.placeholder : locale.lang.placeholder;

//       const disabledTime = props.showTime ? props.disabledTime : null;

//       const calendarClassName = classNames({
//         [`${prefixCls}-time`]: props.showTime,
//         [`${prefixCls}-month`]: MonthCalendar === TheCalendar,
//       });

//       if (value && localeCode) {
//         moment(value).locale(localeCode);
//       }

//       let pickerProps = {};
//       let calendarProps = {};
//       const pickerStyle = {};
//       if (props.showTime) {
//         calendarProps = {
//           onSelect: this.handleChange,
//         };
//         pickerStyle.width = 195;
//       } else {
//         pickerProps = {
//           onChange: this.handleChange,
//         }
//       }
//       if ('mode' in props) {
//         calendarProps.mode = props.mode;
//       }

//       // warning(!('onOk' in props), 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!')
//       const calendar = (
//         <TheCalendar
//           {...calendarProps}
//           disabledDate={props.disabledDate}
//           disabledTime={disabledTime}
//           locale={locale.lang}
//           timePicker={props.timePicker}
//           defaultValue={props.defaultPickerValue || interopDefault(moment)()}
//           dateInputPlaceholder={placeholder}
//           prefixCls={prefixCls}
//           className={calendarClassName}
//           onOk={props.onOk}
//           dateRender={props.dateRender}
//           format={props.format}
//           showToday={props.showToday}
//           monthCellContentRender={props.monthCellContentRender}
//           renderFooter={this.renderFooter}
//           onPanelChange={props.onPanelChange}
//           onChange={this.handleCalendarChange}
//           value={showDate} />
//       );

//       const clearIcon = (!props.disabled && props.allowClear && value) ? (
//         <Icon
//           type='close-circle'
//           className={`${prefixCls}-picker-clear`}
//           onClick={this.clearSelection}
//           theme='filled'
//         />
//       ) : null;

//       const inputIcon = (suffixIcon && (
//         React.isValidElement(suffixIcon)
//           ? React.cloneElement(
//             suffixIcon,
//             {
//               className: classNames({
//                 [suffixIcon.props.className]: suffixIcon.props.className,
//                 [`${prefixCls}-picker-icon`]: true,
//               }),
//             },
//           ) : <span className={`${prefixCls}-picker-icon`}>{suffixIcon}</span>)) || (
//           <Icon type='calendar' className={`${prefixCls}-picker-icon`} />
//         );

//         const dataOrAriaProps = getDataOrAriaProps(props);
//         const input = ({ value: inputValue }) => (
//           <div>
//             <input
//               ref={this.saveInput}
//               disabled={props.disabled}
//               readOnly
//               value={(inputValue && inputValue.format(props.format)) || ''}
//               placeholder={placeholder}
//               className={props.pickerInputClass}
//               {...dataOrAriaProps} />
//             {clearIcon}
//             {inputIcon}
//           </div>
//         );
//         return (
//           <span
//             id={props.id}
//             className={classNames(props.className, props.pickerClass)}
//             style={{ ...pickerStyle, ...props.style }}
//             onFocus={props.onFocus}
//             onBlur={props.onBlur}
//             onMouseEnter={props.onMouseEnter}
//             onMouseLeave={props.onMouseLeave}>
//             <RcDatePicker
//               {...props}
//               {...pickerProps}
//               calendar={calendar}
//               value={value}
//               prefixCls={`${prefixCls}-picker-container`}
//               style={props.popupStyle}>
//               {input}
//             </RcDatePicker>
//           </span>
//         )
//     }
//   }
//   polyfill(CalendarWrapper);
//   return CalendarWrapper;
// }
import * as React from 'react';
import * as moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from '../icon';

import { ConfigConsumer } from '../config-provider';
import warning from '../_util/warning';
import interopDefault from '../_util/interopDefault';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';

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

export default function createPicker(TheCalendar) {
  class CalenderWrapper extends React.Component {
    static defaultProps = {
      allowClear: true,
      showToday: true,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      const state = {};
      let { open } = prevState;

      if ('open' in nextProps) {
        state.open = nextProps.open;
        open = nextProps.open || false;
      }
      if ('value' in nextProps) {
        state.value = nextProps.value;
        if (
          nextProps.value !== prevState.value ||
          (!open && nextProps.value !== prevState.showDate)
        ) {
          state.showDate = nextProps.value;
        }
      }
      return Object.keys(state).length > 0 ? state : null;
    }

    constructor(props) {
      super(props);
      const value = props.value || props.defaultValue;
      if (value && !interopDefault(moment).isMoment(value)) {
        throw new Error(
          'The value/defaultValue of DatePicker or MonthPicker must be ' +
            'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value',
        );
      }
      this.state = {
        value,
        showDate: value,
        open: false,
      };
    }

    componentDidUpdate(_, prevState) {
      if (!('open' in this.props) && prevState.open && !this.state.open) {
        this.focus();
      }
    }

    renderFooter = (...args) => {
      const { renderExtraFooter } = this.props;
      const { prefixCls } = this;
      return renderExtraFooter ? (
        <div className={`${prefixCls}-footer-extra`}>{renderExtraFooter(...args)}</div>
      ) : null;
    };

    clearSelection = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.handleChange(null);
    };

    handleChange = (value) => {
      const { props } = this;
      if (!('value' in props)) {
        this.setState({
          value,
          showDate: value,
        });
      }
      props.onChange(value, formatDate(value, props.format));
    };

    handleCalendarChange = (value) => {
      this.setState({ showDate: value });
    };

    handleOpenChange = (open) => {
      const { onOpenChange } = this.props;
      if (!('open' in this.props)) {
        this.setState({ open });
      }

      if (onOpenChange) {
        onOpenChange(open);
      }
    };

    focus() {
      this.input.focus();
    }

    blur() {
      this.input.blur();
    }

    saveInput = (node) => {
      this.input = node;
    };

    renderPicker = ({ getPrefixCls }) => {
      const { value, showDate, open } = this.state;
      const props = omit(this.props, ['onChange']);
      const { prefixCls: customizePrefixCls, locale, localeCode, suffixIcon } = props;

      const prefixCls = getPrefixCls('calendar', customizePrefixCls);
      // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397
      this.prefixCls = prefixCls;

      const placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;

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
          // fix https://github.com/ant-design/ant-design/issues/1902
          onSelect: this.handleChange,
        };
        pickerStyle.minWidth = 195;
      } else {
        pickerProps = {
          onChange: this.handleChange,
        };
      }
      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      warning(
        !('onOK' in props),
        'DatePicker',
        'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!',
      );
      const calendar = (
        <TheCalendar
          {...calendarProps}
          disabledDate={props.disabledDate}
          disabledTime={disabledTime}
          locale={locale.lang}
          timePicker={props.timePicker}
          defaultValue={props.defaultPickerValue || interopDefault(moment)()}
          dateInputPlaceholder={placeholder}
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
          value={showDate}
        />
      );

      const clearIcon =
        !props.disabled && props.allowClear && value ? (
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

      const dataOrAriaProps = getDataOrAriaProps(props);
      const input = ({ value: inputValue }) => (
        <div>
          <input
            ref={this.saveInput}
            disabled={props.disabled}
            readOnly
            value={formatDate(inputValue, props.format)}
            placeholder={placeholder}
            className={props.pickerInputClass}
            tabIndex={props.tabIndex}
            name={props.name}
            {...dataOrAriaProps}
          />
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
          onMouseLeave={props.onMouseLeave}
        >
          <RcDatePicker
            {...props}
            {...pickerProps}
            calendar={calendar}
            value={value}
            prefixCls={`${prefixCls}-picker-container`}
            style={props.popupStyle}
            open={open}
            onOpenChange={this.handleOpenChange}
          >
            {input}
          </RcDatePicker>
        </span>
      );
    };

    render() {
      return <ConfigConsumer>{this.renderPicker}</ConfigConsumer>;
    }
  }
  polyfill(CalenderWrapper);
  return CalenderWrapper;
}
