
<!-- # [Tooltip](http://naotu.baidu.com/file/31da15d78e14d807c75299d5f34fcbae?token=2da0729ca523eb90) -->

#### **何时使用**

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

#### **基本用法**
简单用法
```jsx
<Tooltip title='提示文字'>
    <span>当鼠标移入时会出现文字提示</span>
</Tooltip>
```

#### **12个方向**
位置有12个方向
```jsx
const buttonWidth = 70;
const text = <span>提示文字</span>;
<div>
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }} >
    <Tooltip placement='topLeft' title={text}>
        <Button>TL</Button>
    </Tooltip>
    <Tooltip placement='top' title={text} >
        <Button>Top</Button>
    </Tooltip>
    <Tooltip placement='topRight' title={text}>
        <Button>TR</Button>
    </Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
    <Tooltip placement='leftTop' title={text}>
        <Button>LT</Button>
    </Tooltip>
    <Tooltip placement='left' title={text} >
        <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Left</Button>
    </Tooltip>
    <Tooltip placement='leftBottom' title={text}>
        <Button>LB</Button>
    </Tooltip>
    </div>
    <div style={{ width: buttonWidth,marginLeft: (buttonWidth * 4) + 24 }}>
    <Tooltip placement='rightTop' title={text}>
        <Button>RT</Button>
    </Tooltip>
    <Tooltip placement='right' title={text} >
        <Button style={{ marginTop: '10px', marginBottom: '10px' }}>Right</Button>
    </Tooltip>
    <Tooltip placement='rightBottom' title={text}>
        <Button>RB</Button>
    </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
    <Tooltip placement='bottomLeft' title={text}>
        <Button>BL</Button>
    </Tooltip>
    <Tooltip placement='bottom' title={text} >
        <Button>Bottom</Button>
    </Tooltip>
    <Tooltip placement='bottomRight' title={text}>
        <Button>BR</Button>
    </Tooltip>
    </div>
</div>
```

#### **箭头指向**
```jsx
const text = <span>提示文字</span>;
<div className='arrow'>
    <Tooltip placement='topLeft' title={text} >
        <Button>边缘对齐</Button>
    </Tooltip>
    <Tooltip placement='topLeft' title={text} arrowPointAtCenter>
        <Button>箭头指向中心 </Button>
    </Tooltip>
</div>
```

#### **Tooltip**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | string/ReactNode/() => ReactNode | 无 |

#### **Tooltip、Popconfirm、Popover共同的API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| arrowPointAtCenter | 箭头是否指向目标元素中心，| boolean | `false` |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | `true` |
| defaultVisible | 默认是否显隐 | boolean | false |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上。| Function(triggerNode) | () => document.body |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| overlayClassName | 卡片类名 | string | 无 |
| overlayStyle | 卡片样式 | object | 无 |
| placement | 气泡框位置，可选 `top`、`left`、 `right`、 `bottom`、 `topLeft`、 `topRight`、 `bottomLeft`、 `bottomRight`、 `leftTop` 、`leftBottom` 、`rightTop`、 `rightBottom` | string | top |
| trigger | 触发行为，可选 `hover/focus/click` | string | hover |
| visible | 用于手动控制浮层显隐 | boolean | false |
| onVisibleChange | 显示隐藏的回调 | (visible) => void | 无 |


#### **注意**

请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
