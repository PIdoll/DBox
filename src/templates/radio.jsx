import React from 'react';

import Radio from 'components/radio';
import Button from 'components/button';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;

export default class RadioView extends React.Component {
  state = {
    disabled: true,
    value: 1
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  }
  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用单选框</h1>
        <Radio autoFocus>世界很大1</Radio>
        <Radio checked>世界很大2</Radio>
        <Radio defaultChecked>世界很大3</Radio>
        <Radio value={1}>世界很大4</Radio>
        <h1 className='h1'>禁用单选框</h1>
        <div>
          <Radio defaultChecked={false} disabled >不能操作</Radio>
          <br />
          <Radio disabled={this.state.disabled}>不允许操作</Radio>
          <div style={{ marginTop: 20 }}>
            <Button type='primary' onClick={this.toggleDisabled}>
              控制能否操作
            </Button>
          </div>
        </div>
        <h1 className='h1'>分组单选框</h1>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
        <h1 className='h1'>按钮单选框</h1>
        <RadioGroup defaultValue='a'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
      </div>
    )
  }
}

