import React from 'react';

import Select from 'components/select';
import Spin from 'components/spin'
const {Option} = Select;
export default class SearchUserSelect extends React.Component {
    state = {
        data: [],
        value: [],
        fetching: false,
    }

    getUserInfo = (value) => {
        console.log('getUserInfo ', value);
        this.setState({ data: [], fetching: true });
        setTimeout(() => {
            const data = [
                {value: '1', text: 'aa'},
                {value: '2', text: 'bb'},
                {value: '3', text: 'cc'},
            ]
            this.setState({ data, fetching: false });
        }, 1000);
    }

    handleChange = (value) => {
        this.setState({
          value,
          data: [],
          fetching: false,
        });
        console.log(value);
    }

    render() {
        const { fetching, data, value } = this.state;
        return (
          <Select
            mode='multiple'
            labelInValue
            value={value}
            placeholder='请搜索'
            notFoundContent={fetching ? <Spin size='small' /> : null}
            filterOption={false}
            onSearch={this.getUserInfo}
            onChange={this.handleChange}
            style={{ width: '20%' }}
        >
            {data.map(d => <Option key={d.value}>{d.text}</Option>)}
          </Select>
        )
  }
}
