
#### **按钮类型(type)**

按钮有以下几种类型：默认按钮、主按钮、次按钮、失效按钮、虚线按钮、危险按钮、

通过设置 `type` 为 `default` `primary` `secondary` `disabled` `dashed` `danger`可分别创建默认按钮、主按钮、次按钮、失效按钮、虚线按钮、危险按钮。

```jsx
<Button type='mormal'>默认</Button>
<Button type='primary'>重要</Button>
<Button type='dashed'>虚线</Button>
<Button type='danger'>危险</Button>
```

#### **图标按钮(icon)**

```jsx
  <Button icon='tag'>图标</Button>
  <Button icon='plus-circle-o' text>文字按钮</Button>
```

#### **按钮尺寸(size)**

```jsx
<Button size='small'>small</Button>
<Button size='normal'>normal</Button>
<Button size='large'>large</Button>
```

#### **不可用状态(disabled)**

```jsx
<Button disabled>不可用</Button>
```

#### **文字按钮(text)**

```jsx
    <Button>次要</Button>
    <Button disabled>不可用</Button>
    <Button type='dashed'>虚线</Button>
```
### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| avatar | 头像/图标 | ReactNode |  这里是图标的描述性文字部分这里是图标的描述性文字部分 |
| className | 容器类名 | string | - |
| description | 描述内容 | ReactNode | - |
| style | 定义容器类名的样式 | object | - |
| title | 标题内容 | ReactNode | - |

<style>.idoll-btn{margin:0 10px 0 0} </style>
