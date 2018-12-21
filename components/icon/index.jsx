import React from 'react';

import './style'

/**
 * @visibleName Icon 图标
 */
export default props => {
	let { type, className = '', ...other } = props;
	className += ` idoll-icon idoll-icon-${type}`;
	return <i className={className.trim()} {...other} />;
};
