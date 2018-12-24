
import React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import PropTypes from 'prop-types';
import './style/index';
import Icon from '../icon/index';

export default class Timeline extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-timeline',
    reverse: false,
  }

  static proprType = {
    prefixCls: PropTypes.string,
    children: PropTypes.node,
    pending: PropTypes.node,
    className: PropTypes.string
  }

  render() {
    const { prefixCls, children, pending, pendingDot, reverse, className, ...restProps } = this.props;

    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-pending`]: !!pending,
      [`${prefixCls}-reverse`]: !!reverse,
      [className]: className,
    });

    const pendingItem = pending ? (
      <TimelineItem
        pending={!!pending}
        dot={pendingDot || <Icon type='loading' />}
      >
        {pendingNode}
      </TimelineItem>
    ) : null;

    const timeLineItems = reverse
    ? [pendingItem, ...React.Children.toArray(children).reverse()]
    : [...React.Children.toArray(children), pendingItem];

    const truthyItems = timeLineItems.filter(item => !!item);
    const itemsCount = React.Children.count(truthyItems);
    const lastCls = `${prefixCls}-item-last`;
    const items = React.Children.map(truthyItems, (ele, idx) =>
      React.cloneElement(ele, {
        className: classNames([
          ele.props.className,
          (!reverse && !!pending)
            ? (idx === itemsCount - 2) ? lastCls : ''
            : (idx === itemsCount - 1) ? lastCls : '',
        ]),
      }),
    );

    return (
      // <ul {...restProps} className={classString}>
      //   {
      //     React.Children.map(children, (ele, idx) =>
      //       React.cloneElement(ele, {
      //         last: idx === children.length - 1,
      //       })
      //     )
      //   }
      //   {(pending)
      //     ? <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
      //     : null}
      // </ul>
      <ul {...restProps} className={classString}>
        {items}
      </ul>
    );
  }
}
