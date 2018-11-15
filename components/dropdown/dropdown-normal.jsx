import React from 'react'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'

export default class DropdownNormal extends React.Component {
  state = {
    visible: false
  };
  onVisibleChange = (flag) => {
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
      children, className, overlay, trigger, align, ...restProps
    } = this.props;
    const cls = classNames({
      'idoll-dropdown-normal': true,
      [className]: !!className
    })
    return (
      <Dropdown onOverlayClick={this.onClickChange} {...restProps} className={cls} align={align} overlay={overlay} trigger={trigger} onVisibleChange={this.onVisibleChange} >
        <a href='#' className={`idoll-icon-${this.state.visible}`}>
          {children}{this.state.visible === true ? <Icon type='up' /> : <Icon type='down' />}
        </a>
      </Dropdown>
    )
  }
}
