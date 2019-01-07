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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _tabs = require('../tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function (_Component) {
  (0, _inherits3.default)(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call.apply(_ref, [this].concat(args))), _this), _this.onTabChange = function (item) {
      if (_this.props.onTabChange) {
        _this.props.onTabChange(item);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // constructor (props) {
  //     super(props);
  // }


  (0, _createClass3.default)(Card, [{
    key: 'isContainGrid',

    // 内容是否为Grid
    value: function isContainGrid() {
      var containGrid = void 0;
      _react2.default.Children.forEach(this.props.children, function (ele) {
        if (ele && ele.type && ele.type === _grid2.default) {
          containGrid = true;
        }
      });
      return containGrid;
    }
    // 点击页签的回调

  }, {
    key: 'getCompatibleHoverable',
    value: function getCompatibleHoverable() {
      var _props = this.props,
          noHovering = _props.noHovering,
          hoverable = _props.hoverable;

      if ('noHovering' in this.props) {
        return !noHovering || hoverable;
      }
      return !!noHovering;
    }
  }, {
    key: 'getAction',
    value: function getAction(actions) {
      if (!actions || !actions.length) {
        return null;
      }
      var actionList = actions.map(function (action, index) {
        return _react2.default.createElement(
          'li',
          { style: { width: 100 / actions.length + '%' }, key: 'action-' + index },
          _react2.default.createElement(
            'span',
            null,
            action
          )
        );
      });
      return actionList;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          _props2$prefixCls = _props2.prefixCls,
          prefixCls = _props2$prefixCls === undefined ? 'dbox-card' : _props2$prefixCls,
          className = _props2.className,
          extra = _props2.extra,
          title = _props2.title,
          _props2$bordered = _props2.bordered,
          bordered = _props2$bordered === undefined ? true : _props2$bordered,
          bodyStyle = _props2.bodyStyle,
          tabList = _props2.tabList,
          loading = _props2.loading,
          children = _props2.children,
          hoverable = _props2.hoverable,
          cover = _props2.cover,
          type = _props2.type,
          action = _props2.action,
          activeTabKey = _props2.activeTabKey,
          defaultActiveTabKey = _props2.defaultActiveTabKey,
          others = (0, _objectWithoutProperties3.default)(_props2, ['prefixCls', 'className', 'extra', 'title', 'bordered', 'bodyStyle', 'tabList', 'loading', 'children', 'hoverable', 'cover', 'type', 'action', 'activeTabKey', 'defaultActiveTabKey']);

      var cardClassName = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-bordered', bordered), (0, _defineProperty3.default)(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3.default)(_classNames, prefixCls + '-hoverable', hoverable), (0, _defineProperty3.default)(_classNames, prefixCls + '-contain-grid', this.isContainGrid()), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, type && type === 'inner'), (0, _defineProperty3.default)(_classNames, prefixCls + '-contain-tabs', tabList && tabList), _classNames));

      // 预加载样式
      var loadingBlock = _react2.default.createElement(
        'div',
        { className: prefixCls + '-loading-content' },
        _react2.default.createElement('p', { className: prefixCls + '-loading-block', style: { width: '94%' } }),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '28%' } }),
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '62%' } })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '22%' } }),
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '66%' } })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '56%' } }),
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '39%' } })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '21%' } }),
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '15%' } }),
          _react2.default.createElement('span', { className: prefixCls + '-loading-block', style: { width: '40%' } })
        )
      );

      var hasActiveTabKey = activeTabKey !== undefined;
      var extraProps = (0, _defineProperty3.default)({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);

      var head = void 0;
      var tabs = tabList && tabList.length ? _react2.default.createElement(
        _tabs2.default,
        (0, _extends3.default)({}, extraProps, {
          className: prefixCls + '-head-tabs',
          size: 'large',
          onChange: this.onTabChange
        }),
        tabList.map(function (item) {
          return _react2.default.createElement(_tabs2.default.TabPane, { tab: item.tab, key: item.key });
        })
      ) : null;

      if (title || extra || tabs) {
        head = _react2.default.createElement(
          'div',
          { className: prefixCls + '-head' },
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-head-wrapper' },
            title && _react2.default.createElement(
              'div',
              { className: prefixCls + '-head-title' },
              title
            ),
            extra && _react2.default.createElement(
              'div',
              { className: prefixCls + '-extra' },
              extra
            )
          ),
          tabs
        );
      }

      var coverDom = cover ? _react2.default.createElement(
        'div',
        { className: prefixCls + '-cover' },
        cover
      ) : null;
      var body = _react2.default.createElement(
        'div',
        { className: prefixCls + '-body' },
        loading ? loadingBlock : children
      );
      var actionDom = action && action.length ? _react2.default.createElement(
        'ul',
        { className: prefixCls + '-actions' },
        this.getAction(action)
      ) : null;
      var divProps = (0, _omit2.default)(others, ['onTabChange']);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, divProps, { className: cardClassName, style: bodyStyle }),
        head,
        coverDom,
        body,
        actionDom
      );
    }
  }]);
  return Card;
}(_react.Component);

Card.PropTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  title: _propTypes2.default.node,
  extra: _propTypes2.default.node,
  bordered: _propTypes2.default.bool,
  tabList: _propTypes2.default.node,
  loading: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  hoverable: _propTypes2.default.bool,
  noHovering: _propTypes2.default.bool,
  cover: _propTypes2.default.node,
  onTabChange: _propTypes2.default.func,
  actions: _propTypes2.default.node
};
Card.defaultProps = {
  prefixCls: 'dbox-card',
  className: '' };
exports.default = Card;