import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { PREFIX_CLS } from './Constants';
import Header from './Header';
import interopDefault from '../_util/interopDefault';
import zhCN from './locale/zh_CN.jsx';

import './style/index'

function noop() { return null; }

function zerofixed(v) {
  if (v < 10) {
    return `0${v}`;
  }
  return `${v}`;
}

export default class Calendar extends React.Component {
  static defaultProps = {
    locale: {},
    fullscreen: true,
    prefixCls: PREFIX_CLS,
    mode: 'month',
    onSelect: noop,
    onPanelChange: noop,
    onChange: noop,
    mold: ''
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    fullscreen: PropTypes.bool,
    dateCellRender: PropTypes.func,
    monthCellRender: PropTypes.func,
    dateFullCellRender: PropTypes.func,
    monthFullCellRender: PropTypes.func,
    locale: PropTypes.object,
    style: PropTypes.object,
    onPanelChange: PropTypes.func,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.object,
  }

  constructor(props) {
    super(props);

    const value = props.value || props.defaultValue || interopDefault(moment)();
    if (!interopDefault(moment).isMoment(value)) {
      throw new Error(
        'The value/defaultValue of Calendar must be a moment object after `antd@2.0`, ' +
        'see: https://u.ant.design/calendar-value',
      );
    }
    this.state = {
      value,
      mode: props.mode
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
    if ('mode' in nextProps && nextProps.mode !== this.props.mode) {
      this.setState({
        mode: nextProps.mode,
      })
    }
  }

  monthCellRender = (value) => {
    const { prefixCls, monthCellRender = noop } = this.props;
    return (
      <div className={`${prefixCls}-month`}>
        <div className={`${prefixCls}-value`}>
          {moment(value).localeDate().monthsShort(value)}
        </div>
        <div className={`${prefixCls}-content`}>
          {monthCellRender(value)}
        </div>
      </div>
    )
  }

  dateCellRender = (value) => {
    const { prefixCls, dateCellRender = noop } = this.props;
    return (
      <div className={`${prefixCls}-date`}>
        <div className={`${prefixCls}-value`}>
          {zerofixed(moment(value).date())}
        </div>
        <div className={`${prefixCls}-content`}>
          {dateCellRender(value)}
        </div>
      </div>
    )
  }

  setValue = (value, way) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (way === 'select') {
      if (this.props.onSelect) {
        this.props.onSelect(value);
      }
    } else if (way === 'changePanel') {
      this.onPanelChange(value, this.state.mode);
    }
  }

  setType = (type) => {
    const mode = (type === 'date') ? 'month' : 'year';
    if (this.state.mode !== mode) {
      this.setState({ mode });
      this.onPanelChange(this.state.value, mode);
    }
  }

  onHeaderValueChange = (value) => {
    this.setValue(value, 'changePanel');
  }

  onHeaderTypeChange = (type) => {
    this.setType(type);
  }

  onPanelChange = (value, mode) => {
    const { onPanelChange, onChange } = this.props;
    if (onPanelChange) {
      onPanelChange(value, mode);
    }
    if (onChange && value !== this.state.value) {
      onChange(value);
    }
  }

  onSelect = (value) => {
    this.setValue(value, 'select');
  }

  getDateRange = (validRange, disabledDate) => (current) => {
    if (!current) {
      return false;
    }
    const [startDate, endDate] = validRange;
    const inRange = !current.isBetween(startDate, endDate, 'days', '[]');
    if (disabledDate) {
      return (disabledDate(current) || inRange);
    }
    return inRange;
  }

  renderCalendar = (locale, localeCode) => {
    const { state, props } = this;
    const { value, mode } = state;
    if (value && localeCode) {
      moment(value).locale(localeCode);
    }

    const { prefixCls, style, className, fullscreen, dateFullCellRender, monthFullCellRender, mold } = props;
    const type = (mode === 'type') ? 'month' : 'date';

    let cls = className || '';
    if (fullscreen) {
      cls += (`${prefixCls}-fullscreen`);
    }

    const monthCellRender = monthFullCellRender || this.monthCellRender;
    const dateCellRender = dateFullCellRender || this.dateCellRender;

    let disabledDate = props.disabledDate;

    if (props.validRange) {
      disabledDate = this.getDateRange(props.validRange, disabledDate);
    }

    return (
      <div className={cls} style={style}>
        <Header
          fullscreen={fullscreen}
          type={type}
          value={value}
          mold={mold}
          locale={locale.lang}
          prefixCls={prefixCls}
          onTypeChange={this.onHeaderTypeChange}
          onValueChange={this.onHeaderValueChange}
          validRange={props.validRange} />
        <FullCalendar
          {...props}
          disabledDate={disabledDate}
          Select={noop}
          locale={locale.lang}
          type={type}
          prefixCls={prefixCls}
          showHeader={false}
          value={value}
          monthCellRender={monthCellRender}
          dateCellRender={dateCellRender}
          onSelect={this.onSelect} />
      </div>
    )
  }

  getDefaultLocale = () => {
    const result = {
      ...zhCN,
      ...this.props.locale
    };
    result.lang = {
      ...result.lang,
      ...(this.props.locale || {}).lang,
    };
    return result;
  }

  render() {
    return (
      <LocaleReceiver
        componentName='Calendar'
        defaultLocale={this.getDefaultLocale}>
        {this.renderCalendar}
      </LocaleReceiver>
    )
  }
}

