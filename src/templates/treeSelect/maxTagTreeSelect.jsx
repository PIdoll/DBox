import React from 'react';
import TreeSelect from 'components/tree-select';

const treeData = [{
  title: '上海',
  value: 'shanghai',
  key: '0-0',
  children: [{
    title: '浦东新区',
    value: 'pudongxinqu',
    key: '0-0-1',
  }, {
    title: '静安',
    value: 'jingan',
    key: '0-0-2',
  }],
}, {
  title: '安徽',
  value: 'anhui',
  key: '0-1',
}];
export default class ProduceData extends React.Component {
  constructor() {
    super();
    this.state = {
      value: undefined,
      tag: 2,
      placeholder: '加1',
      searchPlaceholder: '请输入搜索内容'
    }
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onChange(value) {
    console.log(value);
    this.setState({ value });
  }
  onSearch(value) {
    console.log(value)
  }
  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder='请选择'
        treeDefaultExpandAll
        onChange={this.onChange}
        size='small'
        onSearch={this.onSearch}
        maxTagCount={this.state.tag}
        searchPlaceholder={this.state.searchPlaceholder}
        maxTagPlaceholder={this.state.placeholder}
      >
        a
      </TreeSelect>
    )
  }
}
