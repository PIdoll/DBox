import * as React from 'react';
import Tooltip from '../tooltip';
import Icon from '../icon';
import Button from '../button';

export default class Popconfirm extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-popover',
    transitionName: 'zoom-big',
    placement: 'topRight',
    trigger: 'click',
    okType: 'danger',
    icon: React.ReactNode
  };


  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({visible: nextProps.visible});
    }
  }

  getPopupDomNode() {
    return this
      .tooltip
      .getPopupDomNode();
  }

  onConfirm = (e) => {
    this.setVisible(false);
    const {onConfirm} = this.props;
    if (onConfirm) {
      onConfirm.call(this, e);
    }
  }

  onCancel = (e) => {
    this.setVisible(false);

    const {onCancel} = this.props;
    if (onCancel) {
      onCancel.call(this, e);
    }
  }

  onVisibleChange = (visible) => {
    this.setVisible(visible);
  }

  setVisible(visible) {
    const props = this.props;
    if (!('visible' in props)) {
      this.setState({visible});
    }

    const {onVisibleChange} = props;
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }

  saveTooltip = (node) => {
    this.tooltip = node;
  }

  render() {
    const {
      prefixCls,
      placement,
      title,
      okText,
      cancelText,
      okType,
      icon,
      ...restProps
    } = this.props;
    const overlay = (
      <div>
        <div className={`${prefixCls}-inner-content`}>
          <div className={`${prefixCls}-message`}>
            {icon || <Icon type='warning' />}
            <div className={`${prefixCls}-message-title`}>{title}</div>
          </div>
          <div className={`${prefixCls}-buttons`}>
            <Button onClick={this.onConfirm} type={okType} size='small'>{okText || '确定'}</Button>
            <Button onClick={this.onCancel} type='ghost' size='small'>{cancelText || '取消'}</Button>
          </div>
        </div>
      </div>
    );
    return (<Tooltip
      {...restProps}
      prefixCls={prefixCls}
      placement={placement}
      onVisibleChange={this.onVisibleChange}
      visible={this.state.visible}
      overlay={overlay}
      ref={this.saveTooltip} />);
  }
}
