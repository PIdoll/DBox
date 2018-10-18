import React from 'react';
import Tooltip from 'components/tooltip';

import warning from '../_util/warning';

export default class Popover extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-popover',
    placement: 'top',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayStyle: {},
  }
  saveTooltip = (node) => {
    this.tooltip = node;
  }
  getOverlay() {
    const { title, prefixCls, content } = this.props;
    warning(!('overlay' in this.props), `Popover[overlay]已被移除，请用Popover[content]替代`);
    return (
      <div>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        <div className={`${prefixCls}-inner-content`}>{content}</div>
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
