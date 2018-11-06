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
| afterClose | 关闭动画完成后的回调 | `() => void` | - |
| closable | 标签是否可以关闭 | boolean | false |
| color | 标签色 | string | - |
| checked | 设置标签的选中状态 | boolean | false |

### tagGroup

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tags | 热门话题的默认文本 | array | `['Movies', 'Books', 'Music']` |
| id | 默认不可移除的标签的下标值 | number | `0` |
| text | 动态增加标签的文本内容 | string | `New Tag` |
| iconType | 动态增加标签的Icon | string | `plus` |


### Tag 方法

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClose | 关闭时的回调 | (e) => void | - |
| --- | --- | --- | --- |
| onChange | 点击标签时触发的回调 | (checked) => void | - |
