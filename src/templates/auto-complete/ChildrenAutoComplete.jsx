import React from 'react';
import AutoComplete from 'components/auto-complete';
const {Option} = AutoComplete;
export default class ChildrenAutoComplete extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(value) {
        let {dataSource} = this.state;
        if (!value || value.indexOf('@') >= 0) {
            dataSource = [];
        } else {
            dataSource = [
                value,
                value + value,
                value + value + value,
            ]
        }
        this.setState({ dataSource });
   }

    render() {
        const { dataSource } = this.state;
        const children = dataSource.map((email) => {
            return <Option key={email}>{email}</Option>;
        });
        return (
          <div>
            <AutoComplete
              style={{ width: '200px' }}
              onSearch={this.handleSearch}
              placeholder='请输入'
            >
              {children}
            </AutoComplete>
            <br />
            <br />

            <AutoComplete
              style={{ width: '200px' }}
              onSearch={this.handleSearch}
              placeholder='请输入'
              backfill
            >
              {children}
            </AutoComplete>
          </div>
        )
    }
}
