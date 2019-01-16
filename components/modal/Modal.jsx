import React from 'react';
// https://www.npmjs.com/package/rc-dialog
import Dialog from 'rc-dialog';
// https://www.npmjs.com/package/rc-util
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Button from '../button';
import './style/index';
import PropTypes from 'prop-types';

function noop() {}

let mousePosition;
let mousePositionEventBinded;

export default class Modal extends React.Component {
  state = {
    confirmLoading: false
  }
  static defaultProps = {
    prefixCls: 'idoll-modal',
    onOk: noop,
    onCancel: noop,
    width: 560,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    visible: false
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    align: PropTypes.object,
    footer: PropTypes.node,
    title: PropTypes.node,
    closable: PropTypes.bool
  }

  static contextTypes = {
    idollLocale: PropTypes.object
  }

  handleCancel = (e) => {
    this.props.onCancel(e);
  }

  handleOk = () => {
    this.props.onOk();
    this.setState({
      confirmLoading: true
    })
  }

  componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    addEventListener(document.documentElement, 'click', (e) => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 20ms内发生过点击事件，则从点击位置动画展示
      // 否则直接zoom展示
      // 这样可以兼容非点击方式展开
      setTimeout(() => (mousePosition = null), 20);
    });
    mousePositionEventBinded = true;
  }

  render() {
    let { okText, confirmLoading, cancelText, footer, visible } = this.props;

    if (this.context.idollLocale && this.context.idollLocale.Modal) {
      okText = okText || this.context.idollLocale.Modal.okText;
      cancelText = cancelText || this.context.idollLocale.Modal.cancelText;
    }

    const defaultFooter = [
      <Button
        key='cancel'
        type='ghost'
        onClick={this.handleCancel}
        >
        {cancelText || '取消'}
      </Button>,
      <Button
        key='confirm'
        type='primary'
        className={confirmLoading ? 'loading' : ''}
        loading={confirmLoading}
        onClick={this.handleOk}
      >
        {okText || '确定'}
      </Button>
    ];
    return (
      <Dialog
        onClose={this.handleCancel}
        footer={footer || defaultFooter}
        {...this.props}
        visible={visible}
        mousePosition={mousePosition}
      />
    );
  }
}
