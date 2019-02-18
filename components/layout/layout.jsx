import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style';

/**
 * @visibleName Layout 布局
 */
function Layout(props) {
    const { children, className, style } = props;
    // // console.log('LayoutchildrenLength', children.length);
    let sider = []
    if (children && children.length) {
      sider = children.filter((item) => {
        return Object.keys(item.type.propTypes).indexOf('collapsed') !== -1
      })
    }
    const classes = classNames({
       'idoll-layout': 'idoll-layout',
      'idoll-layout-has-sider': sider.length,
    }, className);
  	return <div {...props} style={{style}} className={classes}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
