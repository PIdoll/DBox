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
  static defaultProps = {
    placement: 'bottomRight',
    type: 'normal',
    prefixCls: 'idoll-dropdown-button'
  };
  render() {
    const {
      type, disabled, children,
      prefixCls, className, overlay, trigger, align,
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
        <Dropdown {...dropdownProps} onVisibleChange={this.onChange}>
          <Button type={type} disabled={disabled}>
            {children}{this.state.visible === true ? <Icon type='caret-up' /> : <Icon type='caret-down' />}
          </Button>
        </Dropdown>
      </ButtonGroup>
    );
  }
}
