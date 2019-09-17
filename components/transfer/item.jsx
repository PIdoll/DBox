import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'rc-util/lib/PureRenderMixin';
import Lazyload from 'react-lazy-load';
import Checkbox from '../checkbox';
import Icon from '../icon';

export default class Item extends React.Component {
  shouldComponentUpdate (...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }
  onUpClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onUpClick()
  }
  onDownClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onDownClick()
  }
  render() {
    const {
      renderedText, renderedEl, item, lazy,
      checked, disabled, prefixCls, onClick, index, length, sort
    } = this.props;

    const className = classNames({
      [`${prefixCls}-content-item`]: true,
      [`${prefixCls}-content-item-disabled`]: disabled || item.disabled,
    });

    let title;
    if (typeof renderedText === 'string' || typeof renderedText === 'number') {
      title = String(renderedText);
    }

    const listItem = (
      <li
        className={className}
        title={title}
        onClick={(disabled || item.disabled) ? undefined : () => onClick(item)}>
        <Checkbox checked={checked} disabled={disabled || item.disabled} />
        <span>{renderedEl}</span>
        {sort && (<div>
          {index !== 0 && <Icon onClick={this.onUpClick} type='up' />}
          {length !== (index + 1) && <Icon onClick={this.onDownClick} type='down' />}
        </div>)}
      </li>
    );
    let children = null;
    if (lazy) {
      const lazyProps = {
        height: 40,
        offset: 500,
        throttle: 0,
        debounce: false,
        ...lazy,
      };
      children = <Lazyload {...lazyProps}>{listItem}</Lazyload>
    } else {
      children = listItem;
    }
    return children;
  }
}
