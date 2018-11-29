<!-- # [input](http://naotu.baidu.com/file/16cb7711732e8567b985a181505e2bfe?token=4cb434845c75e538) -->

#### **何时使用**
- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

#### **基本使用**
可以设置 `disabled` 为禁用状态，设置 `readOnly` 为只读状态
```jsx

<Input type='text' placeholder='请输入' style={{width: '200px'}} /><br /><br />
<Input type='text' disabled placeholder='请输入' style={{width: '200px'}} /><br /><br />
<Input type='text' readOnly value='请输入' style={{width: '200px'}} />

```
#### **前置／后置**
用于一些固定组合。`addonBefore` 设置前置内容，`beforelength` 设置前置内容长度。`addonAfter` 和`afterlength` 
则用来设置后置属性。
```jsx

const selectBefore = (
  <Select defaultValue='Http://' style={{ width: '90px' }}>
    <Option value='Http://'>Http://</Option>
    <Option value='Https://'>Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue='.com' style={{ width: '80px' }}>
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
#### **搜索**
带有搜索按钮的输入框
```jsx 
const Search = Input.Search;
<div>
    <Search
        placeholder='请输入'
        onSearch={value => console.log(value)}
        style={{ width: '250px' }}
    ></Search>
    <br /><br />
    <Search
        placeholder='请输入'
        onSearch={value => console.log(value)}
        style={{ width: '250px' }}
        enterButton
    ></Search>
    <br /><br />
    <Search style={{ width: '250px' }} enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} ></Search>
    <br /><br />
    <Search style={{ width: '250px' }} size='large' enterButton='搜索' placeholder='请输入' onSearch={(value => console.log(value))} ></Search>
</div>
```

#### **前缀／后缀**
使用 `prefix`、`suffix` 在输入框上添加前缀或后缀图标。
```jsx
<Input placeholder='请输入' style={{ width: '250px' }} prefix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} /><br /><br />
<Input placeholder='请输入' style={{ width: '250px' }} suffix={<Icon type='edit' />} onChange={(e) => console.log(e.target.value)} />
```

#### **三种大小**
通过设置 `size` 属性控制输入框的大小。
```jsx
const Search = Input.Search;
<div>
    <Input size='large' placeholder='请输入' style={{width: '200px'}} /><br /><br />
    <Input placeholder='请输入' style={{width: '200px'}} /><br /><br />
    <Input size='small' placeholder='请输入' style={{width: '200px'}} /><br /><br />
    <Search style={{ width: '200px' }} size='large' onSearch={(value => console.log(value))} placeholder='请输入' />
    <br /><br />
    <Search style={{ width: '200px' }} onSearch={(value => console.log(value))} placeholder='请输入'/>
    <br /><br />
    <Search style={{ width: '200px' }} size='small' onSearch={(value => console.log(value))} placeholder='请输入' />
</div>
```

#### **输入框的组合**
使用 `InputGroup` 用于组合其它组件。
```jsx
const InputGroup = Input.Group;
const Col = Grid.Col;
<div>
    <InputGroup size='large'>
        <Col span={3}>
        <Input defaultValue='021' />
        </Col>
        <Col span={8}>
        <Input defaultValue='12345678' />
        </Col>
    </InputGroup>
    <br />
    <InputGroup compact>
        <Input style={{width: '100px'}} defaultValue='0571' />
        <Input style={{width: '160px'}} defaultValue='26888888' />
    </InputGroup>
    <br />

    <InputGroup compact>
        <Select defaultValue='Shanghai' style={{width: '160px'}}>
        <Option value='Shanghai'>上海</Option>
        <Option value='Jiangsu'>江苏</Option>
        </Select>
        <Input style={{width: '160px'}} defaultValue='上海' />
    </InputGroup>
    <br />
    <InputGroup compact>
        <Input style={{width: '160px'}} defaultValue='请输入' />
        <DatePicker style={{width: '150px'}} />
    </InputGroup>
</div>
```

#### **文本框**
`Textarea` 用于多行输入,设置 `autosize` 的 `minRows`和 `maxRows` 控制文本框高度。
```jsx
const Textarea = Input.Textarea;
<div>
    <Textarea style={{width: '400px'}} ></Textarea>  <br /><br />
    <Textarea style={{width: '400px'}} autosize={{minRows: 2, maxRows: 6}} ></Textarea>
</div>
```


#### **Input**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | string|ReactNode |  |
| addonBefore | 带标签的 input，设置前置标签 | string|ReactNode |  |
| afterlength | 后置标签宽度 | string|  |
| beforelength | 前置标签宽度 | string| |
| defaultValue | 输入框默认内容 | string |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| id | 输入框的 id | string |  |
| prefix | 带有前缀图标的 input | string|ReactNode |  |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| suffix | 带有后缀图标的 input | string|ReactNode |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性 | string | `text` |
| value | 输入框内容 | string |  |
| onPressEnter | 按下回车的回调 | function(e) |  |

#### **Input.TextArea**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autosize | 自适应内容高度，可设置为 `true/false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean/object | false |
| defaultValue | 输入框默认内容 | string |  |
| value | 输入框内容 | string |  |
| onPressEnter | 按下回车的回调 | function(e) |  |

#### **Input.Search**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字 | boolean/ReactNode | false |
| onSearch | 点击搜索或按下回车键时的回调 | function(value) |  |

#### **Input.Group**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| compact | 是否用紧凑模式 | boolean | false |
| size | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string | `default` |
