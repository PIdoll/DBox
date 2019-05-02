import React from 'react';
import {Radio} from 'components';
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;

export default class ButtonRadio extends React.Component {
  render () {
    return (
      <div>
        <RadioGroup defaultValue='a'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <br />
        <RadioGroup defaultValue='a'>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton disabled value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
        <br />
        <br />
        <RadioGroup defaultValue='c' disabled>
          <RadioButton value='a'>杭州</RadioButton>
          <RadioButton value='b'>上海</RadioButton>
          <RadioButton value='c'>北京</RadioButton>
          <RadioButton value='d'>成都</RadioButton>
        </RadioGroup>
      </div>
    )
  }
}
