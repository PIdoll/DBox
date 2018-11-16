import React from 'react'

import Select from 'components/select'
import Spin from 'components/spin'

const {Option, OptGroup} = Select;

class select extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
  }

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
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }

  handleChange2 = (value) => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  }

  render() {
    const { fetching, data, value } = this.state;
    return (
      <div id='main-container'>
        <h1 className='h1'>基本使用</h1>
        <Select size='small' placeholder='请选择' style={{ width: 200 }}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
        <br /><br />

        <Select placeholder='请选择' style={{ width: 200 }}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
        <br /><br />

        <Select size='large' placeholder='请选择' style={{ width: 200 }}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
        <br /><br />

        <Select defaultValue='select' style={{ width: 200 }} disabled>
          <Option value='select'>请选择</Option>
        </Select>
        <br /><br />

        <h1 className='h1'>搜索下拉框</h1>
        <Select showSearch style={{ width: 200 }} placeholder='请选择' >
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>
        <br /><br />

        <h1 className='h1'>多选下拉框</h1>
        <Select mode='multiple' style={{ width: 200 }} placeholder='多选' >
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br /><br />
        <Select mode='tags' style={{ width: 200 }} placeholder='可随意输入内容' >
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br /><br />
        <h1 className='h1'>获得选项文本</h1>
        <Select labelInValue defaultValue={{ key: 'beijing' }} style={{ width: 200 }} onChange={this.handleChange}>
          <Option value='beijing'>北京</Option>
          <Option value='shanghai'>上海</Option>
          <Option value='guangzhou'>广州</Option>
          <Option value='shenzhen'>深圳</Option>
        </Select>

        <br /><br />
        <h1 className='h1'>搜索用户</h1>
        <Select
          mode='multiple'
          labelInValue
          value={value}
          placeholder='Select users'
          notFoundContent={fetching ? <Spin size='small' /> : null}
          filterOption={false}
          onSearch={this.getUserInfo}
          onChange={this.handleChange2}
          style={{ width: '20%' }}
        >
          {data.map(d => <Option key={d.value}>{d.text}</Option>)}
        </Select>

        <br /><br />
        <h1 className='h1'>分组</h1>
        <Select
          defaultValue='hefei'
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          <OptGroup label='安徽'>
            <Option value='xuancheng'>宣城</Option>
            <Option value='hefei'>合肥</Option>
          </OptGroup>
          <OptGroup label='江苏'>
            <Option value='nanjing'>南京</Option>
            <Option value='suzhou'>苏州</Option>
          </OptGroup>
        </Select>
      </div>
    )
  }
}

export default select;
