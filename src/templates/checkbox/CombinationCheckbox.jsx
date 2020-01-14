import React from 'react';
import {Checkbox} from 'components';
const optionsWithDisabled = [
  { label: '苹果', value: '苹果' },
  { label: '桔子', value: '桔子', disabled: false },
  { label: '梨', value: '梨' }
];
const options = [
  { label: '苹果', value: '苹果' },
  { label: '桔子', value: '桔子' },
  { label: '梨', value: '梨' }
];
const optionss = [
  { label: '香蕉', value: '香蕉' },
  { label: '橙子', value: '橙子' },
  { label: '芒果', value: '芒果' },
];

const ooptionss = [
  { label: '香蕉', value: '香蕉' },
  { label: '橙子', value: '橙子' },
  { label: '芒果', value: '芒果', readOnly: true },
];
const plainOptions = ['苹果', '桔子', '梨'];
const CheckboxGroup = Checkbox.CheckboxGroup;

export default class CombinationCheckbox extends React.Component {
  render() {
    return (
      <div>
        <CheckboxGroup options={ooptionss} defaultValue={['芒果']} />
        <br />
        <CheckboxGroup options={optionss} readOnly defaultValue={['橙子']} />
        <br />
        <CheckboxGroup options={plainOptions} defaultValue={['苹果']} />
        <br />
        <CheckboxGroup options={options} defaultValue={['梨']} />
        <br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['梨']} />
      </div>
    )
  }
}
