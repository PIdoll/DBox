
将元素固定在特定区域，一般用于导航栏或反馈按钮。

##### **固定在顶部**
```jsx
import { Affix, Button } from 'dbox-ui';

class AffixView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 30,
    }
  }
  render() {
    return (
      <Affix offsetTop={this.state.top} ref='box_affix'>
        <Button  >距离顶部30px触发</Button>
      </Affix>
    )
  }
}
<AffixView />
```
##### **固定在底部**
```jsx
import { Affix, Button } from 'dbox-ui';

const AffixView = () => {
  return (
    <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
      <Button >距离底部0px触发</Button>
    </Affix>
  )
}
<AffixView />
```

##### **固定在容器**
```jsx
import { Affix, Button } from 'dbox-ui';

class AffixView extends React.Component{
  render() {
    return (
      <div ref={(node) => { this.container = node; }}>
        <div style={{backgroundColor: '#dedede', padding: '10px 0'}}>
          <Affix target={() => this.container}>
            <Button type="primary">
                固定在容器的顶部
            </Button>
          </Affix>
        </div>
      </div>
    )
  }
}
<AffixView />
```
##### **API**

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | Function(affixed) | 无 |

**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
