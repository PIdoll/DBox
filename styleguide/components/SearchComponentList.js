import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

const styles = ({ space, color, fontFamily, fontSize, borderRadius }) => ({
	search: {
		padding: space[2],
	},
	input: {
		display: 'block',
		width: '100%',
		padding: space[1],
		color: color.base,
		backgroundColor: color.baseBackground,
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		border: [[1, color.border, 'solid']],
		borderRadius,
		transition: 'all ease-in-out .1s',
		'&:focus': {
			isolate: false,
			borderColor: color.link,
			boxShadow: [[0, 0, 0, 2, color.focus]],
			outline: 0,
		},
		'&::placeholder': {
			isolate: false,
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: '#dedede',
		},
	},
});

export function TableOfContentsRenderer({ classes, children, searchTerm, onSearchTermChange }) {
	return (<React.Fragment>
  <div className={classes.search}>
    <input
      value={searchTerm}
      className={classes.input}
      placeholder='在dbox-ui中搜索'
      aria-label='在dbox-ui中搜索'
      onChange={event => onSearchTermChange(event.target.value)}
    />
  </div>
  <nav>{children}</nav>
</React.Fragment>

	);
}

TableOfContentsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	searchTerm: PropTypes.string.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
};

export default Styled(styles)(TableOfContentsRenderer);
