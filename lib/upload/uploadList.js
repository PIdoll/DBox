'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var previewFile = function previewFile(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function () {
    return callback(reader.result);
  };
  reader.readAsDataURL(file);
};

var UploadList = function (_React$Component) {
  (0, _inherits3.default)(UploadList, _React$Component);

  function UploadList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UploadList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UploadList.__proto__ || (0, _getPrototypeOf2.default)(UploadList)).call.apply(_ref, [this].concat(args))), _this), _this.handleClose = function (file) {
      var onRemove = _this.props.onRemove;

      if (onRemove) {
        onRemove(file);
      }
    }, _this.handlePreview = function (file, e) {
      var onPreview = _this.props.onPreview;

      if (!onPreview) {
        return;
      }
      e.preventDefault();
      return onPreview(file);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UploadList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
        return;
      }
      (this.props.items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
          return;
        }
        /*eslint-disable */
        file.thumbUrl = '';
        previewFile(file.originFileObj, function (previewDataUrl) {
          /*eslint-disable */
          file.thumbUrl = previewDataUrl;
          _this2.forceUpdate();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this,
          _classNames2;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$items = _props.items,
          items = _props$items === undefined ? [] : _props$items,
          listType = _props.listType,
          showPreviewIcon = _props.showPreviewIcon,
          showRemoveIcon = _props.showRemoveIcon,
          locale = _props.locale;

      var list = items.map(function (file) {
        var _classNames;

        var progress = void 0;
        var icon = _react2.default.createElement(_icon2.default, { type: 'paper-clip' });

        if (listType === 'picture' || listType === 'picture-card') {
          icon = _react2.default.createElement(
            'a',
            {
              className: prefixCls + '-list-item-thumbnail',
              onClick: function onClick(e) {
                return _this3.handlePreview(file, e);
              },
              href: file.url || file.thumbUrl,
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement('img', { src: file.thumbUrl || file.url, alt: file.name })
          );
        }
        if (listType === 'picture-card' && file.status === 'uploading') {
          icon = _react2.default.createElement(_icon2.default, { className: prefixCls + '-list-item-thumbnail', type: 'picture' });;
        }

        if (file.status === 'uploading') {
          progress = _react2.default.createElement(
            'div',
            { className: prefixCls + '-list-item-progress' },
            _react2.default.createElement(_progress2.default, (0, _extends3.default)({ type: _this3.props.listType === 'picture-card' ? 'circle' : 'line', width: _this3.props.listType === 'picture-card' ? 80 : null }, _this3.props.progressAttr, { percent: Math.floor(file.percent), status: file.status === 'error' ? 'exception' : 'active' }))
          );
        }
        var infoUploadingClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-list-item', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
        var preview = file.url ? _react2.default.createElement(
          'a',
          (0, _extends3.default)({}, file.linkProps, {
            href: file.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: prefixCls + '-list-item-name',
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: file.name
          }),
          _react2.default.createElement(_icon2.default, { type: listType === 'picture' || listType === 'picture-card' ? null : 'clip' }),
          _react2.default.createElement(
            'span',
            null,
            listType === 'picture-card' ? null : file.name
          ),
          _react2.default.createElement(_icon2.default, { type: file.status === 'done' ? 'check' : '' })
        ) : _react2.default.createElement(
          'span',
          {
            className: prefixCls + '-list-item-name',
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: file.name
          },
          _react2.default.createElement(_icon2.default, { type: _this3.props.listType === 'picture' || listType === 'picture-card' ? null : 'clip' }),
          _react2.default.createElement(
            'span',
            null,
            listType === 'picture-card' ? null : file.name
          ),
          _react2.default.createElement(_icon2.default, { type: file.status === 'done' || listType === 'picture-card' ? 'check' : '' })
        );
        var style = file.url || file.thumbUrl ? undefined : {
          pointerEvents: 'none',
          opacity: 0.5
        };
        var previewIcon = showPreviewIcon ? _react2.default.createElement(
          'a',
          {
            href: file.url || file.thumbUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: style,
            onClick: function onClick(e) {
              return _this3.handlePreview(file, e);
            },
            title: locale.previewFile
          },
          _react2.default.createElement(_icon2.default, { type: 'eye' })
        ) : null;
        var removeIcon = showRemoveIcon ? _react2.default.createElement(_icon2.default, { type: 'delete', title: locale.removeFile, onClick: function onClick() {
            return _this3.handleClose(file);
          } }) : null;
        var removeIconCross = showRemoveIcon ? _react2.default.createElement(_icon2.default, { type: 'close', title: locale.removeFile, onClick: function onClick() {
            return _this3.handleClose(file);
          } }) : null;
        var actions = listType === 'picture-card' && file.status !== 'uploading' ? _react2.default.createElement(
          'span',
          { className: prefixCls + '-list-item-actions' },
          previewIcon,
          removeIcon
        ) : removeIconCross;
        var message = void 0;
        if (file.response && typeof file.response === 'string') {
          message = file.response;
        } else {
          message = file.error && file.error.statusText || locale.uploadError;
        }
        var iconAndPreview = file.status === 'error' ? _react2.default.createElement(
          _tooltip2.default,
          { title: message },
          icon,
          preview
        ) : _react2.default.createElement(
          'span',
          null,
          icon,
          preview
        );

        return _react2.default.createElement(
          'div',
          { className: infoUploadingClass, key: file.uid },
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-list-item-info' },
            iconAndPreview
          ),
          actions,
          _react2.default.createElement(
            _rcAnimate2.default,
            { transitionName: 'fade', component: '' },
            progress
          )
        );
      });
      var listClassNames = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-list', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
      return _react2.default.createElement(
        'div',
        { className: listClassNames },
        _react2.default.createElement(
          _rcAnimate2.default,
          { transitionName: 'fade' },
          list
        )
      );
    }
  }]);
  return UploadList;
}(_react2.default.Component);

UploadList.defaultProps = {
  listType: 'text',
  progressAttr: {
    strokeWidth: 3,
    showInfo: true
  },
  prefixCls: 'idoll-upload',
  showRemoveIcon: true,
  showPreviewIcon: true
};
exports.default = UploadList;