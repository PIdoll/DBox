import React, { cloneElement } from 'react';
import RcTooltip from 'rc-tooltip';
import classNames from 'classnames';
import getPlacements from './placements';
export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.visible || !!props.defaultVisible || false,
    };
  }
  static defaultProps = {
    prefixCls: 'idoll-tooltip',
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
  }
  onVisibleChange = (visible) => {
    const { onVisibleChange } = this.props;
    if (!('visible' in this.props)) {
      this.setState({visible});
    }
    if (onVisibleChange && !this.isNoTitle()) {
      onVisibleChange(visible);
    }
  }
  isNoTitle() {
    // overlay是为了兼容老版本
    const { title, overlay } = this.props;
    return !title && !overlay;
  }
  saveTooltip = (node) => {
    this.tooltip = node;
  }
  getPopupDomNode() {
    console.log(this.tooltip)
    return this.tooltip.getPopupDomNode();
  }
  // Tooltip在不可使用的button中无法隐藏的问题
  // Chrome中不可用button不会触发鼠标事件
  getDisabledCompatibleChildren(element) {
    if ((element.type === 'button') && (element.props.disabled && this.isHoverTrigger())) {
      const spanStyle = {
        // ！！重要：默认设置为inline-block
        display: 'inline-block',
        cursor: 'not-allowed',
      }
      const buttonStyle = {
        pointerEvents: 'none'
      }
      const child = cloneElement(element, {
        style: buttonStyle,
        className: null,
      })
      return (<span style={spanStyle} className={element.props.className}>{child}</span>)
    }
    return element;
  }
  // 判断tooltip是否是hover触发的
  isHoverTrigger() {
    const { trigger } = this.props;
    if (!trigger || trigger === 'hover') {
      return true;
    }
    if (Array.isArray(trigger)) {
      return trigger.indexOf('hover') >= 0;
    }
    return false;
  }
  getPlacements() {
    const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = this.props;
    return builtinPlacements || getPlacements({
      arrowPointAtCenter,
      verticalArrowShift: 8,
      autoAdjustOverflow,
    });
  }
  render() {
    // getTooltipContainer已经被重命名为getPopupContainer
    const { prefixCls, overlay, title, children, openClassName, getPopupContainer, getTooltipContainer } = this.props;
    let visible = this.state.visible;
    // 当没有传入“title”属性时，隐藏tooltip
    if (!('visible' in this.props) && this.isNoTitle()) {
      visible = false;
    }
    const child = this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : <span>{children}</span>)
    const childProps = child.props;
    const childCls = classNames(childProps.className, {
      [openClassName || `${prefixCls}-open`]: true,
    })
    return (
      <RcTooltip
        ref={this.saveTooltip}
        overlay={overlay || title || ''}
        visible={visible}
        onVisibleChange={this.onVisibleChange}
        getTooltipContainer={getPopupContainer || getTooltipContainer}
        builtinPlacements={this.getPlacements()}
        {...this.props}
        >
        {visible ? cloneElement(child, {className: childCls}) : child}
      </RcTooltip>
    );
  }
}
