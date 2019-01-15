import React from 'react';
import {Table} from 'components';
import reqwest from 'reqwest'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filterMultiple: false,
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

export default class AjaxTable extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [],
    pagination: {},
    loading: false,
  };
    this.handleTableChange = this.handleTableChange.bind(this)
    this.fetch = this.fetch.bind(this)
}
  componentDidMount() {
    this.fetch();
  }

  handleTableChange (pagination, filters, sorter) {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch (params = {}) {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }

  render() {
    return (
      <Table
        columns={columns}
        locale={{
        filterConfirm: 'Ok',
        filterReset: 'Reset',
        emptyText: 'No Date',
      }}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}
