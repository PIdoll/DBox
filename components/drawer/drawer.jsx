import React from 'react';
import PropTypes from 'prop-types';
import RcDrawer from 'rc-drawer';
import warning from 'warning';
import classNames from 'classnames';
import Icon from '../icon';
import './style/index';

// const DrawerContext: Context<Drawer | null> = createReactContext(null);
// const DrawerContext = Context<Drawer>;
// const ThemeContext: Context<Drawer> = createReactContext('light');

export default class Drawer extends React.Component {
  static propTypes = {
    closable: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    getContainer: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.bool,
    ]),
    maskClosable: PropTypes.bool,
    mask: PropTypes.bool,
    maskStyle: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.node,
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zIndex: PropTypes.number,
    prefixCls: PropTypes.string,
    placement: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'idoll-drawer',
    width: 256,
    height: 256,
    closable: true,
    placement: 'right',
    maskClosable: true,
    mask: true,
    level: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      push: false,
    };
  }

  // static parentDrawer  <Drawer />;
  componentDidUpdate(preProps) {
    if (preProps.visible !== this.props.visible && this.parentDrawer) {
      if (this.props.visible) {
        this.parentDrawer.push();
      } else {
        this.parentDrawer.pull();
      }
    }
  }
  close = (e => {
    if (this.props.visible !== undefined) {
      if (this.props.onClose) {
        this.props.onClose(e);
      }
      return false
    }
  })
  maskClick = (e) => {
    if (!this.props.maskClosable) {
      return;
    }
    this.close(e);
  }
  // push = () => {
  //   this.setState({
  //     push: true,
  //   });
  // }
  // pull = () => {
  //   this.setState({
  //     push: false,
  //   });
  // }
  onDestoryTransitionEnd = () => {
    const isDestroyOnClose = this.getDestoryOnClose();
    if (!isDestroyOnClose) {
      return;
    }
    if (!this.props.visible) {
      this.destoryClose = true;
      this.forceUpdate();
    }
  }

  getDestoryOnClose = () => (this.props.destroyOnClose && !this.props.visible);

  // get drawar push width or height
  // getPushTransform = (placement) => {
  //   if (placement === 'left' || placement === 'right') {
  //     return `translateX(${placement === 'left' ? 180 : -180}px)`;
  //   }
  //   if (placement === 'top' || placement === 'bottom') {
  //     return `translateY(${placement === 'top' ? 180 : -180}px)`;
  //   }
  // }
  // render drawer body dom
  renderBody = () => {
    if (this.destoryClose && !this.props.visible) {
      return null;
    }
    this.destoryClose = false;
    const { placement } = this.props;

    const containerStyle = placement === 'left' ||
      placement === 'right' ? {
        overflow: 'auto',
        height: '100%',
      } : {};

    const isDestroyOnClose = this.getDestoryOnClose();

    if (isDestroyOnClose) {
      // Increase the opacity transition, delete children after closing.
      containerStyle.opacity = 0;
      containerStyle.transition = 'opacity .3s';
    }
    const { prefixCls, title, closable } = this.props;

    // is have header dom
    let header;
    if (title) {
      header = (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{title}</div>
        </div>
      );
    }
    // is have closer button
    let closer;
    if (closable) {
      closer = (
        <button
          onClick={this.close}
          aria-label='Close'
          className={`${prefixCls}-close`}
        >
          <span className={`${prefixCls}-close-x`}>
            <Icon type='close' />
          </span>
        </button>
      );
    }

    return (
      <div
        className={`${prefixCls}-wrapper-body`}
        style={containerStyle}
        onTransitionEnd={this.onDestoryTransitionEnd}
      >
        {header}
        {closer}
        <div className={`${prefixCls}-body`} style={this.props.style}>
          {this.props.children}
        </div>
      </div>
    );
  }

  getRcDrawerStyle = () => {
    const { zIndex, placement, maskStyle } = this.props;
    return this.state.push
    ? {
      ...maskStyle,
      zIndex,
      transform: this.getPushTransform(placement),
    }
    : {
      ...maskStyle,
      zIndex,
    };
  }

  // render Provider for Multi-level drawe

  render() {
    const { placement, className, wrapClassName, width, height, ...rest } = this.props;
    warning(wrapClassName === undefined, 'wrapClassName is deprecated, please use className instead.');
    const haveMask = rest.mask ? '' : 'no-mask';
    const offsetStyle = {};
    if (placement === 'left' || placement === 'right') {
      offsetStyle.width = width;
    } else {
      offsetStyle.height = height;
    }
    return (
      <RcDrawer
        handler={false}
        {...rest}
        {...offsetStyle}
        open={this.props.visible}
        onMaskClick={this.maskClick}
        showMask={this.props.mask}
        placement={placement}
        style={this.getRcDrawerStyle()}
        className={classNames(wrapClassName, className, haveMask)}
    >
        {this.renderBody()}
      </RcDrawer>
    );
  }
}
