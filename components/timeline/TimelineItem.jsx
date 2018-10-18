import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class TimelineItem extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-timeline',
    color: 'blue',
    last: false,
    pending: false
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    color: PropTypes.string,
    last: PropTypes.bool,
    pending: PropTypes.bool,
    className: PropTypes.string,
    dot: PropTypes.node
  }

  render() {
      const { prefixCls, color, last, children, pending, className, dot, ...restProps } = this.props;

      const itemClassName = classNames({
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-last`]: last,
        [`${prefixCls}-item-pending`]: pending,
        [className]: className,
      });

      const dotClassName = classNames({
        [`${prefixCls}-item-head`]: true,
        [`${prefixCls}-item-head-custom`]: dot,
        [`${prefixCls}-item-head-${color}`]: true
      });

      return (
        <li {...restProps} className={itemClassName}>
          <div className={`${prefixCls}-item-tail`} />
          <div
            className={dotClassName}
            style={{ borderColor: /blue|red|green/.test(color) ? null : color }}
        >
            {dot}
          </div>
          <div className={`${prefixCls}-item-content`}>
            {children}
          </div>
        </li>
      )
  }
}
