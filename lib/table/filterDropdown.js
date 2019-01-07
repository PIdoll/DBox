'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'idoll-table-filter-dropdown', onClick: onClick },
    children
  );
};

var FilterMenu = function (_React$Component) {
  (0, _inherits3.default)(FilterMenu, _React$Component);

  function FilterMenu(props) {
    (0, _classCallCheck3.default)(this, FilterMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FilterMenu.__proto__ || (0, _getPrototypeOf2.default)(FilterMenu)).call(this, props));

    _this.setSelectedKeys = function (_ref2) {
      var selectedKeys = _ref2.selectedKeys;

      _this.setState({ selectedKeys: selectedKeys });
    };

    _this.handleClearFilters = function () {
      _this.setState({
        selectedKeys: []
      }, _this.handleConfirm);
    };

    _this.handleConfirm = function () {
      _this.setState({
        visible: false
      });
      _this.confirmFilter();
    };

    _this.onVisibleChange = function (visible) {
      _this.setState({
        visible: visible
      });
      if (!visible) {
        _this.confirmFilter();
      }
    };

    _this.handleMenuItemClick = function (info) {
      if (info.keyPath.length <= 1) {
        return;
      }
      var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
      if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
        // deselect SubMenu child
        delete keyPathOfSelectedItem[info.key];
      } else {
        // select SubMenu child
        keyPathOfSelectedItem[info.key] = info.keyPath;
      }
      _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
    };

    _this.state = {
      selectedKeys: props.selectedKeys,
      keyPathOfSelectedItem: {}, // 记录所有有选中子菜单的祖先菜单
      visible: false
    };
    return _this;
  }

  (0, _createClass3.default)(FilterMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        selectedKeys: nextProps.selectedKeys
      });
    }
  }, {
    key: 'confirmFilter',
    value: function confirmFilter() {
      if (this.state.selectedKeys !== this.props.selectedKeys) {
        this.props.confirmFilter(this.props.column, this.state.selectedKeys);
      }
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem(item) {
      var column = this.props.column;

      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
      return _react2.default.createElement(
        _rcMenu.Item,
        { key: item.value },
        multiple ? _react2.default.createElement(_checkbox2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2.default.createElement(_radio2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }),
        _react2.default.createElement(
          'span',
          null,
          item.text
        )
      );
    }
  }, {
    key: 'renderMenus',
    value: function renderMenus(items) {
      var _this2 = this;

      return items.map(function (item) {
        if (item.children && item.children.length > 0) {
          var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

          var containSelected = (0, _keys2.default)(keyPathOfSelectedItem).some(function (key) {
            return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = containSelected ? 'idoll-dropdown-submenu-contain-selected' : '';
          return _react2.default.createElement(
            _rcMenu.SubMenu,
            { title: item.text, className: subMenuCls, key: item.value.toString() },
            item.children.map(function (child) {
              return _this2.renderMenuItem(child);
            })
          );
        }
        return _this2.renderMenuItem(item);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          locale = _props.locale;
      // default multiple selection in filter dropdown

      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;

      var menus = column.filterDropdown ? column.filterDropdown : _react2.default.createElement(
        FilterDropdownMenuWrapper,
        null,
        _react2.default.createElement(
          _rcMenu2.default,
          {
            multiple: multiple,
            onClick: this.handleMenuItemClick,
            prefixCls: 'idoll-dropdown-menu',
            onSelect: this.setSelectedKeys,
            onDeselect: this.setSelectedKeys,
            selectedKeys: this.state.selectedKeys
          },
          this.renderMenus(column.filters)
        ),
        _react2.default.createElement(
          'div',
          { className: 'idoll-table-filter-dropdown-btns' },
          _react2.default.createElement(
            'a',
            {
              className: 'idoll-table-filter-dropdown-link confirm',
              onClick: this.handleConfirm
            },
            locale.filterConfirm
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'idoll-table-filter-dropdown-link clear',
              onClick: this.handleClearFilters
            },
            locale.filterReset
          )
        )
      );

      var dropdownSelectedClass = this.props.selectedKeys.length > 0 ? 'idoll-table-filter-selected' : '';

      return _react2.default.createElement(
        _dropdown2.default,
        {
          trigger: ['click'],
          overlay: menus,
          visible: this.state.visible,
          onVisibleChange: this.onVisibleChange
        },
        _react2.default.createElement(_icon2.default, { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass })
      );
    }
  }]);
  return FilterMenu;
}(_react2.default.Component);

FilterMenu.defaultProps = {
  handleFilter: function handleFilter() {},

  column: null
};
exports.default = FilterMenu;