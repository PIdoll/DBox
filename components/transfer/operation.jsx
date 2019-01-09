import React from 'react';
import Button from '../button';

export default class Operation extends React.Component {
  render() {
    const {
      disabled,
      moveToLeft,
      moveToRight,
      leftArrowText = '',
      rightArrowText = '',
      leftActive,
      rightActive,
      className,
      style,
    } = this.props;
    return (
      <div className={className} style={style}>
        <div className={(disabled || !rightActive) ? 'disabled-icon' : ''}>
          <Button
            shape='circle'
            type='primary'
            disabled={disabled || !rightActive}
            onClick={moveToRight}
            icon={!rightArrowText ? 'right' : rightArrowText}>
            {rightArrowText}
          </Button>
        </div>
        <div className={(disabled || !leftActive) ? 'disabled-icon' : ''}>
          <Button
            shape='circle'
            type='primary'
            disabled={disabled || !leftActive}
            onClick={moveToLeft}
            icon={!leftArrowText ? 'left' : leftArrowText}>
            {leftArrowText}
          </Button>
        </div>
      </div>
    )
  }
}
