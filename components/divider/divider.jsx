import React from 'react';
import classNames from 'classnames';

export default (props) => {
  const { prefixCls = 'idoll', type = 'horizontal', orientation = '', className, children, dashed, ...restProps } = props;
  const orientationPrefix = (orientation.length > 0) ? '-' + orientation : orientation;
  const classString = classNames(
    className, `${prefixCls}-divider`, `${prefixCls}-divider-${type}`, {
      [`${prefixCls}-divider-with-text${orientationPrefix}`]: children,
      [`${prefixCls}-divider-dashed`]: !!dashed,
    }
  );
  return (
    <div className={classString} {...restProps}>
      { children && <span className={`${prefixCls}-divider-inner-text`}>{children}</span> }
    </div>
  )
}
