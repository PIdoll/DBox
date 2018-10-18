import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'object.omit'

import './style'

class Sider extends Component {
  constructor(props) {
    super(props)
    let collapsed
    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = false;
    }
    this.state = {
      collapsed
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('collapsed' in nextProps) {
      this.setState({
        collapsed: nextProps.collapsed,
      });
    }
  }

  render() {
    const { span, children, collapsed, onCollapse } = this.props

    let currentSpan
    if (typeof span === 'number') {
      currentSpan = span
    } else if (typeof span === 'object') {
      currentSpan = collapsed ? span.fold : span.unfold
    }

    if (onCollapse) {
      onCollapse(collapsed)
    }

    const classes = classNames({
      'idoll-layout-sider': 'doll-layout-sider',
      [`idoll-layout-sider-${currentSpan}`]: currentSpan
    })

    const otherProps = omit(this.props, [
      'span',
      'collapsed',
      'onCollapse'
    ]);

    return (
      <div {...otherProps} className={classes}>
        {children}
      </div>
    )
  }
}

Sider.propTypes = {
  span: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  collapsed: PropTypes.bool,
  children: PropTypes.node,
  onCollapse: PropTypes.func,
}

export default Sider
