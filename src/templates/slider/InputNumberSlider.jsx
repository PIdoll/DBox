import React from 'react';
import Slider from 'components/slider';
import InputNumber from 'components/input-number';
import {Col, Row} from 'components/grid';

export default class BasicSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1
    }
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle(value) {
    this.setState({inputValue: value})
  }
  render() {
    const {inputValue} = this.state;
    return (
      <Row >
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChangeHandle}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4} offset={1}>
          <InputNumber
            min={1}
            max={20}
            value={inputValue}
            onChange={this.onChangeHandle}
          />
        </Col>
      </Row>
    )
  }
}
