import React from 'react';
import {Radio} from 'components';
const RadioGroup = Radio.RadioGroup;
export default class GroupRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    }
    this.onChange = this.onChange.bind(this)
  };
	onChange (e) {
		this.setState({
			value: e.target.value
		})
	}
  render() {
  return (
    <div>
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
    </div>
  )
}
}
