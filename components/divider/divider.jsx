import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style/index';

const Divider = (props) => {
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
Divider.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  dashed: PropTypes.bool,
  style: PropTypes.object
}
export default Divider;
