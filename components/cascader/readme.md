<!-- # [cascader] (http://naotu.baidu.com/file/d1a03b70d870257010a976d9129552b6?token=17e98a49d802129c) -->


#### **何时使用**
- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

#### **基本使用**
省市区级联，通过指定 `options` 里的 `disabled` 字段可以设置禁用选项。

```jsx
const basicDatas = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }, {
    value: '江苏',
    label: '江苏',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  }, {
    value: '安徽',
    label: '安徽',
    disabled: true,
    children: [{
      value: '合肥',
      label: '合肥',
      children: [{
        value: '三国',
        label: '三国',
      }],
    }],
  }];

function onChange(value) {
  console.log(value);
}

<Cascader options={basicDatas} onChange={onChange} />
```


#### **默认值**
通过数组的方式指定默认值。
```jsx
const basicDatas = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }, {
    value: '江苏',
    label: '江苏',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  }, {
    value: '安徽',
    label: '安徽',
    children: [{
      value: '合肥',
      label: '合肥',
      children: [{
        value: '三国',
        label: '三国',
      }],
    }],
  }];

function onChange(value) {
  console.log(value);
}

 <Cascader defaultValue={['浙江', '杭州', '西湖']} options={basicDatas} onChange={onChange} />
```

#### **移入展开**
通过移入展开下级菜单，点击完成选择。
```jsx
const basicDatas = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }, {
    value: '江苏',
    label: '江苏',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  }, {
    value: '安徽',
    label: '安徽',
    children: [{
      value: '合肥',
      label: '合肥',
      children: [{
        value: '三国',
        label: '三国',
      }],
    }],
}];

function displayRender(label) {
    return label[label.length - 1];
}

function onChange(value) {
  console.log(value);
}

<Cascader
    options={basicDatas}
    expandTrigger='hover'
    displayRender={displayRender}
    onChange={onChange}
/>
```

#### **尺寸**
不同大小的级联选择器。
```jsx
const basicDatas = [{
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
  }, {
    value: '江苏',
    label: '江苏',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '中华门',
        label: '中华门',
      }],
    }],
  }, {
    value: '安徽',
    label: '安徽',
    children: [{
      value: '合肥',
      label: '合肥',
      children: [{
        value: '三国',
        label: '三国',
      }],
    }],
}];

function onChange(value) {
  console.log(value);
}
<div>
    <Cascader size='small' options={basicDatas} onChange={onChange} /><br /><br />
    <Cascader options={basicDatas} onChange={onChange} /><br /><br />
    <Cascader size='large' options={basicDatas} onChange={onChange} />
</div>
```
#### **动态加载选项**
使用 `loadData` 实现动态加载选项（注意：`loadData` 与 `showSearch` 无法一起使用。）
```jsx
class CascaderExample extends React.Component {
    constructor(){
        super();
        this.state = {
            text: '未选择',
            loadDataOptions: [{
                value: '浙江',
                label: '浙江',
                isLeaf: false,
            }, {
                value: '江苏',
                label: '江苏',
                isLeaf: false,
            },
            {
                value: '上海',
                label: '上海',
                isLeaf: false,
            }]
        };
        this.onChange = this.onChange.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    onChange(value, selectOptions){
         this.setState({
             text: selectOptions.map(o => o.label).join(',')
         })
    };

    loadData(selectedOptions){
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        setTimeout(() => {
            targetOption.loading = false;
            targetOption.children = [{
              label: `${targetOption.label} 选项 1`,
              value: '选项1',
            }, {
              label: `${targetOption.label} 选项 2`,
              value: '选项2',
            }];
            this.setState({
              options: [...this.state.loadDataOptions],
            });
        }, 1000)
    }

    render(){
        return (
            <Cascader
                options={this.state.loadDataOptions}
                loadData={this.loadData}
                onChange={this.onChange}
                changeOnSelect
                />
        )
    }
}
<CascaderExample />
```

#### **搜索**
可以直接搜索选项并选择（ `Cascader[showSearch]` 暂不支持服务端搜索）
```jsx

const searchData = [{
    value: '上海',
    label: '上海',
    children: [{
      value: '浦东新区',
      label: '浦东新区',
      children: [{
        value: '外滩',
        label: '外滩',
      }, {
        value: '唐镇',
        label: '唐镇',
        disabled: true,
      }],
    }],
  }, {
    value: '浙江',
    label: '浙江',
    children: [{
      value: '杭州',
      label: '杭州',
      children: [{
        value: '西湖',
        label: '西湖',
      }],
    }],
}];

function onChange(value) {
  console.log(value);
}
function filter(inputValue, path) {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}
<Cascader
    options={searchData}
    onChange={onChange}
    showSearch={{ filter }}
/>
```
#### **Cascader**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否支持清除 | boolean | true |
| autoFocus | 自动获取焦点 | boolean | false |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |
| className | 自定义类名 | string | - |
| defaultValue | 默认的选中项 | string\[] | \[] |
| disabled | 禁用 | boolean | false |
| displayRender | 选择后展示的渲染函数 | `(label, selectedOptions) => ReactNode` | `label => label.join(' / ')` |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | 'click' |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | `(selectedOptions) => void` | - |
| notFoundContent | 当下拉列表为空时显示的内容 | string | 'Not Found' |
| options | 可选项数据源 | object | - |
| placeholder | 输入框占位文本 | string | '请选择' |
| popupClassName | 自定义浮层类名 | string | - |
| popupPlacement | 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` | Enum | `bottomLeft` |
| popupVisible | 控制浮层显隐 | boolean | - |
| showSearch | 在选择框中显示搜索框 | boolean | false |
| size | 输入框大小，可选 `large` `default` `small` | string | `default` |
| style | 自定义样式 | string | - |
| value | 指定选中项 | string\[] | - |
| onChange | 选择完成后的回调 | `(value, selectedOptions) => void` | - |
| onPopupVisibleChange | 显示/隐藏浮层的回调 | `(value) => void` | - |

`showSearch` 为对象时，其中的字段：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false。 | `function(inputValue, path): boolean` |  |
| matchInputWidth | 搜索结果列表是否与输入框同宽 | boolean |  |
| render | 用于渲染 filter 后的选项 | `function(inputValue, path): ReactNode` |  |
| sort | 用于排序 filter 后的选项 | `function(a, b, inputValue)` |  |

#### **方法**

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |