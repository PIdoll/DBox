import React from 'react';
import Tree from 'components/tree';
import Input from 'components/input';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
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

export default class TreeDemo extends React.Component {
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
    gData,
    searchValue: '',
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ],
  }
	onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
		this.setState({ selectedKeys });
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
    this.setState({ checkedKeys });
  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    // 如果没有将autoExpandParent设为false，则children展开，parent不能折叠
    // 或者你可以移除所有的展开的children keys
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  onDragEnter = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }
  onDrop = (info) => {
    console.log(info);
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
	onChange = (e) => {
    const value = e.target.value;
    const expandedKeys = dataList.map((item) => {
      if (item.key.indexOf(value) > -1) {
        return getParentKey(item.key, gData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }
  onLoadData = (treeNode) => {
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
    });
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  }
   renderTreeNodes2 = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });
  }
	render() {
		const { searchValue, expandedKeys, autoExpandParent } = this.state;
		const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
    const loop2 = data => data.map((item) => {
      const index = item.key.indexOf(searchValue);
      const beforeStr = item.key.substr(0, index);
      const afterStr = item.key.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.key}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop2(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} />;
    });
		return (
  <div id='main-container'>
    <h1 className='h1'>基本用法</h1>
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={this.onSelect}
      onCheck={this.onCheck}
			      >
      <TreeNode title='parent 1' key='0-0'>
        <TreeNode title='parent 1-0' key='0-0-0' disabled>
          <TreeNode title='leaf' key='0-0-0-0' disableCheckbox />
          <TreeNode title='leaf' key='0-0-0-1' />
        </TreeNode>
        <TreeNode title='parent 1-1' key='0-0-1'>
          <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key='0-0-1-0' />
        </TreeNode>
      </TreeNode>
    </Tree>
    <h1 className='h1'>受控操作</h1>
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
    <h1 className='h1'>将节点拖拽到其他节点内部或前后</h1>
    <Tree
      className='draggable-tree'
      defaultExpandedKeys={this.state.expandedKeys}
      draggable
      onDragEnter={this.onDragEnter}
      onDrop={this.onDrop}
      >
      {loop(this.state.gData)}
    </Tree>
    <h1 className='h1'>可搜索</h1>
    <Search style={{ marginBottom: 8 }} placeholder='Search' onChange={this.onChange} />
    <Tree
      onExpand={this.onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
        >
      {loop2(gData)}
    </Tree>
    <h1 className='h1'>点击展开节点，动态加载数据</h1>
    <Tree loadData={this.onLoadData}>
      {this.renderTreeNodes2(this.state.treeData)}
    </Tree>
    <h1 className='h1'>带连接线</h1>
    <Tree
      showLine
      defaultExpandedKeys={['0-0-0']}
      onSelect={this.onSelect}
      >
      <TreeNode title='parent 1' key='0-0'>
        <TreeNode title='parent 1-0' key='0-0-0'>
          <TreeNode title='leaf' key='0-0-0-0' />
          <TreeNode title='leaf' key='0-0-0-1' />
          <TreeNode title='leaf' key='0-0-0-2' />
        </TreeNode>
        <TreeNode title='parent 1-1' key='0-0-1'>
          <TreeNode title='leaf' key='0-0-1-0' />
        </TreeNode>
        <TreeNode title='parent 1-2' key='0-0-2'>
          <TreeNode title='leaf' key='0-0-2-0' />
          <TreeNode title='leaf' key='0-0-2-1' />
        </TreeNode>
      </TreeNode>
    </Tree>
  </div>
		);
	}
}
