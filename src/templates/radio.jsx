import React from 'react';

import Radio from 'components/radio';
import Button from 'components/button';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;

export default class RadioView extends React.Component {
  state = {
    disabled: true,
    value: '1'
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
        <p>基本样式展现</p>
        <Radio>世界很大1</Radio>
        <Radio checked>世界很大2</Radio>
        <Radio defaultChecked>世界很大3</Radio>
        <h1 className='h1'>禁用单选框</h1>
        <p>通过defaultChecked设置为false或者disabled禁用</p>
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
        <h1 className='h1'>互斥单选框</h1>
        <p>通过defaultChecked设置为false或者disabled禁用，只能有一个选中</p>
        <RadioGroup onChange={this.onChange} defaultValue={this.state.value}>
          <Radio value='1'>A</Radio>
          <Radio value='2'>B</Radio>
          <Radio value='3'>C</Radio>
          <Radio value='4'>D</Radio>
        </RadioGroup>
        <h1 className='h1'>垂直组合单选框</h1>
        <p>用RadioGroup组合通过direction='vertical'来设置垂直</p>
        <RadioGroup direction='vertical' onChange={this.onChange} defaultValue='3'>
          <Radio value='1'>A</Radio>
          <Radio value='2'>B</Radio>
          <Radio value='3'>C</Radio>
          <Radio value='4'>D</Radio>
        </RadioGroup>
        <h1 className='h1'>分组单选框</h1>
        <p>用RadioGroup组合通过设置defaultValue和value相同的值达到选中目的</p>
        <RadioGroup onChange={this.onChange} defaultValue='6'>
          <Radio value='5'>A</Radio>
          <Radio value='6'>B</Radio>
          <Radio value='7'>C</Radio>
          <Radio value='8'>D</Radio>
        </RadioGroup>
        <br />
        <RadioGroup onChange={this.onChange} defaultValue='11'>
          <Radio value='10'>A</Radio>
          <Radio value='9'>B</Radio>
          <Radio value='11'>C</Radio>
          <Radio value='12'>D</Radio>
        </RadioGroup>
        <h1 className='h1'>name单选框</h1>
        <p>用RadioGroup组合通过设置name=任意name值达到拥有相同类名为name值的同一类单选</p>
        <RadioGroup onChange={this.onChange} name='radioGroup' defaultValue='5'>
          <Radio value='5'>A</Radio>
          <Radio value='6'>B</Radio>
          <Radio value='7'>C</Radio>
          <Radio value='8'>D</Radio>
        </RadioGroup>
        <h1 className='h1'>按钮样式</h1>
        <p>用RadioGroup组合通过设置引入RadioButton而非Radio而达到按钮样式单选目的</p>
        <RadioGroup defaultValue='a'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <RadioGroup defaultValue='a' style={{ marginTop: 20, marginBottom: 20 }}>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton disabled value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <RadioGroup defaultValue='a' disabled>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <h1 className='h1'>大小按钮</h1>
        <p>通过设置size的值达到不同按钮单选大小的目的</p>
        <RadioGroup defaultValue='a' size='large'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <RadioGroup defaultValue='a' style={{ marginTop: 20, marginBottom: 20 }}>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <RadioGroup defaultValue='a' size='small'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <h1 className='h1'>按钮底纹</h1>
        <p>通过设置buttonStyle='solid'来达到按钮底纹样式，不传默认无底纹</p>
        <RadioGroup defaultValue='a' buttonStyle='solid'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton disabled value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
      </div>
    )
  }
}
