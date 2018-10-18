# Switch

---

category: Components
subtitle: 开关
type: Data Entry
title: Switch

---

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

---

## html

```jsx
    //初始是否选中:defaultChecked
    <Switch defaultChecked />

    //两种尺寸的switch
    <Switch />
    <Switch size='small' />

    //指定当前是否被选中
    <Switch checked />

    //选中时的内容和非选中时的内容
    <Switch checkedChildren={'开'} unCheckedChildren={'关'} />

    <Switch checkedChildren={<Icon type='check' />} unCheckedChildren={<Icon type='cross' />} />

    //失效状态:disabled
    <Switch disabled />

    //加载中的状态
    <Switch size='small' loading />

    //点击时的回调
    <Switch onClick={onClick} />
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | string\|ReactNode |  |
| defaultChecked | 初始是否选中 | boolean | false |
| size | 开关大小，可选值：`default` `small` | string | default |
| unCheckedChildren | 非选中时的内容 | string\|ReactNode |  |
| onChange | 变化时回调函数 | Function(checked:Boolean) |  |
| onClick | 点击时回调函数 | Function |  |
| loading | 加载中的开关 | boolean | false |
| disabled | 失效状态 | boolean | false |