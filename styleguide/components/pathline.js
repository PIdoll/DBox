import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

export const styles = ({ fontFamily, fontSize, color }) => ({
	pathline: {
		fontFamily: fontFamily.monospace,
		fontSize: fontSize.small,
		color: color.light,
    wordBreak: 'break-all',
    display: 'none',
	},
});

export function PathlineRenderer({ classes, children }) {
	return (
  <div className={classes.pathline}>{children}</div>
	);
}

PathlineRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.string,
};

export default Styled(styles)(PathlineRenderer);
