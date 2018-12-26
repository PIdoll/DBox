import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import logo from '../assets/img/logo.png';

const styles = () => ({
	logo: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
		fontSize: 20,
		color: '#333',
	},
	image: {
    width: '22px',
    marginRight: '14px'
	},
});

export function LogoRenderer({ classes, children }) {
	return (
		<h1 className={classes.logo}>
			<img className={classes.image} src={logo} />
			DBox
		</h1>
	);
}

LogoRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
