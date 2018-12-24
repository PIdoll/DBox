import React from 'react';
import Tooltip from '../tooltip';
import classNames from 'classnames';
import warning from '../_util/warning';

export default class Popover extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-popover',
    placement: 'topLeft',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayStyle: {},
  }
  saveTooltip = (node) => {
    this.tooltip = node;
  }
  getOverlay() {
    const { title, prefixCls, content, className, overlayClassName } = this.props;
    const menuClassName = classNames(className, `${prefixCls}-inner-content`, {
      [`${prefixCls}-inline-popover`]: overlayClassName,
    })
    warning(!('overlay' in this.props), `Popover[overlay]已被移除，请用Popover[content]替代`);
    return (
      <div>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        <div className={menuClassName}>{content}</div>
      </div>
    )
  }
  render() {
    return (
      <Tooltip
        {...this.props}
        ref={this.saveTooltip}
        overlay={this.getOverlay()}
      />
    )
  };
}
