#### **何时使用**

- 需要在多个可选项中进行多选时。
- 比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

穿梭选择框用直观的方式在两栏中移动元素，完成选择行为。
选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。 其中，左边一栏为 显示字段，右边一栏为 隐藏字段，API 的设计也反映了这两个概念。

#### **基本用法**

```jsx
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `内容${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData
  .filter(item => +item.key % 3 > 1)
  .map(item => item.key);

class TransferView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetKeys: oriTargetKeys,
      selectedKeys: [],
      disabled: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDisable = this.handleDisable.bind(this);
  }
  handleChange(nextTargetKeys, direction, moveKeys) {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  }

  handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  }

  handleScroll(direction, e) {
    console.log('direction:', direction);
    console.log('target:', e.target);
  }

  handleDisable(disabled) {
    this.setState({ disabled });
  };
  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <div>
        <div style={{marginBottom: 15}}>
          <Switch
            unCheckedChildren='disabled'
            checkedChildren='disabled'
            checked={disabled}
            onChange={this.handleDisable}
          />
        </div>
        <Transfer
          titles={['显示字段', '隐藏字段']}
          dataSource={mockData}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={disabled}
          />
      </div>
    )
  }
}
<TransferView />
```

#### **API**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类 | string |  |
| dataSource | 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。 | TransferItem[] | [] |
| targetKeys | 显示在右侧框数据的key集合 | string[] | [] |
| disabled | 是否禁用 | boolean | false |
| footer | 底部渲染函数 | (props): ReactNode |  |
| lazy | Transfer 使用了 react-lazy-load 优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。 | object|boolean | { height: 32, offset: 32 } |
| listStyle | 两个穿梭框的自定义样式 | object |  |
| render | 每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 label 字段为 ReactElement，value 字段为 title | Function(record) |  |
| selectedKeys | 设置哪些项应该被选中 | string[] | [] |
| titles | 标题集合，顺序从左至右 | string[] | '', '' |
| onChange | 选项在两栏之间转移时的回调函数 | (targetKeys, direction, moveKeys): void |  |
| onScroll | 选项列表滚动时的回调函数 | (direction, event): void |  |
| onSelectChange | 选中项发生改变时的回调函数 | (sourceSelectedKeys, targetSelectedKeys): void |  |

#### **注意**
按照 React 的规范，所有的组件数组必须绑定 key。在 Transfer 中，dataSource里的数据值需要指定 key 值。对于 dataSource 默认将每列数据的 key 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 rowKey 来指定数据列的主键

```js static
// 比如你的数据主键是 uid
return <Transfer rowKey={record => record.uid} />;
```