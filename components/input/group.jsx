import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Group(props) {
  const className = classNames({
    'idoll-input-group': true,
    'idoll-input-group-lg': props.size === 'large',
    'idoll-input-group-sm': props.size === 'small',
    [props.className]: !!props.className
  });

  return (
    <span className={className} style={props.style}>
      {props.children}
    </span>
  );
}

Group.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  className: PropTypes.string
};
