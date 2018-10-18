import React, { PropTypes } from 'react';
import TimePicker from 'rc-time-picker';
import DateTimeFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import classNames from 'classnames';
import defaultLocale from './locale/zh_CN';

export default function wrapPicker(Picker, defaultFormat) {
  return class PickerWrapper extends React.Component {
    static defaultProps = {
      format: defaultFormat || 'yyyy-MM-dd',
      transitionName: 'slide-up',
      popupStyle: {},
      onChange() {},
      onOk() {},
      toggleOpen() {},
      locale: {},
      align: {
        offset: [0, -9],
      },
    }

    static contextTypes = {
      idollLocale: PropTypes.object,
    }

    getLocale() {
      const props = this.props;
      let locale = defaultLocale;
      const context = this.context;
      if (context.idollLocale && context.idollLocale.DatePicker) {
        locale = context.idollLocale.DatePicker;
      }
      // 统一合并为完整的 Locale
      const result = { ...locale, ...props.locale };
      result.lang = { ...locale.lang, ...props.locale.lang };
      return result;
    }

    getFormatter = () => {
      const format = this.props.format;
      // 生成格式化工具
      const formatter = new DateTimeFormat(format, this.getLocale().lang.format);
      return formatter;
    }

    parseDateFromValue = (value) => {
      if (value) {
        if (typeof value === 'string') {
          return this.getFormatter().parse(value, { locale: this.getLocale() });
        } else if (value instanceof Date) {
          let date = new GregorianCalendar(this.getLocale());
          date.setTime(+value);
          return date;
        }
      }
      return value;
    }

    toggleOpen = ({ open }) => {
      this.props.toggleOpen({ open });
    }

    render() {
      const props = this.props;
      const pickerClass = classNames({
        'idoll-calendar-picker': true,
      });
      const pickerInputClass = classNames({
        'idoll-calendar-range-picker': true,
        'idoll-input': true,
        'idoll-input-lg': props.size === 'large',
        'idoll-input-sm': props.size === 'small',
      });


      const locale = this.getLocale();

      const timeFormat = props.showTime && props.showTime.format;
      const rcTimePickerProps = {
        formatter: new DateTimeFormat(timeFormat || 'HH:mm:ss', locale.timePickerLocale.format),
        showSecond: timeFormat && timeFormat.indexOf('ss') >= 0,
        showHour: timeFormat && timeFormat.indexOf('HH') >= 0,
      };
      const timePicker = props.showTime ? (
        <TimePicker
          {...rcTimePickerProps}
          {...props.showTime}
          prefixCls='idoll-time-picker'
          placeholder={locale.timePickerLocale.placeholder}
          locale={locale.timePickerLocale}
          transitionName='slide-up'
        />
      ) : null;

      return (
        <Picker
          {...props}
          pickerClass={pickerClass}
          pickerInputClass={pickerInputClass}
          locale={locale}
          timePicker={timePicker}
          toggleOpen={this.toggleOpen}
          getFormatter={this.getFormatter}
          parseDateFromValue={this.parseDateFromValue}
        />
      );
    }
  };
}
