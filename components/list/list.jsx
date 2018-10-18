import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Row } from '../grid';
import {Spin} from '../spin';
import Pagination from '../pagination';


import './style';

export default class List extends React.Component {
    static childContextTypes = {
        grid: PropTypes.any,
      };
    constructor(props) {
        super(props)
        this.keys = {};
    };
    static PropTypes = {
        bordered: PropTypes.bool,
        prefixCls: PropTypes.string,
        header: PropTypes.node,
        footer: PropTypes.node,
        className: PropTypes.string,
        dataSource: PropTypes.array,
        children: PropTypes.node,
        loading: PropTypes.bool,
        grid: PropTypes.any,
        pagination: PropTypes.any,
        renderItem: PropTypes.any,
        size: PropTypes.string,
        split: PropTypes.bool,
        id: PropTypes.string
    }

    static defaultProps = {
        dataSource: [],
        prefixCls: 'idoll-list',
        bordered: false,
        split: true,
        loading: false,
        pagination: false,
      };

    isSomethingAfterLastTtem() {
        const { loadMore, pagination, footer } = this.props;
        return !!(loadMore || pagination || footer);
      }
    renderItem = (item, index) => {
        const { dataSource, renderItem, rowKey } = this.props;
        let key;
        if (typeof rowKey === 'function') {
          key = rowKey(dataSource[index]);
        } else if (typeof rowKey === 'string') {
          key = dataSource[rowKey];
        } else {
          key = dataSource.key;
        }
        if (!key) {
          key = `list-item-${index}`;
        }
        this.keys[index] = key;
        return renderItem(item, index);
      };
      getChildContext() {
        return {
          grid: this.props.grid,
        };
      }
    render() {
        const {
            bordered,
            split,
            className,
            children,
            itemLayout,
            loadMore,
            prefixCls,
            grid,
            dataSource,
            size,
            renderItem,
            pagination,
            header,
            footer,
            loading,
            ...rest
          } = this.props;
    let loadingProp = loading;
    if (typeof loadingProp === 'boolean') {
      loadingProp = {
        spinning: loadingProp,
      };
    }
    const isLoading = (loadingProp && loadingProp.spinning);

    let sizeCls = '';
    if (size === 'large') {
      sizeCls = 'lg';
    } else if (size === 'small') {
      sizeCls = 'sm';
    } else {
      sizeCls = '';
    }
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-vertical`]: itemLayout === 'vertical',
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-split`]: split,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-loading`]: isLoading,
      [`${prefixCls}-grid`]: grid,
      [`${prefixCls}-something-after-last-item`]: this.isSomethingAfterLastTtem(),
    });

    const paginationContent = (
      <div className={`${prefixCls}-pagination`}>
        <Pagination {...pagination} />
      </div>
      );
    let childrenContent;
    childrenContent = isLoading && (<div style={{ minHeight: 53 }} />);
    if (dataSource.length > 0) {
      const items = dataSource.map((item, index) => this.renderItem(item, index));
      const childrenList = React.Children.map(items, (child, index) => React.cloneElement(child, {
          key: this.keys[index]
        }),
      );
      childrenContent = grid ? (
        <Row gutter={grid.gutter}>
          {childrenList}
        </Row>
      ) : childrenList;
    } else if (!children && !isLoading) {
      childrenContent = (
        <div>{console.info(renderItem)}</div>
      )
    }
    const content = (
      <div>
        {<Spin {...loadingProp}>{childrenContent}</Spin>}
        {loadMore}
        {(!loadMore && pagination) ? paginationContent : null}
      </div>
    );
        return (
          <div className={classString} {...rest}>
            {header && <div className={`${prefixCls}-header`}>{header}</div>}
            {content}
            {children}
            {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
          </div>
        )
    }
};
