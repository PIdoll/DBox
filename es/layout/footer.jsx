import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style'

function Footer(props) {
    const { children, className } = props;
    const classes = classNames({
      'idoll-layout-footer': 'idoll-layout-footer',
    }, className)
  return <div {...props} className={classes}>{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

