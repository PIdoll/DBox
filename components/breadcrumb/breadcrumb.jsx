import React, {cloneElement} from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './breadcrumbItem';
import classNames from 'classnames';
import './style/index';

function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }
  const paramsKeys = Object.keys(params).join('|');
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement
  );
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  const isLastItem = routes.indexOf(route) === routes.length - 1;
const name = getBreadcrumbName(route, params);
return isLastItem
  ? <span>{name}</span>
  : <a href={`#/${paths.join('/')}`}>{name}</a>
}

export default class Breadcrumb extends React.Component {
  static Item;
  static defaultProps = {
    prefixCls: 'idoll-breadcrumb',
    separator: '/'
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    separator: PropTypes.node,
    routes: PropTypes.array,
    params: PropTypes.object
  }

  render() {
    let crumbs;
    const {
      separator, prefixCls, style, className, routes, params = {},
      children, itemRender = defaultItemRender
    } = this.props;
    if (routes && routes.length > 0) {
      const paths = [];
      crumbs = routes.map((route) => {
        route.path = route.path || '';
        let path = route.path.replace(/^\//, '');
        Object.keys(params).forEach(key => {
          path = path.replace(`:${key}`, params[key]);
        });
        if (path) {
          paths.push(path);
        }
        return (
          <BreadcrumbItem separator={separator} key={route.breadcrumbName || path}>
            {itemRender(route, params, routes, paths)}
          </BreadcrumbItem>
        );
      });
    } else if (children) {
      crumbs = React.Children.map(children, (element, index) => {
        if (!element) {
          return element;
        }
        return cloneElement(element, {
          separator,
          key: index
        });
      });
    }
    return (
      <div className={classNames(className, prefixCls)} style={style}>
        {crumbs}
      </div>
    );
  }
}


