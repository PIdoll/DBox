#### **何时使用**

- 当数据是日期或按照日期划分时，例如日程、课程、价格等，农历等。目前支持年/月切换

#### **基本用法**

```jsx
<div style={{ width: 300, border: '1px solid rgba(226,226,226,1)', borderRadius: 4 }}>
  <Calendar fullscreen={false} />
</div>
```

#### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 展示日期 | moment | 当前日期 |
| defaultValue | 默认展示的日期 | moment | 默认日期 |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |
| onPanelChange | 日期面板变化回调 | function(date: moment, mode: string) | 无 |
| onChange | 日期变化回调 | function(date: moment) | 无 |
| onSelect | 点击选择日期回调 | function(date: moment) | 无 |