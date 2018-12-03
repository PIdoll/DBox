
#### **何时使用**
文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。


##### **基本使用**
最简单的用法，可选中，默认展开等功能。
```jsx
const TreeNode = Tree.TreeNode;
onSelect = (selectedKeys, info) => {
	console.log('selected', selectedKeys, info);
}
onCheck = (checkedKeys, info) => {
  console.log('onCheck', checkedKeys, info);
}
<Tree
  defaultExpandedKeys={['0-0-0-0-0', '0-0-1']}
  defaultSelectedKeys={['0-0-0-0-1']}
  onSelect={this.onSelect}
  onCheck={this.onCheck}
        >
  <TreeNode title='上海分公司' key='0-0'>
    <TreeNode title='开发部' key='0-0-0'>
      <TreeNode title='测试一部' key='0-0-0-0'>
        <TreeNode title='选项' key='0-0-0-0-0' />
        <TreeNode title='选项' key='0-0-0-0-1' />
      </TreeNode>
      <TreeNode title='测试二部' key='0-0-0-1' />
    </TreeNode>
    <TreeNode title='产品规划部' key='0-0-1'>
      <TreeNode title={<span>sss</span>} key='0-0-1-0' />
    </TreeNode>
    <TreeNode title='财务部' key='0-0-2'>
      <TreeNode title={<span>sss</span>} key='0-0-1-0' />
    </TreeNode>
  </TreeNode>

  <TreeNode title='深圳分公司' key='0-1'>
    </TreeNode>
</Tree>
```

##### **多选树**
有多选框可选择，可禁用。
```jsx
const TreeNode = Tree.TreeNode;
onSelect = (selectedKeys, info) => {
	console.log('selected', selectedKeys, info);
}
onCheck = (checkedKeys, info) => {
  console.log('onCheck', checkedKeys, info);
}
<Tree
  checkable
  defaultExpandedKeys={['0-0-0-0-0', '0-0-1']}
  defaultCheckedKeys={['0-0-0', '0-0-1']}
  onSelect={this.onSelect}
  onCheck={this.onCheck}
        >
  <TreeNode title='上海分公司' key='0-0'>
    <TreeNode title='开发部' key='0-0-0'>
      <TreeNode title='测试一部' key='0-0-0-0'>
        <TreeNode title='选项' key='0-0-0-0-0' />
        <TreeNode title='选项' key='0-0-0-0-1' />
      </TreeNode>
      <TreeNode title='测试二部' key='0-0-0-1' />
    </TreeNode>
    <TreeNode title='产品规划部' key='0-0-1'>
      <TreeNode title={'规划一部'} key='0-0-1-0' />
    </TreeNode>
    <TreeNode title='财务部' key='0-0-2'>
      <TreeNode title={'财务办公室'} key='0-0-1-1' disableCheckbox/>
    </TreeNode>
  </TreeNode>

  <TreeNode title='深圳分公司' key='0-1' disabled>
  </TreeNode>
</Tree>
```

##### **可拖动**
```jsx
const TreeNode = Tree.TreeNode;
const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};
generateList(gData);
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
class TreeExample extends React.Component {
   constructor(){
    super();
    this.state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      gData,
      autoExpandParent: true,
    };
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  onDragStart(info){
    console.log('start', info);
  }
  onDragEnter(info){
    console.log('drag', info);
    // expandedKeys 需要受控时设置
    this.setState({
      expandedKeys: info.expandedKeys,
    });
  }
  onDrop(info){
    console.log('drop', info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    } else {
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
    }
    this.setState({
      gData: data,
    });
  }
  render(){
    const loop = data => {
      return data.map((item) => {
        if (item.children && item.children.length) {
          return <TreeNode key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
        }
        return <TreeNode key={item.key} title={item.title} />;
      });
    };
    return (
      <Tree
            className='draggable-tree'
            autoExpandParent={this.state.autoExpandParent}
            defaultExpandedKeys={this.state.expandedKeys}
            draggable
            onDragStart={this.onDragStart}
            onDragEnter={this.onDragEnter}
            onDrop={this.onDrop}
            >
          {loop(this.state.gData)}
      </Tree>
    )
  }
}
<TreeExample />

```

##### **点击展开节点，异步加载数据**
```jsx
const TreeNode = Tree.TreeNode;
class TreeExample extends React.Component {
   constructor(){
    super();
    this.state = {
      treeData: [
        { title: 'Expand to load', key: '0' },
        { title: 'Expand to load', key: '1' },
        { title: 'Tree Node', key: '2', isLeaf: true },
      ]
    };
    this.onLoadData = this.onLoadData.bind(this);
    this.renderTreeNodes = this.renderTreeNodes.bind(this);
  }

  onLoadData(treeNode){
    return new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    })
   }

  renderTreeNodes(data){
   return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    })
  }

  render(){
    return(
      <Tree loadData={this.onLoadData}>
          {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    )
  }
}
<TreeExample />
```

##### **受控操作示例**
展示选择树节点，展开/收起节点，选择复选框和默认展开节点等操作示例。
```jsx
const TreeNode = Tree.TreeNode;
class TreeExample extends React.Component {
   constructor(){
    super();
    this.state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
    };
    this.onExpand = this.onExpand.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onExpand(expandedKeys){
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck(checkedKeys){
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect(selectedKeys, info){
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

  renderTreeNodes(data){
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    })
  }


  render(){
    const treeData = [{
      title: '0-0',
      key: '0-0',
      children: [{
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      }, {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      }, {
        title: '0-0-2',
        key: '0-0-2',
      }],
    }, {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    }, {
      title: '0-2',
      key: '0-2',
    }];
    return(
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    )
  }
}
<TreeExample />
```
## API

### Tree props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoExpandParent | 是否自动展开父节点 | boolean | true |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点key，则子节点自动选中；相应当子节点key都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string[], {checked: string[], halfChecked: string[]} | [] |
| checkStrictly | checkable状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |
| defaultCheckedKeys | 默认选中复选框的树节点 | string\[] | \[] |
| defaultExpandAll | 默认展开所有树节点 | boolean | false |
| defaultExpandedKeys | 默认展开指定的树节点 | string\[] | \[] |
| defaultSelectedKeys | 默认选中的树节点 | string\[] | \[] |
| draggable | 设置节点可拖拽（IE>8） | boolean | false |
| expandedKeys | （受控）展开指定的树节点 | string\[] | \[] |
| filterTreeNode | 按需筛选树节点（高亮），返回true | function(node) | - |
| loadData | 异步加载数据 | function(node) | - |
| multiple | 支持点选多个节点（节点本身） | boolean | false |
| selectedKeys | （受控）设置选中的树节点 | string\[] | - |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |
| onCheck | 点击复选框触发 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) | - |
| onDragEnd | dragend 触发时调用 | function({event, node}) | - |
| onDragEnter | dragenter 触发时调用 | function({event, node, expandedKeys}) | - |
| onDragLeave | dragleave 触发时调用 | function({event, node}) | - |
| onDragOver | dragover 触发时调用 | function({event, node}) | - |
| onDragStart | 开始拖拽时调用 | function({event, node}) | - |
| onDrop | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys}) | - |
| onExpand | 展开/收起节点时触发 | function(expandedKeys, {expanded: bool, node}) | - |
| onRightClick | 响应右键点击 | function({event, node}) | - |
| onSelect | 点击树节点触发 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | - |

### TreeNode props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disableCheckbox | 禁掉 checkbox | boolean | false |
| disabled | 禁掉响应 | boolean | false |
| isLeaf | 设置为叶子节点(设置了`loadData`时有效) | boolean | false |
| key | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ | string | 内部计算出的节点位置 |
| selectable | 设置节点是否可被选中 | boolean | true |
| title | 标题 | string/ReactNode | '---' |
