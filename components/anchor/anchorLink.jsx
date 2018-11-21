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
  componentWillReceiveProps(nextProps) {
    const { href } = nextProps;
    if (this.props.href !== href) {
      this.context.idollAnchor.unregisterLink(this.props.href);
      this.context.idollAnchor.registerLink(href);
    }
  }
  componentWillUnmount = () => {
    this.context.idollAnchor.unregisterLink(this.props.href);
  };

  handleClick = (e) => {
    const { scrollTo, onClick } = this.context.idollAnchor;
    const { href, title } = this.props;
    if (onClick) {
      onClick(e, { title, href });
    }
    scrollTo(href);
    // this.context.idollAnchor.scrollTo(this.props.href)
  }
  render() {
    const { prefixCls, href, title, children } = this.props;
    const active = this.context.idollAnchor.activeLink === href;
    const wrapperClassName = classNames(
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
