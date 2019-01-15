import React from 'react';
import Tree from 'components/tree';

const TreeNode = Tree.TreeNode;
export default class MultipleSelectTree extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  render() {
    return (
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
            <TreeNode title={'规划一部'} key='0-0-1-0' selectable />
          </TreeNode>
          <TreeNode title='财务部' key='0-0-2'>
            <TreeNode title={'财务办公室'} key='0-0-1-1' disableCheckbox />
          </TreeNode>
        </TreeNode>

        <TreeNode title='深圳分公司' key='0-1' disabled>
          <TreeNode title='选项' key='0-0-0-0-0' />
        </TreeNode>
      </Tree>
    )
  }
}
