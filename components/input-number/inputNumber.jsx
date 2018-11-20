/* import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import RcInputNumber from 'rc-input-number';
import Icon from '../icon';

export default class InputNumber extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    parser: PropTypes.func,
    precision: PropTypes.number,
    size: PropTypes.string,
    step: PropTypes.number,
  }
  static defaultProps = {
    prfixCls: 'idoll-input-number',
    step: 1,
  };

  render() {
    const { className, size, ...others } = this.props;
    const inputNumberClass = classNames({
      [`${this.props.prefixCls}-lg`]: size === 'large',
      [`${this.props.prefixCls}-sm`]: size === 'small',
    }, className);
    const upIcon = <Icon type='up' className={`${this.props.prefixCls}-handle-up-inner`} />
    const downIcon = <Icon type='down' className={`${this.props.prefixCls}-handle-down-inner`} />

    return (
      <RcInputNumber
        ref={(i) => { this.inputNumberRef = i }}
        className={inputNumberClass}
        upHandler={upIcon}
        downHandler={downIcon}
        {...others}
      />
    );
  }
  focus = () => {
    this.inputNumberRef.focus();
  }
  blur = () => {
    this.inputNumberRef.blur();
  }
} */

