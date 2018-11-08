
#### **基本用法**

```jsx
<Alert
  message='成功提示'
  type='success' />
```

#### **可关闭的警告提示**

```jsx
initialState = {
  onClose: false
}
const onClose = () => setState({onClose: true});
<div>
<Alert
  message='警告文本警告文本警告文本警告文本警告文本警告文本'
  type='warning'
  closable
  onClose={onClose} />
<Alert
  message='错误文本'
  description='错误文本错误文本错误文本错误文本错误文本错误文本'
  type='error'
  closable
  onClose={onClose} />
</div>
```

#### **带有图标的警告提示**

```jsx
<Alert message='成功' type='success' showIcon />
<Alert message='信息提示' type='info' showIcon />
<Alert message='警告' type='warning' showIcon />
<Alert message='错误' type='error' showIcon />

```

#### **带有标题和描述的图标提示**

```jsx
<Alert
  message='成功'
  description='关于成功的文案写作的详细描述和建议.'
  type='success'
  showIcon/>
<Alert
  message='信息提示'
  description='关于文案写作的额外描述和信息.'
  type='info'
  showIcon/>
<Alert
  message='警告'
  description='这是一个关于文案写作的警告通知.'
  type='warning'
  showIcon/>
<Alert
  message='错误'
  description='这是一个关于文案写作的错误通知.'
  type='error'
  showIcon/>
```

#### **四种样式**

```jsx
 <Alert message='成功文本' type='success' />
 <Alert message='提示文本' type='info' />
 <Alert message='警告文本' type='warning' />
 <Alert message='错误文本' type='error' />
```

#### **含有辅助性文字的文本**

```jsx
 <Alert
    message='成功文本'
    description='成功描述成功描述成功描述成功描述成功描述'
    type='success'/>
 <Alert
    message='提示文本'
    description='提示描述提示描述提示描述提示描述提示描述'
    type='info'/>
 <Alert
    message='警告文本'
    description='警告描述警告描述警告描述警告描述警告描述'
    type='warning'/>
 <Alert
    message='错误文本'
    description='错误描述错误描述错误描述错误描述错误描述'
    type='error'/>
```

#### **自定义关闭**

```jsx
 <Alert message='Info Text' type='info' closeText='Close Now' />
```

#### **平滑的卸载**

```jsx
initialState = {
  visible: true
}
const handleClose = () => setState({visible: false});
<div>
    <Alert
      message='Alert Message Text'
      type='success'
      closable
      afterClose={this.handleClose}/>
</div>
```

#### **顶部公告**

```jsx

 <Alert message='警告文本' banner />
 <Alert message='非常长的警告文本非常长的警告文本' banner closable />
 <Alert showIcon={false} message='没有图标的警告文本' banner />
 <Alert type='error' message='错误文本' banner />
```

<style>.idoll-alert+.idoll-alert{margin-top: 20px} </style>
