// https : //github.com/react-component/pagination
import React from 'react';
import { PropTypes } from 'prop-types';
import RcPagination from 'rc-pagination';
import classNames from 'classnames';

import Select from '../select';
import MiniSelect from './MiniSelect';
import zhCN from './locale/zh_CN';
import './style/index';

export default class Pagination extends React.Component {
    static defaultProps = {
        locale: zhCN,
        className: '',
        prefixCls: 'idoll-pagination',
        selectPrefixCls: 'idoll-select',
    }
    static propTypes = {
	    current: PropTypes.number,
	    defaultCurrent: PropTypes.number,
	    defaultPageSizecurrent: PropTypes.number,
	    pageSize: PropTypes.number,
	    total: PropTypes.number,
        showQuickJumper: PropTypes.bool,
        showTitle: PropTypes.bool,
        showSizeChanger: PropTypes.bool,
        simple: PropTypes.bool,
        pageSizeOptions: PropTypes.array,
	    showTotal: PropTypes.func,
	    onChange: PropTypes.func,
		onShowSizeChange: PropTypes.func
	}
    static contextTypes = {
        idollLocale: PropTypes.object
    }
    render() {
        const { size, className, ...restProps } = this.props;
        const isSmall = size === 'small';
        let locale;
        if (this.context.idollLocale && this.context.idollLocale.Pagination) {
            locale = this.context.idollLocale.Pagination;
        } else {
            locale = this.props.locale;
        }
        return (
          <RcPagination
            showTitle={false}
            selectComponentClass={isSmall ? MiniSelect : Select}
            className={classNames(className, { mini: isSmall })}
            locale={locale}
            {...restProps}
          />
          )
    }
}
