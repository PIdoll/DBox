import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

const styles = ({ color }) => ({
	link: {
		'&, &:link, &:visited, &:active': {
			fontSize: 'inherit',
			color: color.link,
			textDecoration: 'none',
		},
		'&:hover, &:active, &:visited': {
			isolate: false,
			color: color.linkHover,
      cursor: 'pointer',
      border: '1px solid green',
		},
	},
});

export function LinkRenderer({ classes, children, ...props }) {
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
