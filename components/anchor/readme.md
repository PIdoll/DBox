#### **何时使用**
需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

#### **基本用法**

```jsx
const Link = Anchor.link;
<div>
  <span className='demo-anchor'>
    <Anchor>
      <Link href='#components-anchor-demo-1' title='项目一' />
      <Link href='#components-anchor-demo-2' title='项目二' />
      <Link href='#components-anchor-demo-3' title='项目三' />
      <Link href='#components-anchor-demo-4' title='项目四' />
      <Link href='#components-anchor-demo-5' title='项目五' />
    </Anchor>
  </span>
  <div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div id='components-anchor-demo-1'>目标定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div id='components-anchor-demo-2'>目标定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
    <div>锚点定位</div>
  </div>
</div>
```