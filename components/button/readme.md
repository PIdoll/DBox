
#### **按钮类型(type)**

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `normal` `primary` `dashed` `danger`  `create` `quit`可分别创建主按钮、幽灵按钮、虚线按钮、特定按钮，若不设置 `type` 值则为次要按钮。不同的样式可以用来区别其重要程度。

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


