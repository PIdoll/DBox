import React from 'react';
import AutoComplete from 'components/auto-complete';
export default class FilterAutoComplete extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: ['shanghai', 'BeiJing', 'Shen zhen'],
        }
        this.filterOptionChange = this.filterOptionChange.bind(this);
    }

    filterOptionChange(inputValue, option) {
        return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    }


    render() {
        const { dataSource } = this.state;
        return (
          <div>
            <AutoComplete
              style={{ width: '200px' }}
              dataSource={dataSource}
              placeholder='输入小写 `b`'
              filterOption={this.filterOptionChange}
            />
            <br /><br />
            <AutoComplete
              style={{ width: '200px' }}
              dataSource={dataSource}
              placeholder='输入小写 `b`'
              filterOption={this.filterOptionChange}
              defaultActiveFirstOption={false}
            />
          </div>
        )
    }
}
