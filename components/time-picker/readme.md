# [time-picker](http://naotu.baidu.com/file/4d2ee91ced363c7e1b411ffeede4aba5?token=b586e0ff9b261475)

---

category: Components
chinese: 时间选择框
type: Form Controls
english: TimePicker

---

输入或选择时间的控件

##何时使用

-当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

##API

### time-picker

| 参数                 | 说明 | 类型 | 默认值 |
|---------------------|-----|-----|-------|
| defaultValue        | 初始默认时间 | string or Date | 无 |
| value               | 默认时间 | string or Date | 无 |
| placeholder         | 没有值的时候显示的内容 | string | "请选择时间" |
| onChange            | 时间发生变化的回调     | function(date, dateString) | 无 |
| format              | 展示的时间格式 | string | "HH:mm:ss"、"HH:mm"、"mm:ss" |
| disabled            | 禁用全部操作 | bool | false |
| disabledHours       | 禁止选择部分小时选项 | function() | 无 |
| disabledMinutes     | 禁止选择部分分钟选项 | function(selectedHour) | 无 |
| disabledSeconds     | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | 无 |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |
| locale              | 国际化配置 | Object | [默认配置]