
#### **何时使用**
- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。


#### **基本的面包屑**
```jsx
class BreadcrumbView extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item><a href='javascript:void(0);'>个人中心</a></Breadcrumb.Item>
        <Breadcrumb.Item>设置</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
<BreadcrumbView />
```

#### **带图标的面包屑**
```jsx
class BreadcrumbView extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href='javascript:void(0);'>
          <Icon type='home' />
        </Breadcrumb.Item>
        <Breadcrumb.Item href='javascript:void(0);'>
          <Icon type='user' />
          <span>点击</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          点击
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
<BreadcrumbView />
```

#### **自定义分隔符的面包屑**
```jsx
class BreadcrumbView extends React.Component {
  render() {
    return (
      <Breadcrumb separator='>'>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item><a href='javascript:void(0);'>个人中心     </a></Breadcrumb.Item>
        <Breadcrumb.Item>设置</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
<BreadcrumbView />

```

#### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 分隔符自定义 | string\ReactNode | '/' |


