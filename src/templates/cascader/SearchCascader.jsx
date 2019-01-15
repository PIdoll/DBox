import React from 'react';
import Cascader from 'components/cascader';

const searchData = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }, {
      value: 'xiasha',
      label: 'Xia Sha',
      disabled: true,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua men',
    }],
  }],
}];

function onChange(value) {
  console.log(value)
}

function filterData(inputValue, path) {
  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}
const SearchCascader = () => {
  return (
    <Cascader
      options={searchData}
      onChange={onChange}
      showSearch={{ filterData }}
    />
  )
}

export default SearchCascader;
