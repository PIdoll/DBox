import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import './style'

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

function Col(props) {
  const { span, order, offset, push, pull, className, children, ...others } = props;
  let sizeClassObj = {};
  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    let sizeProps = {};
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
    } else if (typeof props[size] === 'object') {
      sizeProps = props[size] || {};
    }
    delete others[size];
    sizeClassObj = {
      [`idoll-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`idoll-col-${size}-order-${sizeProps.order}`]: sizeProps.order,
      [`idoll-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
      [`idoll-col-${size}-push-${sizeProps.push}`]: sizeProps.push,
      [`idoll-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
      ...sizeClassObj
    }
  });

  const classes = classNames({
    [`idoll-col-${span}`]: !!span,
    [`idoll-col-order-${order}`]: order,
    [`idoll-col-offset-${offset}`]: offset,
    [`idoll-col-push-${push}`]: push,
    [`idoll-col-pull-${pull}`]: pull,
    [className]: !!className,
    ...sizeClassObj
  });

  return <div {...others} className={classes}>{children}</div>;
}

Col.propTypes = {
  span: stringOrNumber,
  order: stringOrNumber,
  offset: stringOrNumber,
  push: stringOrNumber,
  pull: stringOrNumber,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber
};

export default Col;
