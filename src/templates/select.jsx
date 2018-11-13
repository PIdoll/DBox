import React from 'react'

import Select from 'components/select'

const Option = Select.Option;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

// function fetchUser = (value) => {
//   console.log('fetching user', value);
//   this.lastFetchId += 1;
//   const fetchId = this.lastFetchId;
//   this.setState({ data: [], fetching: true });
//   fetch('https://randomuser.me/api/?results=5')
//     .then(response => response.json())
//     .then((body) => {
//       if (fetchId !== this.lastFetchId) { // for fetch callback order
//         return;
//       }
//       const data = body.results.map(user => ({
//         text: `${user.name.first} ${user.name.last}`,
//         value: user.login.username,
//       }));
//       this.setState({ data, fetching: false });
//     });
// }

const select = () => (
  <div id='main-container'>
    <h1 className='h1'>基本使用</h1>
    <Select size='small' defaultValue='select1' style={{ width: 160 }}>
      <Option value='select1'>请选则1</Option>
      <Option value='select2'>请选则2</Option>
    </Select>
    <br /><br />

    <Select defaultValue='select1' style={{ width: 160 }}>
      <Option value='select1'>请选则1</Option>
      <Option value='select2'>请选则2</Option>
    </Select>
    <br /><br />

    <Select size='large' defaultValue='select1' style={{ width: 160 }}>
      <Option value='select1'>请选则1</Option>
      <Option value='select2'>请选则2</Option>
    </Select>
    <br /><br />

    <Select defaultValue='select' style={{ width: 160 }} disabled>
      <Option value='select'>请选则</Option>
    </Select>
    <br /><br />

    <h1 className='h1'>搜索下拉框</h1>
    <Select showSearch style={{ width: 160 }} placeholder='请选择' >
      <Option value='select1'>请选则1</Option>
      <Option value='select2' >请选则2</Option>
    </Select>
    <br /><br />

    <h1 className='h1'>多选下拉框</h1>
    <Select mode='multiple' style={{ width: 160 }} placeholder='多选' >
      <Option value='select1'>请选则1</Option>
      <Option value='select2'>请选则2</Option>
      <Option value='select3' >请选则3</Option>
    </Select>

    <br /><br />
    <Select mode='tags' style={{ width: 160 }} placeholder='可随意输入内容' >
      <Option value='select1'>请选则1</Option>
      <Option value='select2'>请选则2</Option>
      <Option value='select3' >请选则3</Option>
    </Select>

    <br /><br />
    <h1 className='h1'>获得选项文本</h1>
    <Select labelInValue defaultValue={{ key: 'select2' }} style={{ width: 160 }} onChange={handleChange}>
      <Option value='select1'>请选则1</Option>
      <Option value='select2'>请选则2</Option>
    </Select>

    <br /><br />
    <h1 className='h1'>搜索用户</h1>
    {/* <Select
      mode='multiple'
      labelInValue
      value={value}
      placeholder='Select users'
      notFoundContent={fetching ? <Spin size='small' /> : null}
      filterOption={false}
      onSearch={this.fetchUser}
      onChange={this.handleChange}
      style={{ width: '100%' }}
      >
      {data.map(d => <Option key={d.value}>{d.text}</Option>)}
    </Select> */}
  </div>
)

export default select;
