// import React from 'react';
// import PropTypes from 'prop-types';
// import TimePickerPanel from 'rc-time-picker/lib/Panel';
// import LocaleReceiver from '../locale-provider/LocaleReceiver';
// import classNames from 'classnames';
// import { generateShowHourMinutesSecond } from '../time-picker/timePicker';
// import zhCN from './locale/zh_CN';

// import './style/index';

// function getColumns({ showHour, showMinute, showSecond, use12Hours }) {
//   let column = 0;
//   if (showHour) {
//     column += 1;
//   }
//   if (showMinute) {
//     column += 1;
//   }
//   if (showSecond) {
//     column += 1;
//   }
//   if (use12Hours) {
//     column += 1;
//   }
//   return column;
// }

// export default function wrapPicker(Picker, defaultFormat) {
//   return class PickerWrapper extends React.Component {
//     static propTypes = {
//       format: PropTypes.string,
//       transitionName: PropTypes.string,
//       popupStyle: PropTypes.object,
//       locale: PropTypes.object,
//       prefixCls: PropTypes.string,
//       inputPrefixCls: PropTypes.string,
//     }

//     static defaultProps = {
//       format: defaultFormat || 'YYYY-MM-DD',
//       transitionName: 'slide-up',
//       popupStyle: {},
//       onChange() {
//       },
//       onOpenChange() {
//       },
//       locale: {},
//       prefixCls: 'idoll-calendar',
//       inputPrefixCls: 'idoll-input'
//     }

//     componentDidMount() {
//       const { autoFocus, disabled } = this.props;
//       if (autoFocus && !disabled) {
//         this.focus();
//       }
//     }

//     handleOpenChange = (open) => {
//       const { onOpenChange } = this.props;
//       onOpenChange(open);
//     }

//     handleFocus = (e) => {
//       const { onFocus } = this.props;
//       if (onFocus) {
//         onFocus(e);
//       }
//     }

//     hanldeBlur = (e) => {
//       const { onBlur } = this.props;
//       if (onBlur) {
//         onBlur(e);
//       }
//     }

//     handleMouseEnter = (e) => {
//       const { onMouseEnter } = this.props;
//       if (onMouseEnter) {
//         onMouseEnter(e);
//       }
//     }

//     handleMouseLeave = (e) => {
//       const { onMouseLeave } = this.props;
//       if (onMouseLeave) {
//         onMouseLeave(e);
//       }
//     }

//     focus() {
//       this.picker.focus();
//     }

//     blur() {
//       this.picker.blur();
//     }

//     savePicker = (node) => {
//       this.picker = node;
//     }

//     getDefaultLocale = () => {
//       const result = {
//         ...zhCN,
//         ...this.props.locale,
//       };
//       result.lang = {
//         ...result.lang,
//         ...(this.props.locale || {}).lang,
//       };
//       return result
//     }

//     renderPicker = (locale, localeCode) => {
//       const props = this.props;
//       const { prefixCls, inputPrefixCls } = props;
//       const pickerClass = classNames(`${prefixCls}-picker`, {
//         [`${prefixCls}-picker-${props.size}`]: !!props.size,
//       });
//       const pickerInputClass = classNames(`${prefixCls}-picker-input`, inputPrefixCls, {
//         [`${inputPrefixCls}-lg`]: props.size === 'large',
//         [`${inputPrefixCls}-sm`]: props.size === 'small',
//         [`${inputPrefixCls}-disabled`]: props.disabled,
//       });

//       const timeFormat = (props.showTime && props.showTime.format) || 'HH:mm:ss';
//       const rcTimePickerProps = {
//         ...generateShowHourMinutesSecond(timeFormat),
//         format: timeFormat,
//         use12Hours: (props.showTime && props.showTime.use12Hours),
//       };
//       const columns = getColumns(rcTimePickerProps);
//       const timePickerCls = `${prefixCls}-time-picker-column-${columns}`;
//       const timePicker = props.showTime ? (
//         <TimePickerPanel
//           {...rcTimePickerProps}
//           {...props.showTime}
//           prefixCls={`${prefixCls}-time-picker`}
//           className={timePickerCls}
//           placeholder={locale.timePickerLocale.placeholder}
//           transitionName='slide-up' />
//       ) : null;
//       return (
//         <Picker
//           {...props}
//           ref={this.savePicker}
//           pickerClass={pickerClass}
//           pickerInputClass={pickerInputClass}
//           locale={locale}
//           localeCode={localeCode}
//           timePicker={timePicker}
//           onOpenChange={this.handleOpenChange}
//           onFocus={this.handleFocus}
//           onBlur={this.handleBlur}
//           onMouseEnter={this.handleMouseEnter}
//           onMouseLeave={this.handleMouseLeave} />
//       );
//     }

//     render() {
//       return (
//         <LocaleReceiver
//           ComponentName='DatePicker'
//           defaultLocale={this.getDefaultLocale}>
//           {this.renderPicker}
//         </LocaleReceiver>
//       )
//     }
//   }
// }
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PropTypes from 'prop-types';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import classNames from 'classnames';
import { generateShowHourMinuteSecond } from '../time-picker/timePicker';
import { ConfigConsumer } from '../config-provider';
import zhCN from './locale/zh_CN';

import './style/index';

const DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  week: 'gggg-wo',
  month: 'YYYY-MM',
};

const LOCALE_FORMAT_MAPPING = {
  date: 'dateFormat',
  dateTime: 'dateTimeFormat',
  week: 'weekFormat',
  month: 'monthFormat',
}

function getColumns({ showHour, showMinute, showSecond, use12Hours }) {
  let column = 0;
  if (showHour) {
    column += 1;
  }
  if (showMinute) {
    column += 1;
  }
  if (showSecond) {
    column += 1;
  }
  if (use12Hours) {
    column += 1;
  }
  return column;
}

function checkValidate(value) {
  const values = Array.isArray(value) ? value : [value];
  values.forEach(val => {
    if (!val) return false;
  });
}

export default function wrapPicker(Picker, pickerType) {
  class PickerWrapper extends React.Component {
    static defaultProps = {
      // format: 'YYYY-MM-DD',
      transitionName: 'slide-up',
      popupStyle: {},
      onChange() {
      },
      onOpenChange() {
      },
      locale: {},
      prefixCls: 'idoll-calendar',
      inputPrefixCls: 'idoll-input'
    }

    static propTypes = {
      format: PropTypes.string,
      transitionName: PropTypes.string,
      popupStyle: PropTypes.object,
      locale: PropTypes.object,
      prefixCls: PropTypes.string,
      inputPrefixCls: PropTypes.string,
    }

    static getDerivedStateFromProps({ value, defaultValue }) {
      checkValidate(defaultValue, 'defaultValue');
      checkValidate(value, 'value');
      return {};
    }

    state = {};

    componentDidMount() {
      const { autoFocus, disabled } = this.props;
      if (autoFocus && !disabled) {
        // this.focus();
      }
    }

    handleOpenChange = (open) => {
      const { onOpenChange } = this.props;
      onOpenChange(open);
    }

    handleFocus = e => {
      const { onFocus } = this.props;
      if (onFocus) {
        onFocus(e);
      }
    };

    handleBlur = e => {
      const { onBlur } = this.props;
      if (onBlur) {
        onBlur(e);
      }
    };

    handleMouseEnter = e => {
      const { onMouseEnter } = this.props;
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    handleMouseLeave = e => {
      const { onMouseLeave } = this.props;
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    };

    focus() {
      this.picker.focus();
    };

    blur() {
      this.picker.blur();
    };

    savePicker = (node) => {
      this.picker = node;
    };

    getDefaultLocale = () => {
      const result = {
        ...zhCN,
        ...this.props.locale,
      };
      result.lang = {
        ...result.lang,
        ...(this.props.locale || {}).lang,
      };
      return result;
    };
    renderPicker = (locale, localeCode) => {
      const { format, showTime } = this.props;
      const mergedPickerType = showTime ? `dateTime` : pickerType;
      const mergedFormat = format || locale[LOCALE_FORMAT_MAPPING[mergedPickerType]] || DEFAULT_FORMAT[mergedPickerType];

      return (
        <ConfigConsumer>
          {
          ({ getPrefixCls, getPopupContainer }) => {
            const {
              prefixCls,
              getCalendarContainer,
              inpitPrefixCls: customizeInputPrefixCls,
              size,
              disabled,
            } = this.props;
            const _getPopupContainer = getCalendarContainer || getPopupContainer;
            const _prefixCls = getPrefixCls('calendar', prefixCls);
            const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
            const pickerClass = classNames(`${_prefixCls}-picker`, {
              [`${_prefixCls}-picker-${size}`]: !!size,
            });
            const pickerInputClass = classNames(`${_prefixCls}-picker-input`, inputPrefixCls, {
              [`${inputPrefixCls}-lg`]: size === 'large',
              [`${inputPrefixCls}-sm`]: size === 'small',
              [`${inputPrefixCls}-disabled`]: disabled,
            });
            const timeFormat = (showTime && showTime.format) || 'HH:mm:ss';
            const rcTimePickerProps = {
              ...generateShowHourMinuteSecond(timeFormat),
              format: timeFormat,
              use12Hours: showTime && showTime.use12Hours,
            };
            const columns = getColumns(rcTimePickerProps);
            const timePickerCls = `${_prefixCls}-time-picker-column-${columns}`;
            const timePicker = showTime ? (
              <TimePickerPanel
                {...rcTimePickerProps}
                {...showTime}
                prefixCls={`${_prefixCls}-time-picker`}
                className={timePickerCls}
                placeholder={locale.timePickerLocale.placeholder}
                transitionName='slide-up' />
            ) : null;

            return (
              <Picker
                {...this.props}
                getCalendarContainer={_getPopupContainer}
                format={mergedFormat}
                ref={this.savePicker}
                pickerClass={pickerClass}
                pickerInputClass={pickerInputClass}
                locale={locale}
                localeCode={localeCode}
                timePicker={timePicker}
                onOpenChange={this.handleOpenChange}
                onFocus={this.handleFocus}
                onBlur={this.onBlur}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave} />
            );
          }
        }
        </ConfigConsumer>
      );
    };
    render () {
      return (
        <LocaleReceiver componentName='DatePicker' defaultLocale={this.getDefaultLocale}>{this.renderPicker}</LocaleReceiver>
      )
    }
  }
  polyfill(PickerWrapper);
  return PickerWrapper;
}
