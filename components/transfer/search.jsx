import React from 'react';
import Icon from '../icon';
import Input from '../input';

export default class Search extends React.Component {
  static defaultProps = {
    placeholder: '',
  };

  handleChange = (e) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  handleClear = (e) => {
    e.preventDefault();
    const { handleClear } = this.props;
    if (handleClear) {
      handleClear(e);
    }
  }

  render() {
    const { placeholder, value, prefixCls } = this.props;
    const icon = (value && value.length > 0) ? (
      <a href='#' className={`${prefixCls}-action`} onClick={this.handleClear}>
        <Icon type='close-circle' />
      </a>
    ) : (
      <span className={`${prefixCls}-action`}><Icon type='search' /></span>
    );
    return (
      <div>
        <Input
          placeholder={placeholder}
          className={prefixCls}
          value={value}
          ref='input'
          onChange={this.handleChange} />
        {icon}
      </div>
    )
  }
}
