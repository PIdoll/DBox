'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function (_Component) {
    (0, _inherits3.default)(Tag, _Component);

    function Tag(props) {
        (0, _classCallCheck3.default)(this, Tag);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || (0, _getPrototypeOf2.default)(Tag)).call(this, props));

        _this.clearButton = function (button) {
            button.className = button.className.replace(_this.props.prefixCls + '-clicked', '');
        };

        _this.handleClick = function () {
            var _this$props;

            var buttonNode = (0, _reactDom.findDOMNode)(_this);
            _this.clearButton(buttonNode);
            _this.clickedTimeout = setTimeout(function () {
                return buttonNode.className += ' ' + _this.props.prefixCls + '-clicked';
            }, 10);
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.clearButton(buttonNode);
            }, 500);
            (_this$props = _this.props).onClick.apply(_this$props, arguments);
            _this.setState({ checked: !_this.state.checked });
        };

        _this.close = function (e) {
            var onClose = _this.props.onClose;
            if (onClose) {
                onClose(e);
            }
            if (e.defaultPrevented) {
                return false;
            }

            _this.setState({
                closable: false
            });
        };

        _this.state = {
            checked: _this.props.checked,
            closable: _this.props.closable
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.close = _this.close.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Tag, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.clickedTimeout) {
                clearTimeout(this.clickedTimeout);
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
        }
        // 添加单击效果

    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                children = _props.children,
                prefixCls = _props.prefixCls,
                target = _props.target,
                color = _props.color,
                href = _props.href,
                hot = _props.hot,
                closable = _props.closable;

            var isChecked = this.state.checked;
            var iconStyle = {
                marginLeft: 4
            };
            var closeIcon = closable ? _react2.default.createElement(_icon2.default, { style: iconStyle, type: 'close', onClick: this.close }) : null;
            var cls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-hot', hot), (0, _defineProperty3.default)(_classNames, prefixCls + '-hot-checked', isChecked && hot), (0, _defineProperty3.default)(_classNames, prefixCls + '-color', color), (0, _defineProperty3.default)(_classNames, prefixCls + '-closable', closable), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + color, color), (0, _defineProperty3.default)(_classNames, prefixCls + '-checkable-checked', isChecked), _classNames));

            var deletableTag = _react2.default.createElement(
                'div',
                {
                    'data-show': this.state.closable,
                    key: children,
                    className: cls,
                    onClick: this.handleClick },
                _react2.default.createElement(
                    'div',
                    null,
                    children
                ),
                closeIcon
            );
            var tag = !this.state.closable ? null : deletableTag;

            return _react2.default.createElement(
                _rcAnimate2.default,
                {
                    component: '',
                    showProp: 'data-show'
                },
                closable ? tag : href ? _react2.default.createElement(
                    'a',
                    { target: target, style: { color: /blue|red|green|yellow/.test(color) ? color : color, borderColor: /blue|red|green|yellow/.test(color) ? color : color }, className: cls, href: href },
                    '\u94FE\u63A5'
                ) : _react2.default.createElement(
                    'div',
                    {
                        'data-show': this.state.closable,
                        style: { borderColor: /blue|red|green|yellow/.test(color) ? color : color },
                        key: children,
                        className: cls,
                        onClick: this.handleClick },
                    _react2.default.createElement(
                        'div',
                        { style: { color: /blue|red|green|yellow/.test(color) ? color : color } },
                        children
                    )
                )
            );
        }
    }]);
    return Tag;
}(_react.Component);

Tag.propTypes = {
    prefixCls: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    closable: _propTypes2.default.bool
};
Tag.defaultProps = {
    prefixCls: 'idoll-tag',
    onClick: function onClick() {},

    closable: false,
    hover: false
};
exports.default = Tag;