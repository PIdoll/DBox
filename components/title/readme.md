# [Title](http://naotu.baidu.com/file/65d17d72992f64d5937b6402df08efb5?token=0555dbaf37b514fa)

---
order: 0
title:
  zh-CN: 标题
  en-US: Title
---

## 通用标题(type)

当只传入`title`的值时，标题为通用标题

## icon标题(icon)

当需要将标题与`icon`组合使用时，对应的`icon`值为对应的`type`值

## 标题尺寸(size)

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把标题设为大、小尺寸。若不设置 `size`，则尺寸为中。

## 深色背景(darkbg)

标题默认是在浅色背景下使用的，添加 `ghost` 属性即可让标题更改为深色背景的样式

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 显示标题的值 | string | `标题` |
| size | 设置标题大小，可选值为`small` `large` | string | default |
| type | 设置标题的图标类型 | string | - |
| ghost | 设置标题背景为深色背景 | string | - |
