'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

var _calculateNodeHeight = require('./calculateNodeHeight');

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.calculateNodeHeight) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

var TextArea = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea(props) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this, props));

    _this.handleTextareaChange = function (e) {
      if (!('value' in _this.props)) {
        _this.resizeTextarea();
      }
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }
    };

    _this.resizeTextarea = function () {
      var autosize = _this.props.autosize;

      if (!autosize || !_this.textareaRef) {
        return;
      }
      var minRows = autosize ? autosize.minRows : null;
      var maxRows = autosize ? autosize.maxRows : null;
      var textareaStyles = (0, _calculateNodeHeight2.default)(_this.textareaRef, false, minRows, maxRows);
      _this.setState({ textareaStyles: textareaStyles });
    };

    _this.saveTextAreaRef = function (node) {
      _this.textareaRef = node;
    };

    _this.state = {
      textareaStyles: null
    };
    return _this;
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeTextarea();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // re-render with the new content then recalculate the height
      if (this.props.value !== nextProps.value) {
        if (this.nextFrameActionId) {
          clearNextFrameAction(this.nextFrameActionId);
        }
        this.nextFrameActionId = onNextFrame(this.resizeTextarea);
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.textareaRef.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.textareaRef.blur();
    }
  }, {
    key: 'getTextAreaClassName',
    value: function getTextAreaClassName() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          disabled = _props.disabled;

      var className1 = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-disabled', disabled));
      return className1;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var otherProps = (0, _object2.default)(props, ['prefixCls', 'onPressEnter', 'autosize']);
      var style = (0, _extends3.default)({}, props.style, this.state.textareaStyles);

      // Make sure it could be reset when using form.getFieldDecorator
      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }
      return _react2.default.createElement('textarea', (0, _extends3.default)({}, otherProps, {
        className: this.getTextAreaClassName(),
        style: style,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleTextareaChange,
        ref: this.saveTextAreaRef
      }));
    }
  }]);
  return TextArea;
}(_react.Component);

TextArea.defaultProps = {
  defaultValue: '',
  disabled: false,
  prefixCls: 'idoll-input',
  onKeyDown: function onKeyDown() {},
  onChange: function onChange() {}
};
TextArea.propTypes = {
  type: _propTypes.PropTypes.string,
  placeholder: _propTypes.PropTypes.string,
  name: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  autosize: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.bool, _propTypes.PropTypes.object]),
  size: _propTypes.PropTypes.oneOf(['small', 'default', 'large']),
  maxLength: _propTypes.PropTypes.string,
  readOnly: _propTypes.PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  value: _propTypes.PropTypes.any,
  defaultValue: _propTypes.PropTypes.any,
  className: _propTypes.PropTypes.string,
  prefixCls: _propTypes.PropTypes.string,
  autoFocus: _propTypes.PropTypes.bool,
  onKeyDown: _propTypes.PropTypes.func,
  onChange: _propTypes.PropTypes.func,
  onClick: _propTypes.PropTypes.func,
  onFocus: _propTypes.PropTypes.func,
  onBlur: _propTypes.PropTypes.func
};
exports.default = TextArea;