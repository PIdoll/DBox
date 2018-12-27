import React from 'react';

import './style'

export default props => {
	let { type, className = '', ...other } = props;
	className += ` idoll-icon idoll-icon-${type}`;
	return <i className={className.trim()} {...other} />;
};
