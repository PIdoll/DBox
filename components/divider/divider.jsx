import React from 'react';
import classNames from 'classnames';


export default (props) => {
  const { prefixCls = 'idoll', type = 'horizontal', className, children, dashed, ...restProps } = props;
  const classString = classNames(
    className,
    `${prefixCls}-divider`,
    `${prefixCls}-divider-${type}`,
    {
      [`${prefixCls}-divider-with-text`]: children,
      [`${prefixCls}-divider-dashed`]: !!dashed,
    }
  );
  return (
    <div className={classString} {...restProps}>
      {children && <span className={`${prefixCls}-divider-inner-text`}>{children}</span>}
    </div>
  )
}

