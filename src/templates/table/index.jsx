import React from 'react';
import BasicTable from './BasicTable';
import AjaxTable from './AjaxTable';
import BorderTable from './BorderTable';
import ButtonTable from './ButtonTable';
import EditTable from './EditTable';
import EmbTable from './EmbTable';
import FixTable from './FixTable';
import MergeTable from './MergeTable';
import SizeTable from './SizeTable';

export default class table extends React.Component {
  render () {
    return (
      <div id='main-container'>
        <h1 className='h1'>可编辑表格</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource数据数组(array)<br />
          2）测试API columns表格列的配置描述(array)<br />
          4）测试API className 列的 className(string)<br />
          5）测试API rowClassName 表格行的类名 (string)<br />
          3）测试API border 是否展示外边框和列边框(bool)<br />
          6）测试API key React需要的key，建议设置(string)<br />
          7）测试API title列头显示文字(String or React.Element)<br />
          8）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          9）测试API selectedRowKeys 指定选中项的 key 数组，需要和 onChange 进行配合(array)<br />
          10）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          11）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <EditTable />
        <br />
        <h1 className='h1'>默认表格</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource数据数组(array)<br />
          2）测试API width 列宽度(string/number)<br />
          3）测试API columns表格列的配置描述(array)<br />
          4）测试API className 列的 className(string)<br />
          5）测试API rowClassName 表格行的类名 (string)<br />
          6）测试API key React需要的key，建议设置(string)<br />
          7）测试API title列头显示文字(String or React.Element)<br />
          8）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          9）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          10）测试API pagination分页器，配置项参考 pagination，设为 false 时不显示分页(object/bool)<br />
          11）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <BasicTable />
        <br />
        <h1 className='h1'>三种尺寸</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource数据数组(array)<br />
          2）测试API columns表格列的配置描述(array)<br />
          3）测试API showHeader 是否显示表头(bool)<br />
          4）测试API key React需要的key，建议设置(string)<br />
          5）测试API title列头显示文字(String or React.Element)<br />
          6）测试API size 正常或迷你类型，large middle or small(string)<br />
          7）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          8）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          9）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <SizeTable />
        <br />
        <h1 className='h1'>带选择框</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource数据数组(array)<br />
          2）测试API loading 页面是否加载中 (bool)<br />
          3）测试API columns表格列的配置描述(array)<br />
          4）测试API key React需要的key，建议设置(string)<br />
          5）测试API type 多选/单选，checkbox or radio(string)<br />
          6）测试API title列头显示文字(String or React.Element)<br />
          7）测试API rowSelection 列表项是否可选择，配置项 (object)<br />
          8）测试API onSelect 用户手动选择/取消选择某列的回调 (function)<br />
          9）测试API onSelectAll 用户手动选择/取消选择所有列的回调 (function)<br />
          10）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          11）测试API selectedRowKeys 指定选中项的 key 数组，需要和 onChange 进行配合(array)<br />
          12）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          13）测试API onChange 选中项发生变化的时的回调 (Function(selectedRowKeys, selectedRows)<br />
          14）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <ButtonTable />
        <br />
        <h1 className='h1'>异步数据</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource 数据数组(array)<br />
          2）测试API width 列宽度(string/number)<br />
          3）测试API loading 页面是否加载中 (bool)<br />
          4）测试API columns表格列的配置描述(array)<br />
          5）测试API filterMultiple 是否多选(bool)<br />
          6）测试API filters 表头的筛选菜单项(array)<br />
          7）测试API key React需要的key，建议设置(string)<br />
          8）测试API title列头显示文字(String or React.Element)<br />
          9）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          10）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          11）测试API onChange 选中项发生变化的时的回调 (Function(selectedRowKeys, selectedRows)<br />
          12）测试API sortOrder 排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false (bool/string)<br />
          13）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
          14）测试API locale 默认文案设置，目前包括排序、过滤、空数据文案,默认`{`{filterConfirm: '确定', filterReset: '重置', emptyText: '暂无数据'}`}`(object)<br />
        </h2>
        <AjaxTable />
        <br />
        <h1 className='h1'>行列合并</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource 数据数组(array)<br />
          2）测试API columns 表格列的配置描述(array)<br />
          3）测试API border 是否展示外边框和列边框(bool)<br />
          4）测试API key React需要的key，建议设置(string)<br />
          5）测试API title 列头显示文字(String or React.Element)<br />
          6）测试API colSpan 表头列合并,设置为 0 时，不渲染(number)<br />
          7）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          8）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          9）测试API onChange 选中项发生变化的时的回调 (Function(selectedRowKeys, selectedRows)<br />
          10）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <MergeTable />
        <br />
        <h1 className='h1'>边框表格</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource 数据数组(array)<br />
          2）测试API columns 表格列的配置描述(array)<br />
          3）测试API border 是否展示外边框和列边框(bool)<br />
          4）测试API key React需要的key，建议设置(string)<br />
          5）测试API title 表格头部自定义渲染函数(function)<br />
          6）测试API footer 表格底部自定义渲染函数(function)<br />
          7）测试API title列头显示文字(String or React.Element)<br />
          8）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          9）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          10）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <BorderTable />
        <br />
        <h1 className='h1'>内嵌表格</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource 数据数组(array)<br />
          2）测试API columns 表格列的配置描述(array)<br />
          3）测试API key React需要的key，建议设置(string)<br />
          4）测试API expandedRowRender 额外的展开行(function)<br />
          5）测试API title列头显示文字(String or React.Element)<br />
          6）测试API defaultExpandedRowKeys 默认额外展开的行(array)<br />
          7）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          8）测试API pagination分页器，配置项参考 pagination，设为 false 时不显示分页(object/bool)<br />
          9）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          10）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <EmbTable />
        <br />
        <h1 className='h1'>固定行列</h1>
        <h2 className='h2'>
        测试场景: <br />
          1）测试API dataSource 数据数组(array)<br />
          2）测试API width 列宽度(String/Numbe)<br />
          3）测试API columns 表格列的配置描述(array)<br />
          4）测试API key React需要的key，建议设置(string)<br />
          5）测试API title列头显示文字(String or React.Element)<br />
          6）测试API fixed 列是否固定，可选 true(等效于 left) 'left' 'right'(bool/string)<br />
          7）测试API dataIndex	列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法(string)<br />
          8）测试API sorter 排序函数，本地排序使用一个函数，需要服务端排序可设为 true(function/bool)<br />
          9）测试API scroll 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{`{ x: true, y: 300 }`}`(object)<br />
          10）测试API render 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，return里面可以设置表格行/列合并(Function(text, record, index) {})<br />
        </h2>
        <FixTable />
        <br />
      </div>
    )
  }
}
