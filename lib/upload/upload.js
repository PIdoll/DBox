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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUpload = require('rc-upload');

var _rcUpload2 = _interopRequireDefault(_rcUpload);

var _uploadList = require('./uploadList');

var _uploadList2 = _interopRequireDefault(_uploadList);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _getFileItem = require('./getFileItem');

var _getFileItem2 = _interopRequireDefault(_getFileItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'idoll-upload';

function noop() {}

function T() {
  return true;
}

// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    response: file.response,
    error: file.error,
    percent: 0,
    originFileObj: file
  };
}

/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
  var k = 0.1;
  var i = 0.01;
  var end = 0.98;
  return function (s) {
    var start = s;
    if (start >= end) {
      return start;
    }

    start += k;
    k = k - i;
    if (k < 0.001) {
      k = 0.001;
    }
    return start * 100;
  };
}

function UploadDragger(props) {
  return _react2.default.createElement(Upload, (0, _extends3.default)({}, props, { type: 'drag', style: { height: props.height, width: props.width } }));
}

var Upload = function (_React$Component) {
  (0, _inherits3.default)(Upload, _React$Component);

  function Upload(props) {
    (0, _classCallCheck3.default)(this, Upload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Upload.__proto__ || (0, _getPrototypeOf2.default)(Upload)).call(this, props));

    _this.onStart = function (file) {
      var targetItem = void 0;
      var nextFileList = _this.state.fileList.concat();
      targetItem = fileToObject(file);
      targetItem.status = 'uploading';
      nextFileList.push(targetItem);
      _this.onChange({
        file: targetItem,
        fileList: nextFileList
      });
      // fix ie progress
      if (!window.FormData) {
        _this.autoUpdateProgress(0, targetItem);
      }
    };

    _this.onSuccess = function (response, file) {
      _this.clearProgressTimer();
      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {/* do nothing */}
      var fileList = _this.state.fileList;
      var targetItem = (0, _getFileItem2.default)(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.status = 'done';
      targetItem.response = response;
      _this.onChange({
        file: (0, _extends3.default)({}, targetItem),
        fileList: fileList
      });
    };

    _this.onProgress = function (e, file) {
      var fileList = _this.state.fileList;
      var targetItem = (0, _getFileItem2.default)(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.percent = e.percent;
      _this.onChange({
        event: e,
        file: (0, _extends3.default)({}, targetItem),
        fileList: _this.state.fileList
      });
    };

    _this.onError = function (error, response, file) {
      _this.clearProgressTimer();
      var fileList = _this.state.fileList;
      var targetItem = (0, _getFileItem2.default)(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      _this.onChange({
        file: (0, _extends3.default)({}, targetItem),
        fileList: fileList
      });
    };

    _this.handleManualRemove = function (file) {
      // this.refs.upload.abort(file);
      _this.upload.abort(file);
      /* eslint-disable */
      file.status = 'removed';
      /* eslint-enable */
      if ('onRemove' in _this.props) {
        _this.props.onRemove(file);
      } else {
        _this.handleRemove(file);
      }
    };

    _this.onChange = function (info) {
      var updateState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!('fileList' in _this.props) && updateState) {
        _this.setState({ fileList: info.fileList });
      }
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(info);
      }
    };

    _this.onFileDrop = function (e) {
      _this.setState({
        dragState: e.type
      });
    };

    _this.beforeUpload = function (file, fileList) {
      if (!_this.props.beforeUpload) {
        return true;
      }
      var result = _this.props.beforeUpload(file, fileList);
      if (result === false) {
        return false;
      } else if (result && result.then) {
        return result;
      }
      return true;
    };

    _this.saveUpload = function (node) {
      _this.upload = node;
    };

    _this.renderUploadList = function (locale) {
      var _this$props = _this.props,
          showUploadList = _this$props.showUploadList,
          listType = _this$props.listType,
          onPreview = _this$props.onPreview;

      console.log('upload', onPreview);
      var showRemoveIcon = showUploadList.showRemoveIcon,
          showPreviewIcon = showUploadList.showPreviewIcon;

      return _react2.default.createElement(_uploadList2.default, {
        listType: listType,
        items: _this.state.fileList,
        onPreview: onPreview,
        onRemove: _this.handleManualRemove,
        showRemoveIcon: showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        locale: (0, _extends3.default)({}, locale, _this.props.locale)
      });
    };

    _this.state = {
      fileList: _this.props.fileList || _this.props.defaultFileList || [],
      dragState: 'drop'
    };
    return _this;
  }

  (0, _createClass3.default)(Upload, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearProgressTimer();
    }
  }, {
    key: 'autoUpdateProgress',
    value: function autoUpdateProgress(percent, file) {
      var _this2 = this;

      var getPercent = genPercentAdd();
      var curPercent = 0;
      this.clearProgressTimer();
      this.progressTimer = setInterval(function () {
        curPercent = getPercent(curPercent);
        _this2.onProgress({
          percent: curPercent
        }, file);
      }, 200);
    }
  }, {
    key: 'removeFile',
    value: function removeFile(file) {
      var fileList = this.state.fileList;
      var targetItem = (0, _getFileItem2.default)(file, fileList);
      var index = fileList.indexOf(targetItem);
      if (index !== -1) {
        fileList.splice(index, 1);
        return fileList;
      }
      return null;
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(file) {
      var fileList = this.removeFile(file);
      if (fileList) {
        this.onChange({
          file: file,
          fileList: fileList
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('fileList' in nextProps) {
        this.setState({
          fileList: nextProps.fileList || []
        });
      }
    }
  }, {
    key: 'clearProgressTimer',
    value: function clearProgressTimer() {
      clearInterval(this.progressTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          _props$prefixCls = _props.prefixCls,
          prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
          className = _props.className,
          showUploadList = _props.showUploadList,
          listType = _props.listType,
          type = _props.type,
          disabled = _props.disabled,
          children = _props.children;


      var rcUploadProps = (0, _extends3.default)({
        onStart: this.onStart,
        onError: this.onError,
        onProgress: this.onProgress,
        onSuccess: this.onSuccess
      }, this.props, {
        beforeUpload: this.beforeUpload
      });

      delete rcUploadProps.className;

      var uploadList = showUploadList ? _react2.default.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Upload',
          defaultLocale: _default2.default.Upload
        },
        this.renderUploadList
      ) : null;

      if (type === 'drag') {
        var _classNames;

        var dragCls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-drag', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-drag-uploading', this.state.fileList.some(function (file) {
          return file.status === 'uploading';
        })), (0, _defineProperty3.default)(_classNames, prefixCls + '-drag-hover', this.state.dragState === 'dragover'), (0, _defineProperty3.default)(_classNames, prefixCls + '-disabled', disabled), _classNames));
        return _react2.default.createElement(
          'span',
          { className: className },
          _react2.default.createElement(
            'div',
            {
              className: dragCls,
              onDrop: this.onFileDrop,
              onDragOver: this.onFileDrop,
              onDragLeave: this.onFileDrop
            },
            _react2.default.createElement(
              _rcUpload2.default,
              (0, _extends3.default)({}, rcUploadProps, { ref: this.saveUpload, className: prefixCls + '-btn' }),
              _react2.default.createElement(
                'div',
                { className: prefixCls + '-drag-container' },
                children
              )
            )
          ),
          uploadList
        );
      }

      var uploadButtonCls = (0, _classnames2.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-select', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-select-' + listType, true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-disabled', disabled), _classNames2));

      var uploadButton = _react2.default.createElement(
        'div',
        { className: uploadButtonCls, style: { display: children ? '' : 'none' } },
        _react2.default.createElement(_rcUpload2.default, (0, _extends3.default)({}, rcUploadProps, { ref: this.saveUpload }))
      );

      if (listType === 'picture-card') {
        return _react2.default.createElement(
          'span',
          { className: className },
          uploadList,
          uploadButton
        );
      }
      return _react2.default.createElement(
        'span',
        { className: className },
        uploadButton,
        uploadList
      );
    }
  }]);
  return Upload;
}(_react2.default.Component);

Upload.Dragger = UploadDragger;
Upload.defaultProps = {
  prefixCls: prefixCls,
  type: 'select',
  // do not set
  // name: '',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  onChange: noop,
  beforeUpload: T,
  showUploadList: true,
  listType: 'text', // or pictrue
  className: '',
  disabled: false
};
exports.default = Upload;