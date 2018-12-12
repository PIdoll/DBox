
// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import Animate from 'rc-animate';
// import isCssAnimationSupported from '../_util/isCssAnimationSupported';
// import omit from 'omit.js';
// import './style/index';

// export default class Spin extends React.Component {
//   static defaultProps = {
//     prefixCls: 'idoll-spin',
//     spinning: true,
//     size: 'default',
//     wrapperClassName: ''
//   }

//   static propTypes = {
//     prefixCls: PropTypes.string,
//     className: PropTypes.string,
//     spinning: PropTypes.bool,
//     size: PropTypes.oneOf(['small', 'default', 'large']),
//     wrapperClassName: PropTypes.string,
//     indicator: PropTypes.node,
//     style: PropTypes.object,
//     tip: PropTypes.string,
//     delay: PropTypes.number,
//     debounceTimeout: PropTypes.number,
//     delayTimeout: PropTypes.number,
//     notCssAnimationSupported: PropTypes.bool
//   };

//   constructor(props) {
//     super(props);
//     const spinning = props.spinning;
//     const notCssAnimationSupported = props.notCssAnimationSupported;
//     this.state = {
//       spinning,
//       notCssAnimationSupported,
//     }
//   }

//   isNestedPattern() {
//     return !!(this.props && this.props.children);
//   }

//   componentDidMount() {
//     if (!isCssAnimationSupported()) {
//       // show text in IE9
//       this.setState({
//         notCssAnimationSupported: true,
//       });
//     }
//   }

//   componentWillUnmount() {
//     if (this.debounceTimeout) {
//       clearTimeout(this.debounceTimeout);
//     }
//     if (this.delayTimeout) {
//       clearTimeout(this.delayTimeout);
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     const currentSpinning = this.props.spinning;
//     const spinning = nextProps.spinning;
//     const { delay } = this.props;

//     if (this.debounceTimeout) {
//       clearTimeout(this.debounceTimeout);
//     }
//     if (currentSpinning && !spinning) {
//       this.debounceTimeout = window.setTimeout(() => this.setState({ spinning }), 200);
//       if (this.delayTimeout) {
//         clearTimeout(this.delayTimeout);
//       }
//     } else {
//       if (spinning && delay && !isNaN(Number(delay))) {
//         if (this.delayTimeout) {
//           clearTimeout(this.delayTimeout)
//         }
//         this.delayTimeout = window.setTimeout(() => this.setState({ spinning }), delay);
//       } else {
//         this.setState({ spinning });
//       }
//     }
//   }
//   render() {
//     const { className, size, prefixCls, tip, wrapperClassName, indicator, ...resProps } = this.props;
//     const { spinning, notCssAnimationSupported } = this.state;

//     const spinClassName = classNames(prefixCls, {
//       [`${prefixCls}-sm`]: size === 'small',
//       [`${prefixCls}-lg`]: size === 'large',
//       [`${prefixCls}-spinning`]: spinning,
//       [`${prefixCls}-show-text`]: !!tip || notCssAnimationSupported
//     }, className);

//     // fix http://fb.me/react-unknow-prop
//     const divProps = omit(resProps, [
//       'spinning',
//       'delay'
//     ]);

//     const spinIndicator = indicator || (
//       <span className={`${prefixCls}-dot`}>
//         <i />
//       </span>
//     );

//     const spinElement = (
//       <div {...divProps} className={spinClassName}>
//         {spinIndicator}
//         {tip ? <div className={`${prefixCls}-text`}>{tip}</div> : null}
//       </div>
//     );
//     if (this.isNestedPattern()) {
//       let animateClassName = prefixCls + '-nested-loading';
//       if (wrapperClassName) {
//         animateClassName += ' ' + wrapperClassName;
//       }
//       const containerClassName = classNames({
//         [`${prefixCls}-container`]: true,
//         [`${prefixCls}-blur`]: spinning
//       });
//       return (
//         <Animate
//           {...divProps}
//           component='div'
//           className={animateClassName}
//           style={null}
//           transitionName='fade'
//         >
//           {spinning && <div key='loading'>{spinElement}</div>}
//           <div className={containerClassName} key='container'>
//             {this.props.children}
//           </div>
//         </Animate>
//       );
//     }
//     return spinElement;
//   }
// }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'rc-animate';
import omit from 'omit.js';

let defaultIndicator = null;

function renderIndicator(props) {
  // console.log(typeof (...props.color));
  const { prefixCls, indicator, color } = props;
  const dotClassName = `${prefixCls}-dot`;
  if (React.isValidElement(indicator)) {
    return React.cloneElement(indicator, {
      className: classNames(indicator.props.className, dotClassName),
    });
  }

  if (React.isValidElement(defaultIndicator)) {
    return React.cloneElement(defaultIndicator, {
      className: classNames(defaultIndicator.props.className, dotClassName),
    });
  }

  return (
    <span className={classNames(dotClassName, `${prefixCls}-dot-spin`)}>
      <i style={{borderColor: color ? color.join(' ') : ''}} />
      {/* <i />
      <i />
      <i /> */}
    </span>
  );
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

class Spin extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: '',
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    spinning: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'small', 'large']),
    wrapperClassName: PropTypes.string,
    indicator: PropTypes.node,
  };

  static setDefaultIndicator(indicator) {
    defaultIndicator = indicator;
  }

  constructor(props) {
    super(props);

    const { spinning, delay } = props;
    this.state = {
      spinning: spinning && !shouldDelay(spinning, delay),
    };
  }

  isNestedPattern() {
    return !!(this.props && this.props.children);
  }

  componentDidMount() {
    const { spinning, delay } = this.props;
    if (shouldDelay(spinning, delay)) {
      this.shouldTimeout = window.setTimeout(this.delayUpdateSpinning, delay);
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  componentDidUpdate() {
    const _this = this;
    const currentSpinning = this.state.spinning;
    const spinning = this.props.spinning;
    if (currentSpinning === spinning) {
      return false;
    }
    const { delay } = this.props;

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    if (currentSpinning && !spinning) {
      this.debounceTimeout = window.setTimeout(() => this.setState({ spinning }), 200);
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    } else {
      if (shouldDelay(spinning, delay)) {
        if (this.delayTimeout) {
          clearTimeout(this.delayTimeout);
        }
        this.delayTimeout = window.setTimeout(this.delayUpdateSpinning, delay);
      } else {
        // this.setState({ spinning });
        (function() {
          _this.setState({ spinning })
        }())
      }
    }
  }

  delayUpdateSpinning = () => {
    const { spinning } = this.props;
    if (this.state.spinning !== spinning) {
      this.setState({ spinning });
    }
  };

  render() {
    const {className, size, prefixCls, tip, wrapperClassName, ...restProps} = this.props;
    const { spinning } = this.state;

    const spinClassName = classNames(prefixCls, {
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-spinning`]: spinning,
      [`${prefixCls}-show-text`]: !!tip,
    }, className);

    const divProps = omit(restProps, [
      'spinning',
      'delay',
      'indicator',
    ]);

    const spinElement = (
      <div {...divProps} className={spinClassName}>
        {renderIndicator(this.props)}
        {tip ? <div className={`${prefixCls}-text`}>{tip}</div> : null}
      </div>
    );
    if (this.isNestedPattern()) {
      let animateClassName = prefixCls + '-nested-loading';
      if (wrapperClassName) {
        animateClassName += ' ' + wrapperClassName;
      }

      const containerClassName = classNames({
        [`${prefixCls}-container`]: true,
        [`${prefixCls}-blur`]: spinning,
      });
      return (
        <Animate
          {...divProps}
          component='div'
          className={animateClassName}
          style={null}
          transitionName='fade'
          >
          {spinning && <div key='loading'>{spinElement}</div>}
          <div className={containerClassName} key='container'>
            {this.props.children}
          </div>
        </Animate>
      );
    }
    return spinElement
  }
}

export default Spin;

