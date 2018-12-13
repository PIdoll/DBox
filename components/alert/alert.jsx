
import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import Icon from '../icon/index';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';

import './style/index';

function noop() { };

export default class Alert extends React.Component {
  static propTypes = {
    closable: PropTypes.bool,
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
    message: PropTypes.node,
    closeText: PropTypes.node,
    showIcon: PropTypes.bool,
    banner: PropTypes.bool,
    style: PropTypes.object,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    icon: PropTypes.node,
    iconType: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      closing: true,
      closed: false
    };
  }
  handleClose = (e) => {
    e.preventDefault();
    let dom = ReactDOM.findDOMNode(this);
    dom.style.height = `${dom.offsetHeight}px`;
    // Magic code
    // 重复设置一次之后才能正确设置 height
    dom.style.height = `${dom.offsetHeight}px`;

    this.setState({
      closing: false
    });
    (this.props.onClose || noop)(e);
  }
  animationEnd = () => {
    this.setState({
      closed: true,
      closing: true
    });
    (this.props.afterClose || noop)();
  }
  render() {
    let {
      closable, description, type, prefixCls = 'idoll-alert', message, closeText, showIcon, banner,
      className = '', style, iconType, icon
    } = this.props;

    // banner 模式默认有Icon
    showIcon = banner && showIcon === undefined ? true : showIcon;

    // banner 模式默认为警告
    type = banner && type === undefined ? 'warning' : type || 'info';

    if (!iconType) {
      switch (type) {
        case 'success':
          iconType = 'check-circle';
          break;
        case 'info':
          iconType = 'warning-circle';// info-circle
          break;
        case 'error':
          iconType = 'close-circle';// cross-circle
          break;
        case 'warning':
          iconType = 'warning-circle';
          break;
        default:
          iconType = 'default';
      }
    }

    const alertCls = classNames(prefixCls, `${prefixCls}-${type}`, {
      [`${prefixCls}-close`]: !this.state.closing,
      [`${prefixCls}-with-description`]: !!description,
      [`${prefixCls}-no-description`]: !description,
      [`${prefixCls}-no-icon`]: !showIcon,
      [`${prefixCls}-banner`]: !!banner
    }, className);

    if (closeText) {
      closable = true;
    }

    const closeIcon = closable ? (
      <a onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
        {closeText || <Icon type='close' />}
      </a>
    ) : null;

    const dataOrAriaProps = getDataOrAriaProps(this.props);

    const iconNode = (icon && (
      React.isValidElement(icon)
        ? React.cloneElement(
          icon,
          {
            className: classNames({
              [icon.props.className]: icon.props.className,
              [`${prefixCls}-icon`]: true,
            }),
          },
        ) : <span className={`${prefixCls}-icon`}>{icon}</span>)) || (
        <Icon className={`${prefixCls}-icon`} type={iconType} />
      );
    return (
      this.state.closed ? null : (
        <Animate
          component=''
          showProp='data-show'
          transitionName={`${prefixCls}-slide-up`}
          onEnd={this.animationEnd}>
          <div data-show={this.state.closing} className={alertCls} style={style} {...dataOrAriaProps}>
            { showIcon ? iconNode : null }
            <span className={`${prefixCls}-message`}>{message}</span>
            <span className={`${prefixCls}-description`}>{description}</span>
            { closeIcon }
          </div>
        </Animate>
      )
    );
  }
}
