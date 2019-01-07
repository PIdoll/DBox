'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _ScrollableInkTabBar = require('rc-tabs/lib/ScrollableInkTabBar');

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _isFlexSupported = require('../_util/isFlexSupported');

var _isFlexSupported2 = _interopRequireDefault(_isFlexSupported);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.createNewTab = function (targetKey) {
      var onEdit = _this.props.onEdit;
      if (onEdit) {
        onEdit(targetKey, 'add');
      }
    }, _this.removeTab = function (targetKey, e) {
      e.stopPropagation();
      if (!targetKey) {
        return;
      }

      var onEdit = _this.props.onEdit;
      if (onEdit) {
        onEdit(targetKey, 'remove');
      }
    }, _this.handleChange = function (activeKey) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(activeKey);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var NO_FLEX = ' no-flex';
      var tabNode = _reactDom2.default.findDOMNode(this);
      if (tabNode && !(0, _isFlexSupported2.default)() && tabNode.className.indexOf(NO_FLEX) === -1) {
        tabNode.className += NO_FLEX;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          size = _props.size,
          _props$type = _props.type,
          type = _props$type === undefined ? 'line' : _props$type,
          tabPosition = _props.tabPosition,
          children = _props.children,
          tabBarExtraContent = _props.tabBarExtraContent,
          tabBarStyle = _props.tabBarStyle,
          hideAdd = _props.hideAdd,
          onTabClick = _props.onTabClick,
          onPrevClick = _props.onPrevClick,
          onNextClick = _props.onNextClick,
          _props$animated = _props.animated,
          animated = _props$animated === undefined ? true : _props$animated;

      var _ref2 = (typeof animated === 'undefined' ? 'undefined' : (0, _typeof3.default)(animated)) === 'object' ? {
        inkBarAnimated: animated.inkBar, tabPaneAnimated: animated.tabPane
      } : {
        inkBarAnimated: animated, tabPaneAnimated: animated
      },
          inkBarAnimated = _ref2.inkBarAnimated,
          tabPaneAnimated = _ref2.tabPaneAnimated;

      // 卡片标签不应该有动画


      if (type !== 'line') {
        tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
      }

      var cls = (0, _classnames2.default)(className, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + size, !!size), (0, _defineProperty3.default)(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3.default)(_classNames, prefixCls + '-cardTabs', type === 'cardTabs'), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
      // 只能添加和关闭卡片类型选项卡
      var childrenWithClose = [];
      if (type === 'editable-card') {
        childrenWithClose = [];
        _react2.default.Children.forEach(children, function (child, index) {
          var closable = child.props.closable;
          closable = typeof closable === 'undefined' ? true : closable;
          var closeIcon = closable ? _react2.default.createElement(_icon2.default, {
            type: 'close',
            onClick: function onClick(e) {
              return _this2.removeTab(child.key, e);
            }
          }) : null;
          childrenWithClose.push(_react2.default.cloneElement(child, {
            tab: _react2.default.createElement(
              'div',
              { className: closable ? undefined : prefixCls + '-tab-unclosable' },
              child.props.tab,
              closeIcon
            ),
            key: child.key || index
          }));
        });
        // 添加新的选项卡处理程序
        if (!hideAdd) {
          tabBarExtraContent = _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_icon2.default, { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
            tabBarExtraContent
          );
        }
      }

      tabBarExtraContent = tabBarExtraContent ? _react2.default.createElement(
        'div',
        { className: prefixCls + '-extra-content' },
        tabBarExtraContent
      ) : null;

      var renderTabBar = function renderTabBar() {
        return _react2.default.createElement(_ScrollableInkTabBar2.default, {
          inkBarAnimated: inkBarAnimated,
          extraContent: tabBarExtraContent,
          onTabClick: onTabClick,
          onPrevClick: onPrevClick,
          onNextClick: onNextClick,
          style: tabBarStyle
        });
      };

      return _react2.default.createElement(
        _rcTabs2.default,
        (0, _extends3.default)({}, this.props, {
          className: cls,
          tabBarPosition: tabPosition,
          renderTabBar: renderTabBar,
          renderTabContent: function renderTabContent() {
            return _react2.default.createElement(_TabContent2.default, { animated: tabPaneAnimated, animatedWithMargin: true });
          },
          onChange: this.handleChange
        }),
        childrenWithClose.length > 0 ? childrenWithClose : children
      );
    }
  }]);
  return Tabs;
}(_react2.default.Component);

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
  prefixCls: 'idoll-tabs',
  hideAdd: false
};
exports.default = Tabs;