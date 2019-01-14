import React from 'react';
import Tree from 'components/tree';

const TreeNode = Tree.TreeNode;
export default class SyncDataTree extends React.Component {
  constructor() {
    super();
    this.state = {
      treeData: [
        { title: '上海', key: '0' },
        { title: '安徽', key: '1' },
        { title: '江苏', key: '2', isLeaf: true },
      ]
    };
    this.onLoadData = this.onLoadData.bind(this);
    this.renderTreeNodes = this.renderTreeNodes.bind(this);
  }

  onLoadData(treeNode) {
    return new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: '城市1', key: `${treeNode.props.eventKey}-0` },
          { title: '城市2', key: `${treeNode.props.eventKey}-1` },
        ];
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      }, 1000);
    })
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
      return <TreeNode {...item} dataRef={item} />;
    })
  }

  render() {
    return (
      <Tree loadData={this.onLoadData}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    )
  }
}
