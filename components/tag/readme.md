# [tag](http://naotu.baidu.com/file/1d175d4fe832e9a8805327097df97650?token=d3313986a35d5fb5)


---

category: Components
subtitle: 标签
type: Data Display
title: Tag

---

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 标签是否可以关闭 | boolean | false |
| color | 标签色 | string | - |
| size | 标签尺寸 | string | -/small |
| hover | 标签hover状态 | boolean | false |
| checked | 设置标签的选中状态 | boolean | false |


### Tag 方法

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClose | 关闭时的回调 | (e) => void | - |
| --- | --- | --- | --- |
| onChange | 点击标签时触发的回调 | (checked) => void | - |
