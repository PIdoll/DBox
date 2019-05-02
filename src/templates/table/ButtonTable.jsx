import React from 'react';
import {Table, Divider, Button} from 'components';
const columns = [{
  type: 'radio'
},
  {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  type: 'radio'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  sorter: (a, b) => a.age - b.age
}, {
  title: '所在城市',
  dataIndex: 'address',
  key: 'address'
}, {
  title: '手机号',
  dataIndex: 'Tel',
  key: 'Tel'
}, {
  title: '审核状态',
  dataIndex: 'state',
  key: 'state',
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href='javascript:;'>编辑</a>
      <Divider type='vertical' />
      <a href='javascript:;'>删除</a>
    </span>
  ),
}];
const data = [{
  key: '1',
  name: '刘乐冉',
  age: 26,
  address: '北京',
  Tel: '13943250086',
  state: '审核未通过',
}, {
  key: '2',
  name: '李佳欣',
  age: 24,
  address: '南京',
  Tel: '13262717838',
  state: '审核通过',
  }, {
  key: '3',
  name: '孙柔佳',
  age: 22,
  address: '上海',
  Tel: '13950035537',
  state: '审核未通过',
}, {
  key: '4',
  name: '张仁士',
  age: 28,
  address: '合肥',
  Tel: '13947766628',
  state: '审核通过',
  }, {
  key: '5',
  name: '王子琪',
  age: 32,
  address: '郑州',
  Tel: '13964507501',
  state: '审核未通过',
  }, {
  key: '6',
  name: '陈卜宣',
  age: 27,
  address: '沈阳',
  Tel: '13262836283',
  state: '审核通过',
  }];
 export default class ButtonTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedRowKeys: [],
        loading: false,
      }
      this.start = this.start.bind(this)
      this.onSelectChange = this.onSelectChange.bind(this)
      this.onSelect = this.onSelect.bind(this)
      this.onSelectAll = this.onSelectAll.bind(this)
    };
    start () {
      this.setState({ loading: true });
      // ajax request after empty completing
      setTimeout(() => {
        this.setState({
          selectedRowKeys: [],
          loading: false,
        });
      }, 1000);
    }
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    }
    onSelect (record, selected, selectedRows) {
      console.log(`onSelect${record}`)
    }
    onSelectAll (record, selected, selectedRows) {
      console.log(`onSelectAll${record}`)
    }
    render() {
      const { loading, selectedRowKeys } = this.state;
      const rowSelection = {
        type: 'radio',
        onSelect: this.onSelect,
        onSelectAll: this.onSelectAll,
        selectedRowKeys,
        onChange: this.onSelectChange,
      };
      const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <Button type='primary' onClick={this.start} disabled={!hasSelected} loading={loading}>批量操作</Button>
          <span style={{ marginLeft: 16 }}>
            {hasSelected ? `已选择 ${selectedRowKeys.length} 条数据` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
}

