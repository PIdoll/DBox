import React from 'react';
import {Checkbox} from 'components';
const optionsWithDisabled = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子', disabled: false },
];
const options = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子' },
];
const plainOptions = ['苹果', '梨', '桔子'];
const CheckboxGroup = Checkbox.CheckboxGroup;

export default class CombinationCheckbox extends React.Component {
  render() {
    return (
      <div>
        <CheckboxGroup options={plainOptions} defaultValue={['苹果']} />
        <br />
        <CheckboxGroup options={options} defaultValue={['梨']} />
        <br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['梨']} />
      </div>
    )
  }
}
