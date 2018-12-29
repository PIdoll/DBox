
当页面内容区域比较长时,给与触发让用户快速回到页面的顶部。

##### **基本用法**

```jsx
<div>
  <BackTop />
    向下滚动以查看右下方的灰色
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
    按钮。
</div>
```

##### **自定义样式**

```jsx
<div>
<BackTop>
  <div style={{height: 40,width: 40, marginTop: 40, textAlign: 'center',borderRadius: 4,fontSize: 20,backgroundColor: '#13B886',color: '#fff',lineHeight: '40px', fontSize: 14}}>返回</div>
</BackTop>
  向下滚动以查看右下方的文字按钮。

</div>
```

##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | Function | () => window |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number | 400 |
| onClick | 点击按钮的回调函数 | Function | - |

```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
