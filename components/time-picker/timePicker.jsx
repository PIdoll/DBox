// /* eslint-disable react/jsx-indent */
// /* eslint-disable react/jsx-tag-spacing */
// /* eslint-disable react/jsx-indent-props */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable func-call-spacing */
// import React from 'react';
// import moment from 'moment';
// import { polyfill } from 'react-lifecycles-compat';
// import { ConfigConsumer } from '../config-provider';
// import RcTimePicker from 'rc-time-picker/lib/TimePicker';
// import classNames from 'classnames';
// import LocaleReceiver from '../locale-provider/LocaleReceiver';
// import PropTypes from 'prop-types';
// import interopDefault from '../_util/interopDefault';
// import Icon from '../icon';
// import zhCN from './locale/zh_CN';
// import omit from 'omit.js';

// export function generateShowHourMinutesSecond(format) {
//   return {
//     showHour: (
//       format.indexOf('H') > -1 ||
//       format.indexOf('h') > -1 ||
//       format.indexOf('k') > -1
//     ),
//     showMinute: format.indexOf('m') > -1,
//     showSecond: format.indexOf('s') > -1
//   };
// }

// function handleTimeFormat(timeValue) {
//   if (timeValue < 10) {
//     timeValue = '0' + timeValue;
//   }
//   return timeValue;
// }

// class TimePicker extends React.Component {
//   static propTypes = {
//     className: PropTypes.string,
//     size: PropTypes.oneOf(['large', 'default', 'small']),
//     open: PropTypes.bool,
//     format: PropTypes.string,
//     onChange: PropTypes.func,
//     onOpenChange: PropTypes.func,
//     disabled: PropTypes.bool,
//     placeholder: PropTypes.string,
//     prefixCls: PropTypes.string,
//     hideDisabledOptions: PropTypes.bool,
//     disabledHours: PropTypes.func,
//     disabledMinutes: PropTypes.func,
//     disabledSeconds: PropTypes.func,
//     style: PropTypes.object,
//     getPopupContainer: PropTypes.func,
//     addon: PropTypes.func,
//     use12Hours: PropTypes.bool,
//     focusOnOpen: PropTypes.bool,
//     hourStep: PropTypes.number,
//     minuteStep: PropTypes.number,
//     secondStep: PropTypes.number,
//     allowEmpty: PropTypes.bool,
//     inputReadOnly: PropTypes.bool,
//     clearText: PropTypes.string,
//     popupClassName: PropTypes.string,
//     suffixIcon: PropTypes.element,
//     align: PropTypes.object,
//     placement: PropTypes.string,
//     transitionName: PropTypes.string,
//     autoFocus: PropTypes.bool,
//   }

//   static defaultProps = {
//     prefixCls: 'idoll-time-picker',
//     align: {
//       offset: [0, -2]
//     },
//     disabled: false,
//     disabledHours: undefined,
//     disabledMinutes: undefined,
//     disabledSeconds: undefined,
//     hideDisabledOptions: false,
//     placement: 'bottomLeft',
//     transitionName: 'slide-up',
//     focusOnOpen: true
//   };

//   static getDerivedStateFromProps(nextProps) {
//     if ('value' in nextProps) {
//       return { value: nextProps.value };
//     }
//     return null;
//   }
//   constructor(props) {
//     super(props);
//     const value = props.value || props.defaultValue;
//     if (value && !interopDefault(moment).isMoment(value)) {
//       throw new Error (
//         '',
//       );
//     }
//     this.state = {
//       value,
//     }
//   }

//   handleChange = (value) => {
//     if (!('value' in this.props)) {
//       this.setState({ value });
//     }
//     const { onChange, format = 'HH:mm:ss' } = this.props;
//     if (onChange) {
//       onChange(value, (value && value.format(format)) || '');
//     }
//   }

//   handleOpenClose = ({ open }) => {
//     const date = new Date();
//     const timeValue = handleTimeFormat(date.getHours()) + ':' + handleTimeFormat(date.getMinutes()) + ':' + handleTimeFormat(date.getSeconds());
//     this.setState({
//       defaultOpenValue: moment(timeValue, 'HH:mm:ss')
//     })
//     const { onOpenChange } = this.props;
//     if (onOpenChange) {
//       onOpenChange(open);
//     }
//   }

//   saveTimePicker = (timePickerRef) => {
//     this.timePickerRef = timePickerRef
//   }

//   focus() {
//     this.timePickerRef.focus();
//   }

//   blur() {
//     this.timePickerRef.blur();
//   }

//   getDefaultFormat() {
//     const { format, use12Hours } = this.props;
//     if (format) {
//       return format;
//     } else if (use12Hours) {
//       return 'h:mm:ss a';
//     }
//     return 'HH:mm:ss'
//   }

//   getAllowClear() {
//     const { allowClear, allowEmpty } = this.props;
//     if ('allowClear' in this.props) {
//       return allowClear;
//     }
//     return allowEmpty;
//   }

//   renderInputIcon(prefixCls) {
//     const { suffixIcon } = this.props;
//     const clockIcon = (
//       suffixIcon && (
//         React.isValidElement(suffixIcon) &&
//         React.cloneElement(suffixIcon, {
//           className: classNames(suffixIcon.props.className, `${prefixCls}-clock-icon`),
//         })
//       )
//     ) || <Icon type='clock-circle' className={`${prefixCls}-clock-icon`} />
//     return <span className={`${prefixCls}-icon`}>{clockIcon}</span>
//   }

//   renderClearIcon(prefixCls) {
//     const { clearIcon } = this.props;
//     const clearIconPrefixCls = `${prefixCls}-clear`;
//     if (clearIcon && React.isValidElement(clearIcon)) {
//       return React.cloneElement(clearIcon, {
//         className: classNames(clearIcon.props.className, clearIconPrefixCls),
//       });
//     }
//     return <Icon type='close-circle' className={clearIconPrefixCls} theme='filled' />
//   }

//   getDefaultLocale = () => {
//     const defaultLocale = {
//       ...zhCN,
//       ...this.props.locale,
//     };
//     return defaultLocale;
//   }

//   renderTimePicker = (locale) => {
//     <ConfigConsumer>
//       {
//         ({ getPopupContainer: getContextPopupContainer, getPrefixCls }) => {
//           const {
//             getPopupContainer,
//             prefixCls: customizePrefixCls,
//             className,
//             addon,
//             placeholder,
//             ...props
//           } = this.props;
//           const { size } = props;
//           const pickerProps = omit(props, ['defaultValue', 'suffixIcon', 'allowEmpty', 'allowClear']);
//           const format = this.getDefaultFormat();
//           const _prefixCls = getPrefixCls('time-picker', customizePrefixCls);
//           const pickerClassName = classNames(className, {
//             [`${_prefixCls}-${size}`]: !!size,
//           });
//           const pickerAddon = (panel) => addon ? <div className={`${_prefixCls}-panel-addon`}>{addon(panel)}</div> : null;
//           return (
//             <RcTimePicker
//             {...generateShowHourMinutesSecond(format)}
//             {...pickerProps}
//             prefixCls={_prefixCls}
//             allowEmpty={this.getAllowClear()}
//             getPopupContainer={getPopupContainer || getContextPopupContainer}
//             ref={this.saveTimePicker}
//             format={format}
//             className={pickerClassName}
//             value={this.state.value}
//             placeholder={placeholder === undefined ? locale.placeholder : placeholder}
//             onChange={this.handleChange}
//             onOpen={this.handleOpenClose}
//             onClose={this.handleOpenClose}
//             addon={pickerAddon}
//             inputIcon={this.renderInputIcon(_prefixCls)}
//             clearIcon={this.renderClearIcon(_prefixCls)}/>
//           )
//         }
//       }
//     </ConfigConsumer>
//   }
//   render() {
//     return <LocaleReceiver componentName='TimePicker' defaultLocale={this.getDefaultLocale()}>{this.renderTimePicker}</LocaleReceiver>
//   }
// }
// polyfill(TimePicker);

// export default TimePicker;
import React from 'react';
import moment from 'moment';
import omit from 'omit.js';
import { polyfill } from 'react-lifecycles-compat';
import RcTimePicker from 'rc-time-picker/lib/TimePicker';
import classNames from 'classnames';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { ConfigConsumer } from '../config-provider';
import zhCN from './locale/zh_CN';
import PropTypes from 'prop-types';
import interopDefault from '../_util/interopDefault';
import Icon from '../icon';

export function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1,
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
      offset: [0, -2],
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true,
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
        'The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' +
          'see: https://u.ant.design/time-picker-value',
      );
    }
    this.state = {
      value,
    };
  }

  handleChange = (value) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const { onChange, format = 'HH:mm:ss' } = this.props;
    if (onChange) {
      onChange(value, (value && value.format(format)) || '');
    }
  };

  handleOpenClose = ({ open }) => {
    const date = new Date();
    const { onOpenChange } = this.props;
    const timeValue = handleTimeFormat(date.getHours()) + ':' + handleTimeFormat(date.getMinutes()) + ':' + handleTimeFormat(date.getSeconds());
    this.setState({
      defaultOpenValue: moment(timeValue, 'HH:mm:ss')
    })
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  saveTimePicker = (timePickerRef) => {
    this.timePickerRef = timePickerRef;
  };

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
    return 'HH:mm:ss';
  }

  getAllowClear() {
    const { allowClear, allowEmpty } = this.props;
    if ('allowClear' in this.props) {
      return allowClear;
    }
    return allowEmpty;
  }

  renderInputIcon(prefixCls) {
    const { suffixIcon } = this.props;
    const clockIcon = (suffixIcon &&
      (React.isValidElement(suffixIcon) &&
        React.cloneElement(suffixIcon, {
          className: classNames(suffixIcon.props.className, `${prefixCls}-clock-icon`),
        }))) || <Icon type='clock-o' className={`${prefixCls}-clock-icon`} />;

    return <span className={`${prefixCls}-icon`}>{clockIcon}</span>;
  }

  renderClearIcon(prefixCls) {
    const { clearIcon } = this.props;

    const clearIconPrefixCls = `${prefixCls}-clear`;

    if (clearIcon && React.isValidElement(clearIcon)) {
      return React.cloneElement(clearIcon, {
        className: classNames(clearIcon.props.className, clearIconPrefixCls),
      });
    }

    return <Icon type='close-circle' className={clearIconPrefixCls} theme='filled' />;
  }

  getDefaultLocale = () => {
    const defaultLocale = {
      ...zhCN,
      ...this.props.locale,
    };
    return defaultLocale;
  };

  renderTimePicker = (locale) => (
    <ConfigConsumer>
      {({ getPopupContainer: getContextPopupContainer, getPrefixCls }) => {
        const {
          getPopupContainer,
          prefixCls: customizePrefixCls,
          className,
          addon,
          placeholder,
          ...props
        } = this.props;
        const { size } = props;
        const pickerProps = omit(props, ['defaultValue', 'suffixIcon', 'allowEmpty', 'allowClear']);

        const format = this.getDefaultFormat();
        const prefixCls = getPrefixCls('time-picker', customizePrefixCls);
        const pickerClassName = classNames(className, {
          [`${prefixCls}-${size}`]: !!size,
        });

        const pickerAddon = (panel) =>
          addon ? <div className={`${prefixCls}-panel-addon`}>{addon(panel)}</div> : null;

        return (
          <RcTimePicker
            {...generateShowHourMinuteSecond(format)}
            {...pickerProps}
            allowEmpty={this.getAllowClear()}
            prefixCls={prefixCls}
            getPopupContainer={getPopupContainer || getContextPopupContainer}
            ref={this.saveTimePicker}
            format={format}
            className={pickerClassName}
            value={this.state.value}
            placeholder={placeholder === undefined ? locale.placeholder : placeholder}
            onChange={this.handleChange}
            onOpen={this.handleOpenClose}
            onClose={this.handleOpenClose}
            addon={pickerAddon}
            inputIcon={this.renderInputIcon(prefixCls)}
            clearIcon={this.renderClearIcon(prefixCls)}
          />
        );
      }}
    </ConfigConsumer>
  );

  render() {
    return (
      <LocaleReceiver componentName='TimePicker' defaultLocale={this.getDefaultLocale()}>
        {this.renderTimePicker}
      </LocaleReceiver>
    );
  }
}

polyfill(TimePicker);

export default TimePicker;
