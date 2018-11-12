// // rc-notification:https://github.com/fis-components/rc-notification;
// import React from 'react';
// import Notification from 'rc-notification';
// import './style/index';

// let defaultDuration = 100;
// let defaultTop;
// let messageInstance;
// let key = 1;
// let prefixCls = 'idoll-message';

// function getMessageInstance(callback) {
//   if (messageInstance) {
//     callback(messageInstance);
//     return;
//   }
//   Notification.newInstance({
//     prefixCls,
//     transitionName: 'move-up',
//     style: { top: defaultTop }
//     // getContainer
//   }, (instance) => {
//     if (messageInstance) {
//       callback(messageInstance);
//       return;
//     }
//     messageInstance = instance;
//     callback(instance);
//   });
// }

// function notice(content, duration = defaultDuration, type, onClose) {
  // if (typeof duration === 'function') {
  //   onClose = duration;
  //   duration = defaultDuration;
  // }

//   const target = key++;
//   getMessageInstance((instance) => {
//     instance.notice({
//       key: target,
//       duration,
//       style: {},
//       content: (
//         <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
//           <span>{content}</span>
//         </div>
//       ),
//       onClose
//     });
//   });
//   return () => {
//     if (messageInstance) {
//       messageInstance.removeNotice(target);
//     }
//   };
// }

// export default {
//   success(content, duration, onClose) {
//     return notice(content, duration, 'success', onClose)
//   },
//   error(content, duration, onClose) {
//     return notice(content, duration, 'error', onClose);
//   },
//   warning(content, duration, onClose) {
//     return notice(content, duration, 'warning', onClose);
//   },
//   config(options) {
//     if (options.top !== undefined) {
//       defaultTop = options.top;
//       messageInstance = null;// delete messageInstance for new defaultTop
//     }
//     if (options.duration !== undefined) {
//       defaultDuration = options.duration;
//     }
//     if (options.prefixCls !== undefined) {
//       prefixCls = options.prefixCls;
//     }
//   },
//   destroy() {
//     if (messageInstance) {
//       messageInstance.destroy();
//       messageInstance = null;
//     }
//   }
// };

import React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon/index';
import './style/index';

let defaultDuration = 12; // 默认自动关闭延时 3s
let defaultTop; // 默认提示框的高度
let messageInstance;
let key = 1;
let prefixCls = 'idoll-message';
let transitionName = 'move-up'; // 提示框关闭动画名称
let getContainer; // 接收一个函数，该函数的返回的HTML节点将作为消息通知的容器
let maxCount; // 最大显示数, 超过限制时，最早的消息会被自动关闭

function getMessageInstance (callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification.newInstance({
    prefixCls,
    transitionName,
    style: { top: defaultTop },
    getContainer,
    maxCount
  }, (instance) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  })
}

function notice (content, duration = defaultDuration, type, onClose, icon, normal) {
  // debugger;
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
  const iconType = ({
    info: 'warning-circle',
    success: 'check-circle',
    error: 'close-circle',
    warning: 'warning-circle',
    loading: 'warning-circle' // 加载中....loading图标
  })[type];

  const target = key++;
  const closePromise = new Promise((resolve) => {
    const callback = () => {
      if (typeof onClose === 'function') {
        onClose();
      }
      return resolve(true);
    };
    getMessageInstance((instance) => {
      const iconNode = <Icon type={iconType} />;
      instance.notice({
        key: target,
        duration,
        style: {},
        content: (
          <div className={`${prefixCls}-custom-content ${type && !normal ? `${prefixCls}-${type}` : `content-${type}`}`}>
            {icon || (iconType ? iconNode : '')}
            <span>{content}</span>
          </div>
        ),
        onClose: callback,
      });
    });
  });
  const result = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

const api = {
  open: notice,
  config(options) {
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
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};

const messageType = ['success', 'info', 'warning', 'error', 'loading'];
messageType.forEach((type) => {
  api[type] = (content, duration, onClose, normal) => {
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
    return api.open({ content, duration: duration, type, onClose, normal });
  }
});

export default {
  success(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'success', onClose, icon, normal)
  },
  error(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'error', onClose, icon, normal);
  },
  info(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'info', onClose, icon, normal)
  },
  warning(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'warning', onClose, icon, normal);
  },
  warn(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'warning', onClose, icon, normal);
  },
  loading(content, duration, onClose, icon, normal) {
    return notice(content, duration, 'loading', onClose, icon, normal);
  },
  open({content, duration, onClose, icon, normal}) {
    return notice(content, duration, 'info', onClose, icon, normal);
  },
  config(options) {
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
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
