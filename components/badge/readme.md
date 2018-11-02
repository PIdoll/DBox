# [badge](http://naotu.baidu.com/file/c995ff78f48755cfddf0ba55239239c7?token=2da506231e625dc9)

---
category: Components
chinese: 徽标数
type: Views
english: Badge
---

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## API

```jsx
<Badge count={5}>
  <a href="#" className="head-example"></a>
</Badge>
```


```jsx
<Badge count={5} />
```

| 参数           | 说明                             | 类型 |默认值 |
|----------------|--------------------------------|---------|--------|
| count          | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | Number     |         |        |
| overflowCount  | 展示封顶的数字值                 | Number | 99     |
| showZero            | 当数值为0时，是否展示Badge       | boolean    |false  |
| dot            | 不展示数字，只有一个小红点       | boolean    |false  |
| status            | 和dot搭配使用，在设置dot的前提下有效，设置Badge的状态点       | `string{'success','processing','default','error','warning'}`   |''  |
| title            | 设置鼠标放在状态点上时显示的文字，若放在a标签上只设置放在图标或头像上时显示的文字      | string    | `count`  |
| text            | 需和dot,status搭配使用，在已设置dot,status前提下设置状态点的文本      | any    |   |


