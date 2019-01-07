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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// object.omit github.com/jonschlinkert/object.omit
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this));

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.onClear = function () {
      _this.input.value = '';
      console.log('清空后的', _this.input.value);
      _this.setState({
        isHover: false
      });
    };

    _this.renderLaybeldIcon = function (children) {
      var _classNames;

      var props = _this.props;


      if (!('prefix' in props || 'suffix' in props || 'clearable' in props)) {
        return children;
      }
      var prefix = props.prefix ? _react2.default.createElement(
        'span',
        { className: props.prefixCls + '-prefix' },
        props.prefix
      ) : null;

      var clearIcon = _react2.default.createElement(_icon2.default, { type: 'close-circle', className: props.prefixCls + '-picker-clear' });
      var clearSuffix = _react2.default.cloneElement(clearIcon, {
        onMouseDown: _this.onClear,
        className: 'icon-hover'
      });

      var clearAfter = _react2.default.createElement(
        'span',
        {
          onMouseLeave: _this.handleIconOnMouseLeave,
          className: props.prefixCls + '-clear-icon',
          onMouseEnter: _this.handleIconOnMouseEnter
        },
        clearSuffix
      );

      var clearAfterNone = _react2.default.createElement(
        'span',
        { style: { display: 'none' }, className: props.prefixCls + '-clear-icon' },
        clearSuffix
      );

      var suffix = _react2.default.createElement(
        'span',
        { style: { display: props.suffix || props.clearable ? 'block' : 'none' }, className: props.prefixCls + '-suffix' },
        _this.input && _this.input.value && (_this.state.isHover || _this.state.isIconHover) && !_this.props.disabled && !_this.props.readOnly && !_this.props.autoComplete ? clearAfter : clearAfterNone,
        props.suffix
      );
      var affixWrapperCls = (0, _classnames2.default)(props.className, props.prefixCls + '-affix-wrapper', (_classNames = {}, (0, _defineProperty3.default)(_classNames, props.prefixCls + '-affix-wrapper-sm', props.size === 'small'), (0, _defineProperty3.default)(_classNames, props.prefixCls + '-affix-wrapper-lg', props.size === 'large'), _classNames));

      return _react2.default.createElement(
        'span',
        {
          // className={classNames(props.className, `${props.prefixCls}-affix-wrapper`)}
          className: affixWrapperCls,
          style: props.style
        },
        prefix,
        _react2.default.cloneElement(children, { style: null, className: _this.getInputClassName() }),
        suffix
      );
    };

    _this.handleIconOnMouseEnter = function () {
      _this.setState({
        isIconHover: true
      });
    };

    _this.handleIconOnMouseLeave = function () {
      _this.setState({
        isIconHover: false
      });
    };

    _this.handleInputonMouseLeave = function (e) {
      _this.setState({
        isHover: false
      });
    };

    _this.handleInputonMouseEnter = function (e) {
      _this.setState({
        isHover: true
      });
    };

    _this.onInput = function (e) {
      _this.setState({
        isHover: true
      });
    };

    _this.onBlur = function (e) {
      _this.setState({
        isHover: false
      });
    };

    _this.state = {
      isHover: false,
      isIconHover: false
    };
    return _this;
  }

  (0, _createClass3.default)(Input, [{
    key: 'focus',
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: 'getInputClassName',
    value: function getInputClassName() {
      var _classNames2, _classNames3;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          size = _props.size,
          disabled = _props.disabled,
          readOnly = _props.readOnly;

      return (0, _classnames2.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-sm', size === 'small'), (0, _defineProperty3.default)(_classNames2, prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames2, prefixCls + '-disabled', disabled), (0, _defineProperty3.default)(_classNames2, prefixCls + '-readOnly', readOnly), _classNames2), (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, prefixCls + '-enter-button', true), (0, _defineProperty3.default)(_classNames3, prefixCls + '-' + size, true), _classNames3));
    }
  }, {
    key: 'renderLabelInput',
    value: function renderLabelInput(children) {
      var _classNames5;

      var props = this.props;

      if (!props.addonBefore && !props.addonAfter) {
        return children;
      }

      var wrapperClassName = props.prefixCls + '-group';
      var addonClassName = wrapperClassName + '-addon';

      var addonBefore = props.addonBefore ? props.beforelength ? _react2.default.createElement(
        'span',
        { className: addonClassName, style: { width: props.beforelength } },
        props.addonBefore
      ) : _react2.default.createElement(
        'span',
        { className: addonClassName },
        props.addonBefore
      ) : null;

      var addonAfter = props.addonAfter ? props.afterlength ? _react2.default.createElement(
        'span',
        { className: addonClassName, style: { width: props.afterlength } },
        props.addonAfter
      ) : _react2.default.createElement(
        'span',
        { className: addonClassName },
        props.addonAfter
      ) : null;

      var className = (0, _classnames2.default)(props.prefixCls + '-wrapper', (0, _defineProperty3.default)({}, wrapperClassName, addonBefore || addonAfter));

      var groupClassName = (0, _classnames2.default)((_classNames5 = {}, (0, _defineProperty3.default)(_classNames5, props.prefixCls + '-group-wrapper-sm', props.size === 'small'), (0, _defineProperty3.default)(_classNames5, props.prefixCls + '-group-wrapper-lg', props.size === 'large'), _classNames5));

      if (addonBefore || addonAfter) {
        return _react2.default.createElement(
          'span',
          {
            className: groupClassName,
            style: props.style
          },
          _react2.default.createElement(
            'span',
            { className: className },
            addonBefore,
            _react2.default.cloneElement(children, { style: null }),
            addonAfter
          )
        );
      }

      return _react2.default.createElement(
        'span',
        { className: className },
        addonBefore,
        children,
        addonAfter
      );
    }

    // 清除输入框

  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props2 = this.props,
          value = _props2.value,
          className = _props2.className;

      // Fix https://fb.me/react-unknown-prop

      var otherProps = (0, _object2.default)(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);

      if ('value' in this.props) {
        otherProps.value = fixControlledValue(value);
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue props, but no both
        delete otherProps.defaultValue;
      }

      return this.renderLaybeldIcon(_react2.default.createElement('input', (0, _extends3.default)({}, otherProps, {
        clearable: toString(otherProps.clearable),
        className: (0, _classnames2.default)(this.getInputClassName(), className),
        onKeyDown: this.handleKeyDown,
        ref: this.saveInput,
        onMouseEnter: this.handleInputonMouseEnter,
        onMouseLeave: this.handleInputonMouseLeave,
        onInput: this.onInput,
        onBlur: this.onBlur
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderLabelInput(this.renderInput());
    }
  }]);
  return Input;
}(_react.Component);

Input.defaultProps = {
  // intialValue: '',
  disabled: false,
  prefixCls: 'idoll-input',
  type: 'text',
  onPressEnter: function onPressEnter() {},
  onKeyDown: function onKeyDown() {},
  onChange: function onChange() {}
};
Input.propTypes = {
  type: _propTypes.PropTypes.string,
  // placeholder: PropTypes.string,
  // name: PropTypes.string,
  id: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  // autosize: PropTypes.oneOfType([
  //   PropTypes.bool,
  //   PropTypes.object
  // ]),
  size: _propTypes.PropTypes.oneOf(['small', 'default', 'large']),
  // maxLength: PropTypes.string,
  // readOnly: PropTypes.bool,
  disabled: _propTypes.PropTypes.bool,
  value: _propTypes.PropTypes.any,
  defaultValue: _propTypes.PropTypes.any,
  // intialValue: PropTypes.any,
  className: _propTypes.PropTypes.string,
  addonBefore: _propTypes.PropTypes.node,
  addonAfter: _propTypes.PropTypes.node,
  prefixCls: _propTypes.PropTypes.string,
  prefix: _propTypes.PropTypes.node,
  suffix: _propTypes.PropTypes.node,
  // autoFocus: PropTypes.bool,
  onPressEnter: _propTypes.PropTypes.func,
  onKeyDown: _propTypes.PropTypes.func,
  onChange: _propTypes.PropTypes.func,
  beforelength: _propTypes.PropTypes.string, // 前置的宽度
  afterlength: _propTypes.PropTypes.string, // 后置的宽度
  clearable: _propTypes.PropTypes.bool
  // onClick: PropTypes.func,
  // onFocus: PropTypes.func,
  // onBlur: PropTypes.func
};
exports.default = Input;