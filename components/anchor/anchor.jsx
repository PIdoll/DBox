import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import addEventListener from 'rc-util/lib/Dom/addEventListener'

import getScroll from '../_util/getScroll'
import raf from 'raf';
import AnchorLink from './anchorLink'
import Affix from '../affix'

import './style/index'

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element) {
    return 0;
  }
  if (!element.getClientRects().length) {
    return 0;
  }
  // 获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }
    // 判断 container 是否是HTMLElement
    if (container && container.nodeType === 1) {
      return rect.top - container.getBoundingClientRect().top;
    }
  }
  return rect.top;
}
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
// 匹配以#开头，后面不含#的字符串
const sharpMatcherRegx = /#([^#]+)$/;
function scrollTo (href, offsetTop = 0, getContainer, callback) {
  const container = getContainer();
  const scrollTop = getScroll(container, true);
  const sharpLinkMatch = sharpMatcherRegx.exec(href);
  if (!sharpLinkMatch) { return false };
  const targetElement = document.getElementById(sharpLinkMatch[1]);
  if (!targetElement) {
    return false;
  }
  const eleOffsetTop = getOffsetTop(targetElement, container);
  const targetScrollTop = scrollTop + eleOffsetTop - offsetTop;
  const startTime = Date.now();
  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(time, scrollTop, targetScrollTop, 450);
    if (container === window) {
      window.scrollTo(window.pageXOffset, nextScrollTop);
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < 450) {
      raf(frameFunc);
    } else {
      callback();
    }
  };
  raf(frameFunc);
}
export default class Anchor extends React.Component {
  static Link = AnchorLink;

  static propTypes = {
    prefixCls: PropTypes.string,
    getContainer: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    offsetTop: PropTypes.number,
    onClick: PropTypes.func,
    bounds: PropTypes.number,
  }

  static defaultProps = {
    prefixCls: 'idoll-anchor',
    affix: true,
    showInkInFixed: false,
    getContainer: getDefaultContainer
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

  getChildContext () {
    const idollAnchor = {
      registerLink: (link) => {
        if (!(this.links.indexOf(link) >= 0)) {
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
      onClick: this.props.onClick,
    };
    return { idollAnchor };
  }
  componentDidMount() {
    const { getContainer } = this.props;
    this.scrollEvent = addEventListener(getContainer(), 'scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount = () => {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  }
  componentDidUpdate () {
    this.updateInk();
  }

  handleScroll = () => {
    if (this.animating) {
      return false;
    }
    const { offsetTop, bounds } = this.props;
    this.setState({
      activeLink: this.getCurrentAnchor(offsetTop, bounds)
    });
  }

  handleScrollTo = (link) => {
    const { offsetTop, getContainer } = this.props;
    this.animting = true;
    this.setState({
      activeLink: link
    });
    scrollTo(link, offsetTop, getContainer, () => {
      this.animating = false;
    });
  }

  getCurrentAnchor(offsetTop = 0, bounds = 5) {
    let activeLink = '';
    if (typeof document === 'undefined') {
      return activeLink;
    }
    const linkSections = [];
    const { getContainer } = this.props;
    const container = getContainer();
    this.links.forEach(link => {
      const sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
      if (!sharpLinkMatch) { return; };
      const target = document.getElementById(sharpLinkMatch[1]);
      if (target) {
        const top = getOffsetTop(target, container);
        if (top < offsetTop + bounds) {
          linkSections.push({
            link,
            top
          });
        }
      }
    });

    if (linkSections.length) {
      const maxSection = linkSections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
      return maxSection.link;
    }
    return '';
  }


  updateInk = () => {
    if (typeof document === 'undefined') {
      return;
    }
    const { prefixCls } = this.props;
    const anchorNode = ReactDOM.findDOMNode(this);
    const linkNode = anchorNode.getElementsByClassName(`${prefixCls}-link-title-active`)[0];
    if (linkNode) {
      this.inkNode.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
    }
  }

  saveInkNode = (node) => {
    this.inkNode = node;
  }
  render() {
    const { prefixCls,
      className = '',
      style,
      offsetTop,
      affix,
      showInkInFixed,
      children,
      getContainer
     } = this.props;
    const { activeLink } = this.state;
    const inkClass = classNames(`${prefixCls}-ink-ball`, {
      visible: activeLink
    });
    const wrapperClass = classNames(className, `${prefixCls}-wrapper`);

    const anchorClass = classNames(prefixCls, {
      'fixed': !affix && !showInkInFixed,
    })

    const wrapperStyle = {
      maxHeight: offsetTop ? `calc(100vh - ${offsetTop}px)` : '100vh',
      ...style,
    };
    const anchorContent = (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className={anchorClass}>
          <div className={`${prefixCls}-ink`}>
            <span className={inkClass} ref={this.saveInkNode} />
          </div>
          {children}
        </div>
      </div>
    )
    return !affix ? anchorContent : (
      <Affix offsetTop={offsetTop} target={getContainer}>
        {anchorContent}
      </Affix>
    )
  }
}
