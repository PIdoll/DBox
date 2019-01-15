import React from 'react';
import Tree from 'components/tree';

const TreeNode = Tree.TreeNode;
export default class TreeExample extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: ['0-1-0-0'],
      defaultExpandAll: false,
    };
    this.onExpand = this.onExpand.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onExpand(expandedKeys) {
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck(checkedKeys) {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect(selectedKeys, info) {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

  renderTreeNodes(data) {
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


  render() {
    const treeData = [{
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
    return (
      <Tree
        checkable
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
        defaultExpandAll={this.state.defaultExpandAll}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    )
  }
}
