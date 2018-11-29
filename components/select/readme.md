<!-- # [Select](http://naotu.baidu.com/file/8d654ac25a8b27c4e3ece259370aae2e?token=f63e1566705c1ce6) -->

#### **何时使用**
需要应用到下拉选项时，用于替换原生的选择器。

##### **基本使用**
通过设置 `size`属性控制大小, `disabled` 设置为禁用。
```jsx
const {Option} = Select;
<div>
    <Select size='small' placeholder='请选择' style={{ width: 200 }}>
        <Option value='beijing'>北京</Option>
        <Option value='shanghai'>上海</Option>
        <Option value='guangzhou'>广州</Option>
        <Option value='shenzhen'>深圳</Option>
    </Select>
    <br /><br />

    <Select placeholder='请选择' style={{ width: 200 }} allowClear>
        <Option value='beijing'>北京1</Option>
        <Option value='shanghai'>上海1</Option>
        <Option value='guangzhou'>广州1</Option>
        <Option value='shenzhen'>深圳1</Option>
    </Select>
    <br /><br />

    <Select size='large' placeholder='请选择' style={{ width: 200 }}>
        <Option value='beijing'>北京</Option>
        <Option value='shanghai'>上海</Option>
        <Option value='guangzhou'>广州</Option>
        <Option value='shenzhen'>深圳</Option>
    </Select>
    <br /><br />

    <Select defaultValue='select' style={{ width: 200 }} disabled>
        <Option value='select'>请选择</Option>
    </Select>
</div>
```
#### **搜索下拉框**
展开后可对选项进行搜索。
```jsx
const {Option} = Select;
<Select showSearch style={{ width: 200 }} placeholder='请选择' >
    <Option value='beijing'>北京</Option>
    <Option value='shanghai'>上海</Option>
    <Option value='guangzhou'>广州</Option>
    <Option value='shenzhen'>深圳</Option>
</Select>
```

#### **多选下拉框**
多选，从已有条目中选择。设置 `mode` 属性为 `tags` 可随意输入内容。
```jsx
const {Option} = Select;
<div>
    <Select mode='multiple' style={{ width: 200 }} placeholder='多选' >
        <Option value='beijing'>北京</Option>
        <Option value='shanghai'>上海</Option>
        <Option value='guangzhou'>广州</Option>
        <Option value='shenzhen'>深圳</Option>
    </Select>
    <br /><br />
    <Select mode='tags' style={{ width: 200 }} placeholder='可随意输入内容' >
        <Option value='beijing'>北京</Option>
        <Option value='shanghai'>上海</Option>
        <Option value='guangzhou'>广州</Option>
        <Option value='shenzhen'>深圳</Option>
    </Select>
</div>
```

#### **获得选项文本**

```jsx
const {Option} = Select;
handleChange = (value) => {
    console.log(value); 
}
<Select labelInValue defaultValue={{ key: 'beijing' }} style={{ width: 200 }} onChange={this.handleChange}>
    <Option value='beijing'>北京</Option>
    <Option value='shanghai'>上海</Option>
    <Option value='guangzhou'>广州</Option>
    <Option value='shenzhen'>深圳</Option>
</Select>
```

#### **搜索用户**
```jsx
const {Option} = Select;
class SearchExample extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            value: [],
            fetching: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    handleChange(value) {
        this.setState({
            value,
            data: [],
            fetching: false,
        });
    }

    getUserInfo(value) {
        console.log('getUserInfo ', value);
        this.setState({ data: [], fetching: true });
        // 这里直接调用后端api
        setTimeout(() => {
        const data = [
            {value: '1', text: 'aa'},
            {value: '2', text: 'bb'},
            {value: '3', text: 'cc'},
        ]
        this.setState({ data, fetching: false });
        }, 1000);
    }
    render(){
        return (
            <Select
                mode='multiple'
                labelInValue
                value={this.state.value}
                placeholder='请搜索'
                notFoundContent={this.state.fetching ? <Spin size='small' /> : null}
                filterOption={false}
                onSearch={this.getUserInfo}
                onChange={this.handleChange}
                style={{ width: '20%' }}
            >
                {this.state.data.map(d => <Option key={d.value}>{d.text}</Option>)}
            </Select>
        )
    }

}

<SearchExample />
```


#### **分组**
使用用 `OptGroup` 进行选项分组。
```jsx
const {Option, OptGroup} = Select;
<Select
    defaultValue='hefei'
    style={{ width: 200 }}
    onChange={this.handleChange}
>
    <OptGroup label='安徽'>
        <Option value='xuancheng'>宣城</Option>
        <Option value='hefei'>合肥</Option>
    </OptGroup>
    <OptGroup label='江苏'>
        <Option value='nanjing'>南京</Option>
        <Option value='suzhou'>苏州</Option>
    </OptGroup>
</Select>
```
#### **Select**
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 支持清除 | boolean | false |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效。 | boolean | true |
| autoFocus | 默认获取焦点 | boolean | false |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |
| defaultValue | 指定默认选中的条目 |  string string\[]<br />number number\[] | - |
| disabled | 是否禁用 | boolean | false |
| dropdownClassName | 下拉菜单的 className 属性 | string | - |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽 | boolean | true |
| dropdownStyle | 下拉菜单的 style 属性 | object | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true |
| firstActiveValue | 默认高亮的选项 | string\string\[] | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | Function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `{key: string, label: ReactNode}` 的格式 | boolean | false |
| maxTagCount | 最多显示多少个 tag | number | - |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode\function(omittedValues) | - |
| mode | 设置 Select 的模式为多选或标签 | 'multiple'\'tags' | - |
| notFoundContent | 当下拉列表为空时显示的内容 | string | 'Not Found' |
| optionFilterProp | 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索 | string | value |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` （combobox 模式下为 `value`） |
| placeholder | 选择框默认文字 | string | - |
| showArrow | 是否显示下拉小箭头 | boolean | true |
| showSearch | 使单选模式可搜索 | boolean | false |
| size | 选择框大小，可选 `large` `small` | string | default |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| tokenSeparators | 在 tags 和 multiple 模式下自动分词的分隔符 | string\[] |  |
| value | 指定当前选中的条目 | string string\[]<br />number number\[] | - |
| onBlur | 失去焦点的时回调 | function | - |
| onChange | 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数 | function(value, option:Option/Array&lt;Option>) | - |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | function(value，option:Option) | - |
| onFocus | 获得焦点时回调 | function | - |
| onMouseEnter | 鼠标移入时回调 | function | - |
| onMouseLeave | 鼠标移出时回调 | function | - |
| onPopupScroll | 下拉列表滚动时的回调 | function | - |
| onSearch | 文本框值变化时回调 | function(value: string) |  |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value, option:Option) | - |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |
| open | 是否展开下拉菜单 | boolean | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |

#### **Select Methods**

| 名称 | 说明 |
| --- | --- |
| blur() | 取消焦点 |
| focus() | 获取焦点 |

#### **Option props**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| key | 和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | string |  |
| title | 选中该 Option 后，Select 的 title | string | - |
| value | 默认根据此属性值进行筛选 | string\number | - |
| className | Option 器类名 | string | - |

#### **OptGroup props**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key |  | string | - |
| label | 组名 | string\React.Element | 无 |
