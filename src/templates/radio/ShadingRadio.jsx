import React from 'react';
import {Radio} from 'components';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;

export default class ShadingRadio extends React.Component {
  render () {
    return (
      <div>
        <RadioGroup disabled defaultValue='b' buttonStyle='solid'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <RadioGroup size='large' defaultValue='c' buttonStyle='solid'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <RadioGroup size='small' defaultValue='d' buttonStyle='solid'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton disabled value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
      </div>
    )
  }
}
