import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Group(props) {
  const { prefixCls = 'idoll-input-group', className = '' } = props;
  const cls = classNames(prefixCls, {
    [`${prefixCls}-lg`]: props.size === 'large',
    [`${prefixCls}-sm`]: props.size === 'small',
    [`${prefixCls}-compact`]: props.compact,
  }, className);

  return (
    <span className={cls} style={props.style}>
      {props.children}
    </span>
  );
}

Group.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  className: PropTypes.string
};
