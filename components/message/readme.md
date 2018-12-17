#### **何时使用**
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

#### **基本类型信息展示**

```jsx
import { Switch, Message, Button } from 'components';
  let normal = false;
  onChange = () => {
    normal = !normal
  }
  success = () => {
    Message.success('这是成功信息提示', 30, () => console.log(1111), normal);
  };
  error = () => {
    Message.error('这是错误信息提示', normal);
  }
  warn = () => {
    Message.warn('这是警告信息提示', 3, normal);
  };
  info = () => {
    Message.info('这是基本的信息提示', 3, () => console.log('关闭回调'), normal);
  };
  <div>
    <h4>可切换Message以背景色展示</h4>
    <Switch defaultChecked onChange={onChange} /><br /><br />
    <Button style={{ marginRight: 10 }} onClick={success}>成功</Button>
    <Button type='danger' style={{ marginRight: 10 }} onClick={error}>失败</Button>
    <Button onClick={warn} style={{ marginRight: 10 }}>警告</Button>
    <Button onClick={info}>信息</Button>
  </div>
```

#### **修改延时**

```jsx
import { Switch, Message, Button } from 'components';

let normal = false;
onChange = () => {
  normal = !normal
}
DelayInfo = () => {
  Message.info('这是基本的信息提示，并且在10s之后会自动关闭', 10, normal);
};
<div>
  <h4>可切换Message以背景色展示</h4>
  <Switch defaultChecked onChange={onChange} /><br /><br />
  <Button onClick={DelayInfo}>10s后关闭</Button>
</div>
```

#### **加载中**

```jsx
import { Switch, Message, Button } from 'components';

LoadingSuccess = () => {
  const hide = Message.loading('活动加载中..', 10);
    setTimeout(hide, 250000);
  };
<Button onClick={LoadingSuccess}>加载中</Button>
```

#### **Promise接口**

```jsx
import { Switch, Message, Button, Icon } from 'components';

let normal = false;
onChange = () => {
  normal = !normal
}
const PromiseSuccess = () => {
  Message.loading('活动加载中..', 2.5)
  Message.open({
    content: 'open触发了',
    normal: normal,
    icon: <Icon type='down-circle' />,
  })
    .then(() => Message.success('加载结束', 2.5))
    .then(() => Message.info('加载中的加载结束', 2.5));
    };
  <div>
    <Button onClick={PromiseSuccess}>Promise</Button>
  </div>
```

#### **API**

组件提供了静态方法，使用参数和方式如下
- Message.success(content, [duration], onClose, true)
- Message.error(content, [duration], onClose, true)
- Message.info(content, [duration], onClose, true)
- Message.warning(content, [duration], onClose, true)
- Message.warn(content, [duration], onClose, true)
- Message.loading(content, [duration], onClose)(不支持normal背景色展示)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| content | 提示内容 | string|ReactNode | - |
| duration | 自动关闭的延时,单位秒。设为0时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | Function | - |
| normal | 是否采用无背景色的信息提示 | boolean | false |

#### **API**

组件同时提供promise接口
- Message[level](content, [duration]).then(afterClose)
- Message[level](content, [duration], onClose).then(afterClose)
其中Message[level]是组件已经提供的静态方法。then接口返回值是Promise。
- Message.open(config)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| content | 提示内容 | string|ReactNode | - |
| duration | 自动关闭的延时,单位秒。设为0时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | Function | - |
| icon | 自定义图标 | ReactNode | - |

#### **全局方法**
还提供了全局配置和全局销毁方法：
- Message.config(options)
- Message.destroy()

#### **message.config**
Message.config({
  top: 100,
  duration: 2,
  maxCount: 3
})

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| getContainer | 配置渲染节点的输出位置 | () => HTMLElement | () => document.body |
| duration | 默认自动关闭延时 | number | 3 |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |
| top | 消息距离顶部的位置 | number | 24 |
