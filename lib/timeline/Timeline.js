'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style/index');

var _index = require('../icon/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function (_React$Component) {
  (0, _inherits3.default)(Timeline, _React$Component);

  function Timeline() {
    (0, _classCallCheck3.default)(this, Timeline);
    return (0, _possibleConstructorReturn3.default)(this, (Timeline.__proto__ || (0, _getPrototypeOf2.default)(Timeline)).apply(this, arguments));
  }

  (0, _createClass3.default)(Timeline, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          children = _props.children,
          pending = _props.pending,
          pendingDot = _props.pendingDot,
          reverse = _props.reverse,
          className = _props.className,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'children', 'pending', 'pendingDot', 'reverse', 'className']);


      var pendingNode = typeof pending === 'boolean' ? null : pending;
      var classString = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-pending', !!pending), (0, _defineProperty3.default)(_classNames, prefixCls + '-reverse', !!reverse), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

      var pendingItem = pending ? _react2.default.createElement(
        _TimelineItem2.default,
        {
          pending: !!pending,
          dot: pendingDot || _react2.default.createElement(_index2.default, { type: 'loading' })
        },
        pendingNode
      ) : null;

      var timeLineItems = reverse ? [pendingItem].concat((0, _toConsumableArray3.default)(_react2.default.Children.toArray(children).reverse())) : [].concat((0, _toConsumableArray3.default)(_react2.default.Children.toArray(children)), [pendingItem]);

      var truthyItems = timeLineItems.filter(function (item) {
        return !!item;
      });
      var itemsCount = _react2.default.Children.count(truthyItems);
      var lastCls = prefixCls + '-item-last';
      var items = _react2.default.Children.map(truthyItems, function (ele, idx) {
        return _react2.default.cloneElement(ele, {
          className: (0, _classnames2.default)([ele.props.className, !reverse && !!pending ? idx === itemsCount - 2 ? lastCls : '' : idx === itemsCount - 1 ? lastCls : ''])
        });
      });

      return (
        // <ul {...restProps} className={classString}>
        //   {
        //     React.Children.map(children, (ele, idx) =>
        //       React.cloneElement(ele, {
        //         last: idx === children.length - 1,
        //       })
        //     )
        //   }
        //   {(pending)
        //     ? <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
        //     : null}
        // </ul>
        _react2.default.createElement(
          'ul',
          (0, _extends3.default)({}, restProps, { className: classString }),
          items
        )
      );
    }
  }]);
  return Timeline;
}(_react2.default.Component);

Timeline.defaultProps = {
  prefixCls: 'idoll-timeline',
  reverse: false
};
Timeline.proprType = {
  prefixCls: _propTypes2.default.string,
  children: _propTypes2.default.node,
  pending: _propTypes2.default.node,
  className: _propTypes2.default.string
};
exports.default = Timeline;