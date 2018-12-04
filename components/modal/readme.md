#### **何时使用**

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `Modal.confirm()` 等方法。

#### **普通弹出框(可用于展示和提交)**
```jsx
class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visible: false,
   }
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this)
  };
  showModal () {
    this.setState({
      visible: true
    });
  };
  handleOk (e) {
    this.setState({
      visible: false
    });
  }
  handleCancel (e) {
    this.setState({
      visible: false
    });
  };
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.showModal}>显示对话框</Button>
      <Modal title='我是标题' visible={this.state.visible}
        onOk={this.handleOk} onCancel={this.handleCancel}>
        <p>这里是一句话</p>
        <p>或者一段文字</p>
        <p>或者表格</p>
        <p>或者其他嵌套组件</p>
        <p>…………</p>
        <p>最后一行</p>
      </Modal>
    </div>
  )
}
}
<ModalView />
```

#### **异步关闭弹出框**
```jsx
class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    asyncvisible: false,
    ModalText: '对话框的内容',
   }
    this.asyncshowModal = this.asyncshowModal.bind(this);
    this.asynchandleOk = this.asynchandleOk.bind(this);
    this.asynchandleCancel = this.asynchandleCancel.bind(this)
  };
  // 异步关闭弹出框
  asyncshowModal () {
    this.setState({
      asyncvisible: true
    });
  }
  asynchandleOk (e) {
    this.setState({
      ModalText: '选择确认后对话框将在 2 秒后关闭',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        asyncvisible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  asynchandleCancel (e) {
    console.log('点击了取消');
    this.setState({
      asyncvisible: false
    });
  }
  render() {
  return (
    <div>
      <Button type='primary' onClick={this.asyncshowModal}>显示对话框</Button>
      <Modal confirmLoading={this.state.confirmLoading} title='我是标题' visible={this.state.asyncvisible}
        onOk={this.asynchandleOk} onCancel={this.asynchandleCancel}>
        <p>{this.state.ModalText}</p>
      </Modal>
    </div>
  )
}
}
<ModalView />
```
#### **信息提示**
```jsx
class ModalView extends React.Component {
  constructor(props) {
    super(props)
  };
  info () {
    Modal.info({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息',
      onOk: function() {},
    });
  }

  success () {
    Modal.success({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息'
    });
  }

  error () {
    Modal.error({
      title: '这是一条通知信息',
      content: '一些附加信息一些附加信息一些附加信息'
    });
  }
  render() {
  return (
    <div>
      <Button onClick={this.info}>信息提示</Button>
      <Button onClick={this.success}>成功提示</Button>
      <Button onClick={this.error}>失败提示</Button>
    </div>
  )
}
}
<ModalView />
```
#### **确认对话框**
```jsx
class ModalView extends React.Component {
  constructor(props) {
    super(props)
  };
  showConfirm () {
    Modal.confirm({
      iconType: 'close-circle',
      title: '我是一个确认对话模态框',
      content: <div><p>这里是描述文字…</p><p>这里是描述文字…</p></div>,
      onOk: function() {
        console.log('确定');
      },
      onCancel: function() {}
    });
  }
  render() {
  return (
    <Button onClick={this.showConfirm}>确认对话框</Button>
  )
}
}
<ModalView />
```


#### **Modal**

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | Boolean          | 无           |
| confirmLoading | 确定按钮 loading | Boolean    | 无           |
| title      | 标题           | React.Element    | 无           |
| closable   | 是否显示右上角的关闭按钮 | Boolean    | true        |
| onOk       | 点击确定回调       | function     | 无           |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |
| width      | 宽度           | String or Number | 560           |
| footer     | 底部内容       | React.Element    | 确定取消按钮 |
| okText     | 确认按钮文字    | String           | 确定       |
| cancelText | 取消按钮文字    | String           | 取消       |
| maskClosable | 点击蒙层是否允许关闭 | Boolean   | true       |
| style | 可用于设置浮层的样式，调整浮层位置等 | Object   | - |
| wrapClassName | 对话框外层容器的类名 | String   | - |

#### **Modal.xxx()**

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | React.Element or String    | 无           |
| content    | 内容           | React.Element or String    | 无           |
| onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | 无           |
| onCancel   | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | 无           |
| width      | 宽度           | String or Number | 408           |
| iconType   | 图标 Icon 类型    | String | question-circle |
| okText     | 确认按钮文字    | String           | 确定       |
| cancelText | 取消按钮文字    | String           | 取消       |
