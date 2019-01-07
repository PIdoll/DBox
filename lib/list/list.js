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

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = require('../grid');

var _spin = require('../spin');

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_React$Component) {
  (0, _inherits3.default)(List, _React$Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.renderItem = function (item, index) {
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          renderItem = _this$props.renderItem,
          rowKey = _this$props.rowKey;

      var key = void 0;
      if (typeof rowKey === 'function') {
        key = rowKey(dataSource[index]);
      } else if (typeof rowKey === 'string') {
        key = dataSource[rowKey];
      } else {
        key = dataSource.key;
      }
      if (!key) {
        key = 'list-item-' + index;
      }
      _this.keys[index] = key;
      return renderItem(item, index);
    };

    _this.keys = {};
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'isSomethingAfterLastTtem',
    value: function isSomethingAfterLastTtem() {
      var _props = this.props,
          loadMore = _props.loadMore,
          pagination = _props.pagination,
          footer = _props.footer;

      return !!(loadMore || pagination || footer);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        grid: this.props.grid
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          bordered = _props2.bordered,
          split = _props2.split,
          className = _props2.className,
          children = _props2.children,
          itemLayout = _props2.itemLayout,
          loadMore = _props2.loadMore,
          prefixCls = _props2.prefixCls,
          grid = _props2.grid,
          dataSource = _props2.dataSource,
          size = _props2.size,
          renderItem = _props2.renderItem,
          pagination = _props2.pagination,
          header = _props2.header,
          footer = _props2.footer,
          loading = _props2.loading,
          rest = (0, _objectWithoutProperties3.default)(_props2, ['bordered', 'split', 'className', 'children', 'itemLayout', 'loadMore', 'prefixCls', 'grid', 'dataSource', 'size', 'renderItem', 'pagination', 'header', 'footer', 'loading']);

      var loadingProp = loading;
      if (typeof loadingProp === 'boolean') {
        loadingProp = {
          spinning: loadingProp
        };
      }
      var isLoading = loadingProp && loadingProp.spinning;

      var sizeCls = '';
      if (size === 'large') {
        sizeCls = 'lg';
      } else if (size === 'small') {
        sizeCls = 'sm';
      } else {
        sizeCls = '';
      }
      var classString = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-vertical', itemLayout === 'vertical'), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3.default)(_classNames, prefixCls + '-split', split), (0, _defineProperty3.default)(_classNames, prefixCls + '-bordered', bordered), (0, _defineProperty3.default)(_classNames, prefixCls + '-loading', isLoading), (0, _defineProperty3.default)(_classNames, prefixCls + '-grid', grid), (0, _defineProperty3.default)(_classNames, prefixCls + '-something-after-last-item', this.isSomethingAfterLastTtem()), _classNames));

      var paginationContent = React.createElement(
        'div',
        { className: prefixCls + '-pagination' },
        React.createElement(_pagination2.default, pagination)
      );
      var childrenContent = void 0;
      childrenContent = isLoading && React.createElement('div', { style: { minHeight: 53 } });
      if (dataSource.length > 0) {
        var items = dataSource.map(function (item, index) {
          return _this2.renderItem(item, index);
        });
        var childrenList = React.Children.map(items, function (child, index) {
          return React.cloneElement(child, {
            key: _this2.keys[index]
          });
        });
        childrenContent = grid ? React.createElement(
          _grid.Row,
          { gutter: grid.gutter },
          childrenList
        ) : childrenList;
      } else if (!children && !isLoading) {
        childrenContent = React.createElement(
          'div',
          null,
          console.info(renderItem)
        );
      }
      var content = React.createElement(
        'div',
        null,
        React.createElement(
          _spin.Spin,
          loadingProp,
          childrenContent
        ),
        loadMore,
        !loadMore && pagination ? paginationContent : null
      );
      return React.createElement(
        'div',
        (0, _extends3.default)({ className: classString }, rest),
        header && React.createElement(
          'div',
          { className: prefixCls + '-header' },
          header
        ),
        content,
        children,
        footer && React.createElement(
          'div',
          { className: prefixCls + '-footer' },
          footer
        )
      );
    }
  }]);
  return List;
}(React.Component);

List.childContextTypes = {
  grid: _propTypes2.default.any
};
List.PropTypes = {
  bordered: _propTypes2.default.bool,
  prefixCls: _propTypes2.default.string,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dataSource: _propTypes2.default.array,
  children: _propTypes2.default.node,
  loading: _propTypes2.default.bool,
  grid: _propTypes2.default.any,
  pagination: _propTypes2.default.any,
  renderItem: _propTypes2.default.any,
  size: _propTypes2.default.string,
  split: _propTypes2.default.bool,
  id: _propTypes2.default.string
};
List.defaultProps = {
  dataSource: [],
  prefixCls: 'idoll-list',
  bordered: false,
  split: true,
  loading: false,
  pagination: false
};
exports.default = List;
;