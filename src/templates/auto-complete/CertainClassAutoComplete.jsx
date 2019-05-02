import React from 'react';
import { AutoComplete, Input, Icon } from 'components';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
export default class CertainClassAutoComplete extends React.Component {
    constructor() {
        super();
        this.renderTitle = this.renderTitle.bind(this);
    }

    onSelect(value) {
        console.log('onSelect', value);
    }

    renderTitle(title) {
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
    render() {
        const dataSource = [{
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
        const options = dataSource.map(group => (
          <OptGroup
            key={group.title}
            label={this.renderTitle(group.title)}
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
          <AutoComplete
            style={{ width: '300px' }}
            dataSource={options}
            placeholder='请输入'
            onSelect={this.onSelect}
            optionLabelProp='value'
            allowClear
            >
            <Input suffix={<Icon type='search' />} />
          </AutoComplete>
        )
    }
}
