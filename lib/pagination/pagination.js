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

var _propTypes = require('prop-types');

var _rcPagination = require('rc-pagination');

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _MiniSelect = require('./MiniSelect');

var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https : //github.com/react-component/pagination
var Pagination = function (_React$Component) {
    (0, _inherits3.default)(Pagination, _React$Component);

    function Pagination() {
        (0, _classCallCheck3.default)(this, Pagination);
        return (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).apply(this, arguments));
    }

    (0, _createClass3.default)(Pagination, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                className = _props.className,
                restProps = (0, _objectWithoutProperties3.default)(_props, ['size', 'className']);

            var isSmall = size === 'small';
            var locale = void 0;
            if (this.context.idollLocale && this.context.idollLocale.Pagination) {
                locale = this.context.idollLocale.Pagination;
            } else {
                locale = this.props.locale;
            }
            return _react2.default.createElement(_rcPagination2.default, (0, _extends3.default)({
                showTitle: false,
                selectComponentClass: isSmall ? _MiniSelect2.default : _select2.default,
                className: (0, _classnames2.default)(className, { mini: isSmall }),
                locale: locale
            }, restProps));
        }
    }]);
    return Pagination;
}(_react2.default.Component);

Pagination.defaultProps = {
    locale: _zh_CN2.default,
    className: '',
    prefixCls: 'idoll-pagination',
    selectPrefixCls: 'idoll-select'
};
Pagination.propTypes = {
    current: _propTypes.PropTypes.number,
    defaultCurrent: _propTypes.PropTypes.number,
    defaultPageSizecurrent: _propTypes.PropTypes.number,
    pageSize: _propTypes.PropTypes.number,
    total: _propTypes.PropTypes.number,
    showQuickJumper: _propTypes.PropTypes.bool,
    showTitle: _propTypes.PropTypes.bool,
    showSizeChanger: _propTypes.PropTypes.bool,
    simple: _propTypes.PropTypes.bool,
    pageSizeOptions: _propTypes.PropTypes.array,
    showTotal: _propTypes.PropTypes.func,
    onChange: _propTypes.PropTypes.func,
    onShowSizeChange: _propTypes.PropTypes.func
};
Pagination.contextTypes = {
    idollLocale: _propTypes.PropTypes.object
};
exports.default = Pagination;