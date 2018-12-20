#### **何时使用**
需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

#### **基本用法**

```jsx
import { Anchor } from 'components';
const { Link } = Anchor;

<div>
  <span className='demo-anchor'>
    <Anchor>
      <Link href='#components-anchor-demo-1' title='项目一' />
      <Link href='#components-anchor-demo-2' title='项目二' />
      <Link href='#components-anchor-demo-3' title='项目三' />
      <Link href="#API" title="API">
        <Link href='#components-anchor-demo-4' title='项目四' />
        <Link href='#components-anchor-demo-5' title='项目五' />
      </Link>
    </Anchor>
  </span>
</div>
```

#### **API**

#### **Anchor Props**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bounds | 锚点区域边界 | number | 5(px) |
| getContainer | 指定滚动的容器 | () => HTMLElement | () => window |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - |
| onClick | click 事件的 handler | Function(e: Event, link: Object) | - |

#### **Link Props**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接 | string | - |
| title | 文字内容 | string , ReactNode | - |

```jsx noeditor
import {PrevPage, BackTop} from 'components';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
