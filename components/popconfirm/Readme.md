用户操作需要进一步确认，会在操作元素附近弹出浮层提示。

##### **基本用法**
最简单用法
```jsx
import { Popconfirm } from 'dbox-ui';
class PopconfirmDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        }
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    confirm(){
        this.setState({ visible: false });
        Message.success('删除成功');
    }
    cancel(){
        this.setState({ visible: false });
    }
    render() {
        return (
            <div id='popconfirm' style={{marginLeft: '100px'}}>
                <Popconfirm title='确定删除当前信息?' onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <a href='#'>删除</a>
                </Popconfirm>
            </div>
        )
    }
}

<PopconfirmDemo />
```

##### **12个方向**
弹出框位置有十二个方向。可通过设置 `placement` 属性控制。
```jsx
import { Popconfirm,Button } from 'dbox-ui';
const buttonWidth = '70px';
const text = '确定要删除吗';
class PopconfirmDemo extends React.Component {
    constructor() {
        super();
        this.state = {
             visible: false,
        }
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    confirm(){
        this.setState({ visible: false });
        Message.success('删除成功');
    }
    cancel(){
        this.setState({ visible: false });
        console.log('click cancel');
    }
    render() {
        return (
        <div>
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Popconfirm placement='topLeft' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>TL</Button>
            </Popconfirm>
            <Popconfirm placement='top' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Top</Button>
            </Popconfirm>
            <Popconfirm placement='topRight' title={text} onConfirm={this.confirm} onCancel={this.cancel}  okText='确认删除' cancelText='取消'>
                <Button>TR</Button>
            </Popconfirm>
            </div>
            <div style={{ width: buttonWidth, float: 'left' }}>
            <Popconfirm placement='leftTop' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>LT</Button>
            </Popconfirm>
            <Popconfirm placement='left' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Left</Button>
            </Popconfirm>
            <Popconfirm placement='leftBottom' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>LB</Button>
            </Popconfirm>
            </div>
            <div style={{ width: buttonWidth, marginLeft: (70 * 4) + 24 }}>
            <Popconfirm placement='rightTop' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>RT</Button>
            </Popconfirm>
            <Popconfirm placement='right' title={text} onConfirm={this.confirm} onCancel={this.cancel}  okText='确认删除' cancelText='取消'>
                <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Right</Button>
            </Popconfirm>
            <Popconfirm placement='rightBottom' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>RB</Button>
            </Popconfirm>
            </div>
            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popconfirm placement='bottomLeft' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>BL</Button>
            </Popconfirm>
            <Popconfirm placement='bottom' title={text} onConfirm={this.confirm} onCancel={this.cancel}  okText='确认删除' cancelText='取消'>
                <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Bottom</Button>
            </Popconfirm>
            <Popconfirm placement='bottomRight' title={text} onConfirm={this.confirm} onCancel={this.cancel} okText='确认删除' cancelText='取消'>
                <Button>BR</Button>
            </Popconfirm>
            </div>
        </div>
        )
    }
}
<PopconfirmDemo />

```

##### **条件触发**
可以判断是否需要弹出。
```jsx
import { Popconfirm,Switch } from 'dbox-ui';
class PopconfirmDemo extends React.Component {
    constructor() {
        super();
        this.state = {
             visible: false,
        }
        this.confirm = this.confirm.bind(this);
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
        this.changeCondition = this.changeCondition.bind(this);
    }

    confirm(){
        this.setState({ visible: false });
        Message.success('删除成功');
    }

    changeCondition(value){
        this.setState({ condition: value });
    }

    handleVisibleChange(visible) {
        if (!visible) {
            this.setState({ visible });
            return;
        }

        if (this.state.condition) {
            this.confirm(); // next step
        } else {
            this.setState({ visible }); // 显示popconfirm
        }
   }

    render(){
        return (
            <div>
        <Popconfirm
          title='确定要删除吗？'
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText='确认删除'
          cancelText='取消'
        >
          <a href='#'>删除任务</a>
        </Popconfirm>
        <br />
        <br />
        是否直接删除：<Switch defaultChecked onChange={this.changeCondition} />
        </div>
        )
    }
}
<PopconfirmDemo />
```
##### **Popconfirm**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cancelText | 取消按钮文字 | string | 取消 |
| okText | 确认按钮文字 | string | 确定 |
| okType | 确认按钮类型 | string | primary |
| title | 确认框的描述 | string/ReactNode | 无 |
| onCancel | 点击取消的回调 | function(e) | 无 |
| onConfirm | 点击确认的回调 | function(e) | 无 |
| icon | 自定义弹出气泡 Icon 图标 | ReactNode | &lt;Icon type="exclamation-circle" /&gt; |

更多属性请参考 [Tooltip]。

#### **注意**

请确保 `Popconfirm` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
