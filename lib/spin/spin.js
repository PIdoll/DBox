'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultIndicator = null;

function renderIndicator(props) {
  // console.log(typeof (...props.color));
  var prefixCls = props.prefixCls,
      indicator = props.indicator,
      color = props.color;

  var dotClassName = prefixCls + '-dot';
  if (_react2.default.isValidElement(indicator)) {
    return _react2.default.cloneElement(indicator, {
      className: (0, _classnames2.default)(indicator.props.className, dotClassName)
    });
  }

  if (_react2.default.isValidElement(defaultIndicator)) {
    return _react2.default.cloneElement(defaultIndicator, {
      className: (0, _classnames2.default)(defaultIndicator.props.className, dotClassName)
    });
  }

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(dotClassName, prefixCls + '-dot-spin') },
    _react2.default.createElement('i', { style: { borderColor: color ? color.join(' ') : '' } })
  );
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin = function (_React$Component) {
  (0, _inherits3.default)(Spin, _React$Component);
  (0, _createClass3.default)(Spin, null, [{
    key: 'setDefaultIndicator',
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  function Spin(props) {
    (0, _classCallCheck3.default)(this, Spin);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Spin.__proto__ || (0, _getPrototypeOf2.default)(Spin)).call(this, props));

    _initialiseProps.call(_this2);

    var spinning = props.spinning,
        delay = props.delay;

    _this2.state = {
      spinning: spinning && !shouldDelay(spinning, delay)
    };
    return _this2;
  }

  (0, _createClass3.default)(Spin, [{
    key: 'isNestedPattern',
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          spinning = _props.spinning,
          delay = _props.delay;

      if (shouldDelay(spinning, delay)) {
        this.shouldTimeout = window.setTimeout(this.delayUpdateSpinning, delay);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this3 = this;

      var _this = this;
      var currentSpinning = this.state.spinning;
      var spinning = this.props.spinning;
      if (currentSpinning === spinning) {
        return false;
      }
      var delay = this.props.delay;


      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      if (currentSpinning && !spinning) {
        this.debounceTimeout = window.setTimeout(function () {
          return _this3.setState({ spinning: spinning });
        }, 200);
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
          (function () {
            _this.setState({ spinning: spinning });
          })();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          className = _props2.className,
          size = _props2.size,
          prefixCls = _props2.prefixCls,
          tip = _props2.tip,
          wrapperClassName = _props2.wrapperClassName,
          restProps = (0, _objectWithoutProperties3.default)(_props2, ['className', 'size', 'prefixCls', 'tip', 'wrapperClassName']);
      var spinning = this.state.spinning;


      var spinClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3.default)(_classNames, prefixCls + '-show-text', !!tip), _classNames), className);

      var divProps = (0, _omit2.default)(restProps, ['spinning', 'delay', 'indicator']);

      var spinElement = _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, divProps, { className: spinClassName }),
        renderIndicator(this.props),
        tip ? _react2.default.createElement(
          'div',
          { className: prefixCls + '-text' },
          tip
        ) : null
      );
      if (this.isNestedPattern()) {
        var _classNames2;

        var animateClassName = prefixCls + '-nested-loading';
        if (wrapperClassName) {
          animateClassName += ' ' + wrapperClassName;
        }

        var containerClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-container', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-blur', spinning), _classNames2));
        return _react2.default.createElement(
          _rcAnimate2.default,
          (0, _extends3.default)({}, divProps, {
            component: 'div',
            className: animateClassName,
            style: null,
            transitionName: 'fade'
          }),
          spinning && _react2.default.createElement(
            'div',
            { key: 'loading' },
            spinElement
          ),
          _react2.default.createElement(
            'div',
            { className: containerClassName, key: 'container' },
            this.props.children
          )
        );
      }
      return spinElement;
    }
  }]);
  return Spin;
}(_react2.default.Component);

Spin.defaultProps = {
  prefixCls: 'idoll-spin',
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
Spin.propTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  spinning: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['default', 'small', 'large']),
  wrapperClassName: _propTypes2.default.string,
  indicator: _propTypes2.default.node
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.delayUpdateSpinning = function () {
    var spinning = _this4.props.spinning;

    if (_this4.state.spinning !== spinning) {
      _this4.setState({ spinning: spinning });
    }
  };
};

exports.default = Spin;