import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { PREFIX_CLS } from './Constants';
import Select from '../select';

const Option = Select.Option;

export default class Header extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    locale: PropTypes.node,
    yearSelectOffset: PropTypes.number,
    yearSelectTotal: PropTypes.number,
    type: PropTypes.string,
    onValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    value: PropTypes.node,
    fullscreen: PropTypes.bool
  }

  static defaultProps = {
    prefixCls: `${PREFIX_CLS}-header`,
    yearSelectOffset: 10,
    yearSelectTotal: 20
  }

  getYearSelectElement(year) {
    const {
      yearSelectOffset,
      yearSelectTotal,
      locale,
      prefixCls,
      fullscreen,
      validRange
    } = this.props;
    let start = year - yearSelectOffset;
    let end = start + yearSelectTotal;
    if (validRange) {
      start = moment(validRange[0]).get('year');
      end = moment(validRange[1]).get('year') + 1;
    }
    const suffix = locale.year === '年' ? '年' : '';
    const options = [];
    for (let index = start; index < end; index++) {
      options.push(<Option key={`${index}`}>{index + suffix}</Option>)
    }
    return (
      <Select
        size={fullscreen ? 'default' : 'small'}
        dropdownMatchSelectWidth={false}
        className={`${prefixCls}-year-select`}
        value={String(year)}
        onChange={this.onYearChange}
        getPopupContainer={() => this.calenderHeaderNode}>
        {options}
      </Select>
    );
  }

  getMonthsLocale(value) {
    const current = moment(value).clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current.month(i);
      months.push(localeData.monthsShort(current));
    }
    return months;
  }

  getMonthSelectElement(month, months) {
    const props = this.props;
    const { prefixCls, fullscreen, validRange, value } = props;
    const options = [];
    let start = 0;
    let end = 12;
    if (validRange) {
      const [rangeStart, rangeEnd] = validRange;
      const currentYear = moment(value).get('year');
      if (moment(rangeEnd).get('year') === currentYear) {
        end = moment(rangeEnd).get('month') + 1;
      } else {
        start = moment(rangeStart).get('month');
      }
    }
    for (let index = start; index < end; index++) {
      options.push(<Option key={`${index}`}>{months[index]}</Option>);
    }
    return (
      <Select
        size={fullscreen ? 'default' : 'small'}
        dropdownMatchSelectWidth={false}
        className={`${prefixCls}-month-select`}
        value={String(month)}
        onCHange={this.onMonthChange}
        getPopupContainer={() => this.calenderHeaderNode}>
        {options}
      </Select>
    );
  }

  onYearChange = (year) => {
    const { value, validRange } = this.props;
    const newValue = moment(value).clone();
    moment(newValue).year(parseInt(year, 10));
    if (validRange) {
      const [start, end] = validRange;
      const newYear = moment(newValue).get('year');
      const newMonth = moment(newValue).get('month');
      if (newYear === moment(end).get('year') && newMonth > moment(end).get('month')) {
        moment(newValue).month(end.get('month'));
      }
      if (newYear === moment(start).get('year') && newMonth < moment(start).get('month')) {
        moment(newValue).month(moment(start).get('month'));
      }
    }
    const onValueChange = this.props.onValueChange;
    if (onValueChange) {
      onValueChange(newValue);
    }
  }

  onMonthChange = (month) => {
    const newValue = moment(this.props.value).clone();
    moment(newValue).month(parseInt(month, 10));
    const onValueChange = this.props.onValueChange;
    if (onValueChange) {
      onValueChange(newValue);
    }
  }

  onTypeChange = (e) => {
    const onTypeChange = this.props.onTypeChange;
    if (onTypeChange) {
      onTypeChange(e.target.value);
    }
  }
  render() {
    const { type, value, prefixCls } = this.props;
    const yearSelect = this.getYearSelectElement(moment(value).year());
    const monthSelect = type === 'date'
      ? this.getMonthSelectElement(value.month(), this.getMonthsLocale(value)) : null;
    return (
      <div
        className={`${prefixCls}-header`}
        ref={this.getCalenderHeaderNode}>
        {yearSelect}
        {monthSelect}
      </div>
    )
  }
}
