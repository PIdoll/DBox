import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';
import Data from '../data/componentsName.json';

const styles = ({ color }) => ({
	link: {
		display: 'block',
		height: '30px',
		color: '#444',
		lineHeight: '30px',
		overflow: 'hidden',
		fontWeight: '400',
		fontSize: '14px',
		cursor: 'pointer',
	},
	h1: {
		fontSize: '12px',
		color: '#99a9bf',
	}
});

export function LinkRenderer({ classes, children, ...props }) {
	const headline = ['Components', 'General', 'Navigation', 'DataEntry', 'DataDisplay', 'Feedback', 'Others'];
	for (const item of headline.values()) {
		console.log(item);
		if (children === item) {
			return (
				<h3 className={cx(classes.h1, props.className)} >
					{children}
				</h3>
			);
		}
	}
	return (
		<a {...props} className={cx(classes.link, props.className)} >
			{children}
		</a>
	);
}

LinkRenderer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LinkRenderer);
