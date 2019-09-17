import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Animate from 'rc-animate';
import PureRenderMixin from 'rc-util/lib/PureRenderMixin';
import Checkbox from '../checkbox';
import Search from './search';
import Item from './item';
import triggerEvent from '../_util/triggerEventer';

function isIEorEDGE() {
  return document.documentMode || /Edge/.test(navigator.userAgent);
}

function noop() {
}

function isRenderResultPlainObject(result) {
  return result && !React.isValidElement(result) &&
    Object.prototype.toString.call(result) === '[object Object]';
}

export default class TransferList extends React.Component {
  static defaultProps = {
    dataSource: [],
    titleText: '',
    showSearch: false,
    render: noop,
    lazy: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }
  componentDidMount() {
    this.timer = window.setTimeout(() => {
      this.setState({
        mounted: true,
      })
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.triggerScrollTimer);
    clearTimeout(this.fixIERepainTimer);
  }

  shouldComponentUpdate(...args) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }

  getCheckStatus(filteredDataSource) {
    const { checkedKeys } = this.props;
    if (checkedKeys.length === 0) {
      return 'none';
    } else if (filteredDataSource.every(item => checkedKeys.indexOf(item.key) >= 0)) {
      return 'all';
    }
    return 'part'
  }

  handleSelect = (selectedItem) => {
    const { checkedKeys } = this.props;
    const result = checkedKeys.some((key) => key === selectedItem.key);
    this.props.handleSelect(selectedItem, !result);
  }

  handleFilter = (e) => {
    this.props.handleFilter(e);
    if (!e.target.value) {
      return false;
    }

    this.triggerScrollTimer = window.setTimeout(() => {
      const transferNode = ReactDOM.findDOMNode(this);
      const listNode = transferNode.querySelectorAll('idoll-transfer-list-content')[0];
      if (listNode) {
        triggerEvent(listNode, 'scroll');
      }
    }, 0);
    this.fixIERepaint();
  }

  handleClear = () => {
    this.props.handleClear();
    this.fixIERepaint();
  }

  matchFilter = (text, item) => {
    const { filter, filterOption } = this.props;
    if (filterOption) {
      return filterOption(filter, item);
    }
    return text.indexOf(filter) >= 0;
  }

  renderItem = (item) => {
    const { render = noop } = this.props;
    const renderResult = render(item);
    const isRenderResultPlain = isRenderResultPlainObject(renderResult);
    return {
      renderedText: isRenderResultPlain ? renderResult.value : renderResult,
      renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
    }
  }

  saveNotFoundRef = (node) => {
    this.notFoundNode = node;
  }

  fixIERepaint() {
    if (!isIEorEDGE()) {
      return false;
    }
    this.fixIERepainTimer = window.setTimeout(() => {
      if (this.notFoundNode) {
        this.notFoundNode.className = this.notFoundNode.className;
      }
    }, 0);
  }

  render() {
    const {
      prefixCls, dataSource, titleText, checkedKeys, lazy, disabled,
      body, footer, showSearch, style, filter,
      searchPlaceholder, notFoundContent, itemUnit, itemsUnit, onScroll, sort
    } = this.props;

    const footerDom = footer && footer(this.props);
    const bodyDom = body && body(this.props);

    const listCls = classNames(prefixCls, {
      [`${prefixCls}-with-footer`]: !!footerDom,
    });

    const filteredDataSource = [];
    const totalDataSource = [];

    const showItems = dataSource.map((item, index) => {
      const { renderedText, renderedEl } = this.renderItem(item);
      if (filter && filter.trim() && !this.matchFilter(renderedText, item)) {
        return null;
      }

      // all show items
      totalDataSource.push(item);
      if (!item.disabled) {
        // response to checkAll items
        filteredDataSource.push(item);
      }

      const checked = checkedKeys.indexOf(item.key) >= 0;
      return (
        <Item
          disabled={disabled}
          key={item.key}
          item={item}
          lazy={lazy}
          renderedText={renderedText}
          renderedEl={renderedEl}
          checked={checked}
          index={index}
          sort={sort}
          length={dataSource.length}
          prefixCls={prefixCls}
          onUpClick={() => { this.props.onUpClick(item, index) }}
          onDownClick={() => { this.props.onDownClick(item, index) }}
          onClick={this.handleSelect} />
      );
    });

    const unit = dataSource.length > 1 ? itemsUnit : itemUnit;

    const search = showSearch ? (
      <div className={`${prefixCls}-body-search-wrapper`}>
        <Search
          prefixCls={`${prefixCls}-search`}
          onChange={this.handleFilter}
          handleClear={this.handleClear}
          placeholder={searchPlaceholder}
          value={filter} />
      </div>
    ) : null;

    const listBody = bodyDom || (
      <div className={classNames(showSearch ? `${prefixCls}-body ${prefixCls}-body-with-search` : `${prefixCls}-body`)}>
        {search}
        <Animate
          component='ul'
          componentProps={{ onScroll }}
          className={`${prefixCls}-content`}
          transitionName={this.state.mounted ? `${prefixCls}-content-item-heightlight` : ''}
          transitionLeave={false}>
          {showItems}
        </Animate>
        <div className={`${prefixCls}-body-not-found`} ref={this.saveNotFoundRef}>
          {notFoundContent}
        </div>
      </div>
    );

    const listFooter = footerDom ? (
      <div className={`${prefixCls}-footer`}>
        {footerDom}
      </div>
    ) : null;

    const checkStatus = this.getCheckStatus(filteredDataSource);
    const checkedAll = checkStatus === 'all';
    const checkAllCheckbox = (
      <Checkbox
        ref='checkbox'
        disabled={disabled}
        checked={checkedAll}
        indeterminate={checkStatus === 'part'}
        onChange={() => this.props.handleSelectAll(filteredDataSource, checkedAll)} />
    );

    return (
      <div className={listCls} style={style}>
        <div className={`${prefixCls}-header`}>
          {checkAllCheckbox}
          <span className={`${prefixCls}-header-selected`}>
            <span>
              {(checkedKeys.length > 0 ? `${checkedKeys.length}/` : '0/') + totalDataSource.length} {unit}
            </span>
            <span className={`${prefixCls}-header-title`}>
              {titleText}
            </span>
          </span>
        </div>
        {listBody}
        {listFooter}
      </div>
    );
  }
}
