import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import addEventListener from 'rc-util/lib/Dom/addEventListener'

import getScroll from '../_util/getScroll'
// import getRequestAnimationFrame from '../_util/getRequestAnimationFrame'
import raf from 'raf';
import AnchorLink from './anchorLink'
import Affix from 'components/affix'

import './style/index.jsx'


const reqAnimFrame = getRequestAnimationFrame();
function getDefaultTarget() {
  return window;
}

function getOffsetTop(element) {
  if (!element) {
    return 0;
  }
  if (!element.getClientRects().length) {
    return 0;
  }
  // 获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    const doc = element.ownerDocument;
    const docElem = doc.documentElement;
    return rect.top - docElem.clientTop;
  }
  return rect.top;
}
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t * t) + b;
}
// 匹配以#开头，后面不含#的字符串
const sharpMatcherRegx = /#([^#]+)$/;
function scrollTo(href, offsetTop, target, callback) {
  const scrollTop = getScroll(target(), true);
  const sharpLinkMatch = sharpMatcherRegx.exec(href); // exec() 方法用于检索字符串中的正则表达式的匹配
  if (!sharpLinkMatch) {
    return;
  }
  const targetElement = document.getElementById(sharpLinkMatch[1]);
  if (!targetElement) {
    return;
  }
  const eleOffsetTop = getOffsetTop(targetElement);
  const targetScrollTop = scrollTop + eleOffsetTop - offsetTop;
  const startTime = Date.now();
  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    window.scrollTo(window.pageXOffset, easeInOutCubic(time, scrollTop, targetScrollTop, 450));
    if (time < 450) {
      reqAnimFrame(frameFunc);
    } else {
      callback();
    }
  };
  reqAnimFrame(frameFunc);
  history.pushState(null, '', href);
}
export default class Anchor extends React.Component {
  static Link = AnchorLink;
  static defaultProps = {
    prefixCls: 'idoll-anchor',
    affix: true,
    showInkInFixed: false,
  };
  static childContextTypes = {
    idollAnchor: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      activeLink: null,
    };
    this.links = [];
  }
  componentDidMount() {
    const getTarget = this.props.target || getDefaultTarget;
    this.scrollEvent = addEventListener(getTarget(), 'scroll', this.handleScroll);
    this.handleScroll()
  }
  componentWillUnmount = () => {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }
  componentDidUpdate () {
    this.updateInk();
    // console.log(this.inkNode.style.top);
  }
  updateInk = () => {
    if (typeof document === 'undefined') {
      return;
    }
    const { prefixCls } = this.props;
    const linkNode = ReactDOM.findDOMNode(this).getElementsByClassName(`${prefixCls}-link-title-active`)[0];
    if (linkNode) {
      this.inkNode.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
      // console.log(this.inkNode.style.top = '50px');
    }
  }

  handleScroll = () => {
    if (this.animating) {
      return;
    }
    const { offsetTop, bounds } = this.props;
    this.setState({
      activeLink: this.getCurrentAnchor(offsetTop, bounds),
    });
  }
  getCurrentAnchor(offsetTop = 0, bounds = 5) {
    let activeLink = '';
    if (typeof document === 'undefined') {
      return activeLink;
    }
    const linkSections = [];
    this.links.forEach(link => {
      const sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
      if (!sharpLinkMatch) {
        return;
      }
      const target = document.getElementById(sharpLinkMatch[1]);
      if (target && getOffsetTop(target) < offsetTop + bounds) {
        const top = getOffsetTop(target);
        linkSections.push({
          link,
          top,
        });
      }
    });
    if (linkSections.length) {
      const maxSection = linkSections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
      return maxSection.link;
    }
    return '';
  }
  getChildContext() {
    return {
      idollAnchor: {
        registerLink: (link) => {
          if (!this.links.includes(link)) {
            this.links.push(link);
          }
        },
        unregisterLink: (link) => {
          const index = this.links.indexOf(link);
          if (index !== -1) {
            this.links.splice(index, 1);
          }
        },
        activeLink: this.state.activeLink,
        scrollTo: this.handleScrollTo,
      }
    }
  }
  handleScrollTo = (link) => {
    const { offsetTop, target = getDefaultTarget } = this.props;
    this.animating = true;
    this.setState({ activeLink: link });
    scrollTo(link, offsetTop, target, () => {
      this.animating = false;
    })
  }
  saveInkNode = (node) => {
    this.inkNode = node;
  }
  render() {
    const { prefixCls, className = '', style, offsetTop, affix, showInkInFixed, children, } = this.props;
    const { activeLink } = this.state;
    const wrapperClass = classNames(className, `${prefixCls}-wrapper`);
    const wrapperStyle = {
      maxHeight: offsetTop ? `calc(100vh - ${offsetTop}px)` : '100vh',
      ...style,
    };
    const anchorClass = classNames(prefixCls, {
      'fixed': !affix && !showInkInFixed,
    });
    const inkClass = classNames(`${prefixCls}-ink-ball`, {
      visible: activeLink,
    });
    const anchorContent = (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className={anchorClass}>
          <div className={`${prefixCls}-ink`}><span className={inkClass} ref={this.saveInkNode} /></div>
          {children}
        </div>
      </div>
    )
    return affix ? anchorContent : (
      <Affix offsetTop={offsetTop}>
        {anchorContent}
      </Affix>
    )
  }
}
