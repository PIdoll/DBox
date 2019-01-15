import React from 'react';
import Cascader from 'components/cascader';

export default class LoadingCascader extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '未选择',
      loadDataOptions: [{
        value: '浙江',
        label: '浙江',
        isLeaf: false,
      }, {
        value: '江苏',
        label: '江苏',
        isLeaf: false,
      },
      {
        value: '上海',
        label: '上海',
        isLeaf: false,
      }]
    };
    this.onChange = this.onChange.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  onChange(value, selectOptions) {
    this.setState({
      text: selectOptions.map(o => o.label).join(',')
    })
  };
  loadData(selectedOptions) {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} 城市`,
        value: '城市',
      }, {
        label: `${targetOption.label} 地名`,
        value: '地名',
      }];
      this.setState({
        options: [...this.state.loadDataOptions],
      });
    }, 1000)
  }

  render() {
    return (
      <Cascader
        options={this.state.loadDataOptions}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    )
  }
}
