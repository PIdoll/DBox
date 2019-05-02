import React from 'react';
import BasicAutoComplete from './BasicAutoComplete';
import ChildrenAutoComplete from './ChildrenAutoComplete';
import FilterAutoComplete from './FilterAutoComplete';
import CertainClassAutoComplete from './CertainClassAutoComplete';
import NotCertainClassAutoComplete from './NotCertainClassAutoComplete';

export default class AutoComplete extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本场景</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置dataSource，onSelect和onSearch属性，测试自动完成功能呢是否正常 <br />
          2) 设置onChange和allowClear属性，测试是否正常<br />
          3) 设置autoFocus属性，测试是否正常
        </h2>
        <BasicAutoComplete />

        <h1 className='h1'>2.自定义选项</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置children为自动完成的数据源，defaultActiveFirstOption<br />
          2) 设置backfill属性，测试是否正常
        </h2>
        <ChildrenAutoComplete />

        <h1 className='h1'>3.不区分大小写</h1>
        <h2 className='h2'>
          测试场景: <br />
          1）设置filterOption属性，对datasource值进行选则 <br />
          2) 设置defaultActiveFirstOption属性为false，测试是否不默认选中第一个选项
        </h2>
        <FilterAutoComplete />

        <h1 className='h1'>4.确定类目</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置optionLabelProp属性为value，测试选中值是否为设置的value <br />
          2)使用AutoComplete.OptGroup,测试是否进行分类
        </h2>
        <CertainClassAutoComplete />

        <h1 className='h1'>5.不确定类目</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置optionLabelProp属性为text，测试选中值是否为设置的text <br />
        </h2>
        <NotCertainClassAutoComplete />
      </div>
    )
  }
}
