import React from 'react'
import Button from '../button'
import Icon from '../icon'
import Dropdown from './dropdown'
import classNames from 'classnames'
const ButtonGroup = Button.Group;

export default class DropdownButton extends React.Component {
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
  static defaultProps = {
    placement: 'bottomLeft',
    prefixCls: 'idoll-dropdown-button'
  };
  render() {
    const {
      type, disabled, children,
      prefixCls, className, overlay, trigger, size, align,
      visible, placement, getPopupContainer,
      ...restProps
    } = this.props;
    const dropdownProps = {
      align,
      overlay,
      trigger: disabled ? [] : trigger,
      placement,
      getPopupContainer,
    };
    if ('visible' in this.props) {
      dropdownProps.visible = visible;
    }
    return (
      <ButtonGroup
        {...restProps}
        className={classNames(prefixCls, className)}
      >
        <Dropdown onOverlayClick={this.onClickChange} {...dropdownProps} onVisibleChange={this.onChange}>
          <Button type={type} size={size} disabled={disabled}>
            {children}{<Icon type='down' />}
          </Button>
        </Dropdown>
      </ButtonGroup>
    );
  }
}

