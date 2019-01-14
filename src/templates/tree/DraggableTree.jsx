import React from 'react';
import Tree from 'components/tree';

const TreeNode = Tree.TreeNode;
const gData = [{
  title: '上海',
  key: '0-0',
  children: [{
    title: '静安区',
    key: '0-0-0',
    children: [
      { title: '延长路', key: '0-0-0-0' },
      { title: '共和新路', key: '0-0-0-1' },
      { title: '汉中路', key: '0-0-0-2' },
    ],
  }, {
    title: '浦东新区',
    key: '0-0-1',
    children: [
      { title: '龙阳路', key: '0-0-1-0' },
      { title: '金科路', key: '0-0-1-1' },
      { title: '张江高科', key: '0-0-1-2' },
    ],
  }, {
    title: '闵行区',
    key: '0-0-2',
  }],
}, {
  title: '安徽',
  key: '0-1',
  children: [
    { title: '合肥', key: '0-1-0-0' },
    { title: '宣城', key: '0-1-0-1' },
    { title: '芜湖', key: '0-1-0-2' },
  ],
}, {
  title: '江苏',
  key: '0-2',
}];

export default class DraggableTree extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      gData,
      autoExpandParent: true,
    };
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragStart(info) {
    console.log('start', info);
  }
  onDragEnter(info) {
    console.log('dragEnter', info);
    // expandedKeys 需要受控时设置
    this.setState({
      expandedKeys: info.expandedKeys,
    });
  }
  onDragOver(info) {
    console.log('onDragOver', info);
  }
  onDragEnd(info) {
    console.log('onDragEnd', info);
  }
  onDrop(info) {
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
  render() {
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
        onDragOver={this.onDragOver}
        onDragEnd={this.onDragEnd}
        onDrop={this.onDrop}
      >
        {loop(this.state.gData)}
      </Tree>
    )
  }
}
