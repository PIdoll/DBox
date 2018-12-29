当数据量较多时，使用分页可以帮助快速移动，常见于列表、表格、搜索结果和目录

##### **基础分页**
较简单的基础用法，不设置 defaultPageSize 时默认为每页10条数据；通过 total 可以设置总条数。
```jsx
import {Pagination} from 'dbox-ui';
<Pagination defaultCurrent={1} total={50}></Pagination>
```

##### **更多分页**
页数过多时自动折叠。

```jsx
import {Pagination} from 'dbox-ui';
<Pagination defaultCurrent={6} total={500}></Pagination>
```

##### **改变每页显示条数目**
通过 defaultPageSize 设置每页显示的条数。
```jsx
import {Pagination} from 'dbox-ui';
<Pagination defaultCurrent={1} defaultPageSize={11} pageSizeOptions={['11', '21', '31', '41']} total={50} showSizeChanger></Pagination>
```
##### **跳转分页**
添加 showQuickJumper 设置快速页面跳转。
```jsx
import {Pagination} from 'dbox-ui';
<Pagination defaultCurrent={2} total={500} showQuickJumper></Pagination>
```
##### **迷你分页**
较小的分页器，可通过 showSizeChanger showQuickJumper showTotal={showTotal} 来控制是否
显示每页显示的条数、跳转和总条数。
```jsx
import {Pagination} from 'dbox-ui';
function showTotal(total) {
  return `总 ${total} 条`;
}
<div>
	<Pagination size='small' total={50}></Pagination>
	<br />
   <Pagination size='small' total={50} showSizeChanger showQuickJumper></Pagination>
   <br />
   <Pagination size='small' total={50} showTotal={showTotal}></Pagination>
</div>
```

##### **简洁翻页**
通过 simple 设置简洁分页器，常用户弹出框中。
```jsx
import {Pagination} from 'dbox-ui';
<Pagination simple defaultCurrent={2} total={500}></Pagination>
```

##### **包含总数**
与表格搭配较常用的分页器。
```jsx
import {Pagination} from 'dbox-ui';
<Pagination showTotal={(total) => (`总 ${total} 条`)} defaultCurrent={2} total={5000} pageSize={50} showQuickJumper></Pagination>
```

##### **Pagination**

| 参数 | 说明 | 类型 | 默认值|
| --- | --- | --- | --- |
| current | 当前页数与defaultCurrent同时存在会覆盖defaultCurrent | number | - |
| defaultCurrent | 默认的当前页数 | number | 1|
| defaultPageSize | 默认的每页条数 | number | 10 |
| itemRender | 用于自定义页码的结构，可用于优化SEO | (page，type:'page'/'prev'/'next', originalElement) => React.ReactNode | - |
| pageSize | 每页条数与defaultPageSize同时存在会覆盖defaultPageSize | number | - |
| showQuickJumper | 是否可以快速跳转至某页 | boolean | false |
| showSizeChanger | 是否可以改变pageSize | boolean | false|
| pageSizeOptions | 改变showSizeChanger的默认值搭配defaultPageSize使用 | Array | `['10', '20', '30', '40']`|
| showTotal | 用于显示数据总量和当前数据顺序 | Function(total, range) | - |
| simple | 当添加该属性时，显示为简单分页 | boolean | - |
| size | 当为`small`时，是小尺寸分页 | string | - |
| total | 数据总数 | number | 0 |
| showTitle | 展示页码hover时显示的title值 | boolean | true |
| showLessItems | 显示较少的页码项 | boolean | false |
| onChange | 页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize) | noop |
| onShowSizeChange | pageSize 变化的回调 | Function(current, size) | noop |


```jsx noeditor
import {PrevPage, BackTop} from 'dbox-ui';
<div>
  <BackTop visibilityHeight={20}/>
  <PrevPage />
</div>
```
