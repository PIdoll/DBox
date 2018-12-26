import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from 'rsg-components/Heading';
import Styled from 'rsg-components/Styled';

function SectionHeadingRenderer({ classes, children, toolbar, id, href, depth, deprecated }) {
	const headingLevel = Math.min(6, depth);
	const sectionNameClasses = cx(classes.sectionName, {
		[classes.isDeprecated]: deprecated,
	});

	return (<div className={classes.wrapper}><Heading level={headingLevel} id={id}><h3 href={href} className={sectionNameClasses}>{children}
				</h3>
			</Heading>
		</div>
	);
}

const styles = ({ color, space }) => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: space[2],
	},
	isDeprecated: {
		color: color.light,
		'&, &:hover': {
			textDecoration: 'line-through',
		},
	},
});

SectionHeadingRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	toolbar: PropTypes.node,
	id: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	depth: PropTypes.number.isRequired,
	deprecated: PropTypes.bool,
};

export default Styled(styles)(SectionHeadingRenderer);
