import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class AnchorLink extends React.Component {
  state = {
    type: 'vertical'
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    href: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
  }
  static defaultProps = {
    prefixCls: 'idoll-anchor',
    href: '#',
  }
  static contextTypes = {
    idollAnchor: PropTypes.object,
  }
  componentDidMount = () => {
    this.context.idollAnchor.registerLink(this.props.href);
    if (this.context.idollAnchor.type || this.context.idollAnchor.type !== 'vertical') {
      this.setState({
        type: this.context.idollAnchor.type
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    const { href } = nextProps;
    const { type } = this.state;
    if (this.props.href !== href) {
      this.context.idollAnchor.unregisterLink(this.props.href);
      this.context.idollAnchor.registerLink(href);
    }
    if (type !== this.context.idollAnchor.type) {
      this.setState({
        type: this.context.idollAnchor.type
      })
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
    const { type } = this.state;
    const active = this.context.idollAnchor.activeLink === href;
    const wrapperClassName = classNames(`${prefixCls}-link`,
      { [`${prefixCls}-link-active`]: active }
    )
    const inlineClassName = classNames(`${prefixCls}-line-link`, {
      [`${prefixCls}-link-active`]: active
    });
    const titleClassName = classNames(
      `${prefixCls}-link-title`,
      { [`${prefixCls}-link-title-active`]: active, }
    )
    return (
      <div className={type === 'vertical' || !type ? wrapperClassName : inlineClassName}>
        <a className={titleClassName} href={href} title={typeof title === 'string' ? title : ''} onClick={this.handleClick}>{title}</a>
        {children}
      </div>
    )
  }
}
