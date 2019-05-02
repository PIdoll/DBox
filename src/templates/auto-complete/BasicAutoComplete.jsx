import React from 'react';

import AutoComplete from 'components/auto-complete';

export default class BasicAutoComplete extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    handleSearch(value) {
        let {dataSource} = this.state;
        if (!value || value.indexOf('@') >= 0) {
            dataSource = [];
        } else {
            dataSource = ['126.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ dataSource });
    }
    onSelect(value) {
        console.log('onSelect', value);
    }

    onChange = (value) => {
        console.log('onChange', value);
    }
    render() {
        const { dataSource } = this.state;
        return (
          <div>
            <AutoComplete
              dataSource={dataSource}
              style={{ width: '200px' }}
              onSelect={this.onSelect}
              onSearch={this.handleSearch}
              placeholder='请输入'
            />
            <br />
            <br />
            <AutoComplete
              dataSource={dataSource}
              style={{ width: '200px' }}
              onChange={this.onChange}
              placeholder='请输入'
              allowClear
            />
            <br />
            <br />
            <AutoComplete
              dataSource={dataSource}
              style={{ width: '200px' }}
              onChange={this.onChange}
              placeholder='请输入'
              autoFocus
            />
          </div>
        )
    }
}
