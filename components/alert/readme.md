#### **何时使用**
- 当需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以选择点击关闭。

#### **基本用法**

```jsx
import { Alert } from 'components';

<Alert
  message='成功提示'
  type='success' />
```

#### **可关闭的警告提示**

```jsx
import { Alert } from 'components';

onClose = (e) => {
  console.log(e, 'I was closed.');
};
<div>
  <Alert
    message='警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本警告文本'
    type='warning'
    closable
    onClose={onClose} />
  <Alert
    message='错误文本'
    description='错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本错误文本'
    type='error'
    closable
    onClose={onClose} />
</div>
```

#### **带有图标的警告提示**

```jsx
import { Alert } from 'components';

<div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='成功' type='success' showIcon />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='信息提示' type='info' showIcon />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='警告' type='warning' showIcon />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='错误' type='error' showIcon />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='成功'
      description='关于成功的文案写作的详细描述和建议.'
      type='success'
      showIcon/>
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='信息提示'
      description='关于文案写作的额外描述和信息.'
      type='info'
      showIcon/>
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='警告'
      description='这是一个关于文案写作的警告通知.'
      type='warning'
      showIcon/>
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='错误'
      description='这是一个关于文案写作的错误通知.'
      type='error'
      showIcon/>
  </div>
</div>
```

#### **四种样式**

```jsx
import { Alert } from 'components';

 <div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='成功文本' type='success' />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='提示文本' type='info' />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert message='警告文本' type='warning' />
  </div>
  <div>
    <Alert message='错误文本' type='error' />
  </div>
 </div>
```

#### **含有辅助性文字的文本**

```jsx
import { Alert } from 'components';

 <div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='成功文本'
      description='成功描述成功描述成功描述成功描述成功描述'
      type='success'
    />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='提示文本'
      description='提示描述提示描述提示描述提示描述提示描述'
      type='info'
    />
  </div>
  <div style={{ marginBottom: 15 }}>
    <Alert
      message='警告文本'
      description='警告描述警告描述警告描述警告描述警告描述'
      type='warning'
    />
  </div>
  <div>
    <Alert
      message='错误文本'
      description='错误描述错误描述错误描述错误描述错误描述'
      type='error'
    />
  </div>
 </div>
```

#### **自定义关闭**

```jsx
import { Alert } from 'components';

<Alert message='Info Text' type='info' closeText='Close Now' />
```

#### **平滑的卸载**

```jsx
import { Alert } from 'components';

class AlertView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    console.log(1)
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
      {
        this.state.visible ? (
          <Alert
            message='Alert Message Text'
            type='success'
            closable
            afterClose={this.handleClose}
          />
        ) : null
      }
      <p>placeholder text here</p>
      </div>
    )
  }
}
<AlertView />

```

#### **顶部公告**

```jsx
import { Alert } from 'components';

<div>
 <Alert message='警告文本' banner />
 <Alert message='非常长的警告文本非常长的警告文本' banner closable />
 <Alert showIcon={false} message='没有图标的警告文本' banner />
 <Alert type='error' message='错误文本' banner />
</div>
```

#### **API**
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |
| banner | 是否用作顶部公告 | boolean | false |
| closable | 默认不显示关闭按钮 | boolean | 无 |
| closeText | 自定义关闭按钮 | string|ReactNode | 无 |
| description | 警告提示的辅助性文字介绍 | string|ReactNode | 无 |
| icon | 自定义图标，showIcon 为 true 时有效 | ReactNode | - |
| message | 警告提示内容 | string|ReactNode | 无 |
| showIcon | 是否显示辅助图标 | boolean | false，banner 模式下默认值为 true |
| type | 指定警告提示的样式，有四种选择 success、info、warn、error | string | info，banner 模式下默认值为 warn |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | 无 |

```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
