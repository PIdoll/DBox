import React from 'react'
import Checkbox from 'components/checkbox'
const CheckboxGroup = Checkbox.CheckboxGroup;

const plainOptions = ['苹果', '梨', '桔子'];
const options = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子' },
];
const optionsWithDisabled = [
  { label: '苹果', value: '苹果' },
  { label: '梨', value: '梨' },
  { label: '桔子', value: '桔子', disabled: false },
];
const defaultCheckedList = ['苹果', '桔子'];

export default class CheckboxView extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false
    }
  }
  onChangeBasic = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length
    })
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    })
  }
  onChangeGroup = (checkedValues) => {
    console.log('checked =', checkedValues);
  }
  render() {
    return (
      <div id='main-container'>
        <h1 className='h1'>通用多选框</h1>
        <Checkbox onChange={this.onChangeBasic}>
          多选框
        </Checkbox>
        <h1 className='h1'>多选框全选</h1>
        <div>
          <Checkbox indeterminate={this.state.indeterminate} checked={this.state.checkAll} onChange={this.onCheckAllChange}>
            选择所有选项
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
        <h1 className='h1'>多选框组</h1>
        <CheckboxGroup options={plainOptions} defaultValue={['苹果']} onChange={this.onChangeGroup} />
        <br />
        <CheckboxGroup options={options} defaultValue={['梨']} onChange={this.onChangeGroup} />
        <br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['梨']} onChange={this.onChangeGroup} />
        <h1 className='h1'>多选框不可用</h1>
        <Checkbox defaultChecked={false} disabled >不可操作</Checkbox>
        <Checkbox defaultChecked disabled >不允许操作</Checkbox>
      </div>
    )
  }
}
