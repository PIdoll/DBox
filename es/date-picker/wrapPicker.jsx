import React from 'react';
import PropTypes from 'prop-types';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import classNames from 'classnames';
import { generateShowHourMinutesSecond } from '../time-picker/timePicker';
import zhCN from './locale/zh_CN';

import './style/index';

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
      prefixCls: PropTypes.string,
      inputPrefixCls: PropTypes.string,
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
      inputPrefixCls: 'idoll-input'
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
        ...(this.props.locale || {}).lang,
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
          className={timePickerCls}
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

