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

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style/index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function (_React$Component) {
    (0, _inherits3.default)(Avatar, _React$Component);

    function Avatar(props) {
        (0, _classCallCheck3.default)(this, Avatar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call(this, props));

        _this.setScale = function () {
            var childrenNode = _this.avatarChildren;
            if (childrenNode) {
                var childrenWidth = childrenNode.offsetWidth;
                var avatarWidth = ReactDOM.findDOMNode(_this).getBoundingClientRect().width;
                // add 4px gap for each side to get better performance
                if (avatarWidth - 8 < childrenWidth) {
                    _this.setState({
                        scale: (avatarWidth - 8) / childrenWidth
                    });
                } else {
                    _this.setState({
                        scale: 1
                    });
                }
            }
        };

        _this.handleImgLoadError = function () {
            return _this.setState({ isImgExist: false });
        };

        _this.state = {
            scale: 1,
            isImgExist: true
        };
        return _this;
    }

    (0, _createClass3.default)(Avatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setScale();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.children !== this.props.children || prevState.scale !== this.state.scale && this.state.scale === 1) {
                this.setScale();
            }
        }
    }, {
        key: 'avatarChildren',
        value: function avatarChildren() {
            return React.createElement('span', null);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _classNames2,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                shape = _props.shape,
                size = _props.size,
                src = _props.src,
                icon = _props.icon,
                alt = _props.alt,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['prefixCls', 'shape', 'size', 'src', 'icon', 'alt', 'className']);


            var sizeCls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3.default)(_classNames, prefixCls + '-ti', size === 'tiny'), _classNames));
            var avatarClassName = (0, _classnames2.default)(prefixCls, className, sizeCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-' + shape, shape), (0, _defineProperty3.default)(_classNames2, prefixCls + '-image', src && this.state.isImgExist), (0, _defineProperty3.default)(_classNames2, prefixCls + '-icon', icon), _classNames2));

            var children = this.props.children;
            if (src) {
                children = React.createElement('img', { src: src, onError: this.handleImgLoadError, alt: alt });
            } else if (icon) {
                children = React.createElement(_icon2.default, { type: icon });
            } else {
                var childrenNode = this.avatarChildren;
                if (childrenNode || this.state.scale !== 1) {
                    var childrenStyle = {
                        msTransform: 'scale(' + this.state.scale + ')',
                        WebkitTransform: 'scale(' + this.state.scale + ')',
                        transform: 'scale(' + this.state.scale + ')',
                        position: 'absolute',
                        display: 'inline-block',
                        top: 'calc(50% - ' + Math.round(childrenNode.offsetHeight / 2) + 'px)',
                        left: 'calc(50% - ' + Math.round(childrenNode.offsetWidth / 2) + 'px)'
                    };
                    children = React.createElement(
                        'span',
                        {
                            className: prefixCls + '-string',
                            style: childrenStyle,
                            ref: function ref(span) {
                                _this2.avatarChildren = span;
                            }
                        },
                        children
                    );
                }
            }
            return React.createElement(
                'span',
                (0, _extends3.default)({}, others, { className: avatarClassName }),
                children
            );
        }
    }]);
    return Avatar;
}(React.Component);

Avatar.PropType = {
    scale: _propTypes2.default.number,
    prefixCls: _propTypes2.default.string,
    shape: _propTypes2.default.string,
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    icon: _propTypes2.default.string,
    size: _propTypes2.default.string,
    src: _propTypes2.default.string
};
Avatar.defaultProps = {
    prefixCls: 'dbox-avatar',
    size: 'default',
    shape: 'cirecle'
};
exports.default = Avatar;