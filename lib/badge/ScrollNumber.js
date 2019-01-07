'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNumberArray(num) {
  return num ? num.toString().split('').reverse().map(function (i) {
    return Number(i);
  }) : [];
}

var ScrollNumber = function (_React$Component) {
  (0, _inherits3.default)(ScrollNumber, _React$Component);

  function ScrollNumber(props) {
    (0, _classCallCheck3.default)(this, ScrollNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollNumber.__proto__ || (0, _getPrototypeOf2.default)(ScrollNumber)).call(this, props));

    _this.state = {
      animateStarted: true,
      count: props.count
    };
    return _this;
  }

  (0, _createClass3.default)(ScrollNumber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!(0, _isCssAnimationSupported2.default)()) {
        (0, _reactDom.findDOMNode)(this).className += ' not-support-css-animation';
      }
    }
  }, {
    key: 'getPositionByNum',
    value: function getPositionByNum(num, i) {
      if (this.state.animateStarted) {
        return 10 + num;
      }
      var currentDigit = getNumberArray(this.state.count)[i];
      var lastDigit = getNumberArray(this.lastCount)[i];
      // 同方向则在同一侧切换数字
      if (this.state.count > this.lastCount) {
        if (currentDigit >= lastDigit) {
          return 10 + num;
        }
        return 20 + num;
      }
      if (currentDigit <= lastDigit) {
        return 10 + num;
      }
      return num;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if ('count' in nextProps) {
        if (this.state.count === nextProps.count) {
          return false;
        }
        this.lastCount = this.state.count;
        // 复原数字初始位置
        this.setState({
          animateStarted: true
        }, function () {
          // 等待数字位置复原完毕
          // 开始设置完整的数字
          setTimeout(function () {
            _this2.setState({
              animateStarted: false,
              count: nextProps.count
            }, function () {
              _this2.props.onAnimated();
            });
          }, 5);
        });
      }
    }
  }, {
    key: 'renderNumberList',
    value: function renderNumberList(position) {
      var childrenToReturn = [];
      for (var i = 0; i < 30; i++) {
        var currentClassName = position === i ? 'current' : null;
        childrenToReturn.push(_react2.default.createElement(
          'p',
          { key: i, className: currentClassName },
          i % 10
        ));
      }
      return childrenToReturn;
    }
  }, {
    key: 'renderCurrentNumber',
    value: function renderCurrentNumber(num, i) {
      var position = this.getPositionByNum(num, i);
      var height = this.props.height;
      var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
      return (0, _react.createElement)('span', {
        className: this.props.prefixCls + '-only',
        style: {
          transition: removeTransition && 'none',
          WebkitTransform: 'translateY(' + -position * height + 'px)',
          transform: 'translateY(' + -position * height + 'px)',
          height: height
        },
        key: i
      }, this.renderNumberList(position));
    }
  }, {
    key: 'renderNumberElement',
    value: function renderNumberElement() {
      var _this3 = this;

      var state = this.state;
      if (!state.count || isNaN(state.count)) {
        return state.count;
      }
      return getNumberArray(state.count).map(function (num, i) {
        return _this3.renderCurrentNumber(num, i);
      }).reverse();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          prefixCls = _props.prefixCls,
          className = _props.className,
          otherProps = (0, _objectWithoutProperties3.default)(_props, ['component', 'prefixCls', 'className']);


      var restProps = (0, _object2.default)(otherProps, ['count', 'onAnimated']);
      var props = (0, _extends3.default)({}, restProps, {
        className: prefixCls + ' ' + className
      });
      return (0, _react.createElement)(component, props, this.renderNumberElement());
    }
  }]);
  return ScrollNumber;
}(_react2.default.Component);

ScrollNumber.defaultProps = {
  prefixCls: 'idoll-scroll-number',
  count: null,
  component: 'sup',
  height: 20,
  onAnimated: function onAnimated() {}
};
ScrollNumber.propTypes = {
  count: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  component: _propTypes2.default.string,
  onAnimated: _propTypes2.default.func,
  height: _propTypes2.default.number
};
exports.default = ScrollNumber;