#### **何时使用**

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

#### **水平分割线**

```jsx
<div>
  <p>默认为水平分割线(实线)</p>
  <Divider />
  <p>默认为水平分割线(虚线)</p>
  <Divider dashed />
</div>
```

#### **竖分割线**

```jsx
<div>
  测试
  <Divider type='vertical' />
  <a href='#'>链接</a>
  <Divider type='vertical' />
  <a href='#'>链接</a>
</div>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dashed | 是否虚线 | Boolean | false |
| type | 水平还是垂直类型 | enum: `horizontal` `vertical` | `horizontal` |
| className | 分割线样式类 | string | - |
| style | 分割线样式对象 | object | - |
