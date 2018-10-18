# [Button](http://naotu.baidu.com/file/111809d1ee65fd61593e3afc13e79839?token=6b90e3ea029b1c7d)

---
order: 0
title:
  zh-CN: 按钮
  en-US: Button
---

## 按钮类型(type)

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `normal` `primary` `dashed` `danger`  `create` `quit`可分别创建主按钮、幽灵按钮、虚线按钮、特定按钮，若不设置 `type` 值则为次要按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

## 图标按钮(icon)

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## 按钮尺寸(size)

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## 不可用状态(disabled)

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## 文字按钮(text)

添加 `text` 属性即可让按钮变成文字按钮，同时按钮样式也会改变。
