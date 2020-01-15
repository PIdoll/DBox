import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import logo from '../assets/img/logo.png';

const styles = () => ({
	logo: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    margin: 0,
    lineHeight: '64px',
		fontSize: 20,
    color: '#000',
    cursor: 'pointer',
    '&:hover span': {
      color: '#000',
      fontSize: 20,
      cursor: 'pointer',
    }
	},
	image: {
    width: '88px',
    // height: '28px',
    verticalAlign: 'middle',
    marginRight: '6px'
  },
  text: {
    fontSize: '20px',
    color: '#000'
  }
});

export function LogoRenderer({ classes }) {
	return (
  <a href='/' className={classes.logo}>
    <img className={classes.image} src={logo} />
  </a>
	);
}

LogoRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(LogoRenderer);
