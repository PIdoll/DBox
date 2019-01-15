import React from 'react';
import TreeSelect from 'components/tree-select';
const TreeNode = TreeSelect.TreeNode;

export default class BasicTree extends React.Component {
  constructor() {
    super();
    this.state = {
      value: undefined,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log(value);
    this.setState({ value });
  }

  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='请选择'
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
        dropdownClassName='dropdownItem'
      >
        <TreeNode value='zhongguo' title='中国' key='0-1'>
          <TreeNode value='shanghai' title='上海' key='0-1-1'>
            <TreeNode value='jingan' title='静安' key='random' />
            <TreeNode value='pudongxinqu' title='浦东新区' key='random1' disabled />
          </TreeNode>
          <TreeNode value='anhui' title='安徽' key='random2'>
            <TreeNode value='hefei' title='合肥' key='random3' />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}
