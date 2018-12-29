
数据输入，可用于表单提交。

##### **基本使用**
可通过设置 `disabled` 属性为禁用状态，设置 `readOnly` 属性为只读状态，设置`clearable` 属性为支持可清除。
```jsx
import { Input } from 'dbox-ui';
<div>
    <Input type='text' placeholder='请输入' style={{width: '200px'}} clearable/><br /><br />
    <Input type='text' disabled placeholder='请输入' style={{width: '200px'}} /><br /><br />
    <Input type='text' readOnly value='请输入' style={{width: '200px'}} />
</div>

```
##### **前置／后置**
用于一些固定组合。`addonBefore` 设置前置内容，`beforelength` 设置前置内容长度。`addonAfter` 和`afterlength`
则用来设置后置属性。
```jsx
import { Input,Select } from 'dbox-ui';
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
##### **搜索**
使用 `Input.Search` 用于带有搜索按钮或者搜索图标的输入框, `enterButton` 属性设置值则会显示搜索按钮,否则显示搜索图标。
```jsx
import { Input } from 'dbox-ui';
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

##### **前缀／后缀**
可通过设置 `prefix`、`suffix` 属性在输入框上添加前缀或后缀图标。
```jsx
import { Input,Icon } from 'dbox-ui';
<div >
    <Input placeholder='请输入' style={{ width: '250px' }} prefix={<Icon type='user' />} onChange={(e) => console.log(e.target.value)} /><br /><br />
    <Input placeholder='请输入' style={{ width: '250px' }} suffix={<Icon type='edit' />} onChange={(e) => console.log(e.target.value)} />
</div>
```

#### **三种大小**
可通过设置 `size` 属性控制输入框的大小,默认为中。
```jsx
import { Input } from 'dbox-ui';
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

##### **输入框的组合**
使用 `InputGroup` 用于组合其它组件。
```jsx
import { Input,Col,Select,DatePicker } from 'dbox-ui';
const InputGroup = Input.Group;
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

##### **文本框**
`Textarea` 用于多行输入,设置 `autosize` 的 `minRows`和 `maxRows` 控制文本框高度。
```jsx
import { Input } from 'dbox-ui';
const Textarea = Input.Textarea;
<div>
    <Textarea style={{width: '400px'}} ></Textarea>  <br /><br />
    <Textarea style={{width: '400px'}} autosize={{minRows: 2, maxRows: 6}} ></Textarea>
</div>
```

##### **输入时格式化展示**
结合 `Tooltip` 组件，实现一个数值输入框，方便内容超长时的全量展现。
```jsx
import { Input, Tooltip} from 'dbox-ui';

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e){
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  }

  // '.' at the end or only '-' in the input box.
  onBlur(){
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }

  render() {
    const { value } = this.props;
    const title = value ? (
      <span>
        {value !== '-' ? formatNumber(value) : '-'}
      </span>
    ) : '请输入数字';
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="请输入数字"
          maxLength="25"
        />
      </Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value){
    this.setState({ value });
  }

  render() {
    return <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />;
  }
}

<NumericInputDemo />
```

##### **Input**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | string|ReactNode |  |
| addonBefore | 带标签的 input，设置前置标签 | string|ReactNode |  |
| afterlength | 后置标签宽度 | string|  |
| beforelength | 前置标签宽度 | string| |
| clearable | 输入框可删除 | boolean| false|
| defaultValue | 输入框默认内容 | string |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| id | 输入框的 id | string |  |
| prefix | 带有前缀图标的 input | string|ReactNode |  |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string | `default` |
| suffix | 带有后缀图标的 input | string|ReactNode |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性 | string | `text` |
| value | 输入框内容 | string |  |
| onPressEnter | 按下回车的回调 | function(e) |  |

##### **Input.TextArea**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autosize | 自适应内容高度，可设置为 `true/false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean/object | false |
| defaultValue | 输入框默认内容 | string |  |
| value | 输入框内容 | string |  |
| onPressEnter | 按下回车的回调 | function(e) |  |

##### **Input.Search**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字 | boolean/ReactNode | false |
| onSearch | 点击搜索或按下回车键时的回调 | function(value) |  |

##### **Input.Group**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| compact | 是否用紧凑模式 | boolean | false |
| size | `Input.Group` 中所有的 `Input` 的大小，可选 `large` `default` `small` | string | `default` |


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
