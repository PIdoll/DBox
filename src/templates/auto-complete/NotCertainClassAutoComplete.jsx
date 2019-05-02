import React from 'react';
import { AutoComplete, Input, Icon } from 'components';
const Option = AutoComplete.Option;
export default class AutoCompleteDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        this.renderOption = this.renderOption.bind(this);
        this.searchResult = this.searchResult.bind(this);
    }

    handleSearch(value) {
        this.setState({
            dataSource: value ? this.searchResult(value) : [],
        });
    }

    onSelect(value) {
        console.log('onSelect', value);
    }

    getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
    }


   searchResult(query) {
    return (new Array(this.getRandomInt(5))).join('.').split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: this.getRandomInt(200, 100),
      }));
  }

    renderOption(item) {
        return (
          <Option key={item.category} text={item.category}>
            {item.query} 在
            <a
              href={`https://s.taobao.com/search?q=${item.query}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.category}
            </a>
            区块中
            <span className='global-search-item-count'>约 {item.count} 个结果</span>
          </Option>
        );
    }
    render() {
        const {dataSource} = this.state;
        return (
          <AutoComplete
            className='global-search'
            style={{ width: '300px' }}
            dataSource={dataSource.map(this.renderOption)}
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder='请输入'
            optionLabelProp='text'
        >
            <Input suffix={<Icon type='search' />} />
          </AutoComplete>
        )
    }
}
