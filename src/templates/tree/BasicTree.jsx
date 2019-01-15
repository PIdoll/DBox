import React from 'react';
import Tree from 'components/tree';

const TreeNode = Tree.TreeNode;
export default class BasicTree extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  render() {
    return (
      <Tree
        defaultExpandedKeys={['0-0-0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0-0-1']}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title='上海分公司' key='0-0'>
          <TreeNode title='开发部' key='0-0-0'>
            <TreeNode title='测试一部' key='0-0-0-0'>
              <TreeNode title='选项一' key='0-0-0-0-0' selectable={false} />
              <TreeNode title='选项二' key='0-0-0-0-1' />
            </TreeNode>
            <TreeNode title='测试二部' key='0-0-0-1' />
          </TreeNode>
          <TreeNode title='产品规划部' key='0-0-1'>
            <TreeNode title={<span>sss</span>} key='0-0-1-0' />
          </TreeNode>
          <TreeNode title='财务部' key='0-0-2'>
            <TreeNode title={<span>sss</span>} key='0-0-2-0' />
          </TreeNode>
        </TreeNode>
        <TreeNode title='深圳分公司' key='0-1'>
          <TreeNode title={<span>sss</span>} key='0-0-2-0' />
        </TreeNode>
      </Tree>
    )
  }
}
