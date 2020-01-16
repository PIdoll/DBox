import React from 'react'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'

export default class DropdownNormal extends React.Component {
  static defaultProps = {
    prefixCls: 'idoll-dropdown-normal'
  };
  state = {
    visible: false
  };
  onChange = (flag) => {
    this.setState({
      visible: flag
    });
  };
  onClickChange = (e) => {
    this.setState({
      visible: e.item.props.isSelected
    });
  }
  render() {
    const {
      children, prefixCls, disabled, className, overlay, trigger, align, ...restProps
    } = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled,
      [className]: !!className
    })
    return (
      <Dropdown onOverlayClick={this.onClickChange} {...restProps} className={cls} align={align} overlay={overlay} trigger={trigger} onVisibleChange={this.onChange} >
        <a href='javascript:;'>
          {children}{<Icon type='down' />}
        </a>
      </Dropdown>
    )
  }
}
