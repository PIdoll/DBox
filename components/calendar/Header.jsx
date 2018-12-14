import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { PREFIX_CLS } from './Constants';
import MonthFormat from './timeFormat';
import Select from '../select';
import Icon from '../icon';

const Option = Select.Option;
// 设置全局时间语言环境
moment.locale('zh_cn');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthValue: null,
      yearValue: null
    }
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    locale: PropTypes.object,
    yearSelectOffset: PropTypes.number,
    yearSelectTotal: PropTypes.number,
    type: PropTypes.string,
    onValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    value: PropTypes.any,
    fullscreen: PropTypes.bool,
    mold: PropTypes.string
  }

  static defaultProps = {
    prefixCls: `${PREFIX_CLS}-header`,
    yearSelectOffset: 10,
    yearSelectTotal: 20
  }

  componentDidMount() {
    this.setState({
      monthNumber: moment().month(),
      monthValue: MonthFormat(moment().month()),
      yearValue: moment().year()
    })
  }

  // 右边 > 图标
  handleProIncreaseMonth = () => {
    // debugger;
    let month;
    let year;
    const { monthNumber, yearValue } = this.state;
    month = monthNumber;
    year = yearValue;
    month++;
    if (month >= 12) {
      month = 0;
      // 若将次函数放入setState的第二个函数参数内，次函数的执行结果将会是12月的数据
      this.onMonthChange(month);
      this.setState({
        monthValue: MonthFormat(month),
        monthNumber: month,
        yearValue: year + 1
      }, () => {
        this.state.yearValue !== year && this.onYearChange(this.state.yearValue)
      });
      return false;
    }
    this.setState({
      monthValue: MonthFormat(month),
      monthNumber: month,
      yearValue: year
    }, () => {
      this.onMonthChange(this.state.monthNumber);
      this.state.yearValue !== year && this.onYearChange(this.state.yearValue)
    });
  }

  // 左边 < 图标
  handleDecIncreaseMonth = () => {
    let month;
    let year;
    const { monthNumber, yearValue } = this.state;
    month = monthNumber;
    year = yearValue;
    month--;
    if (month < 0) {
      month = 11;
      this.onMonthChange(month);
      this.setState({
        monthValue: MonthFormat(month),
        monthNumber: month,
        yearValue: year - 1
      }, () => {
        this.state.yearValue !== year && this.onYearChange(this.state.yearValue)
      });
      return false;
    }
    this.setState({
      monthValue: MonthFormat(month),
      monthNumber: month,
      yearValue: year
    }, () => {
      this.onMonthChange(this.state.monthNumber);
      this.state.yearValue !== year && this.onYearChange(this.state.yearValue)
    });
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
        style={{ width: 75, height: 24 }}>
        {options}
      </Select>
    );
  }

  getMonthsLocale(value) {
    const current = moment(value).clone();
    const localeData = moment(value).localeData();
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
        onChange={this.onMonthChange}
        style={{ width: 58, height: 24 }}>
        {options}
      </Select>
    );
  }

  onYearChange = (year) => {
    const { value, validRange } = this.props;
    const newValue = moment(value).clone();
    newValue.year(parseInt(year, 10));
    if (validRange) {
      const [start, end] = validRange;
      const newYear = moment(newValue).get('year');
      const newMonth = moment(newValue).get('month');
      if (newYear === moment(end).get('year') && newMonth > moment(end).get('month')) {
        newValue.month(moment(end).get('month'));
      }
      if (newYear === moment(start).get('year') && newMonth < moment(start).get('month')) {
       newValue.month(moment(start).get('month'));
      }
    }
    const onValueChange = this.props.onValueChange;
    if (onValueChange) {
      onValueChange(newValue);
    }
  }

  onMonthChange = (month) => {
    const newValue = moment(this.props.value).clone();
    newValue.month(parseInt(month, 10));
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

  getCalendarHeaderNode = (node) => {
    this.getCalendarHeaderNode = node;
  }
  render() {
    const { type, value, prefixCls, mold } = this.props;
    const { monthValue, yearValue } = this.state;
    const yearSelect = this.getYearSelectElement(moment(value).year());
    const monthSelect = type === 'date'
      ? this.getMonthSelectElement(moment(value).month(), this.getMonthsLocale(value)) : null;
    return (
      mold !== 'backdrop' ? (<div
        className={`${prefixCls}-header`}
        ref={this.getCalenderHeaderNode}>
        <div className='title'>日历</div>
        <div>
          {yearSelect}
          {monthSelect}
        </div>
      </div>) : (<div
        className={`${prefixCls}-backdrop-header`}
        ref={this.getCalenderHeaderNode}>
        <Icon type='pro-left' className={`${prefixCls}-backdrop-header-left`} onClick={this.handleDecIncreaseMonth} />
        <div className={`${prefixCls}-backdrop-header-time`}>
          {`${yearValue}年`}&nbsp;&nbsp;{monthValue}
        </div>
        <Icon type='pro-right' className={`${prefixCls}-backdrop-header-right`} onClick={this.handleProIncreaseMonth} />
      </div>)
    )
  }
}

