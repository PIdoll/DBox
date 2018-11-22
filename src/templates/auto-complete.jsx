import React from 'react';
import AutoComplete from 'components/auto-complete/index';
import Input from 'components/input/index';
import Icon from 'components/icon/index';


const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

export default class Complete extends React.Component {
  state = {
    dataSource: [],
    dataSource3: ['shanghai', 'BeiJing', 'Shen zhen'],
    dataSource4: [],
  }

  handleSearch = (value) => {
    let {dataSource} = this.state;
    if (!value || value.indexOf('@') >= 0) {
      dataSource = [];
    } else {
      dataSource = ['126.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ dataSource });
  }

  onSelect = (value) => {
    console.log('onSelect', value);
  }

  getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

   searchResult = (query) => {
    return (new Array(this.getRandomInt(5))).join('.').split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: this.getRandomInt(200, 100),
      }));
  }

  renderOption = (item) => {
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

  handleSearch2 = (value) => {
    this.setState({
      dataSource4: value ? this.searchResult(value) : [],
    });
  }




  render() {
    const { dataSource, dataSource3, dataSource4 } = this.state;
    const children = dataSource.map((email) => {
      return <Option key={email}>{email}</Option>;
    });
    // const dataSource = ['Listen', 'Time'];
    const dataSource2 = [{
      title: '语言',
      children: [{
        title: 'react ',
        count: 10000,
      }, {
        title: 'vue ',
        count: 10600,
      }, {
        title: 'angular ',
        count: 1222,
      }],
    }, {
      title: '问题',
      children: [{
        title: 'react, vue, angular哪个好',
        count: 60100,
      }, {
        title: '性能问题',
        count: 30010,
      }],
    }];

    function renderTitle(title) {
      return (
        <span>
          {title}
          <a
            style={{ float: 'right' }}
            href='https://www.google.com/search?q=react'
            target='_blank'
            rel='noopener noreferrer'
          >更多
          </a>
        </span>
      );
    }

    const options = dataSource2.map(group => (
      <OptGroup
        key={group.title}
        label={renderTitle(group.title)}
      >
        {group.children.map(opt => (
          <Option key={opt.title} value={opt.title}>
            {opt.title}
            <span className='certain-search-item-count'>{opt.count} 人 关注</span>
          </Option>
        ))}
      </OptGroup>
    )).concat([
      <Option disabled key='all' className='show-all'>
        <a
          href='https://www.google.com/search?q=react'
          target='_blank'
          rel='noopener noreferrer'
        >
          查看所有结果
        </a>
      </Option>,
    ]);


    return (
      <div id='main-container'>

        <h1 className='h1'>基本使用</h1>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
          placeholder='请输入'
            />

        <h1 className='h1'>自定义选项</h1>
        <AutoComplete
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder='请输入'
        >
          {children}
        </AutoComplete>
        <h1 className='h1'>不区分大小写</h1>
        <AutoComplete
          style={{ width: 200 }}
          dataSource={dataSource3}
          placeholder='输入小写 `b`'
          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />
        <h1 className='h1'>查询模式-确定类目</h1>
        <AutoComplete
          style={{ width: '300px' }}
          dataSource={options}
          placeholder='请输入'
          optionLabelProp='value'
        >
          <Input suffix={<Icon type='search' />} />
        </AutoComplete>

        <h1 className='h1'>查询模式-不确定类目</h1>
        <div className='global-search-wrapper' style={{ width: 300 }}>
          <AutoComplete
            className='global-search'
            style={{ width: '100%' }}
            dataSource={dataSource4.map(this.renderOption)}
            onSelect={this.onSelect}
            onSearch={this.handleSearch2}
            placeholder='请输入'
            optionLabelProp='text'
        >
            <Input suffix={<Icon type='search' />} />
          </AutoComplete>
        </div>
      </div>
    );
  }
}
