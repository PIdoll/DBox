import React from 'react';
import Cascader from 'components/cascader';

const basicDatas = [{
  value: '浙江',
  label: '浙江',
  children: [{
    value: '杭州',
    label: '杭州',
    children: [{
      value: '西湖',
      label: '西湖',
    }],
  }],
}, {
  value: '江苏',
  label: '江苏',
  children: [{
    value: '南京',
    label: '南京',
    children: [{
      value: '中华门',
      label: '中华门',
    }],
  }],
}, {
  value: '安徽',
  label: '安徽',
  disabled: true,
  children: [{
    value: '合肥',
    label: '合肥',
    children: [{
      value: '三国',
      label: '三国',
    }],
  }],
}];

function onChange(value) {
  console.log(value)
}

const SizeCascader = () => {
  return (
    <div>
      <Cascader size='small' options={basicDatas} onChange={onChange} /><br /><br />
      <Cascader options={basicDatas} onChange={onChange} /><br /><br />
      <Cascader size='large' options={basicDatas} onChange={onChange} />
    </div>
  )
}

export default SizeCascader;
