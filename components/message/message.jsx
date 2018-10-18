// rc-notification:https://github.com/fis-components/rc-notification;
import React from 'react';
import Notification from 'rc-notification';
import './style/index';

let defaultDuration = 100;
let defaultTop;
let messageInstance;
let key = 1;
let prefixCls = 'idoll-message';

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification.newInstance({
    prefixCls,
    transitionName: 'move-up',
    style: { top: defaultTop }
    // getContainer
  }, (instance) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}

function notice(content, duration = defaultDuration, type, onClose) {
  if (typeof duration === 'function') {
    onClose = duration;
    duration = defaultDuration;
  }

  const target = key++;
  getMessageInstance((instance) => {
    instance.notice({
      key: target,
      duration,
      style: {},
      content: (
        <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
          <span>{content}</span>
        </div>
      ),
      onClose
    });
  });
  return () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
}

export default {
  success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose)
  },
  error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
  warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null;// delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
