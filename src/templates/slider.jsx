
import React from 'react';
import Slider from '../../components/slider';
import Switch from '../../components/switch';
import InputNumber from '../../components/input-number';
import {Col, Row} from '../../components/grid'

export default class SliderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      inputValue: 1,
    }
  }
  handleDisabledChange = (disabled) => {
    this.setState({disabled});
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    })
  }
  render() {
    const {disabled, inputValue} = this.state;
    return (
      <div id='main-container' style={{width: '800px', marginTop: '80px'}}>
        <h1>基本用法</h1>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range disabled={disabled} defaultValue={[10, 30]} />
        Disabled: <Switch size='small' checked={this.state.disabled} onClick={this.handleDisabledChange} />
        <br />
        <br />
        <br />
        <br />
        <h1>带输入框的滑块</h1>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={20}
              onChange={this.onChange}
              value={typeof inputValue === 'number' ? inputValue : 0}
            />
          </Col>
          <Col span={4} >
            <InputNumber
              min={1}
              max={20}
              value={inputValue}
              onChange={this.onChange}
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <h1>自定义提示</h1>
        <Slider tipFormatter={(value) => `${value}%`} defaultValue={10} />
        <Slider tipFormatter={null} defaultValue={20} />
      </div>
    )
  }
}
