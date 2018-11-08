
#### **何时使用**

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `ant.Modal.confirm()` 等方法。

#### **普通弹出框(可用于展示和提交)**
```jsx
class basicModal extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  handleOk(e) {
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.showModal.bind(this)}>显示对话框</Button>
        <Modal title='第一个 Modal' visible = {this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} width={800}>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>
      </div>
    )
  }
}
<basicModal />

```

#### **异步关闭弹出框**
```jsx
  initialState = {
    asyncvisible: false,
    ModalText: '对话框的内容',
  }
const  asyncshowModal = () => {
    this.setState({
      asyncvisible: true
    });
  }
const  asynchandleOk = (e) => {
    this.setState({
      ModalText: '对话框将在两秒后关闭',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        asyncvisible: false,
        confirmLoading: false
      });
    }, 2000);
  }
const  asynchandleCancel = (e) => {
    console.log('点击了取消');
    this.setState({
      asyncvisible: false
    });
  }
<div>
  <Button type='primary' onClick={this.asyncshowModal}>显示对话框</Button>
  {
    state.asyncvisible ? (
      <Modal title='第一个 Modal'
        onOk={this.asynchandleOk} onCancel={this.asynchandleCancel}>
        <p>{this.ModalText}</p>
      </Modal>
    ) : null
  }
</div>

```

#### **API**

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | Boolean          | 无           |
| confirmLoading | 确定按钮 loading | Boolean    | 无           |
| title      | 标题           | React.Element    | 无           |
| closable   | 是否显示右上角的关闭按钮 | Boolean    | true        |
| onOk       | 点击确定回调       | function     | 无           |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function(e)  | 无         |
| width      | 宽度           | String or Number | 520           |
| footer     | 底部内容       | React.Element    | 确定取消按钮 |
| okText     | 确认按钮文字    | String           | 确定       |
| cancelText | 取消按钮文字    | String           | 取消       |
| maskClosable | 点击蒙层是否允许关闭 | Boolean   | true       |
| style | 可用于设置浮层的样式，调整浮层位置等 | Object   | - |
| wrapClassName | 对话框外层容器的类名 | String   | - |

### Modal.xxx()

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | React.Element or String    | 无           |
| content    | 内容           | React.Element or String    | 无           |
| onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | 无           |
| onCancel   | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | 无           |
| width      | 宽度           | String or Number | 416           |
| iconType   | 图标 Icon 类型    | String | question-circle |
| okText     | 确认按钮文字    | String           | 确定       |
| cancelText | 取消按钮文字    | String           | 取消       |
