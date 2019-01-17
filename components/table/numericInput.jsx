import React from 'react';
import {Tooltip, Input} from 'components';

export default class NumericInput extends React.Component {
  constructor(props) {
  super(props);
  this.onChange = this.onChange.bind(this)
  this.onBlur = this.onBlur.bind(this)
  }
  onChange (e) {
    const { value } = e.target;
      this.props.onChange(value);
  }
  onBlur () {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }


  render() {
    const { value } = this.props;
    return (
      <Tooltip
        trigger='click'
        title={value}
        placement='topLeft'
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder='请输入'
        />
      </Tooltip>
    );
  }
}
