'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var Transfer = function (_React$Component) {
  (0, _inherits3.default)(Transfer, _React$Component);

  function Transfer(props) {
    (0, _classCallCheck3.default)(this, Transfer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Transfer.__proto__ || (0, _getPrototypeOf2.default)(Transfer)).call(this, props));

    _initialiseProps.call(_this);

    (0, _warning2.default)(!('notFoundContent' in props || 'searchPlaceholder' in props), 'Transfer[notFoundContent] and Transfer[searchPlaceholder] will be removed, ' + 'please use Transfer[locale] instead.');

    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === undefined ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === undefined ? [] : _props$targetKeys;

    _this.state = {
      leftFilter: '',
      rightFilter: '',
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }
  // For high-level customized Transfer @dqaria


  (0, _createClass3.default)(Transfer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _state = this.state,
          sourceSelectedKeys = _state.sourceSelectedKeys,
          targetSelectedKeys = _state.targetSelectedKeys;


      if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
        // clear cached separated dataSource
        this.separatedDataSource = null;

        if (!nextProps.selectedKeys) {
          // clear key no longer existed
          // clear checkedKeys according to targetKeys
          var dataSource = nextProps.dataSource,
              _nextProps$targetKeys = nextProps.targetKeys,
              targetKeys = _nextProps$targetKeys === undefined ? [] : _nextProps$targetKeys;


          var newSourceSelectedKeys = [];
          var newTargetSelectedKeys = [];
          dataSource.forEach(function (_ref) {
            var key = _ref.key;

            if (sourceSelectedKeys.indexOf(key) >= 0 && !targetKeys.indexOf(key) >= 0) {
              newSourceSelectedKeys.push(key);
            }
            if (targetSelectedKeys.indexOf(key) >= 0 && targetKeys.indexOf(key) >= 0) {
              newTargetSelectedKeys.push(key);
            }
          });
          this.setState({
            sourceSelectedKeys: newSourceSelectedKeys,
            targetSelectedKeys: newTargetSelectedKeys
          });
        }
      }

      if (nextProps.selectedKeys) {
        var _targetKeys = nextProps.targetKeys || [];
        this.setState({
          sourceSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return !(_targetKeys.indexOf(key) >= 0);
          }),
          targetSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return _targetKeys.indexOf(key) >= 0;
          })
        });
      }
    }
  }, {
    key: 'separateDataSource',
    value: function separateDataSource(props) {
      if (this.separatedDataSource) {
        return this.separatedDataSource;
      }

      var dataSource = props.dataSource,
          rowKey = props.rowKey,
          _props$targetKeys2 = props.targetKeys,
          targetKeys = _props$targetKeys2 === undefined ? [] : _props$targetKeys2;


      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record.key = rowKey(record);
        }

        // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource
        var indexOfKey = targetKeys.indexOf(record.key);
        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });

      this.separatedDataSource = {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };

      return this.separatedDataSource;
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(direction, holder) {
      var _state2 = this.state,
          sourceSelectedKeys = _state2.sourceSelectedKeys,
          targetSelectedKeys = _state2.targetSelectedKeys;

      var onSelectChange = this.props.onSelectChange;
      if (!onSelectChange) {
        return;
      }

      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: 'getTitles',
    value: function getTitles(transferLocale) {
      var props = this.props;

      if (props.titles) {
        return props.titles;
      }
      return transferLocale.titles;
    }
  }, {
    key: 'getSelectedKeysName',
    value: function getSelectedKeysName(direction) {
      return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Transfer',
          defaultLocale: _default2.default.Transfer
        },
        this.renderTransfer
      );
    }
  }]);
  return Transfer;
}(_react2.default.Component);

Transfer.List = _list2.default;
Transfer.Operation = _operation2.default;
Transfer.Search = _search2.default;
Transfer.defaultProps = {
  dataSource: [],
  render: noop,
  locale: {},
  showSearch: false
};
Transfer.propTypes = {
  prefixCls: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  dataSource: _propTypes2.default.array,
  render: _propTypes2.default.func,
  targetKeys: _propTypes2.default.array,
  onChange: _propTypes2.default.func,
  height: _propTypes2.default.number,
  style: _propTypes2.default.object,
  listStyle: _propTypes2.default.object,
  operationStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  titles: _propTypes2.default.array,
  operations: _propTypes2.default.array,
  showSearch: _propTypes2.default.bool,
  filterOption: _propTypes2.default.func,
  searchPlaceholder: _propTypes2.default.string,
  notFoundContent: _propTypes2.default.node,
  locale: _propTypes2.default.object,
  body: _propTypes2.default.func,
  footer: _propTypes2.default.func,
  rowKey: _propTypes2.default.func,
  lazy: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool])
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.moveTo = function (direction) {
    var _props = _this2.props,
        _props$targetKeys3 = _props.targetKeys,
        targetKeys = _props$targetKeys3 === undefined ? [] : _props$targetKeys3,
        _props$dataSource = _props.dataSource,
        dataSource = _props$dataSource === undefined ? [] : _props$dataSource,
        onChange = _props.onChange;
    var _state3 = _this2.state,
        sourceSelectedKeys = _state3.sourceSelectedKeys,
        targetSelectedKeys = _state3.targetSelectedKeys;

    var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
    // filter the disabled options
    var newMoveKeys = moveKeys.filter(function (key) {
      return !dataSource.some(function (data) {
        return !!(key === data.key && data.disabled);
      });
    });
    // move items to target box
    var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
      return newMoveKeys.indexOf(targetKey) === -1;
    });

    // empty checked keys
    var oppositeDirection = direction === 'right' ? 'left' : 'right';
    _this2.setState((0, _defineProperty3.default)({}, _this2.getSelectedKeysName(oppositeDirection), []));
    _this2.handleSelectChange(oppositeDirection, []);

    if (onChange) {
      onChange(newTargetKeys, direction, newMoveKeys);
    }
  };

  this.moveToLeft = function () {
    return _this2.moveTo('left');
  };

  this.moveToRight = function () {
    return _this2.moveTo('right');
  };

  this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
    var originalSelectedKeys = _this2.state[_this2.getSelectedKeysName(direction)] || [];
    var currentKeys = filteredDataSource.map(function (item) {
      return item.key;
    });
    // Only operate current keys from original selected keys
    var newKeys1 = originalSelectedKeys.filter(function (key) {
      return currentKeys.indexOf(key) === -1;
    });
    var newKeys2 = [].concat((0, _toConsumableArray3.default)(originalSelectedKeys));
    currentKeys.forEach(function (key) {
      if (newKeys2.indexOf(key) === -1) {
        newKeys2.push(key);
      }
    });
    var holder = checkAll ? newKeys1 : newKeys2;
    _this2.handleSelectChange(direction, holder);

    if (!_this2.props.selectedKeys) {
      _this2.setState((0, _defineProperty3.default)({}, _this2.getSelectedKeysName(direction), holder));
    }
  };

  this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('left', filteredDataSource, checkAll);
  };

  this.handleRightSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('right', filteredDataSource, checkAll);
  };

  this.handleFilter = function (direction, e) {
    _this2.setState((0, _defineProperty3.default)({}, direction + 'Filter', e.target.value));
    if (_this2.props.onSearchChange) {
      _this2.props.onSearchChange(direction, e);
    }
  };

  this.handleLeftFilter = function (e) {
    return _this2.handleFilter('left', e);
  };

  this.handleRightFilter = function (e) {
    return _this2.handleFilter('right', e);
  };

  this.handleClear = function (direction) {
    _this2.setState((0, _defineProperty3.default)({}, direction + 'Filter', ''));
  };

  this.handleLeftClear = function () {
    return _this2.handleClear('left');
  };

  this.handleRightClear = function () {
    return _this2.handleClear('right');
  };

  this.handleSelect = function (direction, selectedItem, checked) {
    var _state4 = _this2.state,
        sourceSelectedKeys = _state4.sourceSelectedKeys,
        targetSelectedKeys = _state4.targetSelectedKeys;

    var holder = direction === 'left' ? [].concat((0, _toConsumableArray3.default)(sourceSelectedKeys)) : [].concat((0, _toConsumableArray3.default)(targetSelectedKeys));
    var index = holder.indexOf(selectedItem.key);
    if (index > -1) {
      holder.splice(index, 1);
    }
    if (checked) {
      holder.push(selectedItem.key);
    }
    _this2.handleSelectChange(direction, holder);

    if (!_this2.props.selectedKeys) {
      _this2.setState((0, _defineProperty3.default)({}, _this2.getSelectedKeysName(direction), holder));
    }
  };

  this.handleLeftSelect = function (selectedItem, checked) {
    return _this2.handleSelect('left', selectedItem, checked);
  };

  this.handleRightSelect = function (selectedItem, checked) {
    return _this2.handleSelect('right', selectedItem, checked);
  };

  this.handleScroll = function (direction, e) {
    var onScroll = _this2.props.onScroll;

    if (onScroll) {
      onScroll(direction, e);
    }
  };

  this.handleLeftScroll = function (e) {
    return _this2.handleScroll('left', e);
  };

  this.handleRightScroll = function (e) {
    return _this2.handleScroll('right', e);
  };

  this.getLocale = function (transferLocale) {
    // Keep old locale props still working.
    var oldLocale = {};
    if ('notFoundContent' in _this2.props) {
      oldLocale.notFoundContent = _this2.props.notFoundContent;
    }
    if ('searchPlaceholder' in _this2.props) {
      oldLocale.searchPlaceholder = _this2.props.searchPlaceholder;
    }

    return (0, _extends3.default)({}, transferLocale, oldLocale, _this2.props.locale);
  };

  this.renderTransfer = function (transferLocale) {
    var _props2 = _this2.props,
        _props2$prefixCls = _props2.prefixCls,
        prefixCls = _props2$prefixCls === undefined ? 'idoll-transfer' : _props2$prefixCls,
        className = _props2.className,
        disabled = _props2.disabled,
        _props2$operations = _props2.operations,
        operations = _props2$operations === undefined ? [] : _props2$operations,
        showSearch = _props2.showSearch,
        body = _props2.body,
        footer = _props2.footer,
        style = _props2.style,
        listStyle = _props2.listStyle,
        operationStyle = _props2.operationStyle,
        filterOption = _props2.filterOption,
        render = _props2.render,
        lazy = _props2.lazy;

    var locale = _this2.getLocale(transferLocale);
    var _state5 = _this2.state,
        leftFilter = _state5.leftFilter,
        rightFilter = _state5.rightFilter,
        sourceSelectedKeys = _state5.sourceSelectedKeys,
        targetSelectedKeys = _state5.targetSelectedKeys;

    var _separateDataSource = _this2.separateDataSource(_this2.props),
        leftDataSource = _separateDataSource.leftDataSource,
        rightDataSource = _separateDataSource.rightDataSource;

    var leftActive = targetSelectedKeys.length > 0;
    var rightActive = sourceSelectedKeys.length > 0;

    var cls = (0, _classnames2.default)(className, prefixCls, disabled && prefixCls + '-disabled');
    var operationCls = (0, _classnames2.default)(prefixCls + '-operation');

    var titles = _this2.getTitles(locale);
    return _react2.default.createElement(
      'div',
      { className: cls, style: style },
      _react2.default.createElement(_list2.default, (0, _extends3.default)({
        prefixCls: prefixCls + '-list',
        titleText: titles[0],
        dataSource: leftDataSource,
        filter: leftFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: sourceSelectedKeys,
        handleFilter: _this2.handleLeftFilter,
        handleClear: _this2.handleLeftClear,
        handleSelect: _this2.handleLeftSelect,
        handleSelectAll: _this2.handleLeftSelectAll,
        render: render,
        showSearch: showSearch,
        body: body,
        footer: footer,
        lazy: lazy,
        onScroll: _this2.handleLeftScroll,
        disabled: disabled
      }, locale)),
      _react2.default.createElement(_operation2.default, {
        className: operationCls,
        rightActive: rightActive,
        rightArrowText: operations[0],
        moveToRight: _this2.moveToRight,
        leftActive: leftActive,
        leftArrowText: operations[1],
        moveToLeft: _this2.moveToLeft,
        style: operationStyle,
        disabled: disabled
      }),
      _react2.default.createElement(_list2.default, (0, _extends3.default)({
        prefixCls: prefixCls + '-list',
        titleText: titles[1],
        dataSource: rightDataSource,
        filter: rightFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: targetSelectedKeys,
        handleFilter: _this2.handleRightFilter,
        handleClear: _this2.handleRightClear,
        handleSelect: _this2.handleRightSelect,
        handleSelectAll: _this2.handleRightSelectAll,
        render: render,
        showSearch: showSearch,
        body: body,
        footer: footer,
        lazy: lazy,
        onScroll: _this2.handleRightScroll,
        disabled: disabled
      }, locale))
    );
  };
};

exports.default = Transfer;