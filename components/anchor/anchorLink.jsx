import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class AnchorLink extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-anchor',
    href: '#',
  }
  static contextTypes = {
    idollAnchor: PropTypes.object,
  }
  componentDidMount = () => {
    this.context.idollAnchor.registerLink(this.props.href);
  }
  componentWillUnmount = () => {
    this.context.idollAnchor.unregisterLink(this.props.href);
  };

  handleClick = () => {
    this.context.idollAnchor.scrollTo(this.props.href)
  }
  render() {
    const { prefixCls, href, title, children } = this.props;
    const active = this.context.idollAnchor.activeLink === href;
    const wrapperClassName = classNames(
      `${prefixCls}-link`,
      { [`${prefixCls}-link-active`]: active }
    )
    const titleClassName = classNames(
      `${prefixCls}-link-title`,
      { [`${prefixCls}-link-title-active`]: active, }
    )
    return (
      <div className={wrapperClassName}>
        <a className={titleClassName} href={href} title={typeof title === 'string' ? title : ''} onClick={this.handleClick}>{title}</a>
        {children}
      </div>
    )
  }
}
