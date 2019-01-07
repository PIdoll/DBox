'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function stopPropagation(e) {
  e.stopPropagation();
  if (e.nativeEvent.stopImmediatePropagation) {
    e.nativeEvent.stopImmediatePropagation();
  }
}

var defaultLocale = {
  filterTitle: '筛选',
  filterConfirm: '确定',
  filterReset: '重置',
  emptyText: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_icon2.default, { type: 'frown' }),
    '\u6682\u65E0\u6570\u636E'
  )
};

var defaultPagination = {
  onChange: noop,
  onShowSizeChange: noop
};

var Table = function (_React$Component) {
  (0, _inherits3.default)(Table, _React$Component);

  function Table(props) {
    (0, _classCallCheck3.default)(this, Table);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call(this, props));

    _initialiseProps.call(_this);

    var pagination = props.pagination || {};

    _this.state = (0, _extends5.default)({
      // 减少状态
      boxChecked: false,
      selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
      filters: _this.getFiltersFromColumns(),
      selectionDirty: false
    }, _this.getSortStateFromColumns(), {
      pagination: _this.hasPagination() ? (0, _extends5.default)({}, defaultPagination, pagination, {
        current: pagination.defaultCurrent || pagination.current || 1,
        pageSize: pagination.defaultPageSize || pagination.pageSize || 10
      }) : {}
    });

    _this.CheckboxPropsCache = {};
    return _this;
  }

  (0, _createClass3.default)(Table, [{
    key: 'getCheckboxPropsByItem',
    value: function getCheckboxPropsByItem(item) {
      var _props$rowSelection = this.props.rowSelection,
          rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

      if (!rowSelection.getCheckboxProps) {
        return {};
      }
      var key = this.getRecordKey(item);
      // Cache checkboxProps
      if (!this.CheckboxPropsCache[key]) {
        this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
      }
      return this.CheckboxPropsCache[key];
    }
  }, {
    key: 'getDefaultSelection',
    value: function getDefaultSelection() {
      var _this2 = this;

      var _props$rowSelection2 = this.props.rowSelection,
          rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

      if (!rowSelection.getCheckboxProps) {
        return [];
      }
      return this.getFlatData().filter(function (item) {
        return _this2.getCheckboxPropsByItem(item).defaultChecked;
      }).map(function (record, rowIndex) {
        return _this2.getRecordKey(record, rowIndex);
      });
    }
  }, {
    key: 'getLocale',
    value: function getLocale() {
      var locale = {};
      if (this.context.idollLocale && this.context.idollLocale.Table) {
        locale = this.context.idollLocale.Table;
      }
      return (0, _extends5.default)({}, defaultLocale, locale, this.props.locale);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('pagination' in nextProps && nextProps.pagination !== false) {
        this.setState(function (previousState) {
          var newPagination = (0, _extends5.default)({}, defaultPagination, previousState.pagination, nextProps.pagination);
          newPagination.current = newPagination.current || 1;
          return { pagination: newPagination };
        });
      }
      // dataSource 的变化会清空选中项
      if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
        this.setState({
          selectionDirty: false
        });
        this.CheckboxPropsCache = {};
      }
      if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
        this.setState({
          selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
        });
        var rowSelection = this.props.rowSelection;

        if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
          this.CheckboxPropsCache = {};
        }
      }

      if (this.getSortOrderColumns(nextProps.columns).length > 0) {
        var sortState = this.getSortStateFromColumns(nextProps.columns);
        if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
          this.setState(sortState);
        }
      }

      var filteredValueColumns = this.getFilteredValueColumns(nextProps.columns);
      if (filteredValueColumns.length > 0) {
        var filtersFromColumns = this.getFiltersFromColumns(nextProps.columns);
        var newFilters = (0, _extends5.default)({}, this.state.filters);
        (0, _keys2.default)(filtersFromColumns).forEach(function (key) {
          newFilters[key] = filtersFromColumns[key];
        });
        if (this.isFiltersChanged(newFilters)) {
          this.setState({ filters: newFilters });
        }
      }
    }
  }, {
    key: 'setSelectedRowKeys',
    value: function setSelectedRowKeys(selectedRowKeys, _ref) {
      var _this3 = this;

      var selectWay = _ref.selectWay,
          record = _ref.record,
          checked = _ref.checked,
          changeRowKeys = _ref.changeRowKeys;
      var _props$rowSelection3 = this.props.rowSelection,
          rowSelection = _props$rowSelection3 === undefined ? {} : _props$rowSelection3;

      if (rowSelection && !('selectedRowKeys' in rowSelection)) {
        this.setState({ selectedRowKeys: selectedRowKeys });
      }
      var data = this.getFlatData();
      if (!rowSelection.onChange && !rowSelection[selectWay]) {
        return;
      }
      var selectedRows = data.filter(function (row, i) {
        return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
      });
      if (rowSelection.onChange) {
        rowSelection.onChange(selectedRowKeys, selectedRows);
      }
      if (selectWay === 'onSelect' && rowSelection.onSelect) {
        rowSelection.onSelect(record, checked, selectedRows);
      } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
        var changeRows = data.filter(function (row, i) {
          return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
        });
        rowSelection.onSelectAll(checked, selectedRows, changeRows);
      }
    }
  }, {
    key: 'hasPagination',
    value: function hasPagination() {
      return this.props.pagination !== false;
    }
  }, {
    key: 'isFiltersChanged',
    value: function isFiltersChanged(filters) {
      var _this4 = this;

      var filtersChanged = false;
      if ((0, _keys2.default)(filters).length !== (0, _keys2.default)(this.state.filters).length) {
        filtersChanged = true;
      } else {
        (0, _keys2.default)(filters).forEach(function (columnKey) {
          if (filters[columnKey] !== _this4.state.filters[columnKey]) {
            filtersChanged = true;
          }
        });
      }
      return filtersChanged;
    }
  }, {
    key: 'getSortOrderColumns',
    value: function getSortOrderColumns(columns) {
      return (columns || this.props.columns || []).filter(function (column) {
        return 'sortOrder' in column;
      });
    }
  }, {
    key: 'getFilteredValueColumns',
    value: function getFilteredValueColumns(columns) {
      return (columns || this.props.columns || []).filter(function (column) {
        return 'filteredValue' in column;
      });
    }
  }, {
    key: 'getFiltersFromColumns',
    value: function getFiltersFromColumns(columns) {
      var _this5 = this;

      var filters = {};
      this.getFilteredValueColumns(columns).forEach(function (col) {
        filters[_this5.getColumnKey(col)] = col.filteredValue;
      });
      return filters;
    }
  }, {
    key: 'getSortStateFromColumns',
    value: function getSortStateFromColumns(columns) {
      // return fisrt column which sortOrder is not falsy
      var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
        return col.sortOrder;
      })[0];
      if (sortedColumn) {
        return {
          sortColumn: sortedColumn,
          sortOrder: sortedColumn.sortOrder
        };
      }
      return {
        sortColumn: null,
        sortOrder: null
      };
    }
  }, {
    key: 'getSorterFn',
    value: function getSorterFn() {
      var _state = this.state,
          sortOrder = _state.sortOrder,
          sortColumn = _state.sortColumn;

      if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
        return;
      }
      return function (a, b) {
        var result = sortColumn.sorter(a, b);
        if (result !== 0) {
          return sortOrder === 'descend' ? -result : result;
        }
        return 0;
      };
    }
  }, {
    key: 'toggleSortOrder',
    value: function toggleSortOrder(order, column) {
      var _props;

      var _state2 = this.state,
          sortColumn = _state2.sortColumn,
          sortOrder = _state2.sortOrder;
      // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

      var isSortColumn = this.isSortColumn(column);
      if (!isSortColumn) {
        // 当前列未排序
        sortOrder = order;
        sortColumn = column;
      } else {
        // 当前列已排序
        if (sortOrder === order) {
          // 切换为未排序状态
          sortOrder = '';
          sortColumn = null;
        } else {
          // 切换为排序状态
          sortOrder = order;
        }
      }
      var newState = {
        sortOrder: sortOrder,
        sortColumn: sortColumn
      };

      // Controlled
      if (this.getSortOrderColumns().length === 0) {
        this.setState(newState);
      }

      (_props = this.props).onChange.apply(_props, (0, _toConsumableArray3.default)(this.prepareParamsArguments((0, _extends5.default)({}, this.state, newState))));
    }
  }, {
    key: 'getRecordKey',
    value: function getRecordKey(record, index) {
      var rowKey = this.props.rowKey;

      if (typeof rowKey === 'function') {
        return rowKey(record, index);
      }
      return record[rowKey] || index;
    }
  }, {
    key: 'renderRowSelection',
    value: function renderRowSelection() {
      var _this6 = this;

      var columns = this.props.columns.concat();
      if (this.props.rowSelection) {
        var data = this.getFlatCurrentPageData().filter(function (item) {
          if (_this6.props.rowSelection.getCheckboxProps) {
            return !_this6.getCheckboxPropsByItem(item).disabled;
          }
          return true;
        });
        var checked = void 0;
        if (!data.length) {
          checked = false;
        } else {
          checked = this.state.selectionDirty ? data.every(function (item, i) {
            return _this6.state.selectedRowKeys.indexOf(_this6.getRecordKey(item, i)) >= 0;
          }) : data.every(function (item, i) {
            return _this6.state.selectedRowKeys.indexOf(_this6.getRecordKey(item, i)) >= 0;
          }) || data.every(function (item) {
            return _this6.getCheckboxPropsByItem(item).defaultChecked;
          });
        }
        var selectionColumn = void 0;
        if (this.props.rowSelection.type === 'radio') {
          selectionColumn = {
            key: 'selection-column',
            render: this.renderSelectionRadio,
            className: this.state.boxChecked ? 'idoll-table-selection-column idoll-table-selection-column-selected' : 'idoll-table-selection-column'
          };
        } else {
          var checkboxAllDisabled = data.every(function (item) {
            return _this6.getCheckboxPropsByItem(item).disabled;
          });
          var checkboxAll = _react2.default.createElement(_checkbox2.default, { checked: checked,
            disabled: checkboxAllDisabled,
            onChange: this.handleSelectAllRow
          });
          selectionColumn = {
            key: 'selection-column',
            title: checkboxAll,
            render: this.renderSelectionCheckBox,
            className: this.state.boxChecked ? 'idoll-table-selection-column idoll-table-selection-column-selected' : 'idoll-table-selection-column'
          };
        }
        if (columns.some(function (column) {
          return column.fixed === 'left' || column.fixed === true;
        })) {
          selectionColumn.fixed = 'left';
        }
        if (columns[0] && columns[0].key === 'selection-column') {
          columns[0] = selectionColumn;
        } else {
          columns.unshift(selectionColumn);
        }
      }
      return columns;
    }
  }, {
    key: 'getColumnKey',
    value: function getColumnKey(column, index) {
      return column.key || column.dataIndex || index;
    }
  }, {
    key: 'getMaxCurrent',
    value: function getMaxCurrent(total) {
      var _state$pagination = this.state.pagination,
          current = _state$pagination.current,
          pageSize = _state$pagination.pageSize;

      if ((current - 1) * pageSize >= total) {
        return current - 1;
      }
      return current;
    }
  }, {
    key: 'isSortColumn',
    value: function isSortColumn(column) {
      var sortColumn = this.state.sortColumn;

      if (!column || !sortColumn) {
        return false;
      }
      return this.getColumnKey(sortColumn) === this.getColumnKey(column);
    }
  }, {
    key: 'renderColumnsDropdown',
    value: function renderColumnsDropdown(columns) {
      var _this7 = this;

      var sortOrder = this.state.sortOrder;

      var locale = this.getLocale();
      return columns.map(function (originColumn, i) {
        var column = (0, _extends5.default)({}, originColumn);
        var key = _this7.getColumnKey(column, i);
        var filterDropdown = void 0;
        var sortButton = void 0;
        if (column.filters && column.filters.length > 0 || column.filterDropdown) {
          var colFilters = _this7.state.filters[key] || [];
          filterDropdown = _react2.default.createElement(_filterDropdown2.default, {
            locale: locale,
            column: column,
            selectedKeys: colFilters,
            confirmFilter: _this7.handleFilter
          });
        }
        if (column.sorter) {
          var isSortColumn = _this7.isSortColumn(column);
          if (isSortColumn) {
            column.className = column.className || '';
            if (sortOrder) {
              column.className += ' idoll-table-column-sort';
            }
          }
          var isAscend = isSortColumn && sortOrder === 'ascend';
          var isDescend = isSortColumn && sortOrder === 'descend';
          sortButton = _react2.default.createElement(
            'div',
            { className: 'idoll-table-column-sorter' },
            _react2.default.createElement(
              'span',
              { className: 'idoll-table-column-sorter-up ' + (isAscend ? 'on' : 'off'),
                title: '\u2191',
                onClick: function onClick() {
                  return _this7.toggleSortOrder('ascend', column);
                }
              },
              _react2.default.createElement(_icon2.default, { type: 'caret-up' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'idoll-table-column-sorter-down ' + (isDescend ? 'on' : 'off'),
                title: '\u2193',
                onClick: function onClick() {
                  return _this7.toggleSortOrder('descend', column);
                }
              },
              _react2.default.createElement(_icon2.default, { type: 'caret-down' })
            )
          );
        }
        column.title = _react2.default.createElement(
          'span',
          null,
          column.title,
          sortButton,
          filterDropdown
        );
        return column;
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      // 强制不需要分页
      if (!this.hasPagination()) {
        return null;
      }
      var size = 'default';
      var pagination = this.state.pagination;

      if (pagination.size) {
        size = pagination.size;
      } else if (this.props.size === 'middle' || this.props.size === 'small') {
        size = 'small';
      }
      var total = pagination.total || this.getLocalData().length;
      return total > 0 ? _react2.default.createElement(_pagination2.default, (0, _extends5.default)({}, pagination, {
        className: this.props.prefixCls + '-pagination',
        onChange: this.handlePageChange,
        total: total,
        size: size,
        current: this.getMaxCurrent(total),
        onShowSizeChange: this.handleShowSizeChange
      })) : null;
    }
  }, {
    key: 'prepareParamsArguments',
    value: function prepareParamsArguments(state) {
      // 准备筛选、排序、分页的参数
      var pagination = state.pagination;
      var filters = state.filters;
      var sorter = {};
      if (state.sortColumn && state.sortOrder) {
        sorter.column = state.sortColumn;
        sorter.order = state.sortOrder;
        sorter.field = state.sortColumn.dataIndex;
        sorter.columnKey = this.getColumnKey(state.sortColumn);
      }
      return [pagination, filters, sorter];
    }
  }, {
    key: 'findColumn',
    value: function findColumn(myKey) {
      var _this8 = this;

      return this.props.columns.filter(function (c) {
        return _this8.getColumnKey(c) === myKey;
      })[0];
    }
  }, {
    key: 'getCurrentPageData',
    value: function getCurrentPageData() {
      var data = this.getLocalData();
      var current = void 0;
      var pageSize = void 0;
      var state = this.state;
      // 如果没有分页的话，默认全部展示
      if (!this.hasPagination()) {
        pageSize = Number.MAX_VALUE;
        current = 1;
      } else {
        pageSize = state.pagination.pageSize;
        current = this.getMaxCurrent(state.pagination.total || data.length);
      }

      // 分页
      // ---
      // 当数据量少于等于每页数量时，直接设置数据
      // 否则进行读取分页数据
      if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
        data = data.filter(function (item, i) {
          return i >= (current - 1) * pageSize && i < current * pageSize;
        });
      }
      return data;
    }
  }, {
    key: 'getFlatData',
    value: function getFlatData() {
      return (0, _util.flatArray)(this.getLocalData());
    }
  }, {
    key: 'getFlatCurrentPageData',
    value: function getFlatCurrentPageData() {
      return (0, _util.flatArray)(this.getCurrentPageData());
    }
  }, {
    key: 'recursiveSort',
    value: function recursiveSort(data, sorterFn) {
      var _this9 = this;

      var childrenColumnName = this.props.childrenColumnName;

      return data.sort(sorterFn).map(function (item) {
        return item[childrenColumnName] ? (0, _extends5.default)({}, item, (0, _defineProperty3.default)({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
      });
    }
  }, {
    key: 'getLocalData',
    value: function getLocalData() {
      var _this10 = this;

      var state = this.state;
      var dataSource = this.props.dataSource;

      var data = dataSource || [];
      // 优化本地排序
      data = data.slice(0);
      var sorterFn = this.getSorterFn();
      if (sorterFn) {
        data = this.recursiveSort(data, sorterFn);
      }
      // 筛选
      if (state.filters) {
        (0, _keys2.default)(state.filters).forEach(function (columnKey) {
          var col = _this10.findColumn(columnKey);
          if (!col) {
            return;
          }
          var values = state.filters[columnKey] || [];
          if (values.length === 0) {
            return;
          }
          data = col.onFilter ? data.filter(function (record) {
            return values.some(function (v) {
              return col.onFilter(v, record);
            });
          }) : data;
        });
      }
      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this11 = this;

      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className,
          restProps = (0, _objectWithoutProperties3.default)(_props2, ['style', 'className']);

      var data = this.getCurrentPageData();
      var columns = this.renderRowSelection();
      var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
      var locale = this.getLocale();

      var classString = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'idoll-table-' + this.props.size, true), (0, _defineProperty3.default)(_classNames, 'idoll-table-bordered', this.props.bordered), (0, _defineProperty3.default)(_classNames, 'idoll-table-empty', !data.length), _classNames));

      columns = this.renderColumnsDropdown(columns);
      columns = columns.map(function (column, i) {
        var newColumn = (0, _extends5.default)({}, column);
        newColumn.key = _this11.getColumnKey(newColumn, i);
        return newColumn;
      });

      var table = _react2.default.createElement(_rcTable2.default, (0, _extends5.default)({}, restProps, {
        data: data,
        columns: columns,
        className: classString,
        expandIconColumnIndex: columns[0] && columns[0].key === 'selection-column' ? 1 : 0,
        expandIconAsCell: expandIconAsCell,
        emptyText: function emptyText() {
          return locale.emptyText;
        }
      }));
      // if there is no pagination or no data,
      // the height of spin should decrease by half of pagination
      var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? 'idoll-table-with-pagination' : 'idoll-table-without-pagination';
      var spinClassName = this.props.loading ? paginationPatchClass + ' idoll-table-spin-holder' : '';
      table = _react2.default.createElement(
        _spin2.default,
        { className: spinClassName, spinning: this.props.loading },
        table
      );
      return _react2.default.createElement(
        'div',
        { className: className + ' clearfix', style: style },
        table,
        this.renderPagination()
      );
    }
  }]);
  return Table;
}(_react2.default.Component);

Table.propTypes = {
  dataSource: _propTypes2.default.array,
  prefixCls: _propTypes2.default.string,
  useFixedHeader: _propTypes2.default.bool,
  rowSelection: _propTypes2.default.object,
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  locale: _propTypes2.default.object
};
Table.defaultProps = {
  dataSource: [],
  prefixCls: 'idoll-table',
  useFixedHeader: false,
  rowSelection: null,
  className: '',
  size: 'large',
  loading: false,
  bordered: false,
  indentSize: 20,
  onChange: noop,
  locale: {},
  rowKey: 'key',
  childrenColumnName: 'children'
};
Table.contextTypes = {
  idollLocale: _propTypes2.default.object
};

var _initialiseProps = function _initialiseProps() {
  var _this12 = this;

  this.handleFilter = function (column, nextFilters) {
    var props = _this12.props;
    var pagination = (0, _extends5.default)({}, _this12.state.pagination);
    var filters = (0, _extends5.default)({}, _this12.state.filters, (0, _defineProperty3.default)({}, _this12.getColumnKey(column), nextFilters));
    // Remove filters not in current columns
    var currentColumnKeys = props.columns.map(function (c) {
      return _this12.getColumnKey(c);
    });
    (0, _keys2.default)(filters).forEach(function (columnKey) {
      if (currentColumnKeys.indexOf(columnKey) < 0) {
        delete filters[columnKey];
      }
    });

    if (props.pagination) {
      // Reset current prop
      pagination.current = 1;
      pagination.onChange(pagination.current);
    }

    var newState = {
      selectionDirty: false,
      pagination: pagination
    };
    var filtersToSetState = (0, _extends5.default)({}, filters);
    // Remove filters which is controlled
    _this12.getFilteredValueColumns().forEach(function (col) {
      var columnKey = _this12.getColumnKey(col);
      if (columnKey) {
        delete filtersToSetState[columnKey];
      }
    });
    if ((0, _keys2.default)(filtersToSetState).length > 0) {
      newState.filters = filtersToSetState;
    }

    // Controlled current prop will not respond user interaction
    if (props.pagination && 'current' in props.pagination) {
      newState.pagination = (0, _extends5.default)({}, pagination, {
        current: _this12.state.pagination.current
      });
    }

    _this12.setState(newState, function () {
      props.onChange.apply(props, (0, _toConsumableArray3.default)(_this12.prepareParamsArguments((0, _extends5.default)({}, _this12.state, {
        selectionDirty: false,
        filters: filters,
        pagination: pagination
      }))));
    });
  };

  this.handleSelect = function (record, rowIndex, e) {
    var checked = e.target.checked;
    _this12.setState({ boxChecked: e.target.checked });
    var defaultSelection = _this12.state.selectionDirty ? [] : _this12.getDefaultSelection();
    var selectedRowKeys = _this12.state.selectedRowKeys.concat(defaultSelection);
    var key = _this12.getRecordKey(record, rowIndex);
    if (checked) {
      selectedRowKeys.push(_this12.getRecordKey(record, rowIndex));
    } else {
      selectedRowKeys = selectedRowKeys.filter(function (i) {
        return key !== i;
      });
    }
    _this12.setState({
      selectionDirty: true
    });
    _this12.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelect',
      record: record,
      checked: checked
    });
  };

  this.handleRadioSelect = function (record, rowIndex, e) {
    var checked = e.target.checked;
    var defaultSelection = _this12.state.selectionDirty ? [] : _this12.getDefaultSelection();
    var selectedRowKeys = _this12.state.selectedRowKeys.concat(defaultSelection);
    var key = _this12.getRecordKey(record, rowIndex);
    selectedRowKeys = [key];
    _this12.setState({
      selectionDirty: true
    });
    _this12.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelect',
      record: record,
      checked: checked
    });
  };

  this.handleSelectAllRow = function (e) {
    var checked = e.target.checked;
    var data = _this12.getFlatCurrentPageData();
    var defaultSelection = _this12.state.selectionDirty ? [] : _this12.getDefaultSelection();
    var selectedRowKeys = _this12.state.selectedRowKeys.concat(defaultSelection);
    var changableRowKeys = data.filter(function (item) {
      return !_this12.getCheckboxPropsByItem(item).disabled;
    }).map(function (item, i) {
      return _this12.getRecordKey(item, i);
    });

    // 记录变化的列
    var changeRowKeys = [];
    if (checked) {
      changableRowKeys.forEach(function (key) {
        if (selectedRowKeys.indexOf(key) < 0) {
          selectedRowKeys.push(key);
          changeRowKeys.push(key);
        }
      });
    } else {
      changableRowKeys.forEach(function (key) {
        if (selectedRowKeys.indexOf(key) >= 0) {
          selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
          changeRowKeys.push(key);
        }
      });
    }
    _this12.setState({
      selectionDirty: true
    });
    _this12.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelectAll',
      checked: checked,
      changeRowKeys: changeRowKeys
    });
  };

  this.handlePageChange = function (current) {
    var _props3;

    var props = _this12.props;
    var pagination = (0, _extends5.default)({}, _this12.state.pagination);
    if (current) {
      pagination.current = current;
    } else {
      pagination.current = pagination.current || 1;
    }
    pagination.onChange(pagination.current);

    var newState = {
      selectionDirty: false,
      pagination: pagination
    };
    // Controlled current prop will not respond user interaction
    if (props.pagination && 'current' in props.pagination) {
      newState.pagination = (0, _extends5.default)({}, pagination, {
        current: _this12.state.pagination.current
      });
    }
    _this12.setState(newState);

    (_props3 = _this12.props).onChange.apply(_props3, (0, _toConsumableArray3.default)(_this12.prepareParamsArguments((0, _extends5.default)({}, _this12.state, {
      selectionDirty: false,
      pagination: pagination
    }))));
  };

  this.renderSelectionRadio = function (value, record, index) {
    var rowIndex = _this12.getRecordKey(record, index); // 从 1 开始
    var props = _this12.getCheckboxPropsByItem(record);
    var checked = void 0;
    if (_this12.state.selectionDirty) {
      checked = _this12.state.selectedRowKeys.indexOf(rowIndex) >= 0;
    } else {
      checked = _this12.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this12.getDefaultSelection().indexOf(rowIndex) >= 0;
    }
    return _react2.default.createElement(
      'span',
      { onClick: stopPropagation },
      _react2.default.createElement(_radio2.default, { disabled: props.disabled,
        onChange: function onChange(e) {
          return _this12.handleRadioSelect(record, rowIndex, e);
        },
        value: rowIndex, checked: checked
      })
    );
  };

  this.renderSelectionCheckBox = function (value, record, index) {
    var rowIndex = _this12.getRecordKey(record, index); // 从 1 开始
    var checked = void 0;
    if (_this12.state.selectionDirty) {
      checked = _this12.state.selectedRowKeys.indexOf(rowIndex) >= 0;
    } else {
      checked = _this12.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this12.getDefaultSelection().indexOf(rowIndex) >= 0;
    }
    var props = _this12.getCheckboxPropsByItem(record);
    return _react2.default.createElement(
      'span',
      { onClick: stopPropagation },
      _react2.default.createElement(_checkbox2.default, {
        checked: checked,
        disabled: props.disabled,
        onChange: function onChange(e) {
          return _this12.handleSelect(record, rowIndex, e);
        }
      })
    );
  };

  this.handleShowSizeChange = function (current, pageSize) {
    var _props4;

    var pagination = _this12.state.pagination;
    pagination.onShowSizeChange(current, pageSize);
    var nextPagination = (0, _extends5.default)({}, pagination, { pageSize: pageSize, current: current });
    _this12.setState({ pagination: nextPagination });
    (_props4 = _this12.props).onChange.apply(_props4, (0, _toConsumableArray3.default)(_this12.prepareParamsArguments((0, _extends5.default)({}, _this12.state, {
      pagination: nextPagination
    }))));
  };
};

exports.default = Table;