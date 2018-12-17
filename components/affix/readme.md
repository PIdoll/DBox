
####  **何时使用**

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
页面可视范围过小时，慎用此功能以免遮挡页面内容。

#### **基本使用**
```jsx
import { Affix, Button } from 'components';

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
#### **固定到底部**
```jsx
import { Affix, Button } from 'components';

const AffixView = () => {
  return (
    <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
      <Button >距离底部0px触发</Button>
    </Affix>
  )
}
<AffixView />
```


#### **固定在容器当中**
```jsx
import { Affix, Button } from 'components';

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
#### **API**

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | Function(affixed) | 无 |

**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

