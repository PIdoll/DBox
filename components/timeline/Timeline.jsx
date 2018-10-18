
import React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import PropTypes from 'prop-types';
import './style/index';

export default class Timeline extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-timeline',
  }

  static proprType = {
    prefixCls: PropTypes.string,
    children: PropTypes.node,
    pending: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { prefixCls, children, pending, className, ...restProps } = this.props;

    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-pending`]: !!pending,
      [className]: className,
    });
    return (
      <ul {...restProps} className={classString}>
        {
          React.Children.map(children, (ele, idx) =>
            React.cloneElement(ele, {
              last: idx === children.length - 1,
            })
          )
        }
        {(pending)
          ? <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
          : null}
      </ul>
    );
  }
}
