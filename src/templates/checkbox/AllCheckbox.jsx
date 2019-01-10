import React from 'react';
import {Checkbox} from 'components';
const CheckboxGroup = Checkbox.CheckboxGroup;
const plainOptions = ['苹果', '梨', '桔子'];
const defaultCheckedList = ['苹果', '桔子'];
export default class AllCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    }
    this.onChange = this.onChange.bind(this)
    this.onCheckAllChange = this.onCheckAllChange.bind(this)
  };
  onChange (checkedList) {
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
        checkAll: checkedList.length === plainOptions.length
      })
    }
  onCheckAllChange (e) {
      this.setState({
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  render() {
    return (
      <div>
        <Checkbox indeterminate={this.state.indeterminate} checked={this.state.checkAll} onChange={this.onCheckAllChange}>
          选择所有选项
        </Checkbox>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    )
  }
}
