<!-- # [input](http://naotu.baidu.com/file/16cb7711732e8567b985a181505e2bfe?token=4cb434845c75e538) -->

### 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

### 代码演示
##### **基本使用**
可以设置 `disabled` 为禁用状态，设置 `readOnly` 为只读状态
```jsx

<Input type='text' placeholder='请输入' style={{width: '160px'}} /><br /><br />
<Input type='text' disabled placeholder='请输入' style={{width: '160px'}} /><br /><br />
<Input type='text' readOnly value='请输入' style={{width: '160px'}} />

```
##### **前置／后置**
用于一些固定组合。`addonBefore` 设置前置内容，`beforelength` 设置前置内容长度。`addonAfter` 和`afterlength` 
则用来设置后置属性。
```jsx

const selectBefore = (
  <Select defaultValue='Http://' style={{ width: 90 }}>
    <Option value='Http://'>Http://</Option>
    <Option value='Https://'>Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue='.com' style={{ width: 80 }}>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </Select>
);

<div>
    <div style={{width:'400px'}} >
        <Input type='text' addonBefore='邮政编码' placeholder='请输入' beforelength='100px' />
    </div>
    <br />
    <div style={{width: '400px'}} >
        <Input type='text' placeholder='请输入' addonAfter='.com' afterlength='80px' />
    </div>
    <br />
    <div style={{width: '400px'}} >
        <Input type='text' addonBefore={selectBefore} placeholder='请输入' addonAfter={selectAfter} beforelength='100px' afterlength='80px' />
    </div>
</div>
```

```jsx
const Search = Input.Search;
<div>
<Search
    placeholder='请输入'
    onSearch={value => console.log(value)}
    style={{ width: 250 }}
></Search>
<br /><br />
<Search
    placeholder='请输入'
    onSearch={value => console.log(value)}
    style={{ width: 250 }}
    enterButton
></Search>
<br /><br />
<Search style={{ width: 250 }} enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} ></Search>
<br /><br />
<Search style={{ width: 250 }} size='large' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} ></Search>
</div>
```

```jsx

```

```jsx

```

## API

### Input

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | string\|ReactNode |  |
| addonBefore | 带标签的 input，设置前置标签 | string\|ReactNode |  |
| afterlength | 后置标签宽度 | string|  |
| beforelength | 前置标签宽度 | string| |
| defaultValue | 输入框默认内容 | string |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| id | 输入框的 id | string |  |
| prefix | 带有前缀图标的 input | string\|ReactNode |  |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| suffix | 带有后缀图标的 input | string\|ReactNode |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`)。 | string | `text` |
| value | 输入框内容 | string |  |
| onPressEnter | 按下回车的回调 | function(e) |  |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。

### Input.TextArea

> `2.12` 后新增的组件，旧版请使用 `Input[type=textarea]`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autosize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean\|object | false |
| defaultValue | 输入框默认内容 | string |  |
| value | 输入框内容 | string |  |
| onPressEnter | 按下回车的回调 | function(e) |  |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

#### Input.Search

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字 | boolean\|ReactNode | false |
| onSearch | 点击搜索或按下回车键时的回调 | function(value) |  |

其余属性和 Input 一致。

#### Input.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| compact | 是否用紧凑模式 | boolean | false |
| size | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string | `default` |
