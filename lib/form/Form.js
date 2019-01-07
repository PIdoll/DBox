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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createDOMForm = require('rc-form/lib/createDOMForm');

var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

var _createFormField = require('rc-form/lib/createFormField');

var _createFormField2 = _interopRequireDefault(_createFormField);

var _PureRenderMixin = require('rc-util/lib/PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _constants = require('./constants');

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form(props) {
    (0, _classCallCheck3.default)(this, Form);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

    (0, _warning2.default)(!props.form);
    return _this;
  }

  (0, _createClass3.default)(Form, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var layout = this.props.layout;

      return {
        vertical: layout === 'vertical'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          hideRequiredMark = _props.hideRequiredMark,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          layout = _props.layout;

      var formClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-horizontal', layout === 'horizontal'), (0, _defineProperty3.default)(_classNames, prefixCls + '-vertical', layout === 'vertical'), (0, _defineProperty3.default)(_classNames, prefixCls + '-inline', layout === 'inline'), (0, _defineProperty3.default)(_classNames, prefixCls + '-hide-required-mark', hideRequiredMark), _classNames), className);

      var formProps = (0, _omit2.default)(this.props, ['prefixCls', 'className', 'layout', 'form', 'hideRequiredMark']);

      return _react2.default.createElement('form', (0, _extends3.default)({}, formProps, { className: formClassName }));
    }
  }]);
  return Form;
}(_react2.default.Component);

Form.defaultProps = {
  prefixCls: 'idoll-form',
  layout: 'horizontal',
  hideRequiredMark: true,
  onSubmit: function onSubmit(e) {
    e.preventDefault();
  }
};
Form.propTypes = {
  prefixCls: _propTypes2.default.string,
  // layout: PropTypes.oneOf(['horizontal', 'inline', 'vertical']),
  children: _propTypes2.default.any,
  onSubmit: _propTypes2.default.func,
  hideRequiredMark: _propTypes2.default.bool
};
Form.childContextTypes = {
  vertical: _propTypes2.default.bool
};
Form.Item = _FormItem2.default;
Form.createFormField = _createFormField2.default;

Form.create = function (options) {
  return (0, _createDOMForm2.default)((0, _extends3.default)({
    fieldNameProp: 'id'
  }, options, {
    fieldMetaProp: _constants.FIELD_META_PROP,
    fieldDataProp: _constants.FIELD_DATA_PROP
  }));
};

exports.default = Form;