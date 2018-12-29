import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';
import Data from '../data/componentsName';

function SectionHeadingRenderer({ classes, children, }) {
	const sectionNameClasses = cx(classes.sectionName);

	return (<div className={classes.wrapper}><h3 className={sectionNameClasses}>{children} {Data[children]}
				</h3>
		</div>
	);
}

const styles = () => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
});

SectionHeadingRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(SectionHeadingRenderer);
