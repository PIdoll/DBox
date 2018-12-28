import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import logo from '../assets/img/logo.svg';

const styles = () => ({
	logo: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
		fontSize: 20,
		color: '#000',
	},
	image: {
    width: '22px',
    marginRight: '12px'
  },
  text: {
    fontSize: '20px',
    color: '#000'
  }
});

export function LogoRenderer({ classes, children }) {
	return (<h1 className={classes.logo}><img className={classes.image} src={logo} /><span>DBOX</span></h1>
	);
}

LogoRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
