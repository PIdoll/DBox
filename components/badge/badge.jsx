import React from 'react';
import Animate from 'rc-animate';
import ScrollNumber from './ScrollNumber';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/index';

export default class Badge extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-badge',
    count: null,
    dot: false,
    overflowCount: 99
  }

  static propType = {
    count: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    dot: PropTypes.bool,
    overflowCount: PropTypes.number
  }

  render() {
    let { count, prefixCls, overflowCount, className, style, children, dot, ...restProps } = this.props;

    count = count > overflowCount ? `${overflowCount}+` : count;

    // dot mode don't need count
    if (dot) {
      count = '';
    }

    // null undefined "" "0" 0
    const hidden = (!count || count === '0') && !dot;
    const scrollNumberCls = prefixCls + (dot ? '-dot' : '-count');
    const badgeCls = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-not-a-wrapper`]: !children
    });

    return (
      <span className={badgeCls} title={count} style={null} {...restProps}>
        {children}
        <Animate
          component=''
          showProp='data-show'
          transitionName={`${prefixCls}-zoom`}
          transitionAppear
        >
          {
            hidden ? null
            : <ScrollNumber
              data-show={!hidden}
              className={scrollNumberCls}
              count={count}
              style={style}
            />
          }
        </Animate>
      </span>
    )
  }
}
