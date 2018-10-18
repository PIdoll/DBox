import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Col} from '../grid';
import Meta from './meta';


const GridColumns = ['', 1, 2, 3, 4, 6, 8, 12, 24];
export default class Item extends React.Component {
    static propTypes = {
        column: PropTypes.oneOf(GridColumns),
        xs: PropTypes.oneOf(GridColumns),
        sm: PropTypes.oneOf(GridColumns),
        md: PropTypes.oneOf(GridColumns),
        lg: PropTypes.oneOf(GridColumns),
        xl: PropTypes.oneOf(GridColumns),
        xxl: PropTypes.oneOf(GridColumns),
      };
      static contextTypes = {
        grid: PropTypes.any
    };
    static PropTypes = {
      className: PropTypes.string,
      children: PropTypes.node,
      prefixCls: PropTypes.string,
      extra: PropTypes.node,
      actions: PropTypes.array
     }
    getGrid(grid, t) {
      return grid[t] && Math.floor(24 / grid[t]);
    }
    render() {
      const { grid } = this.context;
      const { prefixCls = 'idoll-list', children, actions, extra, className, ...others } = this.props;
      const classString = classNames(`${prefixCls}-item`, className);

      const metaContent = [];
      const otherContent = [];
      React.Children.forEach(children, (element) => {
        if (element && element.type && element.type === Meta) {
          metaContent.push(element);
        } else {
          otherContent.push(element);
        }
      });

      const contentClassString = classNames(`${prefixCls}-item-content`, {
        [`${prefixCls}-item-content-single`]: (metaContent.length < 1),
      });

      const content = otherContent.length > 0 ? (
        <div className={contentClassString}>
          {otherContent}
        </div>) : null;


    let actionsContent;
    if (actions && actions.length > 0) {
      const actionsContentItem = (action, i) => (
        <li key={`${prefixCls}-item-action-${i}`}>
          {action}
          {i !== (actions.length - 1) && <em className={`${prefixCls}-item-action-split`} />}
        </li>
      );
      actionsContent = (
        <ul className={`${prefixCls}-item-action`}>
          {actions.map((action, i) => actionsContentItem(action, i))}
        </ul>
      );
    }

    const extraContent = (
      <div className={`${prefixCls}-item-extra-wrap`}>
        <div className={`${prefixCls}-item-main`}>
          {metaContent}
          {content}
          {actionsContent}
        </div>
        <div className={`${prefixCls}-item-extra`}>{extra}</div>
      </div>
      );
      const mainContent = grid ? (
        <Col
          span={this.getGrid(grid, 'column')}
          xs={this.getGrid(grid, 'xs')}
          sm={this.getGrid(grid, 'sm')}
          md={this.getGrid(grid, 'md')}
          lg={this.getGrid(grid, 'lg')}
        >
          <div {...others} className={classString}>
            {extra && extraContent}
            {!extra && metaContent}
            {!extra && content}
            {!extra && actionsContent}
          </div>
        </Col>
      ) : (
        <div {...others} className={classString}>
          {extra && extraContent}
          {!extra && metaContent}
          {!extra && content}
          {!extra && actionsContent}
        </div>
      );
      return mainContent;
    }
};
