
#### **普通提示**

```jsx

```

#### **其他类型提示**

```jsx
<Button style={{ marginRight: 10 }} onClick={success}>Success</Button>
const success = () => {
  message.success('This is a message of success');
};
<Button style={{ marginRight: 10 }} onClick={warning}>Warning</Button>
const warning = () => {
  message.warning('This is a message of warning');
};
<Button onClick={warn}>Warn</Button>
const error = () => {
  const hide = message.error('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};
```

#### **修改延时**

```jsx

```

#### **加载中**

```jsx
```

### API

组件提供了静态方法，使用参数和方式如下
- message.success(content, [duration], onClose)
- message.error(content, [duration], onClose)
- message.info(content, [duration], onClose)
- message.warning(content, [duration], onClose)
- message.warn(content, [duration], onClose)
- message.loading(content, [duration], onClose)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| content | 提示内容 | string|ReactNode | - |
| duration | 自动关闭的延时,单位秒。设为0时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | Function | - |

#### **Promise接口**

```jsx
```

### API

组件同时提供promise接口
- message[level](content, [duration]).then(afterClose)
- message[level](content, [duration], onClose).then(afterClose)
其中message[level]是组件已经提供的静态方法。then接口返回值是Promise。
- message.open(config)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| content | 提示内容 | string|ReactNode | - |
| duration | 自动关闭的延时,单位秒。设为0时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | Function | - |
| icon | 自定义图标 | ReactNode | - |

### API
还提供了全局配置和全局销毁方法：
- message.config(options)
- message.destroy()

##### message.config

`
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
})
`
| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| getContainer | 配置渲染节点的输出位置 | () => HTMLElement | () => document.body |
| duration | 默认自动关闭延时 | number | 3 |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |
| top | 消息距离顶部的位置 | number | 24 |
