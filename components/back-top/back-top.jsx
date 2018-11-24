import React from 'react';
import Animate from 'rc-animate';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'omit.js';
import getScroll from '../_util/getScroll';
import raf from 'raf';

import './style/index';

const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  } else {
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
  }
};

function noop () {};

function getDefaultTarget() {
  return window;
}

export default class BackTop extends React.Component {
  static propTypes = {
    visibilityHeight: PropTypes.number,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.element,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    visibilityHeight: 400
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  getCurrentScrollTop = () => {
    const getTarget = this.props.target || getDefaultTarget;
    const targetNode = getTarget();
    if (targetNode === window) {
      return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    }
    return targetNode.scrollTop;
  }

  scrollToTop = (e) => {
    const scrollTop = this.getCurrentScrollTop();
    const startTime = Date.now();
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
      if (time < 450) {
        raf(frameFunc);
      } else {
        this.setScrollTop(0);
      }
    };
    raf(frameFunc);
    (this.props.onClick || noop)(e);
  }

  setScrollTop(value) {
    const getTarget = this.props.target || getDefaultTarget;
    const targetNode = getTarget();
    if (targetNode === window) {
      document.body.scrollTop = value;
      document.documentElement.scrollTop = value;
    } else {
      targetNode.scroll = value
    }
  }

  handleScroll = () => {
    const { visibilityHeight, target = getDefaultTarget } = this.props;
    const scrollTop = getScroll(target(), true);
    this.setState({
      visible: scrollTop > visibilityHeight
    })
  }

  componentDidMount () {
    const getTarget = this.props.target || getDefaultTarget;
    this.scrollEvent = addEventListener(getTarget(), 'scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount () {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }

  render () {
    const { prefixCls = 'idoll-back-top', className = '', children } = this.props;
    const classString = classNames(prefixCls, className);

    const defaultElement = (
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-icon`} />
      </div>
    );

    const divProps = omit(this.props, [
      'prefixCls',
      'className',
      'children',
      'visibilityHeight',
      'target',
    ]);

    const backTopBtn = this.state.visible ? (
      <div {...divProps} className={classString} onClick={this.scrollToTop}>
        { children || defaultElement }
      </div>
    ) : null;

    return (
      <Animate component='' transitionName='fade'>
        {backTopBtn}
      </Animate>
    )
  }
}
