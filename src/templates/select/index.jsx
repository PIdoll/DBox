import React from 'react';
import BasicSelect from './BasicSelect';
import SizeSelect from './SizeSelect';
import SearchSelect from './SearchSelect';
import MultipleSelect from './MultipleSelect';
import LabelInValueSelect from './LabelInValueSelect';
import SearchUserSelect from './SearchUserSelect';
import GroupSelect from './GroupSelect';


export default class Select extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>1.基本使用选择框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Select的Option,设置value和defaultValue属性，测试是否有效<br />
          2)使用allowClear属性，测试是否能清除<br />
          3)设置defaultActiveFirstOption属性为false，测试是否不选中第一个选项<br />
          4)分别在select和option设置disabled属性，测试是否不能选
          5)设置notFoundContent为下拉框为空时显示内容
          6)测试展开下拉菜单的回调onDropdownVisibleChange
        </h2>
        <BasicSelect />

        <h1 className='h1'>2.大小选择框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置size属性为small,不设置和large，测试大小是否改变<br />
        </h2>
        <SizeSelect />

        <h1 className='h1'>3.搜索选择框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置showSearch属性,测试输入内容和下拉框的value值上否能匹配<br />
        </h2>
        <SearchSelect />

        <h1 className='h1'>4.多选选择框</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置mode属性为multiple,测试选择内容是否为多选<br />
          2)设置mode属性为tag,测试选择内容是否可以随意输入同时可多选<br />
          3)设置maxTagCount属性，测试显示tag的最大值<br />
          4)设置maxTagPlaceholder为超过maxTagCount时显示的内容<br />
          5)设置autoClearSearchValue属性为false,测试选则后搜索框是否不会清空
        </h2>
        <MultipleSelect />

        <h1 className='h1'>5.获得选项文本</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置labelInValue属性,测试是否能拿到选中节点的value和label值<br />
        </h2>
        <LabelInValueSelect />

        <h1 className='h1'>6.用户输入搜索获取下拉框内容</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)设置onSearch、notFoundContent属性,测试是否能通过输入获取下拉框内容，当搜索没有完成时是否显示加载状态<br />
        </h2>
        <SearchUserSelect />

        <h1 className='h1'>7.分组选择获取下拉框内容</h1>
        <h2 className='h2'>
          测试场景: <br />
          1)使用Select.OptGroup,测试是否能正常分组<br />
        </h2>
        <GroupSelect />
      </div>
    )
  }
}
