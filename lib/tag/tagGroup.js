'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _tag = require('../tag/tag');

var _tag2 = _interopRequireDefault(_tag);

var _input = require('../input/input');

var _input2 = _interopRequireDefault(_input);

var _index = require('../icon/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagGroup = function (_React$Component) {
  (0, _inherits3.default)(TagGroup, _React$Component);

  function TagGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TagGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TagGroup.__proto__ || (0, _getPrototypeOf2.default)(TagGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tags: _this.props.tags || ['电影', '书籍', '音乐'],
      inputVisible: false,
      inputValue: '',
      id: _this.props.id || 0,
      text: _this.props.text || '添加',
      iconType: _this.props.iconType || 'plus'
    }, _this.handleClose = function (removedTag) {
      var tags = _this.state.tags.filter(function (tag) {
        return tag !== removedTag;
      });
      _this.setState({ tags: tags });
    }, _this.showInput = function () {
      _this.setState({ inputVisible: true }, function () {
        return _this.input.focus();
      });
    }, _this.handleInputChange = function (e) {
      _this.setState({ inputValue: e.target.value });
    }, _this.handleInputConfirm = function () {
      var inputValue = _this.state.inputValue;
      var tags = _this.state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [].concat((0, _toConsumableArray3.default)(tags), [inputValue]);
      }
      _this.setState({
        tags: tags,
        inputVisible: false,
        inputValue: ''
      });
    }, _this.saveInputRef = function (input) {
      _this.input = input;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TagGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          tags = _state.tags,
          inputVisible = _state.inputVisible,
          inputValue = _state.inputValue;

      return _react2.default.createElement(
        'div',
        { className: 'group' },
        tags.map(function (tag, index) {
          return _react2.default.createElement(
            _tag2.default,
            { key: tag, closable: index !== _this2.state.id, afterClose: function afterClose() {
                return _this2.handleClose(tag);
              } },
            tag
          );
        }),
        inputVisible && _react2.default.createElement(_input2.default, {
          ref: this.saveInputRef,
          type: 'text',
          size: 'small',
          style: { width: 78 },
          value: inputValue,
          onChange: this.handleInputChange,
          onBlur: this.handleInputConfirm,
          onPressEnter: this.handleInputConfirm
        }),
        !inputVisible && _react2.default.createElement(
          _tag2.default,
          {
            className: 'sdfsf',
            style: { borderStyle: 'dashed' },
            onClick: this.showInput
          },
          _react2.default.createElement(_index2.default, { type: this.state.iconType }),
          _react2.default.createElement(
            'div',
            { style: { marginLeft: '4px' } },
            this.state.text
          )
        )
      );
    }
  }]);
  return TagGroup;
}(_react2.default.Component);

TagGroup.propTypes = {
  id: _propTypes2.default.number,
  tags: _propTypes2.default.array,
  text: _propTypes2.default.string,
  iconType: _propTypes2.default.string
};
exports.default = TagGroup;