import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function ButtonGroup (props) {
    const { prefixCls = 'idoll-btn-group', size, className, ...others } = props;
    let sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg'
            break;
        case 'small':
            sizeCls = 'sm'
            break;
        default:
            break;
    }
    const classes = classNames(prefixCls, {
        [`${prefixCls}-${sizeCls}`]: sizeCls
    }, className);
    return <div {...others} className={classes} />
}
ButtonGroup.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']),
}
