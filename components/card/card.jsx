import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Tabs from '../tabs';
import Grid from './grid';

import './style/index';

class Card extends Component {
    // constructor (props) {
    //     super(props);
    // }
    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        title: PropTypes.node,
        extra: PropTypes.node,
        bordered: PropTypes.bool,
        tabList: PropTypes.node,
        loading: PropTypes.bool,
        children: PropTypes.node,
        hoverable: PropTypes.bool,
        noHovering: PropTypes.bool,
        cover: PropTypes.node,
        onTabChange: PropTypes.func,
        actions: PropTypes.node
    }
    static defaultProps = {
        prefixCls: 'dbox-card',
        className: ''
    }
    // 内容是否为Grid
    isContainGrid () {
      let containGrid;
      React.Children.forEach(this.props.children, (ele) => {
        if (ele && ele.type && ele.type === Grid) {
          containGrid = true;
        }
      });
      return containGrid;
    }
    // 点击页签的回调
    onTabChange = (item) => {
        if (this.props.onTabChange) {
            this.props.onTabChange(item)
        }
    }

    getCompatibleHoverable() {
      const { noHovering, hoverable } = this.props;
      if ('noHovering' in this.props) {
        return !noHovering || hoverable;
      }
      return !!noHovering;
    };

    getAction(actions) {
      if (!actions || !actions.length) {
        return null;
      }
      const actionList = actions.map((action, index) => (
        <li style={{width: `${100 / actions.length}%`}} key={`action-${index}`} >
          <span>{action}</span>
        </li>
      ));
      return actionList;
    }

    render() {
        const {
            prefixCls = 'dbox-card', className, extra, title, bordered = true, bodyStyle, tabList, loading,
            children, hoverable, cover, type, action, activeTabKey, defaultActiveTabKey, ...others
        } = this.props;
        const cardClassName = classNames(prefixCls, className, {
            [`${prefixCls}-bordered`]: bordered,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-hoverable`]: hoverable,
            [`${prefixCls}-contain-grid`]: this.isContainGrid(),
            [`${prefixCls}-${type}`]: type && type === 'inner',
            [`${prefixCls}-contain-tabs`]: tabList && tabList
        });

        // 预加载样式
        const loadingBlock = (
          <div className={`${prefixCls}-loading-content`}>
            <p className={`${prefixCls}-loading-block`} style={{ width: '94%' }} />
            <p>
              <span className={`${prefixCls}-loading-block`} style={{ width: '28%' }} />
              <span className={`${prefixCls}-loading-block`} style={{ width: '62%' }} />
            </p>
            <p>
              <span className={`${prefixCls}-loading-block`} style={{ width: '22%' }} />
              <span className={`${prefixCls}-loading-block`} style={{ width: '66%' }} />
            </p>
            <p>
              <span className={`${prefixCls}-loading-block`} style={{ width: '56%' }} />
              <span className={`${prefixCls}-loading-block`} style={{ width: '39%' }} />
            </p>
            <p>
              <span className={`${prefixCls}-loading-block`} style={{ width: '21%' }} />
              <span className={`${prefixCls}-loading-block`} style={{ width: '15%' }} />
              <span className={`${prefixCls}-loading-block`} style={{ width: '40%' }} />
            </p>
          </div>
        );

        const hasActiveTabKey = activeTabKey !== undefined;
        const extraProps = {
            [hasActiveTabKey ? 'activeKey' : 'defaultActiveKey']: hasActiveTabKey
        ? activeTabKey
        : defaultActiveTabKey,
        };

        let head;
        const tabs = tabList && tabList.length ? (
          <Tabs {...extraProps}
            className={`${prefixCls}-head-tabs`}
            size='large'
            onChange={this.onTabChange}
             >
            {tabList.map(item => <Tabs.TabPane tab={item.tab} key={item.key} />)}
          </Tabs>
        ) : null;

        if (title || extra || tabs) {
            head = (
              <div className={`${prefixCls}-head`}>
                <div className={`${prefixCls}-head-wrapper`}>
                  {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
                  {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
                </div>
                {tabs}
              </div>
            )
        }

        const coverDom = cover ? <div className={`${prefixCls}-cover`}>{cover}</div> : null;
        const body = (
          <div className={`${prefixCls}-body`}>
            {loading ? loadingBlock : children }
          </div>
        );
        const actionDom = action && action.length
          ? <ul className={`${prefixCls}-actions`} >{this.getAction(action)}</ul> : null;
          const divProps = omit(others, [
            'onTabChange',
          ]);
        return (
          <div {...divProps} className={cardClassName} style={bodyStyle}>
            {head}
            {coverDom}
            {body}
            {actionDom}
          </div>
        );
    }
}

export default Card;
