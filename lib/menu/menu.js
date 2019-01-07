'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _SubMenu = require('./SubMenu');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var Menu = function (_React$Component) {
  (0, _inherits3.default)(Menu, _React$Component);
  (0, _createClass3.default)(Menu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        idollMenuTheme: this.props.theme,
        mode: this.props.mode
      };
    }
  }]);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.handleClick = function (e) {
      _this.setOpenKeys([]);
      _this.props.onClick(e);
    };

    _this.handleCloseKeys = function (e) {
      var openKeys = e.openKeys;

      _this.setOpenKeys(openKeys);
      _this.props.onClose(e);
    };

    _this.handleOpenChange = function (openKeys) {
      _this.setOpenKeys(openKeys);
      if (!('onOpenChange' in _this.props)) {
        _this.setOpenKeys(openKeys);
      }
    };

    (0, _warning2.default)(!('inlineCollapsed' in props && props.mode !== 'inline'), '\'inlineCollapsed\'\u53EA\u80FD\u5728Menu\u7684\'mode\'\u662F\'inline\'\u7684\u65F6\u5019\u4F7F\u7528');
    _this.state = {
      openKeys: []
    };
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
        this.switchModeFromInline = true;
      }
      if ('openKeys' in nextProps) {
        this.setOpenKeys(nextProps.openKeys);
      }
    }
  }, {
    key: 'setOpenKeys',
    value: function setOpenKeys(openKeys) {
      if (!('openKeys' in this.props)) {
        this.setState({ openKeys: openKeys });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var openAnimation = this.props.openAnimation || this.props.openTransitionName;
      if (!openAnimation) {
        switch (this.props.mode) {
          case 'horizontal':
            openAnimation = 'slide-up';
            break;
          case 'vertical':
            if (this.switchModeFromInline) {
              openAnimation = '';
              this.switchModeFromInline = false;
            } else {
              openAnimation = 'zoom-big';
            }
            break;
          case 'inline':
            openAnimation = _openAnimation2.default;
            break;
          default:
        }
      }
      var props = {};
      var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
      if (this.props.mode !== 'inline') {
        props = {
          openKeys: this.state.openKeys,
          onOpenChange: this.handleOpenChange,
          onClick: this.handleClick,
          onClose: this.handleCloseKeys,
          openTransitionName: openAnimation,
          className: className
        };
      } else {
        props = {
          className: className,
          openAnimation: openAnimation
        };
      }
      return _react2.default.createElement(_rcMenu2.default, (0, _extends3.default)({}, this.props, props));
    }
  }]);
  return Menu;
}(_react2.default.Component);

Menu.Divider = _rcMenu.Divider;
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.Item = _MenuItem2.default;
Menu.SubMenu = _SubMenu2.default;
Menu.defaultProps = {
  prefixCls: 'idoll-menu',
  className: '',
  onClick: noop,
  onClose: noop,
  theme: 'dark' // or light
};
Menu.childContextTypes = {
  inlineCollapsed: _propTypes2.default.bool,
  idollMenuTheme: _propTypes2.default.string,
  mode: _propTypes2.default.string
};
Menu.propTypes = {
  defaultOpenKeys: _propTypes2.default.any,
  style: _propTypes2.default.object,
  defaultSelectedKeys: _propTypes2.default.array,
  openKeys: _propTypes2.default.array,
  selectedKeys: _propTypes2.default.array,
  forceSubMenuRender: _propTypes2.default.bool,
  selectable: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  subMenuCloseDelay: _propTypes2.default.number,
  subMenuOpenDelay: _propTypes2.default.number,
  mode: _propTypes2.default.oneOf(['vertical', 'vertical-right', 'horizontal', 'inline']),
  theme: _propTypes2.default.oneOf(['dark', 'light']),
  onClick: _propTypes2.default.func,
  onDeselect: _propTypes2.default.func,
  onOpenChange: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  className: _propTypes2.default.string
};
exports.default = Menu;