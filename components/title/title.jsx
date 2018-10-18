import React from 'react';
import { PropTypes } from 'prop-types'
import classNames from 'classnames';

import Icon from 'components/icon'

import './style/index.jsx';

export default class Title extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-title',
    ghost: false,
    title: '标题'
  }
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
  }
  render() {
    const { prefixCls, icon, title, size, ghost, className, ...others } = this.props;
    const sizeCls = ({large: 'lg', small: 'sm'})[size] || '';
    const iconNode = icon ? <Icon type={icon} className={`${prefixCls}-icon`} /> : <i className={`${prefixCls}-default`} />
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-background-ghost`]: ghost,
      [className]: className
    })
    return (
      <div {...others} className={classString} >
        {iconNode}
        <span>{title}</span>
      </div>
    )
  };
}

