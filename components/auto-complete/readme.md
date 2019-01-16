
需要自动完成时。

##### **基本使用**
通过 dataSource 设置自动完成的数据源。

```jsx
import { AutoComplete } from 'dbox-ui';
class AutoCompleteDemo extends React.Component {
    constructor(){
        super();
        this.state = {
             dataSource: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    handleSearch(value) {
        let {dataSource} = this.state;
        if (!value || value.indexOf('@') >= 0) {
            dataSource = [];
        } else {
            dataSource = ['126.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ dataSource });
   }
    onSelect(value){
        console.log('onSelect', value);
    }
    render(){
        const { dataSource } = this.state;
        return(
            <AutoComplete
                dataSource={dataSource}
                style={{ width: '200px' }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder='请输入'
            />
        )
    }
}
<AutoCompleteDemo />
```

##### **自定义选项**
可以直接传 `AutoComplete.Option` 作为 `AutoComplete` 的 `children`，而非使用 `dataSource`。
```jsx
import { AutoComplete } from 'dbox-ui';
const Option = AutoComplete.Option;
class AutoCompleteDemo extends React.Component {
    constructor(){
        super();
        this.state = {
             dataSource: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(value) {
        let {dataSource} = this.state;
        if (!value || value.indexOf('@') >= 0) {
            dataSource = [];
        } else {
            dataSource = [
                value,
                value+value,
                value+value+value,
            ]
        }
        this.setState({ dataSource });
   }

    render(){
        const { dataSource } = this.state;
        const children = dataSource.map((email) => {
            return <Option key={email}>{email}</Option>;
        });
        return(
            <AutoComplete
                style={{ width: '200px' }}
                onSearch={this.handleSearch}
                placeholder='请输入'
            >
            {children}
            </AutoComplete>
        )
    }
}
<AutoCompleteDemo />
```

##### **不区分大小写**
不区分大小写的 `AutoComplete`。
```jsx
import { AutoComplete } from 'dbox-ui';
class AutoCompleteDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            dataSource: ['shanghai', 'BeiJing', 'Shen zhen'],
        }
        this.filterOptionChange = this.filterOptionChange.bind(this);
    }

    filterOptionChange(inputValue, option) {
        return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    }


    render(){
        const { dataSource } = this.state;
        return(
           <AutoComplete
            style={{ width: '200px' }}
            dataSource={dataSource}
            placeholder='输入小写 `b`'
            filterOption={this.filterOptionChange}
            />
        )
    }
}
<AutoCompleteDemo />
```

##### **查询模式-确定类目**
查询模式: 确定类目 示例。
```jsx
import { AutoComplete,Input,Icon } from 'dbox-ui';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
class AutoCompleteDemo extends React.Component {
    constructor(){
        super();
        this.renderTitle = this.renderTitle.bind(this);
    }
    renderTitle(title) {
      return (
        <span>
          {title}
          <a
            style={{ float: 'right' }}
            href='https://www.google.com/search?q=react'
            target='_blank'
            rel='noopener noreferrer'
          >更多
          </a>
        </span>
      );
    }
    render(){
        const dataSource = [{
            title: '语言',
            children: [{
                title: 'react ',
                count: 10000,
            }, {
                title: 'vue ',
                count: 10600,
            }, {
                title: 'angular ',
                count: 1222,
            }],
            }, {
            title: '问题',
            children: [{
                title: 'react, vue, angular哪个好',
                count: 60100,
            }, {
                title: '性能问题',
                count: 30010,
            }],
        }];
        const options = dataSource.map(group => (
            <OptGroup
                key={group.title}
                label={this.renderTitle(group.title)}
            >
                {group.children.map(opt => (
                <Option key={opt.title} value={opt.title}>
                    {opt.title}
                    <span className='certain-search-item-count'>{opt.count} 人 关注</span>
                </Option>
                ))}
            </OptGroup>
            )).concat([
            <Option disabled key='all' className='show-all'>
                <a
                href='https://www.google.com/search?q=react'
                target='_blank'
                rel='noopener noreferrer'
                >
                查看所有结果
                </a>
            </Option>,
        ]);
        return(
            <AutoComplete
            style={{ width: '300px' }}
            dataSource={options}
            placeholder='请输入'
            optionLabelProp='value'
            allowClear
            >
            <Input suffix={<Icon type='search' />} />
        </AutoComplete>
        )
    }
}
<AutoCompleteDemo />
```

##### **查询模式-不确定类目**
查询模式: 不确定类目 示例。
```jsx
import { AutoComplete,Input,Icon } from 'dbox-ui';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
class AutoCompleteDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            dataSource:[]
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        this.renderOption = this.renderOption.bind(this);
        this.searchResult = this.searchResult.bind(this);
    }

    handleSearch(value) {
        this.setState({
            dataSource: value ? this.searchResult(value) : [],
        });
    }

    onSelect(value){
        console.log('onSelect', value);
    }

    getRandomInt(max, min = 0){
        return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
    }


   searchResult(query) {
    return (new Array(this.getRandomInt(5))).join('.').split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: this.getRandomInt(200, 100),
      }));
  }

    renderOption(item){
        return (
        <Option key={item.category} text={item.category}>
            {item.query} 在
            <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target='_blank'
            rel='noopener noreferrer'
            >
            {item.category}
            </a>
            区块中
            <span className='global-search-item-count'>约 {item.count} 个结果</span>
        </Option>
        );
    }
    render(){
        const {dataSource} = this.state;
        return(
        <AutoComplete
            className='global-search'
            style={{ width: '300px' }}
            dataSource={dataSource.map(this.renderOption)}
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder='请输入'
            optionLabelProp='text'
        >
            <Input suffix={<Icon type='search' />} />
          </AutoComplete>
        )
    }
}
<AutoCompleteDemo />
```

##### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 支持清除, 单选模式有效 | boolean | false |
| autoFocus | 自动获取焦点 | boolean | false |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |
| children (自动完成的数据源) | 自动完成的数据源 | React.ReactElement / Array&lt;React.ReactElement | - |
| children (自定义输入框) | 自定义输入框 | HTMLInputElement / HTMLTextAreaElement / React.ReactElement | `<Input />` |
| dataSource | 自动完成的数据源 | [DataSourceItemType](https://git.io/vMMKF)\[] |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |
| defaultValue | 指定默认选中的条目 | string/string/[]/{ key: string, label: string/ReactNode }/Array&lt;{ key: string, label: string/ReactNode}> | 无 |
| disabled | 是否禁用 | boolean | false |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` |
| placeholder | 输入框提示 | string | - |
| value | 指定当前选中的条目 | string/string/[]/{ key: string, label: string/ReactNode }/Array&lt;{ key: string, label: string/ReactNode }> | 无 |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | 无 |
| onSearch | 搜索补全项的时候调用 | function(value) | 无 |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | 无 |

##### **方法**

| 名称 | 描述 |
| ---- | ----------- |
| focus() | 获取焦点 |
| blur() | 移除焦点 |


```jsx noeditor
import {BackTop} from 'dbox-ui';
import AutoCompleteView from '../prevPage/autoComplete';
<div>
  <BackTop visibilityHeight={20} style={{position: 'fixed', right: '50px'}}/>
  <AutoCompleteView />
</div>
```
