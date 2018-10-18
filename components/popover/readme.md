# [Popover](http://naotu.baidu.com/file/b902fee7623e05378c0a025e30cb7175?token=90e46e50f9e4c1ce)
---
category: Components
subtitle: 气泡卡片
type: Data Display
title: Popover
---

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 卡片内容 | string\|ReactNode | 无 |
| title | 卡片标题 | string\|ReactNode | 无 |

更多属性请参考 [Tooltip]

## 注意

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
