import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style'

function Content(props) {
	  const { children, className } = props;
	  const classes = classNames({
		'idoll-layout-content': 'idoll-layout-content',
	  }, className)
  	return <div className={classes}>{children}</div>;
}

Content.propTypes = {
	children: PropTypes.node
};

export default Content;
