// https : //github.com/react-component/pagination
import React from 'react';
import { PropTypes } from 'prop-types';
import RcPagination from 'rc-pagination';
import classNames from 'classnames';

import Select from '../select';
import MiniSelect from './MiniSelect';
import zhCN from './locale/zh_CN';
import './style/index.jsx';


export default class Pagination extends React.Component {
    static defaultProps = {
        locale: zhCN,
        className: '',
        prefixCls: 'idoll-pagination',
        selectPrefixCls: 'idoll-select',
    }
    static propTypes = {
	    current: PropTypes.num,
	    defaultCurrent: PropTypes.num,
	    defaultPageSizecurrent: PropTypes.num,
	    pageSize: PropTypes.num,
	    total: PropTypes.num,
        showQuickJumper: PropTypes.bool,
        showTitle: PropTypes.bool,
        showSizeChanger: PropTypes.bool,
        simple: PropTypes.bool,
        pageSizeOptions: PropTypes.array,
	    showTotal: PropTypes.func,
	    onChange: PropTypes.fuc,
		icon: PropTypes.fuc,
		onShowSizeChange: PropTypes.fuc
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
            selectComponentClass={isSmall ? MiniSelect : Select}
            className={classNames(className, { mini: isSmall })}
            locale={locale}
            {...restProps}
          />
          )
    }
}
