import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

export const styles = ({ space, color, buttonTextTransform }) => ({
	button: {
		background: 'transparent',
		textTransform: buttonTextTransform,
		transition: 'color 750ms ease-out',
		border: 'none',
		cursor: 'pointer',
		'&:hover, &:focus': {
			isolate: false,
			outline: 0,
			color: color.linkHover,
			transition: 'color 150ms ease-in',
		},
		'& + &': {
			isolate: false,
			marginLeft: space[1],
		},
  },
  caret: {
    width: 0,
    height: 0,
    borderTop: '50px solid black',
    borderRight: '50px solid transparent',
    borderBottom: '50px solid transparent',
    borderLeft: '50px solid transparent'
  },
	isActive: {
		borderBottom: [[2, color.linkHover, 'solid']],
	},
});

export function TabButtonRenderer({ classes, name, className, onClick, active }) {
	const classNames = cx(classes.button, className, {
		[classes.isActive]: active}, classes.caret);
  return <button name={name} className={classNames} onClick={onClick}> <i>a</i> </button>
}

TabButtonRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
};

export default Styled(styles)(TabButtonRenderer);
