import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';
import Data from '../data/componentsName.jsx';

const styles = ({ color }) => ({
	link: {
		display: 'block',
		color: '#333',
		lineHeight: '40px',
		overflow: 'hidden',
		fontWeight: '400',
		fontSize: '14px',
    cursor: 'pointer',
    paddingLeft: '8px',
  },
	h3: {
		fontSize: '12px',
    color: '#aaa',
    padding: '5px 8px',
  },
  chinese: {
		fontSize: '12px',
    marginLeft: '8px',
    display: 'inline-block',
    cursor: 'pointer',
  }
});

const handleActiveLink = (linkItem) => {
	let ActiveLink = window.location.hash.split('/')[window.location.hash.split('/').length - 1];
	if (linkItem === ActiveLink) {
		return {
			background: 'rgba(19,184,134,0.1)',
			borderRight: '3px solid #13B886',
			color: '#13B886',
		}
	}
	return {}
}

export function LinkRenderer({ classes, children, ...props }) {
	console.log('props', children);
	const headline = ['Components', 'General', 'Navigation', 'DataEntry', 'DataDisplay', 'Feedback', 'Others'];
	for (const item of headline.values()) {
		if (children === item) {
			return (
  <h3 className={cx(classes.h3, props.className)} >
    {Data[children]}
  </h3>
			);
		}
  }
  const chineseName = ['GetStarted', 'Version', 'Color', 'Typography'];
  for (const item of chineseName.values()) {
		if (children === item) {
			return (
  <a {...props} style={handleActiveLink(children)} className={cx(classes.link, props.className)} >
    {Data[children]}
  </a>
			);
		}
  }
	return (
  <a {...props} style={handleActiveLink(children)} className={cx(classes.link, props.className)} >
    {children}<span className={classes.chinese}>{Data[children]}</span>
  </a>
	);
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
