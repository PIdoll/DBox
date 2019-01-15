import React from 'react';
import BasicTreeSelect from './BasicTreeSelect';
import ProductData from './ProduceData';
import MultipleSelect from './MultipleTreeSelect';
import CheckableTreeSelect from './CheckableTreeSelect';
import MaxTagTreeSelect from './maxTagTreeSelect';

export default class TreeSelect extends React.Component {
  render() {
    return (
      <div id='main-container' className='demo-affix'>
        <h1 className='h1'>基本使用</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用allowClear可以显示清除按钮<br />
          2）dropdownStyle显示下拉菜单的样式<br />
          3）treeDefaultExpandAll默认展开所有树节点<br />
          4) 使用disabled接口禁用此节点<br />
          5) 使用DropdownClassName给treeSelect添加样式<br />
          6）showSearch在下拉中显示搜索框<br />
        </h2>
        <BasicTreeSelect />

        <h1 className='h1'>从数据中生成</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用loadData异步加载数据<br />
        </h2>
        <ProductData />

        <h1 className='h1'>多选</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用treeData加载数据<br />
          2) 使用multiple可以选择多个节点<br />
          3）使用onChange指定选中书节点时触发<br />
          4）使用treeData加载数据<br />
          5) 使用value指定当前选中的条目数目<br />
        </h2>
        <MultipleSelect />

        <h1 className='h1'>可勾选的树选择</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用treeCheckable实现可勾中选择<br />
        </h2>
        <CheckableTreeSelect />

        <h1 className='h1'>多选tag自定义树选择</h1>
        <h2 className='h2'>
          测试场景:<br />
          1）使用maxTagCount显示最大的标签树<br />
          2）使用maxTagPlaceholder显示最大的标签树<br />
          3) 使用searchPlaceholder显示搜索框中默认的显示内容<br />
          4) 使用size定义下拉框的默认显示大小（可选default，small，large）<br />
        </h2>
        <MaxTagTreeSelect />
      </div>
    )
  }
}
