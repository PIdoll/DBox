'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _index = require('../icon/index');

var _index2 = _interopRequireDefault(_index);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDuration = 3; // 默认自动关闭延时 3s
var defaultTop = void 0; // 默认提示框的高度
var messageInstance = void 0;
var key = 1;
var prefixCls = 'idoll-notification';
var transitionName = 'move-up'; // 提示框关闭动画名称
var getContainer = void 0; // 接收一个函数，该函数的返回的HTML节点将作为消息通知的容器
var maxCount = void 0; // 最大显示数, 超过限制时，最早的消息会被自动关闭

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  _rcNotification2.default.newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: { top: defaultTop },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}

function notice(content) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
  var type = arguments[2];
  var onClose = arguments[3];
  var icon = arguments[4];
  var normal = arguments[5];

  if (typeof onClose === 'boolean') {
    normal = onClose;
  }
  if (typeof duration === 'function') {
    onClose = duration;
    duration = defaultDuration;
  }
  if (typeof duration === 'boolean') {
    normal = duration;
    duration = defaultDuration;
  }
  if (typeof icon === 'boolean') {
    normal = icon;
    icon = '';
  }
  var iconType = {
    info: 'warning-circle',
    success: 'check-circle',
    error: 'close-circle',
    warning: 'warning-circle',
    loading: 'warning-circle' // 加载中....loading图标
  }[type];

  var target = key++;
  var closePromise = new _promise2.default(function (resolve) {
    var callback = function callback() {
      if (typeof onClose === 'function') {
        onClose();
      }
      return resolve(true);
    };
    getMessageInstance(function (instance) {
      var iconNode = _react2.default.createElement(_index2.default, { type: iconType });
      instance.notice({
        key: target,
        duration: duration,
        style: {},
        content: _react2.default.createElement(
          'div',
          { className: prefixCls + '-custom-content ' + (type && !normal ? prefixCls + '-' + type : 'content-' + type) },
          icon || (iconType ? iconNode : ''),
          _react2.default.createElement(
            'p',
            { className: 'title' },
            '\u6211\u662F\u6807\u9898',
            _react2.default.createElement(_index2.default, { type: 'close', onClick: callback })
          ),
          _react2.default.createElement(
            'p',
            null,
            content
          )
        ),
        onClose: callback
      });
    });
  });
  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };
  result.promise = closePromise;
  return result;
}

var api = {
  open: notice,
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null;
    }
    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};

var messageType = ['success', 'info', 'warning', 'error', 'loading'];
messageType.forEach(function (type) {
  api[type] = function (content, duration, onClose, normal) {
    if (typeof onClose === 'boolean') {
      normal = onClose;
    }
    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }
    if (typeof duration === 'boolean') {
      normal = duration;
      duration = undefined;
    }
    return api.open({ content: content, duration: duration, type: type, onClose: onClose, normal: normal });
  };
});

exports.default = {
  success: function success(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'success', onClose, icon, normal);
  },
  error: function error(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'error', onClose, icon, normal);
  },
  info: function info(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'info', onClose, icon, normal);
  },
  warning: function warning(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'warning', onClose, icon, normal);
  },
  warn: function warn(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'warning', onClose, icon, normal);
  },
  loading: function loading(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'loading', onClose, icon, normal);
  },
  open: function open(_ref) {
    var content = _ref.content,
        duration = _ref.duration,
        onClose = _ref.onClose,
        icon = _ref.icon,
        normal = _ref.normal;

    return notice(content, duration, 'info', onClose, icon, normal);
  },
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null;
    }
    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};