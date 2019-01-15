import React from 'react';
import {InputNumber} from 'components';
import NumericInput from './numericInput'
import Select from 'components/select';
import Form from 'components/form';
const {Option} = Select;
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

export {EditableFormRow};
export default class EditableCell extends React.Component {
  getInput () {
    if (this.props.inputtype === 'number') {
      return <InputNumber style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'city') {
      return <Select showSearch style={{ width: 70 }} placeholder='请选择' >
        <Option value='北京'>北京</Option>
        <Option value='上海'>上海</Option>
        <Option value='广州'>广州</Option>
        <Option value='沈阳'>沈阳</Option>
        <Option value='郑州'>郑州</Option>
        <Option value='合肥'>合肥</Option>
        <Option value='南京'>南京</Option>
        <Option value='深圳'>深圳</Option>
      </Select>;
    }
    if (this.props.inputtype === 'address') {
      return <NumericInput value={this.props.value} onChange={this.onChangeValue} style={{ width: 200 }} />;
    }
    if (this.props.inputtype === 'name') {
      return <NumericInput value={this.props.value} onChange={this.onChangeValue} style={{ width: 70 }} />;
    }
    if (this.props.inputtype === 'Tel') {
      return <NumericInput value={this.props.value} onChange={this.onChangeValue} style={{ width: 130 }} />;
    }
    return <NumericInput value={this.props.value} onChange={this.onChangeValue} />;
  };

  render() {
    const {
      editing,
      dataindex,
      title,
      // inputtype,
      record,
      // index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataindex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataindex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}
