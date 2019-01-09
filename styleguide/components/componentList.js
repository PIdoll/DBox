import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'rsg-components/Link';
import Styled from 'rsg-components/Styled';
import { hasInHash, getHash } from '../../utils/handleHash';

const styles = ({ color, fontFamily, fontSize, space, mq }) => ({
	list: {
    margin: 0,
    paddingLeft: 0,
	},
	item: {
		color: color.base,
		display: 'block',
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		listStyle: 'none',
		overflow: 'hidden',
    textOverflow: 'ellipsis',
	},
	isChild: {
    margin: 0,
    height: '40px',
    lineHeight: '40px',
		[mq.small]: {
			display: 'inline-block',
    },
	},
	heading: {
		color: '#999',
		marginTop: space[1],
		fontFamily: fontFamily.base,
    fontWeight: 'bold',
	},
});

export function ComponentsListRenderer({ classes, items }) {
	items = items.filter(item => item.visibleName);

	if (!items.length) {
		return null;
	}

	const windowHash = window.location.pathname + getHash(window.location.hash);
	return (<ul className={classes.list}>
  {items.map(({ heading, visibleName, href, content, external }) => {
    const isItemSelected = hasInHash(windowHash, href);
      return (<li className={cx(
							classes.item,
							(!content || !content.props.items.length) && classes.isChild,
							isItemSelected && classes.isSelected
						)}key={href}
					><Link className={cx(heading && classes.heading)} href={href}target={external ? '_blank' : undefined}>{visibleName}</Link>{content}</li>
				);
			})}
		</ul>
	);
}

ComponentsListRenderer.propTypes = {
	items: PropTypes.array.isRequired,
	classes: PropTypes.object.isRequired,
};

export default Styled(styles)(ComponentsListRenderer);
