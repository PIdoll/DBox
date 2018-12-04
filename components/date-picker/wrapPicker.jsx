import React from 'react';
import PropTypes from 'prop-types';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import classNames from 'classnames';
import { generateShowHourMinutesSecond } from '../time-picker/timePicker';
import zhCN from './locale/zh_CN';

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

export default function wrapPicker(Picker, defaultFormat) {
  return class PickerWrapper extends React.Component {
    static propTypes = {
      format: PropTypes.string,
      transitionName: PropTypes.string,
      popupStyle: PropTypes.object,
      locale: PropTypes.object,
      prefixCls: PropTypes.object,
      inoutPrefixCls: PropTypes.object,
    }

    static defaultProps = {
      format: defaultFormat || 'YYYY-MM-DD',
      transitionName: 'slide-up',
      popupStyle: {},
      onChange() {
      },
      onOpenChange() {
      },
      locale: {},
      prefixCls: 'idoll-calendar',
      inoutPrefixCls: 'idoll-input'
    }

    componentDidMount() {
      const { autoFocus, disabled } = this.props;
      if (autoFocus && !disabled) {
        this.focus();
      }
    }

    handleOpenChange = (open) => {
      const { onOpenChange } = this.props;
      onOpenChange(open);
    }

    handleFocus = (e) => {
      const { onFocus } = this.props;
      if (onFocus) {
        onFocus(e);
      }
    }

    hanldeBlur = (e) => {
      const { onBlur } = this.props;
      if (onBlur) {
        onBlur(e);
      }
    }

    handleMouseEnter = (e) => {
      const { onMouseEnter } = this.props;
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    }

    handleMouseLeave = (e) => {
      const { onMouseLeave } = this.props;
      if (onMouseLeave) {
        onMouseLeave(e);
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
    }

    getDefaultLocale = () => {
      const result = {
        ...zhCN,
        ...this.props.locale,
      };
      result.lang = {
        ...result.lang,
        ...result(this.props.locale || {}).lang,
      };
      return result
    }

    renderPicker = (locale, localeCode) => {
      const props = this.props;
      const { prefixCls, inputPrefixCls } = props;
      const pickerClass = classNames(`${prefixCls}-picker`, {
        [`${prefixCls}-picker-${props.size}`]: !!props.size,
      });
      const pickerInputClass = classNames(`${prefixCls}-picker-input`, inputPrefixCls, {
        [`${inputPrefixCls}-lg`]: props.size === 'large',
        [`${inputPrefixCls}-sm`]: props.size === 'small',
        [`${inputPrefixCls}-disabled`]: props.disabled,
      });

      const timeFormat = (props.showTime && props.showTime.format) || 'HH:mm:ss';
      const rcTimePickerProps = {
        ...generateShowHourMinutesSecond(timeFormat),
        format: timeFormat,
        use12Hours: (props.showTime && props.showTime.use12Hours),
      };
      const columns = getColumns(rcTimePickerProps);
      const timePickerCls = `${prefixCls}-time-picker-column-${columns}`;
      const timePicker = props.showTime ? (
        <TimePickerPanel
          {...rcTimePickerProps}
          {...props.showTime}
          prefixCls={`${prefixCls}-time-picker`}
          classNames={timePickerCls}
          placeholder={locale.timePickerLocale.placeholder}
          transitionName='slide-up' />
      ) : null;
      return (
        <Picker
          {...props}
          ref={this.savePicker}
          pickerClass={pickerClass}
          pickerInputClass={pickerInputClass}
          locale={locale}
          localeCode={localeCode}
          timePicker={timePicker}
          onOpenChange={this.handleOpenChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave} />
      );
    }

    render() {
      return (
        <LocaleReceiver
          ComponentName='DatePicker'
          defaultLocale={this.getDefaultLocale}>
          {this.renderPicker}
        </LocaleReceiver>
      )
    }
  }
}
// export default function wrapPicker(Picker, defaultFormat) {
//   return class PickerWrapper extends React.Component {
//     static defaultProps = {
//       format: defaultFormat || 'yyyy-MM-dd',
//       transitionName: 'slide-up',
//       popupStyle: {},
//       onChange() {},
//       onOk() {},
//       toggleOpen() {},
//       locale: {},
//       align: {
//         offset: [0, -9],
//       },
//     }

//     static contextTypes = {
//       idollLocale: PropTypes.object,
//     }

//     getLocale() {
//       const props = this.props;
//       let locale = defaultLocale;
//       const context = this.context;
//       if (context.idollLocale && context.idollLocale.DatePicker) {
//         locale = context.idollLocale.DatePicker;
//       }
//       // 统一合并为完整的 Locale
//       const result = { ...locale, ...props.locale };
//       result.lang = { ...locale.lang, ...props.locale.lang };
//       return result;
//     }

//     getFormatter = () => {
//       const format = this.props.format;
//       // 生成格式化工具
//       const formatter = new DateTimeFormat(format, this.getLocale().lang.format);
//       return formatter;
//     }

//     parseDateFromValue = (value) => {
//       if (value) {
//         if (typeof value === 'string') {
//           return this.getFormatter().parse(value, { locale: this.getLocale() });
//         } else if (value instanceof Date) {
//           let date = new GregorianCalendar(this.getLocale());
//           date.setTime(+value);
//           return date;
//         }
//       }
//       return value;
//     }

//     toggleOpen = ({ open }) => {
//       this.props.toggleOpen({ open });
//     }

//     render() {
//       const props = this.props;
//       const pickerClass = classNames({
//         'idoll-calendar-picker': true,
//       });
//       const pickerInputClass = classNames({
//         'idoll-calendar-range-picker': true,
//         'idoll-input': true,
//         'idoll-input-lg': props.size === 'large',
//         'idoll-input-sm': props.size === 'small',
//       });


//       const locale = this.getLocale();

//       const timeFormat = props.showTime && props.showTime.format;
//       const rcTimePickerProps = {
//         formatter: new DateTimeFormat(timeFormat || 'HH:mm:ss', locale.timePickerLocale.format),
//         showSecond: timeFormat && timeFormat.indexOf('ss') >= 0,
//         showHour: timeFormat && timeFormat.indexOf('HH') >= 0,
//       };
//       const timePicker = props.showTime ? (
//         <TimePicker
//           {...rcTimePickerProps}
//           {...props.showTime}
//           prefixCls='idoll-time-picker'
//           placeholder={locale.timePickerLocale.placeholder}
//           locale={locale.timePickerLocale}
//           transitionName='slide-up'
//         />
//       ) : null;

//       return (
//         <Picker
//           {...props}
//           pickerClass={pickerClass}
//           pickerInputClass={pickerInputClass}
//           locale={locale}
//           timePicker={timePicker}
//           toggleOpen={this.toggleOpen}
//           getFormatter={this.getFormatter}
//           parseDateFromValue={this.parseDateFromValue}
//         />
//       );
//     }
//   };
// }
