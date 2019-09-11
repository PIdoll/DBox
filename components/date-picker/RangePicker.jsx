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

// 支出多种校验格式，当格式为数组时默认选择第一个
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
  if (!value) {
    return;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value, value.clone().add(1, 'month')];
}

// 判断是否为空数组
function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(i => !i);
  }
  return false;
}

function fixLocale(value, localeCode) {
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
    // 默认state值的设置
    if ('value' in nextProps || prevState.open) {
      const value = nextProps.value || prevState.value || [];
      state = {
        value,
      };
      if (!shallowequal(nextProps.value, prevState.value)) {
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
    state = nextProps.value ? [] : state;
    return state
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
        'The value/defaultValue of RangePicker must be a moment object array !'
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

  // 日期面板打开时自动获焦
  componentDidUpdate(_, prevState) {
    if (!('open' in this.props) && prevState.open && !this.state.open) {
      this.focus();
    }
  }

  // 清除选中日期
  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ value: [] }, () => {
      this.handleChange(this.state.value);
    });
  };

  // 日期面板收起时清除hoverValue的值
  clearHoverValue = () => this.setState({ hoverValue: [] });

  // 日期面板发生变化时的回调
  handleChange = (value) => {
    const props = this.props;
    // 将输入值结构为开始值和结束值
    const [start, end] = value;
    // 清除已存在的值
    if (this.props.value) {
      this.setState({value: []}, () => {
        props.onChange(this.state.value, [formatDate(start, props.format), formatDate(end, props.format)]);
      })
      return false
    }

    // 将点击面板的选择值更新到输入框里
    this.setState({value})

    // 受控组件
    if (!('value' in props)) {
      this.setState(({ showDate }) => ({
        value,
        showDate: getShowDateFromValue(value) || showDate,
      }), () => {
        props.onChange(value, [formatDate(start, props.format), formatDate(end, props.format)]);
      });
    }
  };

  // 日历面板打开
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

  handleShowDateChange = (showDate) => {
    this.setState({ showDate })
  };

  // hover情况下的日历面板
  handleHoverChange = (hoverValue) => this.setState({ hoverValue });

  handleRangeMouseLeave = () => {
    if (this.state.open) {
      this.clearHoverValue();
    }
  };

  // 日历面板打开且输入正确的回调
  handleCalendarInputSelect = (value) => {
    this.setState(({ showDate }) => ({
      value,
      showDate: getShowDateFromValue(value) || showDate,
    }));
  };

  // 日历面板待选日期发生变化的回调
  onCalendarChange = (value) => {
    const props = this.props;
    const [start, end] = value;
    this.setState(({ showDate }) => ({
      value,
      showDate: getShowDateFromValue(value) || showDate,
    }));
    // 当开始值和结束值全部正确输入后向外返回值
    if (start && end) {
      props.onCalendarChange && props.onCalendarChange(value, [formatDate(start, props.format), formatDate(end, props.format)]);
    }
  }

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
        onChange={this.onCalendarChange}
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
    return <ConfigConsumer>{this.renderRangePicker}</ConfigConsumer>;
  }
}

polyfill(RangePicker);

export default RangePicker;

