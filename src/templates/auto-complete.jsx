import React from 'react';
import AutoComplete from 'components/auto-complete/index';
import Input from 'components/input/index';
import Icon from 'components/icon/index';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

export default class Complete extends React.Component {
  state = {
    result: [],
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option style={{ width: 240 }} key={email}>{email}</Option>;
    });
    const dataSource = ['Listen', 'Time'];
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
        <h1 className='h1'>自定义选项</h1>
        <AutoComplete
          style={{ width: 200 }}
          onSearch={this.handleSearch}
          placeholder='input here'
        >
          {children}
        </AutoComplete>
        <h1 className='h1'>不区分大小写</h1>
        <AutoComplete
          style={{ width: 200 }}
          dataSource={dataSource}
          placeholder='try to type `t`'
          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />
        <h1 className='h1'>查询模式</h1>
        <AutoComplete
          style={{ width: '300px' }}
          dataSource={options}
          placeholder='input here'
          optionLabelProp='value'
        >
          <Input suffix={<Icon type='search' />} />
        </AutoComplete>
      </div>
    );
  }
}
