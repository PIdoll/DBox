import React, { Component, Children, cloneElement } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import './style'

class Row extends Component {
  static defulatProps = {
    gutter: 0
  };

  static propTypes = {
    type: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.number,
    style: PropTypes.object
  };

  render() {
    const { className, gutter, style, children, type, justify, align, ...others } = this.props;
    const classes = classNames({
      'idoll-row': !type,
      [`idoll-row-${type}`]: type,
      [`idoll-row-${type}-${justify}`]: justify,
      [`idoll-row-${type}-${align}`]: align,
      [className]: !!className
    });

    const rowStyle = gutter > 0 ? {
      marginLeft: gutter / -2,
      marginRight: gutter / -2,
      ...style
    } : style;

    const cols = Children.map(children, col => {
      if (!col) {
        return null;
      }
      if (col.props) {
        return cloneElement(col, {
          style: gutter > 0 ? {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
            ...col.props.style
          } : col.props.style
        });
      }
      return col;
    });
    return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
  }
}

export default Row;
