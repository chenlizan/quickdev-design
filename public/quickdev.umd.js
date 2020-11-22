(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('babel-runtime/helpers/extends'), require('babel-runtime/helpers/defineProperty'), require('babel-runtime/helpers/objectWithoutProperties'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('prop-types'), require('raf'), require('react-lifecycles-compat'), require('rc-util/lib/KeyCode'), require('@ant-design/create-react-context'), require('core-js/library/fn/object/assign'), require('core-js/library/fn/object/define-property'), require('core-js/library/fn/symbol/iterator'), require('core-js/library/fn/symbol'), require('core-js/library/fn/object/set-prototype-of'), require('core-js/library/fn/object/create'), require('warning'), require('lodash/debounce'), require('resize-observer-polyfill'), require('lodash'), require('react-grid-layout'), require('omit.js'), require('echarts-for-react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'babel-runtime/helpers/extends', 'babel-runtime/helpers/defineProperty', 'babel-runtime/helpers/objectWithoutProperties', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'prop-types', 'raf', 'react-lifecycles-compat', 'rc-util/lib/KeyCode', '@ant-design/create-react-context', 'core-js/library/fn/object/assign', 'core-js/library/fn/object/define-property', 'core-js/library/fn/symbol/iterator', 'core-js/library/fn/symbol', 'core-js/library/fn/object/set-prototype-of', 'core-js/library/fn/object/create', 'warning', 'lodash/debounce', 'resize-observer-polyfill', 'lodash', 'react-grid-layout', 'omit.js', 'echarts-for-react'], factory) :
  (global = global || self, factory(global.quickdev = {}, global.React, global.classNames, global._extends$2, global.defineProperty$3, global.objectWithoutProperties$2, global.classCallCheck$2, global.createClass$2, global.possibleConstructorReturn$2, global.inherits$2, global.propTypes, global.raf, global.reactLifecyclesCompat, global.KeyCode$1, global.createReactContext, global.assign$1, global.defineProperty$4, global.iterator$1, global.symbol$1, global.setPrototypeOf$1, global.create$1, global.warning, global.debounce, global.resizeObserverPolyfill, global._, global.ReactGridLayout, global.omit$3, global.ReactCharts));
}(this, (function (exports, React, classNames, _extends$2, defineProperty$3, objectWithoutProperties$2, classCallCheck$2, createClass$2, possibleConstructorReturn$2, inherits$2, propTypes, raf, reactLifecyclesCompat, KeyCode$1, createReactContext, assign$1, defineProperty$4, iterator$1, symbol$1, setPrototypeOf$1, create$1, warning, debounce, resizeObserverPolyfill, _, ReactGridLayout, omit$3, ReactCharts) { 

  var React__default = 'default' in React ? React['default'] : React;
  classNames = classNames && Object.prototype.hasOwnProperty.call(classNames, 'default') ? classNames['default'] : classNames;
  _extends$2 = _extends$2 && Object.prototype.hasOwnProperty.call(_extends$2, 'default') ? _extends$2['default'] : _extends$2;
  defineProperty$3 = defineProperty$3 && Object.prototype.hasOwnProperty.call(defineProperty$3, 'default') ? defineProperty$3['default'] : defineProperty$3;
  objectWithoutProperties$2 = objectWithoutProperties$2 && Object.prototype.hasOwnProperty.call(objectWithoutProperties$2, 'default') ? objectWithoutProperties$2['default'] : objectWithoutProperties$2;
  classCallCheck$2 = classCallCheck$2 && Object.prototype.hasOwnProperty.call(classCallCheck$2, 'default') ? classCallCheck$2['default'] : classCallCheck$2;
  createClass$2 = createClass$2 && Object.prototype.hasOwnProperty.call(createClass$2, 'default') ? createClass$2['default'] : createClass$2;
  possibleConstructorReturn$2 = possibleConstructorReturn$2 && Object.prototype.hasOwnProperty.call(possibleConstructorReturn$2, 'default') ? possibleConstructorReturn$2['default'] : possibleConstructorReturn$2;
  inherits$2 = inherits$2 && Object.prototype.hasOwnProperty.call(inherits$2, 'default') ? inherits$2['default'] : inherits$2;
  var propTypes__default = 'default' in propTypes ? propTypes['default'] : propTypes;
  raf = raf && Object.prototype.hasOwnProperty.call(raf, 'default') ? raf['default'] : raf;
  reactLifecyclesCompat = reactLifecyclesCompat && Object.prototype.hasOwnProperty.call(reactLifecyclesCompat, 'default') ? reactLifecyclesCompat['default'] : reactLifecyclesCompat;
  KeyCode$1 = KeyCode$1 && Object.prototype.hasOwnProperty.call(KeyCode$1, 'default') ? KeyCode$1['default'] : KeyCode$1;
  createReactContext = createReactContext && Object.prototype.hasOwnProperty.call(createReactContext, 'default') ? createReactContext['default'] : createReactContext;
  assign$1 = assign$1 && Object.prototype.hasOwnProperty.call(assign$1, 'default') ? assign$1['default'] : assign$1;
  defineProperty$4 = defineProperty$4 && Object.prototype.hasOwnProperty.call(defineProperty$4, 'default') ? defineProperty$4['default'] : defineProperty$4;
  iterator$1 = iterator$1 && Object.prototype.hasOwnProperty.call(iterator$1, 'default') ? iterator$1['default'] : iterator$1;
  symbol$1 = symbol$1 && Object.prototype.hasOwnProperty.call(symbol$1, 'default') ? symbol$1['default'] : symbol$1;
  setPrototypeOf$1 = setPrototypeOf$1 && Object.prototype.hasOwnProperty.call(setPrototypeOf$1, 'default') ? setPrototypeOf$1['default'] : setPrototypeOf$1;
  create$1 = create$1 && Object.prototype.hasOwnProperty.call(create$1, 'default') ? create$1['default'] : create$1;
  warning = warning && Object.prototype.hasOwnProperty.call(warning, 'default') ? warning['default'] : warning;
  debounce = debounce && Object.prototype.hasOwnProperty.call(debounce, 'default') ? debounce['default'] : debounce;
  resizeObserverPolyfill = resizeObserverPolyfill && Object.prototype.hasOwnProperty.call(resizeObserverPolyfill, 'default') ? resizeObserverPolyfill['default'] : resizeObserverPolyfill;
  ReactGridLayout = ReactGridLayout && Object.prototype.hasOwnProperty.call(ReactGridLayout, 'default') ? ReactGridLayout['default'] : ReactGridLayout;
  omit$3 = omit$3 && Object.prototype.hasOwnProperty.call(omit$3, 'default') ? omit$3['default'] : omit$3;
  ReactCharts = ReactCharts && Object.prototype.hasOwnProperty.call(ReactCharts, 'default') ? ReactCharts['default'] : ReactCharts;

  var version = "0.1.0";

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var KeyCode = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    /**
     * LEFT
     */
    LEFT: 37,
    // also NUM_WEST

    /**
     * UP
     */
    UP: 38,
    // also NUM_NORTH

    /**
     * RIGHT
     */
    RIGHT: 39,
    // also NUM_EAST

    /**
     * DOWN
     */
    DOWN: 40 // also NUM_SOUTH

  };
  module.exports = exports['default'];
  });

  unwrapExports(KeyCode);

  var utils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);

  exports.toArray = toArray;
  exports.getActiveIndex = getActiveIndex;
  exports.getActiveKey = getActiveKey;
  exports.setTransform = setTransform;
  exports.isTransform3dSupported = isTransform3dSupported;
  exports.setTransition = setTransition;
  exports.getTransformPropValue = getTransformPropValue;
  exports.isVertical = isVertical;
  exports.getTransformByIndex = getTransformByIndex;
  exports.getMarginStyle = getMarginStyle;
  exports.getStyle = getStyle;
  exports.setPxStyle = setPxStyle;
  exports.getDataAttr = getDataAttr;
  exports.getLeft = getLeft;
  exports.getTop = getTop;



  var _react2 = _interopRequireDefault(React__default);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  function toArray(children) {
    // allow [c,[a,b]]
    var c = [];

    _react2['default'].Children.forEach(children, function (child) {
      if (child) {
        c.push(child);
      }
    });

    return c;
  }

  function getActiveIndex(children, activeKey) {
    var c = toArray(children);

    for (var i = 0; i < c.length; i++) {
      if (c[i].key === activeKey) {
        return i;
      }
    }

    return -1;
  }

  function getActiveKey(children, index) {
    var c = toArray(children);
    return c[index].key;
  }

  function setTransform(style, v) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
  }

  function isTransform3dSupported(style) {
    return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
  }

  function setTransition(style, v) {
    style.transition = v;
    style.webkitTransition = v;
    style.MozTransition = v;
  }

  function getTransformPropValue(v) {
    return {
      transform: v,
      WebkitTransform: v,
      MozTransform: v
    };
  }

  function isVertical(tabBarPosition) {
    return tabBarPosition === 'left' || tabBarPosition === 'right';
  }

  function getTransformByIndex(index, tabBarPosition) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
    var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';

    if (!isVertical(tabBarPosition) && direction === 'rtl') {
      return translate + '(' + index * 100 + '%) translateZ(0)';
    }

    return translate + '(' + -index * 100 + '%) translateZ(0)';
  }

  function getMarginStyle(index, tabBarPosition) {
    var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
    return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
  }

  function getStyle(el, property) {
    return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
  }

  function setPxStyle(el, value, vertical) {
    value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
    setTransform(el.style, 'translate3d(' + value + ')');
  }

  function getDataAttr(props) {
    return Object.keys(props).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = props[key];
      }

      return prev;
    }, {});
  }

  function toNum(style, property) {
    return +style.getPropertyValue(property).replace('px', '');
  }

  function getTypeValue(start, current, end, tabNode, wrapperNode) {
    var total = getStyle(wrapperNode, 'padding-' + start);

    if (!tabNode || !tabNode.parentNode) {
      return total;
    }

    var childNodes = tabNode.parentNode.childNodes;
    Array.prototype.some.call(childNodes, function (node) {
      var style = window.getComputedStyle(node);

      if (node !== tabNode) {
        total += toNum(style, 'margin-' + start);
        total += node[current];
        total += toNum(style, 'margin-' + end);

        if (style.boxSizing === 'content-box') {
          total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
        }

        return false;
      } // We need count current node margin
      // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262


      total += toNum(style, 'margin-' + start);
      return true;
    });
    return total;
  }

  function getLeft(tabNode, wrapperNode) {
    return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
  }

  function getTop(tabNode, wrapperNode) {
    return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
  }
  });

  unwrapExports(utils);
  var utils_1 = utils.toArray;
  var utils_2 = utils.getActiveIndex;
  var utils_3 = utils.getActiveKey;
  var utils_4 = utils.setTransform;
  var utils_5 = utils.isTransform3dSupported;
  var utils_6 = utils.setTransition;
  var utils_7 = utils.getTransformPropValue;
  var utils_8 = utils.isVertical;
  var utils_9 = utils.getTransformByIndex;
  var utils_10 = utils.getMarginStyle;
  var utils_11 = utils.getStyle;
  var utils_12 = utils.setPxStyle;
  var utils_13 = utils.getDataAttr;
  var utils_14 = utils.getLeft;
  var utils_15 = utils.getTop;

  var Sentinel_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SentinelConsumer = exports.SentinelProvider = undefined;



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _KeyCode2 = _interopRequireDefault(KeyCode$1);



  var _createReactContext2 = _interopRequireDefault(createReactContext);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */


  var SentinelContext = (0, _createReactContext2['default'])({});
  var SentinelProvider = exports.SentinelProvider = SentinelContext.Provider;
  var SentinelConsumer = exports.SentinelConsumer = SentinelContext.Consumer;
  var sentinelStyle = {
    width: 0,
    height: 0,
    overflow: 'hidden',
    position: 'absolute'
  };

  var Sentinel = function (_React$Component) {
    (0, _inherits3['default'])(Sentinel, _React$Component);

    function Sentinel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3['default'])(this, Sentinel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (_ref2) {
        var target = _ref2.target,
            which = _ref2.which,
            shiftKey = _ref2.shiftKey;
        var _this$props = _this.props,
            nextElement = _this$props.nextElement,
            prevElement = _this$props.prevElement;
        if (which !== _KeyCode2['default'].TAB || document.activeElement !== target) return; // Tab next

        if (!shiftKey && nextElement) {
          nextElement.focus();
        } // Tab prev


        if (shiftKey && prevElement) {
          prevElement.focus();
        }
      }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(Sentinel, [{
      key: 'render',
      value: function render() {
        var setRef = this.props.setRef;
        return _react2['default'].createElement('div', {
          tabIndex: 0,
          ref: setRef,
          style: sentinelStyle,
          onKeyDown: this.onKeyDown,
          role: 'presentation'
        });
      }
    }]);
    return Sentinel;
  }(_react2['default'].Component);

  Sentinel.propTypes = {
    setRef: _propTypes2['default'].func,
    prevElement: _propTypes2['default'].object,
    nextElement: _propTypes2['default'].object
  };
  exports['default'] = Sentinel;
  });

  unwrapExports(Sentinel_1);
  var Sentinel_2 = Sentinel_1.SentinelConsumer;
  var Sentinel_3 = Sentinel_1.SentinelProvider;

  var TabPane_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);





  var _Sentinel2 = _interopRequireDefault(Sentinel_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabPane = function (_React$Component) {
    (0, _inherits3['default'])(TabPane, _React$Component);

    function TabPane() {
      (0, _classCallCheck3['default'])(this, TabPane);
      return (0, _possibleConstructorReturn3['default'])(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabPane, [{
      key: 'render',
      value: function render() {
        var _classnames;

        var _props = this.props,
            id = _props.id,
            className = _props.className,
            destroyInactiveTabPane = _props.destroyInactiveTabPane,
            active = _props.active,
            forceRender = _props.forceRender,
            rootPrefixCls = _props.rootPrefixCls,
            style = _props.style,
            children = _props.children,
            placeholder = _props.placeholder,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['id', 'className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);
        this._isActived = this._isActived || active;
        var prefixCls = rootPrefixCls + '-tabpane';
        var cls = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls, 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inactive', !active), (0, _defineProperty3['default'])(_classnames, prefixCls + '-active', active), (0, _defineProperty3['default'])(_classnames, className, className), _classnames));
        var isRender = destroyInactiveTabPane ? active : this._isActived;
        var shouldRender = isRender || forceRender;
        return _react2['default'].createElement(Sentinel_1.SentinelConsumer, null, function (_ref) {
          var sentinelStart = _ref.sentinelStart,
              sentinelEnd = _ref.sentinelEnd,
              setPanelSentinelStart = _ref.setPanelSentinelStart,
              setPanelSentinelEnd = _ref.setPanelSentinelEnd; // Create sentinel

          var panelSentinelStart = void 0;
          var panelSentinelEnd = void 0;

          if (active && shouldRender) {
            panelSentinelStart = _react2['default'].createElement(_Sentinel2['default'], {
              setRef: setPanelSentinelStart,
              prevElement: sentinelStart
            });
            panelSentinelEnd = _react2['default'].createElement(_Sentinel2['default'], {
              setRef: setPanelSentinelEnd,
              nextElement: sentinelEnd
            });
          }

          return _react2['default'].createElement('div', (0, _extends3['default'])({
            style: style,
            role: 'tabpanel',
            'aria-hidden': active ? 'false' : 'true',
            className: cls,
            id: id
          }, (0, utils.getDataAttr)(restProps)), panelSentinelStart, shouldRender ? children : placeholder, panelSentinelEnd);
        });
      }
    }]);
    return TabPane;
  }(_react2['default'].Component);

  exports['default'] = TabPane;
  TabPane.propTypes = {
    className: _propTypes2['default'].string,
    active: _propTypes2['default'].bool,
    style: _propTypes2['default'].any,
    destroyInactiveTabPane: _propTypes2['default'].bool,
    forceRender: _propTypes2['default'].bool,
    placeholder: _propTypes2['default'].node,
    rootPrefixCls: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    id: _propTypes2['default'].string
  };
  TabPane.defaultProps = {
    placeholder: null
  };
  module.exports = exports['default'];
  });

  unwrapExports(TabPane_1);

  var Tabs_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  var _raf2 = _interopRequireDefault(raf);





  var _KeyCode2 = _interopRequireDefault(KeyCode);



  var _TabPane2 = _interopRequireDefault(TabPane_1);





  var _Sentinel2 = _interopRequireDefault(Sentinel_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  function noop() {}

  function getDefaultActiveKey(props) {
    var activeKey = void 0;

    _react2['default'].Children.forEach(props.children, function (child) {
      if (child && !activeKey && !child.props.disabled) {
        activeKey = child.key;
      }
    });

    return activeKey;
  }

  function activeKeyIsValid(props, key) {
    var keys = _react2['default'].Children.map(props.children, function (child) {
      return child && child.key;
    });

    return keys.indexOf(key) >= 0;
  }

  var Tabs = function (_React$Component) {
    (0, _inherits3['default'])(Tabs, _React$Component);

    function Tabs(props) {
      (0, _classCallCheck3['default'])(this, Tabs);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

      _initialiseProps.call(_this);

      var activeKey = void 0;

      if ('activeKey' in props) {
        activeKey = props.activeKey;
      } else if ('defaultActiveKey' in props) {
        activeKey = props.defaultActiveKey;
      } else {
        activeKey = getDefaultActiveKey(props);
      }

      _this.state = {
        activeKey: activeKey
      };
      return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.destroy = true;

        _raf2['default'].cancel(this.sentinelId);
      } // Sentinel for tab index

    }, {
      key: 'updateSentinelContext',
      value: function updateSentinelContext() {
        var _this2 = this;

        if (this.destroy) return;

        _raf2['default'].cancel(this.sentinelId);

        this.sentinelId = (0, _raf2['default'])(function () {
          if (_this2.destroy) return;

          _this2.forceUpdate();
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames;

        var props = this.props;
        var prefixCls = props.prefixCls,
            navWrapper = props.navWrapper,
            tabBarPosition = props.tabBarPosition,
            className = props.className,
            renderTabContent = props.renderTabContent,
            renderTabBar = props.renderTabBar,
            destroyInactiveTabPane = props.destroyInactiveTabPane,
            direction = props.direction,
            restProps = (0, _objectWithoutProperties3['default'])(props, ['prefixCls', 'navWrapper', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane', 'direction']);
        var cls = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls, 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-' + tabBarPosition, 1), (0, _defineProperty3['default'])(_classnames, className, !!className), (0, _defineProperty3['default'])(_classnames, prefixCls + '-rtl', direction === 'rtl'), _classnames));
        this.tabBar = renderTabBar();

        var tabBar = _react2['default'].cloneElement(this.tabBar, {
          prefixCls: prefixCls,
          navWrapper: navWrapper,
          key: 'tabBar',
          onKeyDown: this.onNavKeyDown,
          tabBarPosition: tabBarPosition,
          onTabClick: this.onTabClick,
          panels: props.children,
          activeKey: this.state.activeKey,
          direction: this.props.direction
        });

        var tabContent = _react2['default'].cloneElement(renderTabContent(), {
          prefixCls: prefixCls,
          tabBarPosition: tabBarPosition,
          activeKey: this.state.activeKey,
          destroyInactiveTabPane: destroyInactiveTabPane,
          children: props.children,
          onChange: this.setActiveKey,
          key: 'tabContent',
          direction: this.props.direction
        });

        var sentinelStart = _react2['default'].createElement(_Sentinel2['default'], {
          key: 'sentinelStart',
          setRef: this.setSentinelStart,
          nextElement: this.panelSentinelStart
        });

        var sentinelEnd = _react2['default'].createElement(_Sentinel2['default'], {
          key: 'sentinelEnd',
          setRef: this.setSentinelEnd,
          prevElement: this.panelSentinelEnd
        });

        var contents = [];

        if (tabBarPosition === 'bottom') {
          contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
        } else {
          contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
        }

        return _react2['default'].createElement(Sentinel_1.SentinelProvider, {
          value: {
            sentinelStart: this.sentinelStart,
            sentinelEnd: this.sentinelEnd,
            setPanelSentinelStart: this.setPanelSentinelStart,
            setPanelSentinelEnd: this.setPanelSentinelEnd
          }
        }, _react2['default'].createElement('div', (0, _extends3['default'])({
          className: cls,
          style: props.style
        }, (0, utils.getDataAttr)(restProps), {
          onScroll: this.onScroll
        }), contents));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        var newState = {};

        if ('activeKey' in props) {
          newState.activeKey = props.activeKey;
        } else if (!activeKeyIsValid(props, state.activeKey)) {
          newState.activeKey = getDefaultActiveKey(props);
        }

        if (Object.keys(newState).length > 0) {
          return newState;
        }

        return null;
      }
    }]);
    return Tabs;
  }(_react2['default'].Component);

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onTabClick = function (activeKey, e) {
      if (_this3.tabBar.props.onTabClick) {
        _this3.tabBar.props.onTabClick(activeKey, e);
      }

      _this3.setActiveKey(activeKey);
    };

    this.onNavKeyDown = function (e) {
      var eventKeyCode = e.keyCode;

      if (eventKeyCode === _KeyCode2['default'].RIGHT || eventKeyCode === _KeyCode2['default'].DOWN) {
        e.preventDefault();

        var nextKey = _this3.getNextActiveKey(true);

        _this3.onTabClick(nextKey);
      } else if (eventKeyCode === _KeyCode2['default'].LEFT || eventKeyCode === _KeyCode2['default'].UP) {
        e.preventDefault();

        var previousKey = _this3.getNextActiveKey(false);

        _this3.onTabClick(previousKey);
      }
    };

    this.onScroll = function (_ref) {
      var target = _ref.target,
          currentTarget = _ref.currentTarget;

      if (target === currentTarget && target.scrollLeft > 0) {
        target.scrollLeft = 0;
      }
    };

    this.setSentinelStart = function (node) {
      _this3.sentinelStart = node;
    };

    this.setSentinelEnd = function (node) {
      _this3.sentinelEnd = node;
    };

    this.setPanelSentinelStart = function (node) {
      if (node !== _this3.panelSentinelStart) {
        _this3.updateSentinelContext();
      }

      _this3.panelSentinelStart = node;
    };

    this.setPanelSentinelEnd = function (node) {
      if (node !== _this3.panelSentinelEnd) {
        _this3.updateSentinelContext();
      }

      _this3.panelSentinelEnd = node;
    };

    this.setActiveKey = function (activeKey) {
      if (_this3.state.activeKey !== activeKey) {
        if (!('activeKey' in _this3.props)) {
          _this3.setState({
            activeKey: activeKey
          });
        }

        _this3.props.onChange(activeKey);
      }
    };

    this.getNextActiveKey = function (next) {
      var activeKey = _this3.state.activeKey;
      var children = [];

      _react2['default'].Children.forEach(_this3.props.children, function (c) {
        if (c && !c.props.disabled) {
          if (next) {
            children.push(c);
          } else {
            children.unshift(c);
          }
        }
      });

      var length = children.length;
      var ret = length && children[0].key;
      children.forEach(function (child, i) {
        if (child.key === activeKey) {
          if (i === length - 1) {
            ret = children[0].key;
          } else {
            ret = children[i + 1].key;
          }
        }
      });
      return ret;
    };
  };

  Tabs.propTypes = {
    destroyInactiveTabPane: _propTypes2['default'].bool,
    renderTabBar: _propTypes2['default'].func.isRequired,
    renderTabContent: _propTypes2['default'].func.isRequired,
    navWrapper: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    children: _propTypes2['default'].node,
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    tabBarPosition: _propTypes2['default'].string,
    style: _propTypes2['default'].object,
    activeKey: _propTypes2['default'].string,
    defaultActiveKey: _propTypes2['default'].string,
    direction: _propTypes2['default'].string
  };
  Tabs.defaultProps = {
    prefixCls: 'rc-tabs',
    destroyInactiveTabPane: false,
    onChange: noop,
    navWrapper: function navWrapper(arg) {
      return arg;
    },
    tabBarPosition: 'top',
    children: null,
    style: {},
    direction: 'ltr'
  };
  Tabs.TabPane = _TabPane2['default'];
  (0, reactLifecyclesCompat.polyfill)(Tabs);
  exports['default'] = Tabs;
  module.exports = exports['default'];
  });

  unwrapExports(Tabs_1);

  var TabPane_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);





  var _Sentinel2 = _interopRequireDefault(Sentinel_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabPane = function (_React$Component) {
    (0, _inherits3['default'])(TabPane, _React$Component);

    function TabPane() {
      (0, _classCallCheck3['default'])(this, TabPane);
      return (0, _possibleConstructorReturn3['default'])(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabPane, [{
      key: 'render',
      value: function render() {
        var _classnames;

        var _props = this.props,
            id = _props.id,
            className = _props.className,
            destroyInactiveTabPane = _props.destroyInactiveTabPane,
            active = _props.active,
            forceRender = _props.forceRender,
            rootPrefixCls = _props.rootPrefixCls,
            style = _props.style,
            children = _props.children,
            placeholder = _props.placeholder,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['id', 'className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);
        this._isActived = this._isActived || active;
        var prefixCls = rootPrefixCls + '-tabpane';
        var cls = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls, 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inactive', !active), (0, _defineProperty3['default'])(_classnames, prefixCls + '-active', active), (0, _defineProperty3['default'])(_classnames, className, className), _classnames));
        var isRender = destroyInactiveTabPane ? active : this._isActived;
        var shouldRender = isRender || forceRender;
        return _react2['default'].createElement(Sentinel_1.SentinelConsumer, null, function (_ref) {
          var sentinelStart = _ref.sentinelStart,
              sentinelEnd = _ref.sentinelEnd,
              setPanelSentinelStart = _ref.setPanelSentinelStart,
              setPanelSentinelEnd = _ref.setPanelSentinelEnd; // Create sentinel

          var panelSentinelStart = void 0;
          var panelSentinelEnd = void 0;

          if (active && shouldRender) {
            panelSentinelStart = _react2['default'].createElement(_Sentinel2['default'], {
              setRef: setPanelSentinelStart,
              prevElement: sentinelStart
            });
            panelSentinelEnd = _react2['default'].createElement(_Sentinel2['default'], {
              setRef: setPanelSentinelEnd,
              nextElement: sentinelEnd
            });
          }

          return _react2['default'].createElement('div', (0, _extends3['default'])({
            style: style,
            role: 'tabpanel',
            'aria-hidden': active ? 'false' : 'true',
            className: cls,
            id: id
          }, (0, utils.getDataAttr)(restProps)), panelSentinelStart, shouldRender ? children : placeholder, panelSentinelEnd);
        });
      }
    }]);
    return TabPane;
  }(_react2['default'].Component);

  exports['default'] = TabPane;
  TabPane.propTypes = {
    className: _propTypes2['default'].string,
    active: _propTypes2['default'].bool,
    style: _propTypes2['default'].any,
    destroyInactiveTabPane: _propTypes2['default'].bool,
    forceRender: _propTypes2['default'].bool,
    placeholder: _propTypes2['default'].node,
    rootPrefixCls: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    id: _propTypes2['default'].string
  };
  TabPane.defaultProps = {
    placeholder: null
  };
  module.exports = exports['default'];
  });

  unwrapExports(TabPane_1$1);

  var assign = createCommonjsModule(function (module) {
  module.exports = {
    "default": assign$1,
    __esModule: true
  };
  });

  unwrapExports(assign);

  var _extends = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _assign2 = _interopRequireDefault(assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  });

  unwrapExports(_extends);

  var defineProperty = createCommonjsModule(function (module) {
  module.exports = {
    "default": defineProperty$4,
    __esModule: true
  };
  });

  unwrapExports(defineProperty);

  var defineProperty$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (obj, key, value) {
    if (key in obj) {
      (0, _defineProperty2.default)(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };
  });

  unwrapExports(defineProperty$1);

  var classCallCheck = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  });

  unwrapExports(classCallCheck);

  var createClass = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  });

  unwrapExports(createClass);

  var iterator = createCommonjsModule(function (module) {
  module.exports = {
    "default": iterator$1,
    __esModule: true
  };
  });

  unwrapExports(iterator);

  var symbol = createCommonjsModule(function (module) {
  module.exports = {
    "default": symbol$1,
    __esModule: true
  };
  });

  unwrapExports(symbol);

  var _typeof_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _iterator2 = _interopRequireDefault(iterator);



  var _symbol2 = _interopRequireDefault(symbol);

  var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
  };

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  };
  });

  unwrapExports(_typeof_1);

  var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };
  });

  unwrapExports(possibleConstructorReturn);

  var setPrototypeOf = createCommonjsModule(function (module) {
  module.exports = {
    "default": setPrototypeOf$1,
    __esModule: true
  };
  });

  unwrapExports(setPrototypeOf);

  var create = createCommonjsModule(function (module) {
  module.exports = {
    "default": create$1,
    __esModule: true
  };
  });

  unwrapExports(create);

  var inherits = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



  var _create2 = _interopRequireDefault(create);



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }

    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };
  });

  unwrapExports(inherits);

  var utils$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);

  exports.toArray = toArray;
  exports.getActiveIndex = getActiveIndex;
  exports.getActiveKey = getActiveKey;
  exports.setTransform = setTransform;
  exports.isTransform3dSupported = isTransform3dSupported;
  exports.setTransition = setTransition;
  exports.getTransformPropValue = getTransformPropValue;
  exports.isVertical = isVertical;
  exports.getTransformByIndex = getTransformByIndex;
  exports.getMarginStyle = getMarginStyle;
  exports.getStyle = getStyle;
  exports.setPxStyle = setPxStyle;
  exports.getDataAttr = getDataAttr;
  exports.getLeft = getLeft;
  exports.getTop = getTop;



  var _react2 = _interopRequireDefault(React__default);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  function toArray(children) {
    // allow [c,[a,b]]
    var c = [];

    _react2['default'].Children.forEach(children, function (child) {
      if (child) {
        c.push(child);
      }
    });

    return c;
  }

  function getActiveIndex(children, activeKey) {
    var c = toArray(children);

    for (var i = 0; i < c.length; i++) {
      if (c[i].key === activeKey) {
        return i;
      }
    }

    return -1;
  }

  function getActiveKey(children, index) {
    var c = toArray(children);
    return c[index].key;
  }

  function setTransform(style, v) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
  }

  function isTransform3dSupported(style) {
    return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
  }

  function setTransition(style, v) {
    style.transition = v;
    style.webkitTransition = v;
    style.MozTransition = v;
  }

  function getTransformPropValue(v) {
    return {
      transform: v,
      WebkitTransform: v,
      MozTransform: v
    };
  }

  function isVertical(tabBarPosition) {
    return tabBarPosition === 'left' || tabBarPosition === 'right';
  }

  function getTransformByIndex(index, tabBarPosition) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
    var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';

    if (!isVertical(tabBarPosition) && direction === 'rtl') {
      return translate + '(' + index * 100 + '%) translateZ(0)';
    }

    return translate + '(' + -index * 100 + '%) translateZ(0)';
  }

  function getMarginStyle(index, tabBarPosition) {
    var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
    return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
  }

  function getStyle(el, property) {
    return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
  }

  function setPxStyle(el, value, vertical) {
    value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
    setTransform(el.style, 'translate3d(' + value + ')');
  }

  function getDataAttr(props) {
    return Object.keys(props).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = props[key];
      }

      return prev;
    }, {});
  }

  function toNum(style, property) {
    return +style.getPropertyValue(property).replace('px', '');
  }

  function getTypeValue(start, current, end, tabNode, wrapperNode) {
    var total = getStyle(wrapperNode, 'padding-' + start);

    if (!tabNode || !tabNode.parentNode) {
      return total;
    }

    var childNodes = tabNode.parentNode.childNodes;
    Array.prototype.some.call(childNodes, function (node) {
      var style = window.getComputedStyle(node);

      if (node !== tabNode) {
        total += toNum(style, 'margin-' + start);
        total += node[current];
        total += toNum(style, 'margin-' + end);

        if (style.boxSizing === 'content-box') {
          total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
        }

        return false;
      } // We need count current node margin
      // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262


      total += toNum(style, 'margin-' + start);
      return true;
    });
    return total;
  }

  function getLeft(tabNode, wrapperNode) {
    return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
  }

  function getTop(tabNode, wrapperNode) {
    return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
  }
  });

  unwrapExports(utils$1);
  var utils_1$1 = utils$1.toArray;
  var utils_2$1 = utils$1.getActiveIndex;
  var utils_3$1 = utils$1.getActiveKey;
  var utils_4$1 = utils$1.setTransform;
  var utils_5$1 = utils$1.isTransform3dSupported;
  var utils_6$1 = utils$1.setTransition;
  var utils_7$1 = utils$1.getTransformPropValue;
  var utils_8$1 = utils$1.isVertical;
  var utils_9$1 = utils$1.getTransformByIndex;
  var utils_10$1 = utils$1.getMarginStyle;
  var utils_11$1 = utils$1.getStyle;
  var utils_12$1 = utils$1.setPxStyle;
  var utils_13$1 = utils$1.getDataAttr;
  var utils_14$1 = utils$1.getLeft;
  var utils_15$1 = utils$1.getTop;

  var _extends$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _assign2 = _interopRequireDefault(assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  });

  unwrapExports(_extends$1);

  var defineProperty$2 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (obj, key, value) {
    if (key in obj) {
      (0, _defineProperty2.default)(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };
  });

  unwrapExports(defineProperty$2);

  var classCallCheck$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  });

  unwrapExports(classCallCheck$1);

  var createClass$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  });

  unwrapExports(createClass$1);

  var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };
  });

  unwrapExports(possibleConstructorReturn$1);

  var inherits$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



  var _create2 = _interopRequireDefault(create);



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }

    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };
  });

  unwrapExports(inherits$1);

  var TabContent_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _defineProperty3 = _interopRequireDefault(defineProperty$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$1);



  var _createClass3 = _interopRequireDefault(createClass$1);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$1);



  var _inherits3 = _interopRequireDefault(inherits$1);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabContent = function (_React$Component) {
    (0, _inherits3['default'])(TabContent, _React$Component);

    function TabContent() {
      (0, _classCallCheck3['default'])(this, TabContent);
      return (0, _possibleConstructorReturn3['default'])(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabContent, [{
      key: 'getTabPanes',
      value: function getTabPanes() {
        var props = this.props;
        var activeKey = props.activeKey;
        var children = props.children;
        var newChildren = [];

        _react2['default'].Children.forEach(children, function (child) {
          if (!child) {
            return;
          }

          var key = child.key;
          var active = activeKey === key;
          newChildren.push(_react2['default'].cloneElement(child, {
            active: active,
            destroyInactiveTabPane: props.destroyInactiveTabPane,
            rootPrefixCls: props.prefixCls
          }));
        });

        return newChildren;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames;

        var props = this.props;
        var prefixCls = props.prefixCls,
            children = props.children,
            activeKey = props.activeKey,
            className = props.className,
            tabBarPosition = props.tabBarPosition,
            animated = props.animated,
            animatedWithMargin = props.animatedWithMargin,
            direction = props.direction;
        var style = props.style;
        var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-content', true), (0, _defineProperty3['default'])(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames), className);

        if (animated) {
          var activeIndex = (0, utils.getActiveIndex)(children, activeKey);

          if (activeIndex !== -1) {
            var animatedStyle = animatedWithMargin ? (0, utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, utils.getTransformPropValue)((0, utils.getTransformByIndex)(activeIndex, tabBarPosition, direction));
            style = (0, _extends3['default'])({}, style, animatedStyle);
          } else {
            style = (0, _extends3['default'])({}, style, {
              display: 'none'
            });
          }
        }

        return _react2['default'].createElement('div', {
          className: classes,
          style: style
        }, this.getTabPanes());
      }
    }]);
    return TabContent;
  }(_react2['default'].Component);

  exports['default'] = TabContent;
  TabContent.propTypes = {
    animated: _propTypes2['default'].bool,
    animatedWithMargin: _propTypes2['default'].bool,
    prefixCls: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    activeKey: _propTypes2['default'].string,
    style: _propTypes2['default'].any,
    tabBarPosition: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    destroyInactiveTabPane: _propTypes2['default'].bool,
    direction: _propTypes2['default'].string
  };
  TabContent.defaultProps = {
    animated: true
  };
  module.exports = exports['default'];
  });

  var TabContent = unwrapExports(TabContent_1);

  var Tabs_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  var _raf2 = _interopRequireDefault(raf);





  var _KeyCode2 = _interopRequireDefault(KeyCode);



  var _TabPane2 = _interopRequireDefault(TabPane_1);





  var _Sentinel2 = _interopRequireDefault(Sentinel_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  function noop() {}

  function getDefaultActiveKey(props) {
    var activeKey = void 0;

    _react2['default'].Children.forEach(props.children, function (child) {
      if (child && !activeKey && !child.props.disabled) {
        activeKey = child.key;
      }
    });

    return activeKey;
  }

  function activeKeyIsValid(props, key) {
    var keys = _react2['default'].Children.map(props.children, function (child) {
      return child && child.key;
    });

    return keys.indexOf(key) >= 0;
  }

  var Tabs = function (_React$Component) {
    (0, _inherits3['default'])(Tabs, _React$Component);

    function Tabs(props) {
      (0, _classCallCheck3['default'])(this, Tabs);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

      _initialiseProps.call(_this);

      var activeKey = void 0;

      if ('activeKey' in props) {
        activeKey = props.activeKey;
      } else if ('defaultActiveKey' in props) {
        activeKey = props.defaultActiveKey;
      } else {
        activeKey = getDefaultActiveKey(props);
      }

      _this.state = {
        activeKey: activeKey
      };
      return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.destroy = true;

        _raf2['default'].cancel(this.sentinelId);
      } // Sentinel for tab index

    }, {
      key: 'updateSentinelContext',
      value: function updateSentinelContext() {
        var _this2 = this;

        if (this.destroy) return;

        _raf2['default'].cancel(this.sentinelId);

        this.sentinelId = (0, _raf2['default'])(function () {
          if (_this2.destroy) return;

          _this2.forceUpdate();
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames;

        var props = this.props;
        var prefixCls = props.prefixCls,
            navWrapper = props.navWrapper,
            tabBarPosition = props.tabBarPosition,
            className = props.className,
            renderTabContent = props.renderTabContent,
            renderTabBar = props.renderTabBar,
            destroyInactiveTabPane = props.destroyInactiveTabPane,
            direction = props.direction,
            restProps = (0, _objectWithoutProperties3['default'])(props, ['prefixCls', 'navWrapper', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane', 'direction']);
        var cls = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls, 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-' + tabBarPosition, 1), (0, _defineProperty3['default'])(_classnames, className, !!className), (0, _defineProperty3['default'])(_classnames, prefixCls + '-rtl', direction === 'rtl'), _classnames));
        this.tabBar = renderTabBar();

        var tabBar = _react2['default'].cloneElement(this.tabBar, {
          prefixCls: prefixCls,
          navWrapper: navWrapper,
          key: 'tabBar',
          onKeyDown: this.onNavKeyDown,
          tabBarPosition: tabBarPosition,
          onTabClick: this.onTabClick,
          panels: props.children,
          activeKey: this.state.activeKey,
          direction: this.props.direction
        });

        var tabContent = _react2['default'].cloneElement(renderTabContent(), {
          prefixCls: prefixCls,
          tabBarPosition: tabBarPosition,
          activeKey: this.state.activeKey,
          destroyInactiveTabPane: destroyInactiveTabPane,
          children: props.children,
          onChange: this.setActiveKey,
          key: 'tabContent',
          direction: this.props.direction
        });

        var sentinelStart = _react2['default'].createElement(_Sentinel2['default'], {
          key: 'sentinelStart',
          setRef: this.setSentinelStart,
          nextElement: this.panelSentinelStart
        });

        var sentinelEnd = _react2['default'].createElement(_Sentinel2['default'], {
          key: 'sentinelEnd',
          setRef: this.setSentinelEnd,
          prevElement: this.panelSentinelEnd
        });

        var contents = [];

        if (tabBarPosition === 'bottom') {
          contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
        } else {
          contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
        }

        return _react2['default'].createElement(Sentinel_1.SentinelProvider, {
          value: {
            sentinelStart: this.sentinelStart,
            sentinelEnd: this.sentinelEnd,
            setPanelSentinelStart: this.setPanelSentinelStart,
            setPanelSentinelEnd: this.setPanelSentinelEnd
          }
        }, _react2['default'].createElement('div', (0, _extends3['default'])({
          className: cls,
          style: props.style
        }, (0, utils.getDataAttr)(restProps), {
          onScroll: this.onScroll
        }), contents));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, state) {
        var newState = {};

        if ('activeKey' in props) {
          newState.activeKey = props.activeKey;
        } else if (!activeKeyIsValid(props, state.activeKey)) {
          newState.activeKey = getDefaultActiveKey(props);
        }

        if (Object.keys(newState).length > 0) {
          return newState;
        }

        return null;
      }
    }]);
    return Tabs;
  }(_react2['default'].Component);

  var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onTabClick = function (activeKey, e) {
      if (_this3.tabBar.props.onTabClick) {
        _this3.tabBar.props.onTabClick(activeKey, e);
      }

      _this3.setActiveKey(activeKey);
    };

    this.onNavKeyDown = function (e) {
      var eventKeyCode = e.keyCode;

      if (eventKeyCode === _KeyCode2['default'].RIGHT || eventKeyCode === _KeyCode2['default'].DOWN) {
        e.preventDefault();

        var nextKey = _this3.getNextActiveKey(true);

        _this3.onTabClick(nextKey);
      } else if (eventKeyCode === _KeyCode2['default'].LEFT || eventKeyCode === _KeyCode2['default'].UP) {
        e.preventDefault();

        var previousKey = _this3.getNextActiveKey(false);

        _this3.onTabClick(previousKey);
      }
    };

    this.onScroll = function (_ref) {
      var target = _ref.target,
          currentTarget = _ref.currentTarget;

      if (target === currentTarget && target.scrollLeft > 0) {
        target.scrollLeft = 0;
      }
    };

    this.setSentinelStart = function (node) {
      _this3.sentinelStart = node;
    };

    this.setSentinelEnd = function (node) {
      _this3.sentinelEnd = node;
    };

    this.setPanelSentinelStart = function (node) {
      if (node !== _this3.panelSentinelStart) {
        _this3.updateSentinelContext();
      }

      _this3.panelSentinelStart = node;
    };

    this.setPanelSentinelEnd = function (node) {
      if (node !== _this3.panelSentinelEnd) {
        _this3.updateSentinelContext();
      }

      _this3.panelSentinelEnd = node;
    };

    this.setActiveKey = function (activeKey) {
      if (_this3.state.activeKey !== activeKey) {
        if (!('activeKey' in _this3.props)) {
          _this3.setState({
            activeKey: activeKey
          });
        }

        _this3.props.onChange(activeKey);
      }
    };

    this.getNextActiveKey = function (next) {
      var activeKey = _this3.state.activeKey;
      var children = [];

      _react2['default'].Children.forEach(_this3.props.children, function (c) {
        if (c && !c.props.disabled) {
          if (next) {
            children.push(c);
          } else {
            children.unshift(c);
          }
        }
      });

      var length = children.length;
      var ret = length && children[0].key;
      children.forEach(function (child, i) {
        if (child.key === activeKey) {
          if (i === length - 1) {
            ret = children[0].key;
          } else {
            ret = children[i + 1].key;
          }
        }
      });
      return ret;
    };
  };

  Tabs.propTypes = {
    destroyInactiveTabPane: _propTypes2['default'].bool,
    renderTabBar: _propTypes2['default'].func.isRequired,
    renderTabContent: _propTypes2['default'].func.isRequired,
    navWrapper: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    children: _propTypes2['default'].node,
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    tabBarPosition: _propTypes2['default'].string,
    style: _propTypes2['default'].object,
    activeKey: _propTypes2['default'].string,
    defaultActiveKey: _propTypes2['default'].string,
    direction: _propTypes2['default'].string
  };
  Tabs.defaultProps = {
    prefixCls: 'rc-tabs',
    destroyInactiveTabPane: false,
    onChange: noop,
    navWrapper: function navWrapper(arg) {
      return arg;
    },
    tabBarPosition: 'top',
    children: null,
    style: {},
    direction: 'ltr'
  };
  Tabs.TabPane = _TabPane2['default'];
  (0, reactLifecyclesCompat.polyfill)(Tabs);
  exports['default'] = Tabs;
  module.exports = exports['default'];
  });

  unwrapExports(Tabs_1$1);

  var E__github_quickdevLib_node_modules_rcTabs_lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TabContent = exports.TabPane = undefined;



  var _Tabs2 = _interopRequireDefault(Tabs_1$1);



  var _TabPane2 = _interopRequireDefault(TabPane_1);



  var _TabContent2 = _interopRequireDefault(TabContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  exports['default'] = _Tabs2['default'];
  exports.TabPane = _TabPane2['default'];
  exports.TabContent = _TabContent2['default'];
  });

  var Tabs = unwrapExports(E__github_quickdevLib_node_modules_rcTabs_lib);
  var E__github_quickdevLib_node_modules_rcTabs_lib_1 = E__github_quickdevLib_node_modules_rcTabs_lib.TabContent;
  var E__github_quickdevLib_node_modules_rcTabs_lib_2 = E__github_quickdevLib_node_modules_rcTabs_lib.TabPane;

  var objectWithoutProperties = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };
  });

  unwrapExports(objectWithoutProperties);

  var InkTabBarNode_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  function _componentDidUpdate(component, init) {
    var _component$props = component.props,
        styles = _component$props.styles,
        panels = _component$props.panels,
        activeKey = _component$props.activeKey,
        direction = _component$props.direction;
    var rootNode = component.props.getRef('root');
    var wrapNode = component.props.getRef('nav') || rootNode;
    var inkBarNode = component.props.getRef('inkBar');
    var activeTab = component.props.getRef('activeTab');
    var inkBarNodeStyle = inkBarNode.style;
    var tabBarPosition = component.props.tabBarPosition;
    var activeIndex = (0, utils.getActiveIndex)(panels, activeKey);

    if (init) {
      // prevent mount animation
      inkBarNodeStyle.display = 'none';
    }

    if (activeTab) {
      var tabNode = activeTab;
      var transformSupported = (0, utils.isTransform3dSupported)(inkBarNodeStyle); // Reset current style

      (0, utils.setTransform)(inkBarNodeStyle, '');
      inkBarNodeStyle.width = '';
      inkBarNodeStyle.height = '';
      inkBarNodeStyle.left = '';
      inkBarNodeStyle.top = '';
      inkBarNodeStyle.bottom = '';
      inkBarNodeStyle.right = '';

      if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
        var left = (0, utils.getLeft)(tabNode, wrapNode);
        var width = tabNode.offsetWidth; // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
        // It means no css working, then ink bar should not have width until css is loaded
        // Fix https://github.com/ant-design/ant-design/issues/7564

        if (width === rootNode.offsetWidth) {
          width = 0;
        } else if (styles.inkBar && styles.inkBar.width !== undefined) {
          width = parseFloat(styles.inkBar.width, 10);

          if (width) {
            left += (tabNode.offsetWidth - width) / 2;
          }
        }

        if (direction === 'rtl') {
          left = (0, utils.getStyle)(tabNode, 'margin-left') - left;
        } // use 3d gpu to optimize render


        if (transformSupported) {
          (0, utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
        } else {
          inkBarNodeStyle.left = left + 'px';
        }

        inkBarNodeStyle.width = width + 'px';
      } else {
        var top = (0, utils.getTop)(tabNode, wrapNode, true);
        var height = tabNode.offsetHeight;

        if (styles.inkBar && styles.inkBar.height !== undefined) {
          height = parseFloat(styles.inkBar.height, 10);

          if (height) {
            top += (tabNode.offsetHeight - height) / 2;
          }
        }

        if (transformSupported) {
          (0, utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
          inkBarNodeStyle.top = '0';
        } else {
          inkBarNodeStyle.top = top + 'px';
        }

        inkBarNodeStyle.height = height + 'px';
      }
    }

    inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
  }

  var InkTabBarNode = function (_React$Component) {
    (0, _inherits3['default'])(InkTabBarNode, _React$Component);

    function InkTabBarNode() {
      (0, _classCallCheck3['default'])(this, InkTabBarNode);
      return (0, _possibleConstructorReturn3['default'])(this, (InkTabBarNode.__proto__ || Object.getPrototypeOf(InkTabBarNode)).apply(this, arguments));
    }

    (0, _createClass3['default'])(InkTabBarNode, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this; // ref https://github.com/ant-design/ant-design/issues/8678
        // ref https://github.com/react-component/tabs/issues/135
        // InkTabBarNode need parent/root ref for calculating position
        // since parent componentDidMount triggered after child componentDidMount
        // we're doing a quick fix here to use setTimeout to calculate position
        // after parent/root component mounted


        this.timeout = setTimeout(function () {
          _componentDidUpdate(_this2, true);
        }, 0);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        _componentDidUpdate(this);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.timeout);
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            styles = _props.styles,
            inkBarAnimated = _props.inkBarAnimated;
        var className = prefixCls + '-ink-bar';
        var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
        return _react2['default'].createElement('div', {
          style: styles.inkBar,
          className: classes,
          key: 'inkBar',
          ref: this.props.saveRef('inkBar')
        });
      }
    }]);
    return InkTabBarNode;
  }(_react2['default'].Component);

  exports['default'] = InkTabBarNode;
  InkTabBarNode.propTypes = {
    prefixCls: _propTypes2['default'].string,
    styles: _propTypes2['default'].object,
    inkBarAnimated: _propTypes2['default'].bool,
    saveRef: _propTypes2['default'].func,
    direction: _propTypes2['default'].string
  };
  InkTabBarNode.defaultProps = {
    prefixCls: '',
    inkBarAnimated: true,
    styles: {},
    saveRef: function saveRef() {}
  };
  module.exports = exports['default'];
  });

  unwrapExports(InkTabBarNode_1);

  var TabBarTabsNode_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _warning2 = _interopRequireDefault(warning);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabBarTabsNode = function (_React$Component) {
    (0, _inherits3['default'])(TabBarTabsNode, _React$Component);

    function TabBarTabsNode() {
      (0, _classCallCheck3['default'])(this, TabBarTabsNode);
      return (0, _possibleConstructorReturn3['default'])(this, (TabBarTabsNode.__proto__ || Object.getPrototypeOf(TabBarTabsNode)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBarTabsNode, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.panels,
            activeKey = _props.activeKey,
            prefixCls = _props.prefixCls,
            tabBarGutter = _props.tabBarGutter,
            saveRef = _props.saveRef,
            tabBarPosition = _props.tabBarPosition,
            renderTabBarNode = _props.renderTabBarNode,
            direction = _props.direction;
        var rst = [];

        _react2['default'].Children.forEach(children, function (child, index) {
          if (!child) {
            return;
          }

          var key = child.key;
          var cls = activeKey === key ? prefixCls + '-tab-active' : '';
          cls += ' ' + prefixCls + '-tab';
          var events = {};

          if (child.props.disabled) {
            cls += ' ' + prefixCls + '-tab-disabled';
          } else {
            events = {
              onClick: _this2.props.onTabClick.bind(_this2, key)
            };
          }

          var ref = {};

          if (activeKey === key) {
            ref.ref = saveRef('activeTab');
          }

          var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
          var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
          var style = (0, _defineProperty3['default'])({}, (0, utils.isVertical)(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);
          (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');

          var node = _react2['default'].createElement('div', (0, _extends3['default'])({
            role: 'tab',
            'aria-disabled': child.props.disabled ? 'true' : 'false',
            'aria-selected': activeKey === key ? 'true' : 'false'
          }, events, {
            className: cls,
            key: key,
            style: style
          }, ref), child.props.tab);

          if (renderTabBarNode) {
            node = renderTabBarNode(node);
          }

          rst.push(node);
        });

        return _react2['default'].createElement('div', {
          ref: saveRef('navTabsContainer')
        }, rst);
      }
    }]);
    return TabBarTabsNode;
  }(_react2['default'].Component);

  exports['default'] = TabBarTabsNode;
  TabBarTabsNode.propTypes = {
    activeKey: _propTypes2['default'].string,
    panels: _propTypes2['default'].node,
    prefixCls: _propTypes2['default'].string,
    tabBarGutter: _propTypes2['default'].number,
    onTabClick: _propTypes2['default'].func,
    saveRef: _propTypes2['default'].func,
    renderTabBarNode: _propTypes2['default'].func,
    tabBarPosition: _propTypes2['default'].string,
    direction: _propTypes2['default'].string
  };
  TabBarTabsNode.defaultProps = {
    panels: [],
    prefixCls: [],
    tabBarGutter: null,
    onTabClick: function onTabClick() {},
    saveRef: function saveRef() {}
  };
  module.exports = exports['default'];
  });

  unwrapExports(TabBarTabsNode_1);

  var TabBarRootNode_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabBarRootNode = function (_React$Component) {
    (0, _inherits3['default'])(TabBarRootNode, _React$Component);

    function TabBarRootNode() {
      (0, _classCallCheck3['default'])(this, TabBarRootNode);
      return (0, _possibleConstructorReturn3['default'])(this, (TabBarRootNode.__proto__ || Object.getPrototypeOf(TabBarRootNode)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBarRootNode, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            onKeyDown = _props.onKeyDown,
            className = _props.className,
            extraContent = _props.extraContent,
            style = _props.style,
            tabBarPosition = _props.tabBarPosition,
            children = _props.children,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition', 'children']);
        var cls = (0, _classnames3['default'])(prefixCls + '-bar', (0, _defineProperty3['default'])({}, className, !!className));
        var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
        var tabBarExtraContentStyle = topOrBottom ? {
          float: 'right'
        } : {};
        var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
        var newChildren = children;

        if (extraContent) {
          newChildren = [(0, React__default.cloneElement)(extraContent, {
            key: 'extra',
            style: (0, _extends3['default'])({}, tabBarExtraContentStyle, extraContentStyle)
          }), (0, React__default.cloneElement)(children, {
            key: 'content'
          })];
          newChildren = topOrBottom ? newChildren : newChildren.reverse();
        }

        return _react2['default'].createElement('div', (0, _extends3['default'])({
          role: 'tablist',
          className: cls,
          tabIndex: '0',
          ref: this.props.saveRef('root'),
          onKeyDown: onKeyDown,
          style: style
        }, (0, utils.getDataAttr)(restProps)), newChildren);
      }
    }]);
    return TabBarRootNode;
  }(_react2['default'].Component);

  exports['default'] = TabBarRootNode;
  TabBarRootNode.propTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    style: _propTypes2['default'].object,
    tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
    children: _propTypes2['default'].node,
    extraContent: _propTypes2['default'].node,
    onKeyDown: _propTypes2['default'].func,
    saveRef: _propTypes2['default'].func
  };
  TabBarRootNode.defaultProps = {
    prefixCls: '',
    className: '',
    style: {},
    tabBarPosition: 'top',
    extraContent: null,
    children: null,
    onKeyDown: function onKeyDown() {},
    saveRef: function saveRef() {}
  };
  module.exports = exports['default'];
  });

  unwrapExports(TabBarRootNode_1);

  var ScrollableTabBarNode_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames6 = _interopRequireDefault(classNames);



  var _debounce2 = _interopRequireDefault(debounce);



  var _resizeObserverPolyfill2 = _interopRequireDefault(resizeObserverPolyfill);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var ScrollableTabBarNode = function (_React$Component) {
    (0, _inherits3['default'])(ScrollableTabBarNode, _React$Component);

    function ScrollableTabBarNode(props) {
      (0, _classCallCheck3['default'])(this, ScrollableTabBarNode);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (ScrollableTabBarNode.__proto__ || Object.getPrototypeOf(ScrollableTabBarNode)).call(this, props));

      _this.prevTransitionEnd = function (e) {
        if (e.propertyName !== 'opacity') {
          return;
        }

        var container = _this.props.getRef('container');

        _this.scrollToActiveTab({
          target: container,
          currentTarget: container
        });
      };

      _this.scrollToActiveTab = function (e) {
        var activeTab = _this.props.getRef('activeTab');

        var navWrap = _this.props.getRef('navWrap');

        if (e && e.target !== e.currentTarget || !activeTab) {
          return;
        } // when not scrollable or enter scrollable first time, don't emit scrolling


        var needToSroll = _this.isNextPrevShown() && _this.lastNextPrevShown;

        _this.lastNextPrevShown = _this.isNextPrevShown();

        if (!needToSroll) {
          return;
        }

        var activeTabWH = _this.getScrollWH(activeTab);

        var navWrapNodeWH = _this.getOffsetWH(navWrap);

        var offset = _this.offset;

        var wrapOffset = _this.getOffsetLT(navWrap);

        var activeTabOffset = _this.getOffsetLT(activeTab);

        if (wrapOffset > activeTabOffset) {
          offset += wrapOffset - activeTabOffset;

          _this.setOffset(offset);
        } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
          offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);

          _this.setOffset(offset);
        }
      };

      _this.prev = function (e) {
        _this.props.onPrevClick(e);

        var navWrapNode = _this.props.getRef('navWrap');

        var navWrapNodeWH = _this.getOffsetWH(navWrapNode);

        var offset = _this.offset;

        _this.setOffset(offset + navWrapNodeWH);
      };

      _this.next = function (e) {
        _this.props.onNextClick(e);

        var navWrapNode = _this.props.getRef('navWrap');

        var navWrapNodeWH = _this.getOffsetWH(navWrapNode);

        var offset = _this.offset;

        _this.setOffset(offset - navWrapNodeWH);
      };

      _this.offset = 0;
      _this.state = {
        next: false,
        prev: false
      };
      return _this;
    }

    (0, _createClass3['default'])(ScrollableTabBarNode, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.componentDidUpdate();
        this.debouncedResize = (0, _debounce2['default'])(function () {
          _this2.setNextPrev();

          _this2.scrollToActiveTab();
        }, 200);
        this.resizeObserver = new _resizeObserverPolyfill2['default'](this.debouncedResize);
        this.resizeObserver.observe(this.props.getRef('container'));
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var props = this.props;

        if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
          this.setOffset(0);
          return;
        }

        var nextPrev = this.setNextPrev(); // wait next, prev show hide

        /* eslint react/no-did-update-set-state:0 */

        if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
          this.setState({}, this.scrollToActiveTab);
        } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
          // can not use props.activeKey
          this.scrollToActiveTab();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }

        if (this.debouncedResize && this.debouncedResize.cancel) {
          this.debouncedResize.cancel();
        }
      }
    }, {
      key: 'setNextPrev',
      value: function setNextPrev() {
        var navNode = this.props.getRef('nav');
        var navTabsContainer = this.props.getRef('navTabsContainer');
        var navNodeWH = this.getScrollWH(navTabsContainer || navNode); // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
        // https://github.com/ant-design/ant-design/issues/13423

        var containerWH = this.getOffsetWH(this.props.getRef('container')) + 1;
        var navWrapNodeWH = this.getOffsetWH(this.props.getRef('navWrap'));
        var offset = this.offset;
        var minOffset = containerWH - navNodeWH;
        var _state = this.state,
            next = _state.next,
            prev = _state.prev;

        if (minOffset >= 0) {
          next = false;
          this.setOffset(0, false);
          offset = 0;
        } else if (minOffset < offset) {
          next = true;
        } else {
          next = false; // Fix https://github.com/ant-design/ant-design/issues/8861
          // Test with container offset which is stable
          // and set the offset of the nav wrap node

          var realOffset = navWrapNodeWH - navNodeWH;
          this.setOffset(realOffset, false);
          offset = realOffset;
        }

        if (offset < 0) {
          prev = true;
        } else {
          prev = false;
        }

        this.setNext(next);
        this.setPrev(prev);
        return {
          next: next,
          prev: prev
        };
      }
    }, {
      key: 'getOffsetWH',
      value: function getOffsetWH(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'offsetWidth';

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'offsetHeight';
        }

        return node[prop];
      }
    }, {
      key: 'getScrollWH',
      value: function getScrollWH(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'scrollWidth';

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'scrollHeight';
        }

        return node[prop];
      }
    }, {
      key: 'getOffsetLT',
      value: function getOffsetLT(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'left';

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'top';
        }

        return node.getBoundingClientRect()[prop];
      }
    }, {
      key: 'setOffset',
      value: function setOffset(offset) {
        var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var target = Math.min(0, offset);

        if (this.offset !== target) {
          this.offset = target;
          var navOffset = {};
          var tabBarPosition = this.props.tabBarPosition;
          var navStyle = this.props.getRef('nav').style;
          var transformSupported = (0, utils.isTransform3dSupported)(navStyle);

          if (tabBarPosition === 'left' || tabBarPosition === 'right') {
            if (transformSupported) {
              navOffset = {
                value: 'translate3d(0,' + target + 'px,0)'
              };
            } else {
              navOffset = {
                name: 'top',
                value: target + 'px'
              };
            }
          } else if (transformSupported) {
            if (this.props.direction === 'rtl') {
              target = -target;
            }

            navOffset = {
              value: 'translate3d(' + target + 'px,0,0)'
            };
          } else {
            navOffset = {
              name: 'left',
              value: target + 'px'
            };
          }

          if (transformSupported) {
            (0, utils.setTransform)(navStyle, navOffset.value);
          } else {
            navStyle[navOffset.name] = navOffset.value;
          }

          if (checkNextPrev) {
            this.setNextPrev();
          }
        }
      }
    }, {
      key: 'setPrev',
      value: function setPrev(v) {
        if (this.state.prev !== v) {
          this.setState({
            prev: v
          });
        }
      }
    }, {
      key: 'setNext',
      value: function setNext(v) {
        if (this.state.next !== v) {
          this.setState({
            next: v
          });
        }
      }
    }, {
      key: 'isNextPrevShown',
      value: function isNextPrevShown(state) {
        if (state) {
          return state.next || state.prev;
        }

        return this.state.next || this.state.prev;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames, _classnames2, _classnames3, _classnames4;

        var _state2 = this.state,
            next = _state2.next,
            prev = _state2.prev;
        var _props = this.props,
            prefixCls = _props.prefixCls,
            scrollAnimated = _props.scrollAnimated,
            navWrapper = _props.navWrapper,
            prevIcon = _props.prevIcon,
            nextIcon = _props.nextIcon;
        var showNextPrev = prev || next;

        var prevButton = _react2['default'].createElement('span', {
          onClick: prev ? this.prev : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-btn-disabled', !prev), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
          onTransitionEnd: this.prevTransitionEnd
        }, prevIcon || _react2['default'].createElement('span', {
          className: prefixCls + '-tab-prev-icon'
        }));

        var nextButton = _react2['default'].createElement('span', {
          onClick: next ? this.next : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-btn-disabled', !next), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
        }, nextIcon || _react2['default'].createElement('span', {
          className: prefixCls + '-tab-next-icon'
        }));

        var navClassName = prefixCls + '-nav';
        var navClasses = (0, _classnames6['default'])((_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, navClassName, true), (0, _defineProperty3['default'])(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));
        return _react2['default'].createElement('div', {
          className: (0, _classnames6['default'])((_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
          key: 'container',
          ref: this.props.saveRef('container')
        }, prevButton, nextButton, _react2['default'].createElement('div', {
          className: prefixCls + '-nav-wrap',
          ref: this.props.saveRef('navWrap')
        }, _react2['default'].createElement('div', {
          className: prefixCls + '-nav-scroll'
        }, _react2['default'].createElement('div', {
          className: navClasses,
          ref: this.props.saveRef('nav')
        }, navWrapper(this.props.children)))));
      }
    }]);
    return ScrollableTabBarNode;
  }(_react2['default'].Component);

  exports['default'] = ScrollableTabBarNode;
  ScrollableTabBarNode.propTypes = {
    activeKey: _propTypes2['default'].string,
    getRef: _propTypes2['default'].func.isRequired,
    saveRef: _propTypes2['default'].func.isRequired,
    tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
    prefixCls: _propTypes2['default'].string,
    scrollAnimated: _propTypes2['default'].bool,
    onPrevClick: _propTypes2['default'].func,
    onNextClick: _propTypes2['default'].func,
    navWrapper: _propTypes2['default'].func,
    children: _propTypes2['default'].node,
    prevIcon: _propTypes2['default'].node,
    nextIcon: _propTypes2['default'].node,
    direction: _propTypes2['default'].node
  };
  ScrollableTabBarNode.defaultProps = {
    tabBarPosition: 'left',
    prefixCls: '',
    scrollAnimated: true,
    onPrevClick: function onPrevClick() {},
    onNextClick: function onNextClick() {},
    navWrapper: function navWrapper(ele) {
      return ele;
    }
  };
  module.exports = exports['default'];
  });

  unwrapExports(ScrollableTabBarNode_1);

  var SaveRef_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var SaveRef = function (_React$Component) {
    (0, _inherits3['default'])(SaveRef, _React$Component);

    function SaveRef() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3['default'])(this, SaveRef);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = SaveRef.__proto__ || Object.getPrototypeOf(SaveRef)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (name) {
        return _this[name];
      }, _this.saveRef = function (name) {
        return function (node) {
          if (node) {
            _this[name] = node;
          }
        };
      }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(SaveRef, [{
      key: 'render',
      value: function render() {
        return this.props.children(this.saveRef, this.getRef);
      }
    }]);
    return SaveRef;
  }(_react2['default'].Component);

  exports['default'] = SaveRef;
  SaveRef.propTypes = {
    children: _propTypes2['default'].func
  };
  SaveRef.defaultProps = {
    children: function children() {
      return null;
    }
  };
  module.exports = exports['default'];
  });

  unwrapExports(SaveRef_1);

  var objectWithoutProperties$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };
  });

  unwrapExports(objectWithoutProperties$1);

  var InkTabBarNode_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  function _componentDidUpdate(component, init) {
    var _component$props = component.props,
        styles = _component$props.styles,
        panels = _component$props.panels,
        activeKey = _component$props.activeKey,
        direction = _component$props.direction;
    var rootNode = component.props.getRef('root');
    var wrapNode = component.props.getRef('nav') || rootNode;
    var inkBarNode = component.props.getRef('inkBar');
    var activeTab = component.props.getRef('activeTab');
    var inkBarNodeStyle = inkBarNode.style;
    var tabBarPosition = component.props.tabBarPosition;
    var activeIndex = (0, utils.getActiveIndex)(panels, activeKey);

    if (init) {
      // prevent mount animation
      inkBarNodeStyle.display = 'none';
    }

    if (activeTab) {
      var tabNode = activeTab;
      var transformSupported = (0, utils.isTransform3dSupported)(inkBarNodeStyle); // Reset current style

      (0, utils.setTransform)(inkBarNodeStyle, '');
      inkBarNodeStyle.width = '';
      inkBarNodeStyle.height = '';
      inkBarNodeStyle.left = '';
      inkBarNodeStyle.top = '';
      inkBarNodeStyle.bottom = '';
      inkBarNodeStyle.right = '';

      if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
        var left = (0, utils.getLeft)(tabNode, wrapNode);
        var width = tabNode.offsetWidth; // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
        // It means no css working, then ink bar should not have width until css is loaded
        // Fix https://github.com/ant-design/ant-design/issues/7564

        if (width === rootNode.offsetWidth) {
          width = 0;
        } else if (styles.inkBar && styles.inkBar.width !== undefined) {
          width = parseFloat(styles.inkBar.width, 10);

          if (width) {
            left += (tabNode.offsetWidth - width) / 2;
          }
        }

        if (direction === 'rtl') {
          left = (0, utils.getStyle)(tabNode, 'margin-left') - left;
        } // use 3d gpu to optimize render


        if (transformSupported) {
          (0, utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
        } else {
          inkBarNodeStyle.left = left + 'px';
        }

        inkBarNodeStyle.width = width + 'px';
      } else {
        var top = (0, utils.getTop)(tabNode, wrapNode, true);
        var height = tabNode.offsetHeight;

        if (styles.inkBar && styles.inkBar.height !== undefined) {
          height = parseFloat(styles.inkBar.height, 10);

          if (height) {
            top += (tabNode.offsetHeight - height) / 2;
          }
        }

        if (transformSupported) {
          (0, utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
          inkBarNodeStyle.top = '0';
        } else {
          inkBarNodeStyle.top = top + 'px';
        }

        inkBarNodeStyle.height = height + 'px';
      }
    }

    inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
  }

  var InkTabBarNode = function (_React$Component) {
    (0, _inherits3['default'])(InkTabBarNode, _React$Component);

    function InkTabBarNode() {
      (0, _classCallCheck3['default'])(this, InkTabBarNode);
      return (0, _possibleConstructorReturn3['default'])(this, (InkTabBarNode.__proto__ || Object.getPrototypeOf(InkTabBarNode)).apply(this, arguments));
    }

    (0, _createClass3['default'])(InkTabBarNode, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this; // ref https://github.com/ant-design/ant-design/issues/8678
        // ref https://github.com/react-component/tabs/issues/135
        // InkTabBarNode need parent/root ref for calculating position
        // since parent componentDidMount triggered after child componentDidMount
        // we're doing a quick fix here to use setTimeout to calculate position
        // after parent/root component mounted


        this.timeout = setTimeout(function () {
          _componentDidUpdate(_this2, true);
        }, 0);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        _componentDidUpdate(this);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.timeout);
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            styles = _props.styles,
            inkBarAnimated = _props.inkBarAnimated;
        var className = prefixCls + '-ink-bar';
        var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
        return _react2['default'].createElement('div', {
          style: styles.inkBar,
          className: classes,
          key: 'inkBar',
          ref: this.props.saveRef('inkBar')
        });
      }
    }]);
    return InkTabBarNode;
  }(_react2['default'].Component);

  exports['default'] = InkTabBarNode;
  InkTabBarNode.propTypes = {
    prefixCls: _propTypes2['default'].string,
    styles: _propTypes2['default'].object,
    inkBarAnimated: _propTypes2['default'].bool,
    saveRef: _propTypes2['default'].func,
    direction: _propTypes2['default'].string
  };
  InkTabBarNode.defaultProps = {
    prefixCls: '',
    inkBarAnimated: true,
    styles: {},
    saveRef: function saveRef() {}
  };
  module.exports = exports['default'];
  });

  unwrapExports(InkTabBarNode_1$1);

  var TabBarTabsNode_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _warning2 = _interopRequireDefault(warning);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabBarTabsNode = function (_React$Component) {
    (0, _inherits3['default'])(TabBarTabsNode, _React$Component);

    function TabBarTabsNode() {
      (0, _classCallCheck3['default'])(this, TabBarTabsNode);
      return (0, _possibleConstructorReturn3['default'])(this, (TabBarTabsNode.__proto__ || Object.getPrototypeOf(TabBarTabsNode)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBarTabsNode, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.panels,
            activeKey = _props.activeKey,
            prefixCls = _props.prefixCls,
            tabBarGutter = _props.tabBarGutter,
            saveRef = _props.saveRef,
            tabBarPosition = _props.tabBarPosition,
            renderTabBarNode = _props.renderTabBarNode,
            direction = _props.direction;
        var rst = [];

        _react2['default'].Children.forEach(children, function (child, index) {
          if (!child) {
            return;
          }

          var key = child.key;
          var cls = activeKey === key ? prefixCls + '-tab-active' : '';
          cls += ' ' + prefixCls + '-tab';
          var events = {};

          if (child.props.disabled) {
            cls += ' ' + prefixCls + '-tab-disabled';
          } else {
            events = {
              onClick: _this2.props.onTabClick.bind(_this2, key)
            };
          }

          var ref = {};

          if (activeKey === key) {
            ref.ref = saveRef('activeTab');
          }

          var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
          var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
          var style = (0, _defineProperty3['default'])({}, (0, utils.isVertical)(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);
          (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');

          var node = _react2['default'].createElement('div', (0, _extends3['default'])({
            role: 'tab',
            'aria-disabled': child.props.disabled ? 'true' : 'false',
            'aria-selected': activeKey === key ? 'true' : 'false'
          }, events, {
            className: cls,
            key: key,
            style: style
          }, ref), child.props.tab);

          if (renderTabBarNode) {
            node = renderTabBarNode(node);
          }

          rst.push(node);
        });

        return _react2['default'].createElement('div', {
          ref: saveRef('navTabsContainer')
        }, rst);
      }
    }]);
    return TabBarTabsNode;
  }(_react2['default'].Component);

  exports['default'] = TabBarTabsNode;
  TabBarTabsNode.propTypes = {
    activeKey: _propTypes2['default'].string,
    panels: _propTypes2['default'].node,
    prefixCls: _propTypes2['default'].string,
    tabBarGutter: _propTypes2['default'].number,
    onTabClick: _propTypes2['default'].func,
    saveRef: _propTypes2['default'].func,
    renderTabBarNode: _propTypes2['default'].func,
    tabBarPosition: _propTypes2['default'].string,
    direction: _propTypes2['default'].string
  };
  TabBarTabsNode.defaultProps = {
    panels: [],
    prefixCls: [],
    tabBarGutter: null,
    onTabClick: function onTabClick() {},
    saveRef: function saveRef() {}
  };
  module.exports = exports['default'];
  });

  unwrapExports(TabBarTabsNode_1$1);

  var TabBarRootNode_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$2);



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$2);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames3 = _interopRequireDefault(classNames);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var TabBarRootNode = function (_React$Component) {
    (0, _inherits3['default'])(TabBarRootNode, _React$Component);

    function TabBarRootNode() {
      (0, _classCallCheck3['default'])(this, TabBarRootNode);
      return (0, _possibleConstructorReturn3['default'])(this, (TabBarRootNode.__proto__ || Object.getPrototypeOf(TabBarRootNode)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBarRootNode, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            onKeyDown = _props.onKeyDown,
            className = _props.className,
            extraContent = _props.extraContent,
            style = _props.style,
            tabBarPosition = _props.tabBarPosition,
            children = _props.children,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition', 'children']);
        var cls = (0, _classnames3['default'])(prefixCls + '-bar', (0, _defineProperty3['default'])({}, className, !!className));
        var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
        var tabBarExtraContentStyle = topOrBottom ? {
          float: 'right'
        } : {};
        var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
        var newChildren = children;

        if (extraContent) {
          newChildren = [(0, React__default.cloneElement)(extraContent, {
            key: 'extra',
            style: (0, _extends3['default'])({}, tabBarExtraContentStyle, extraContentStyle)
          }), (0, React__default.cloneElement)(children, {
            key: 'content'
          })];
          newChildren = topOrBottom ? newChildren : newChildren.reverse();
        }

        return _react2['default'].createElement('div', (0, _extends3['default'])({
          role: 'tablist',
          className: cls,
          tabIndex: '0',
          ref: this.props.saveRef('root'),
          onKeyDown: onKeyDown,
          style: style
        }, (0, utils.getDataAttr)(restProps)), newChildren);
      }
    }]);
    return TabBarRootNode;
  }(_react2['default'].Component);

  exports['default'] = TabBarRootNode;
  TabBarRootNode.propTypes = {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    style: _propTypes2['default'].object,
    tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
    children: _propTypes2['default'].node,
    extraContent: _propTypes2['default'].node,
    onKeyDown: _propTypes2['default'].func,
    saveRef: _propTypes2['default'].func
  };
  TabBarRootNode.defaultProps = {
    prefixCls: '',
    className: '',
    style: {},
    tabBarPosition: 'top',
    extraContent: null,
    children: null,
    onKeyDown: function onKeyDown() {},
    saveRef: function saveRef() {}
  };
  module.exports = exports['default'];
  });

  unwrapExports(TabBarRootNode_1$1);

  var ScrollableTabBarNode_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _defineProperty3 = _interopRequireDefault(defineProperty$3);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _classnames6 = _interopRequireDefault(classNames);



  var _debounce2 = _interopRequireDefault(debounce);



  var _resizeObserverPolyfill2 = _interopRequireDefault(resizeObserverPolyfill);



  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var ScrollableTabBarNode = function (_React$Component) {
    (0, _inherits3['default'])(ScrollableTabBarNode, _React$Component);

    function ScrollableTabBarNode(props) {
      (0, _classCallCheck3['default'])(this, ScrollableTabBarNode);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (ScrollableTabBarNode.__proto__ || Object.getPrototypeOf(ScrollableTabBarNode)).call(this, props));

      _this.prevTransitionEnd = function (e) {
        if (e.propertyName !== 'opacity') {
          return;
        }

        var container = _this.props.getRef('container');

        _this.scrollToActiveTab({
          target: container,
          currentTarget: container
        });
      };

      _this.scrollToActiveTab = function (e) {
        var activeTab = _this.props.getRef('activeTab');

        var navWrap = _this.props.getRef('navWrap');

        if (e && e.target !== e.currentTarget || !activeTab) {
          return;
        } // when not scrollable or enter scrollable first time, don't emit scrolling


        var needToSroll = _this.isNextPrevShown() && _this.lastNextPrevShown;

        _this.lastNextPrevShown = _this.isNextPrevShown();

        if (!needToSroll) {
          return;
        }

        var activeTabWH = _this.getScrollWH(activeTab);

        var navWrapNodeWH = _this.getOffsetWH(navWrap);

        var offset = _this.offset;

        var wrapOffset = _this.getOffsetLT(navWrap);

        var activeTabOffset = _this.getOffsetLT(activeTab);

        if (wrapOffset > activeTabOffset) {
          offset += wrapOffset - activeTabOffset;

          _this.setOffset(offset);
        } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
          offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);

          _this.setOffset(offset);
        }
      };

      _this.prev = function (e) {
        _this.props.onPrevClick(e);

        var navWrapNode = _this.props.getRef('navWrap');

        var navWrapNodeWH = _this.getOffsetWH(navWrapNode);

        var offset = _this.offset;

        _this.setOffset(offset + navWrapNodeWH);
      };

      _this.next = function (e) {
        _this.props.onNextClick(e);

        var navWrapNode = _this.props.getRef('navWrap');

        var navWrapNodeWH = _this.getOffsetWH(navWrapNode);

        var offset = _this.offset;

        _this.setOffset(offset - navWrapNodeWH);
      };

      _this.offset = 0;
      _this.state = {
        next: false,
        prev: false
      };
      return _this;
    }

    (0, _createClass3['default'])(ScrollableTabBarNode, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.componentDidUpdate();
        this.debouncedResize = (0, _debounce2['default'])(function () {
          _this2.setNextPrev();

          _this2.scrollToActiveTab();
        }, 200);
        this.resizeObserver = new _resizeObserverPolyfill2['default'](this.debouncedResize);
        this.resizeObserver.observe(this.props.getRef('container'));
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var props = this.props;

        if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
          this.setOffset(0);
          return;
        }

        var nextPrev = this.setNextPrev(); // wait next, prev show hide

        /* eslint react/no-did-update-set-state:0 */

        if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
          this.setState({}, this.scrollToActiveTab);
        } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
          // can not use props.activeKey
          this.scrollToActiveTab();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }

        if (this.debouncedResize && this.debouncedResize.cancel) {
          this.debouncedResize.cancel();
        }
      }
    }, {
      key: 'setNextPrev',
      value: function setNextPrev() {
        var navNode = this.props.getRef('nav');
        var navTabsContainer = this.props.getRef('navTabsContainer');
        var navNodeWH = this.getScrollWH(navTabsContainer || navNode); // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
        // https://github.com/ant-design/ant-design/issues/13423

        var containerWH = this.getOffsetWH(this.props.getRef('container')) + 1;
        var navWrapNodeWH = this.getOffsetWH(this.props.getRef('navWrap'));
        var offset = this.offset;
        var minOffset = containerWH - navNodeWH;
        var _state = this.state,
            next = _state.next,
            prev = _state.prev;

        if (minOffset >= 0) {
          next = false;
          this.setOffset(0, false);
          offset = 0;
        } else if (minOffset < offset) {
          next = true;
        } else {
          next = false; // Fix https://github.com/ant-design/ant-design/issues/8861
          // Test with container offset which is stable
          // and set the offset of the nav wrap node

          var realOffset = navWrapNodeWH - navNodeWH;
          this.setOffset(realOffset, false);
          offset = realOffset;
        }

        if (offset < 0) {
          prev = true;
        } else {
          prev = false;
        }

        this.setNext(next);
        this.setPrev(prev);
        return {
          next: next,
          prev: prev
        };
      }
    }, {
      key: 'getOffsetWH',
      value: function getOffsetWH(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'offsetWidth';

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'offsetHeight';
        }

        return node[prop];
      }
    }, {
      key: 'getScrollWH',
      value: function getScrollWH(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'scrollWidth';

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'scrollHeight';
        }

        return node[prop];
      }
    }, {
      key: 'getOffsetLT',
      value: function getOffsetLT(node) {
        var tabBarPosition = this.props.tabBarPosition;
        var prop = 'left';

        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          prop = 'top';
        }

        return node.getBoundingClientRect()[prop];
      }
    }, {
      key: 'setOffset',
      value: function setOffset(offset) {
        var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var target = Math.min(0, offset);

        if (this.offset !== target) {
          this.offset = target;
          var navOffset = {};
          var tabBarPosition = this.props.tabBarPosition;
          var navStyle = this.props.getRef('nav').style;
          var transformSupported = (0, utils.isTransform3dSupported)(navStyle);

          if (tabBarPosition === 'left' || tabBarPosition === 'right') {
            if (transformSupported) {
              navOffset = {
                value: 'translate3d(0,' + target + 'px,0)'
              };
            } else {
              navOffset = {
                name: 'top',
                value: target + 'px'
              };
            }
          } else if (transformSupported) {
            if (this.props.direction === 'rtl') {
              target = -target;
            }

            navOffset = {
              value: 'translate3d(' + target + 'px,0,0)'
            };
          } else {
            navOffset = {
              name: 'left',
              value: target + 'px'
            };
          }

          if (transformSupported) {
            (0, utils.setTransform)(navStyle, navOffset.value);
          } else {
            navStyle[navOffset.name] = navOffset.value;
          }

          if (checkNextPrev) {
            this.setNextPrev();
          }
        }
      }
    }, {
      key: 'setPrev',
      value: function setPrev(v) {
        if (this.state.prev !== v) {
          this.setState({
            prev: v
          });
        }
      }
    }, {
      key: 'setNext',
      value: function setNext(v) {
        if (this.state.next !== v) {
          this.setState({
            next: v
          });
        }
      }
    }, {
      key: 'isNextPrevShown',
      value: function isNextPrevShown(state) {
        if (state) {
          return state.next || state.prev;
        }

        return this.state.next || this.state.prev;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames, _classnames2, _classnames3, _classnames4;

        var _state2 = this.state,
            next = _state2.next,
            prev = _state2.prev;
        var _props = this.props,
            prefixCls = _props.prefixCls,
            scrollAnimated = _props.scrollAnimated,
            navWrapper = _props.navWrapper,
            prevIcon = _props.prevIcon,
            nextIcon = _props.nextIcon;
        var showNextPrev = prev || next;

        var prevButton = _react2['default'].createElement('span', {
          onClick: prev ? this.prev : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-btn-disabled', !prev), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
          onTransitionEnd: this.prevTransitionEnd
        }, prevIcon || _react2['default'].createElement('span', {
          className: prefixCls + '-tab-prev-icon'
        }));

        var nextButton = _react2['default'].createElement('span', {
          onClick: next ? this.next : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-btn-disabled', !next), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
        }, nextIcon || _react2['default'].createElement('span', {
          className: prefixCls + '-tab-next-icon'
        }));

        var navClassName = prefixCls + '-nav';
        var navClasses = (0, _classnames6['default'])((_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, navClassName, true), (0, _defineProperty3['default'])(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));
        return _react2['default'].createElement('div', {
          className: (0, _classnames6['default'])((_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
          key: 'container',
          ref: this.props.saveRef('container')
        }, prevButton, nextButton, _react2['default'].createElement('div', {
          className: prefixCls + '-nav-wrap',
          ref: this.props.saveRef('navWrap')
        }, _react2['default'].createElement('div', {
          className: prefixCls + '-nav-scroll'
        }, _react2['default'].createElement('div', {
          className: navClasses,
          ref: this.props.saveRef('nav')
        }, navWrapper(this.props.children)))));
      }
    }]);
    return ScrollableTabBarNode;
  }(_react2['default'].Component);

  exports['default'] = ScrollableTabBarNode;
  ScrollableTabBarNode.propTypes = {
    activeKey: _propTypes2['default'].string,
    getRef: _propTypes2['default'].func.isRequired,
    saveRef: _propTypes2['default'].func.isRequired,
    tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
    prefixCls: _propTypes2['default'].string,
    scrollAnimated: _propTypes2['default'].bool,
    onPrevClick: _propTypes2['default'].func,
    onNextClick: _propTypes2['default'].func,
    navWrapper: _propTypes2['default'].func,
    children: _propTypes2['default'].node,
    prevIcon: _propTypes2['default'].node,
    nextIcon: _propTypes2['default'].node,
    direction: _propTypes2['default'].node
  };
  ScrollableTabBarNode.defaultProps = {
    tabBarPosition: 'left',
    prefixCls: '',
    scrollAnimated: true,
    onPrevClick: function onPrevClick() {},
    onNextClick: function onNextClick() {},
    navWrapper: function navWrapper(ele) {
      return ele;
    }
  };
  module.exports = exports['default'];
  });

  unwrapExports(ScrollableTabBarNode_1$1);

  var SaveRef_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$2);



  var _createClass3 = _interopRequireDefault(createClass$2);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$2);



  var _inherits3 = _interopRequireDefault(inherits$2);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var SaveRef = function (_React$Component) {
    (0, _inherits3['default'])(SaveRef, _React$Component);

    function SaveRef() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3['default'])(this, SaveRef);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = SaveRef.__proto__ || Object.getPrototypeOf(SaveRef)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (name) {
        return _this[name];
      }, _this.saveRef = function (name) {
        return function (node) {
          if (node) {
            _this[name] = node;
          }
        };
      }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(SaveRef, [{
      key: 'render',
      value: function render() {
        return this.props.children(this.saveRef, this.getRef);
      }
    }]);
    return SaveRef;
  }(_react2['default'].Component);

  exports['default'] = SaveRef;
  SaveRef.propTypes = {
    children: _propTypes2['default'].func
  };
  SaveRef.defaultProps = {
    children: function children() {
      return null;
    }
  };
  module.exports = exports['default'];
  });

  unwrapExports(SaveRef_1$1);

  var ScrollableInkTabBar_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$1);



  var _createClass3 = _interopRequireDefault(createClass$1);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$1);



  var _inherits3 = _interopRequireDefault(inherits$1);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes__default);



  var _InkTabBarNode2 = _interopRequireDefault(InkTabBarNode_1$1);



  var _TabBarTabsNode2 = _interopRequireDefault(TabBarTabsNode_1$1);



  var _TabBarRootNode2 = _interopRequireDefault(TabBarRootNode_1$1);



  var _ScrollableTabBarNode2 = _interopRequireDefault(ScrollableTabBarNode_1$1);



  var _SaveRef2 = _interopRequireDefault(SaveRef_1$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  var ScrollableInkTabBar = function (_React$Component) {
    (0, _inherits3['default'])(ScrollableInkTabBar, _React$Component);

    function ScrollableInkTabBar() {
      (0, _classCallCheck3['default'])(this, ScrollableInkTabBar);
      return (0, _possibleConstructorReturn3['default'])(this, (ScrollableInkTabBar.__proto__ || Object.getPrototypeOf(ScrollableInkTabBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(ScrollableInkTabBar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            renderTabBarNode = _props.children,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['children']);
        return _react2['default'].createElement(_SaveRef2['default'], null, function (saveRef, getRef) {
          return _react2['default'].createElement(_TabBarRootNode2['default'], (0, _extends3['default'])({
            saveRef: saveRef
          }, restProps), _react2['default'].createElement(_ScrollableTabBarNode2['default'], (0, _extends3['default'])({
            saveRef: saveRef,
            getRef: getRef
          }, restProps), _react2['default'].createElement(_TabBarTabsNode2['default'], (0, _extends3['default'])({
            saveRef: saveRef,
            renderTabBarNode: renderTabBarNode
          }, restProps)), _react2['default'].createElement(_InkTabBarNode2['default'], (0, _extends3['default'])({
            saveRef: saveRef,
            getRef: getRef
          }, restProps))));
        });
      }
    }]);
    return ScrollableInkTabBar;
  }(_react2['default'].Component);
  /* eslint-disable react/prefer-stateless-function */


  exports['default'] = ScrollableInkTabBar;
  ScrollableInkTabBar.propTypes = {
    children: _propTypes2['default'].func
  };
  module.exports = exports['default'];
  });

  var ScrollableInkTabBar = unwrapExports(ScrollableInkTabBar_1);

  var Card = /** @class */ (function (_super) {
      __extends(Card, _super);
      function Card() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Card.prototype.getClassName = function () {
          var rootPrefixCls = this.props.rootPrefixCls;
          return classNames(rootPrefixCls + "-card");
      };
      Card.prototype.render = function () {
          var otherProps = omit$3(this.props, [
              'rootPrefixCls'
          ]);
          return (React.createElement("div", __assign({}, otherProps, { className: classNames(this.getClassName()) })));
      };
      return Card;
  }(React.PureComponent));

  var omit = require('omit.js').default;
  var Pane = /** @class */ (function (_super) {
      __extends(Pane, _super);
      function Pane() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.handleLayoutChange = function (layout) {
              var handleLayoutChange = _this.context.handleLayoutChange;
              if (handleLayoutChange) {
                  handleLayoutChange(layout);
              }
          };
          return _this;
      }
      Pane.prototype.getClassName = function () {
          var rootPrefixCls = this.props.rootPrefixCls;
          return classNames(rootPrefixCls + "-pane");
      };
      Pane.prototype.getLayout = function (children) {
          return _.map(children, function (_a) {
              var key = _a.key, props = _a.props;
              return {
                  i: key,
                  x: props.x || 0,
                  y: props.y || 0,
                  w: props.w || 1,
                  h: props.h || 1,
                  isDraggable: props.isDraggable,
                  isResizable: props.isResizable
              };
          });
      };
      Pane.prototype.generateDOM = function (children) {
          var rootPrefixCls = this.props.rootPrefixCls;
          return _.map(children, function (_a) {
              var key = _a.key, props = _a.props;
              return (React.createElement(Card, { key: key, rootPrefixCls: rootPrefixCls }, props.children.length > 0 ? props.children : key));
          });
      };
      Pane.prototype.render = function () {
          var _a = this.props, children = _a.children, cols = _a.cols, rowheight = _a.rowheight, width = _a.width;
          var otherProps = omit(this.props, ['children', 'cols', 'rowheight', 'width']);
          return (React.createElement(E__github_quickdevLib_node_modules_rcTabs_lib_2, __assign({}, otherProps, { className: this.getClassName() }),
              React.createElement(ReactGridLayout, { layout: this.getLayout(children), cols: cols, rowHeight: rowheight, width: width, onLayoutChange: this.handleLayoutChange }, this.generateDOM(children))));
      };
      Pane.contextTypes = {
          handleLayoutChange: propTypes.func
      };
      return Pane;
  }(React.PureComponent));

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@import '~react-grid-layout/css/styles.css';\n.show-tabs {\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.show-tabs-bar,\n.show-tabs-nav-container {\n  font-size: 14px;\n  line-height: 1.5;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  white-space: nowrap;\n  outline: none;\n  zoom: 1;\n  transition: padding 0.45s;\n}\n.show-tabs-ink-bar {\n  z-index: 1;\n  position: absolute;\n  box-sizing: border-box;\n  margin-top: -3px;\n  background-color: #108ee9;\n  transform-origin: 0 0;\n  width: 0;\n  height: 0;\n}\n.show-tabs-ink-bar-animated {\n  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), top 0.3s cubic-bezier(0.35, 0, 0.25, 1), height 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.show-tabs-tab-prev,\n.show-tabs-tab-next {\n  user-select: none;\n  z-index: 1;\n  line-height: 36px;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  position: absolute;\n}\n.show-tabs-tab-prev-icon,\n.show-tabs-tab-next-icon {\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  line-height: inherit;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  font-smoothing: antialiased;\n  text-stroke-width: 0;\n  font-family: sans-serif;\n}\n.show-tabs-tab-prev-icon:before,\n.show-tabs-tab-next-icon:before {\n  display: block;\n}\n.show-tabs-tab-btn-disabled {\n  cursor: default;\n  color: #ccc;\n}\n.show-tabs-nav-wrap {\n  overflow: hidden;\n}\n.show-tabs-nav {\n  box-sizing: border-box;\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  float: left;\n  list-style: none;\n  display: inline-block;\n  transform-origin: 0 0;\n}\n.show-tabs-nav-animated {\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.show-tabs-nav:before,\n.show-tabs-nav:after {\n  display: table;\n  content: \" \";\n}\n.show-tabs-nav:after {\n  clear: both;\n}\n.show-tabs-tab {\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  transition: color 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  padding: 8px 20px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.show-tabs-tab:hover {\n  color: #23c0fa;\n}\n.show-tabs-tab-active,\n.show-tabs-tab-active:hover {\n  color: #108ee9;\n  cursor: default;\n  transform: translateZ(0);\n}\n.show-tabs-tab-disabled {\n  cursor: default;\n  color: #ccc;\n}\n.show-tabs-tab-disabled:hover {\n  color: #ccc;\n}\n.show-tabs-content {\n  zoom: 1;\n}\n.show-tabs-content .show-tabs-tabpane {\n  overflow: auto;\n}\n.show-tabs-content-animated {\n  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), margin-left 0.3s cubic-bezier(0.35, 0, 0.25, 1), margin-top 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  display: flex;\n  will-change: transform;\n}\n.show-tabs-content-animated .show-tabs-tabpane {\n  flex-shrink: 0;\n}\n.no-flexbox .show-tabs-content {\n  transform: none !important;\n  overflow: auto;\n}\n.no-csstransitions .show-tabs-tabpane-inactive,\n.no-flexbox .show-tabs-tabpane-inactive,\n.show-tabs-content-no-animated .show-tabs-tabpane-inactive {\n  display: none;\n}\n.show-tabs-card {\n  border: 1px solid black;\n}\n.show-tabs-left {\n  border-right: 2px solid #f3f3f3;\n}\n.show-tabs-left .show-tabs-bar {\n  float: left;\n  height: 100%;\n  margin-right: 10px;\n  border-right: 1px solid #f3f3f3;\n}\n.show-tabs-left .show-tabs-nav-container {\n  height: 100%;\n}\n.show-tabs-left .show-tabs-nav-container-scrolling {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.show-tabs-left .show-tabs-nav-wrap {\n  height: 100%;\n}\n.show-tabs-left .show-tabs-content-animated {\n  flex-direction: column;\n}\n.show-tabs-left .show-tabs-content-animated .show-tabs-tabpane {\n  height: 100%;\n}\n.show-tabs-left .show-tabs-nav-scroll {\n  height: 99999px;\n}\n.show-tabs-left .show-tabs-nav-swipe {\n  position: relative;\n  top: 0;\n}\n.show-tabs-left .show-tabs-nav-swipe .show-tabs-nav {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n}\n.show-tabs-left .show-tabs-nav-swipe .show-tabs-nav .show-tabs-tab {\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.show-tabs-left .show-tabs-tab-prev,\n.show-tabs-left .show-tabs-tab-next {\n  margin-top: -2px;\n  height: 0;\n  line-height: 32px;\n  width: 0;\n  display: block;\n  text-align: center;\n  opacity: 0;\n  transition: width 0.3s, height 0.3s, opacity 0.3s;\n}\n.show-tabs-top .show-tabs-tab-arrow-show,\n.show-tabs-left .show-tabs-tab-arrow-show,\n.show-tabs-bottom .show-tabs-tab-arrow-show,\n.show-tabs-right .show-tabs-tab-arrow-show {\n  opacity: 1;\n  width: 100%;\n  height: 32px;\n}\n.show-tabs-left .show-tabs-tab-next {\n  bottom: 0;\n}\n.show-tabs-left .show-tabs-tab-next-icon {\n  transform: rotate(90deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n}\n.show-tabs-left .show-tabs-tab-next-icon:before {\n  content: \">\";\n}\n.show-tabs-left .show-tabs-tab-prev {\n  top: 2px;\n}\n.show-tabs-left .show-tabs-tab-prev-icon {\n  transform: rotate(270deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n}\n.show-tabs-left .show-tabs-tab-prev-icon:before {\n  content: \">\";\n}\n.show-tabs-left .show-tabs-ink-bar {\n  width: 2px;\n  right: 0;\n  top: 0;\n}\n.show-tabs-left .show-tabs-tab {\n  padding: 16px 24px;\n}\n.show-tabs-right {\n  border-left: 2px solid #f3f3f3;\n}\n.show-tabs-right .show-tabs-bar {\n  float: right;\n  height: 100%;\n  margin-left: 10px;\n  border-left: 1px solid #f3f3f3;\n}\n.show-tabs-right .show-tabs-nav-container {\n  height: 100%;\n}\n.show-tabs-right .show-tabs-nav-container-scrolling {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.show-tabs-right .show-tabs-nav-wrap {\n  height: 100%;\n}\n.show-tabs-right .show-tabs-nav-scroll {\n  height: 99999px;\n}\n.show-tabs-right .show-tabs-nav-swipe {\n  position: relative;\n}\n.show-tabs-right .show-tabs-nav-swipe .show-tabs-nav {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n}\n.show-tabs-right .show-tabs-nav-swipe .show-tabs-nav .show-tabs-tab {\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.show-tabs-right .show-tabs-tab-prev,\n.show-tabs-right .show-tabs-tab-next {\n  margin-top: -2px;\n  height: 0;\n  width: 0;\n  display: block;\n  text-align: center;\n  line-height: 32px;\n  opacity: 0;\n  transition: width 0.3s, height 0.3s, opacity 0.3s;\n}\n.show-tabs-top .show-tabs-tab-arrow-show {\n  opacity: 1;\n  width: 100%;\n  height: 32px;\n}\n.show-tabs-right .show-tabs-tab-next {\n  bottom: 0;\n}\n.show-tabs-right .show-tabs-tab-next-icon {\n  transform: rotate(90deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n}\n.show-tabs-right .show-tabs-tab-next-icon:before {\n  content: \">\";\n}\n.show-tabs-right .show-tabs-tab-prev {\n  top: 2px;\n}\n.show-tabs-right .show-tabs-tab-prev-icon {\n  transform: rotate(270deg);\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n}\n.show-tabs-right .show-tabs-tab-prev-icon:before {\n  content: \">\";\n}\n.show-tabs-right .show-tabs-content-animated {\n  flex-direction: column;\n}\n.show-tabs-right .show-tabs-content-animated .show-tabs-tabpane {\n  height: 100%;\n}\n.show-tabs-right .show-tabs-ink-bar {\n  width: 2px;\n  left: 0;\n  top: 0;\n}\n.show-tabs-right .show-tabs-tab {\n  padding: 16px 24px;\n}\n.show-tabs-bottom {\n  border-top: 2px solid #f3f3f3;\n}\n.show-tabs-bottom .show-tabs-content {\n  width: 100%;\n}\n.show-tabs-bottom .show-tabs-bar {\n  border-top: 1px solid #f3f3f3;\n}\n.show-tabs-bottom .show-tabs-nav-container-scrolling {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.show-tabs-bottom .show-tabs-nav-scroll {\n  width: 99999px;\n}\n.show-tabs-bottom .show-tabs-nav-swipe {\n  position: relative;\n  left: 0;\n}\n.show-tabs-bottom .show-tabs-nav-swipe .show-tabs-nav {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n.show-tabs-bottom .show-tabs-nav-swipe .show-tabs-nav .show-tabs-tab {\n  display: flex;\n  flex-shrink: 0;\n  margin-right: 0;\n  padding: 8px 0;\n  justify-content: center;\n}\n.show-tabs-bottom .show-tabs-nav-wrap {\n  width: 100%;\n}\n.show-tabs-bottom .show-tabs-content-animated {\n  flex-direction: row;\n}\n.show-tabs-bottom .show-tabs-content-animated .show-tabs-tabpane {\n  width: 100%;\n}\n.show-tabs-bottom .show-tabs-tab-next {\n  right: 2px;\n}\n.show-tabs-bottom .show-tabs-tab-next-icon:before {\n  content: \">\";\n}\n.show-tabs-bottom .show-tabs-tab-prev {\n  left: 0;\n}\n.show-tabs-bottom .show-tabs-tab-prev-icon:before {\n  content: \"<\";\n}\n.show-tabs-bottom .show-tabs-tab-prev,\n.show-tabs-bottom .show-tabs-tab-next {\n  margin-right: -2px;\n  width: 32px;\n  height: 100%;\n  top: 0;\n  text-align: center;\n}\n.show-tabs-bottom .show-tabs-ink-bar {\n  height: 2px;\n  top: 3px;\n  left: 0;\n}\n.show-tabs-bottom .show-tabs-tab {\n  float: left;\n  height: 100%;\n  margin-right: 30px;\n}\n.show-tabs-bottom .show-tabs-tabpane-inactive {\n  height: 0;\n  overflow: visible;\n}\n.show-tabs-top {\n  border-bottom: 2px solid #f3f3f3;\n}\n.show-tabs-top .show-tabs-content {\n  width: 100%;\n}\n.show-tabs-top .show-tabs-bar {\n  border-bottom: 1px solid #f3f3f3;\n}\n.show-tabs-top .show-tabs-nav-container-scrolling {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.show-tabs-top .show-tabs-nav-scroll {\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.show-tabs-top .show-tabs-nav {\n  width: 100%;\n}\n.show-tabs-top .show-tabs-nav > div {\n  display: flex;\n}\n.show-tabs-top .show-tabs-nav > div .show-tabs-tab {\n  flex: 1;\n  margin: initial;\n  text-align: center;\n}\n.show-tabs-top .show-tabs-nav-swipe {\n  position: relative;\n  left: 0;\n}\n.show-tabs-top .show-tabs-nav-swipe .show-tabs-nav {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n.show-tabs-top .show-tabs-nav-swipe .show-tabs-nav .show-tabs-tab {\n  display: flex;\n  flex-shrink: 0;\n  margin-right: 0;\n  padding: 8px 0;\n  justify-content: center;\n}\n.show-tabs-top .show-tabs-nav-wrap {\n  width: 100%;\n}\n.show-tabs-top .show-tabs-content-animated {\n  flex-direction: row;\n}\n.show-tabs-top .show-tabs-content-animated .show-tabs-tabpane {\n  width: 100%;\n  overflow: hidden;\n}\n.show-tabs-top .show-tabs-tab-next {\n  right: 2px;\n}\n.show-tabs-top .show-tabs-tab-next-icon:before {\n  content: \">\";\n}\n.show-tabs-top .show-tabs-tab-prev {\n  left: 0;\n}\n.show-tabs-top .show-tabs-tab-prev-icon:before {\n  content: \"<\";\n}\n.show-tabs-top .show-tabs-tab-prev,\n.show-tabs-top .show-tabs-tab-next {\n  margin-right: -2px;\n  width: 0;\n  height: 0;\n  top: 0;\n  text-align: center;\n  opacity: 0;\n  transition: width 0.3s, height 0.3s, opacity 0.3s;\n}\n.show-tabs-top .show-tabs-tab-arrow-show {\n  opacity: 1;\n  width: 32px;\n  height: 100%;\n}\n.show-tabs-top .show-tabs-ink-bar {\n  height: 2px;\n  bottom: 0;\n  left: 0;\n}\n.show-tabs-top .show-tabs-tab {\n  float: left;\n  height: 100%;\n  margin-right: 30px;\n}\n.show-tabs-top .show-tabs-tabpane-inactive {\n  height: 0;\n  overflow: visible;\n}\n";
  styleInject(css_248z);

  var omit$1 = require('omit.js').default;
  var ShowTabs = /** @class */ (function (_super) {
      __extends(ShowTabs, _super);
      function ShowTabs() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ShowTabs.prototype.getClassName = function () {
          var prefixCls = this.props.prefixCls;
          return classNames(prefixCls);
      };
      ShowTabs.prototype.render = function () {
          var className = this.props.className;
          var otherProps = omit$1(this.props, [
              'className'
          ]);
          return (React.createElement(Tabs, __assign({}, otherProps, { className: classNames(this.getClassName(), className), renderTabBar: function () { return React.createElement(ScrollableInkTabBar, null); }, renderTabContent: function () { return React.createElement(TabContent, null); } })));
      };
      ShowTabs.Pane = Pane;
      ShowTabs.Card = Card;
      ShowTabs.defaultProps = {
          prefixCls: 'show-tabs'
      };
      return ShowTabs;
  }(React.PureComponent));

  var omit$2 = require('omit.js').default;
  var ShowCharts = /** @class */ (function (_super) {
      __extends(ShowCharts, _super);
      function ShowCharts() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ShowCharts.prototype.getClassName = function () {
          var prefixCls = this.props.prefixCls;
          return classNames(prefixCls);
      };
      ShowCharts.prototype.getChartsInstance = function () {
          return this.charts_react.getEchartsInstance();
      };
      ShowCharts.prototype.render = function () {
          var _this = this;
          var className = this.props.className;
          var otherProps = omit$2(this.props, [
              'className'
          ]);
          return (React.createElement(ReactCharts, __assign({}, otherProps, { className: classNames(this.getClassName(), className), ref: function (node) { return _this.charts_react = node; }, style: { height: '90%', width: '90%' } })));
      };
      ShowCharts.defaultProps = {
          prefixCls: 'show-charts',
          option: {}
      };
      return ShowCharts;
  }(React.PureComponent));

  var HelloUmd = /** @class */ (function (_super) {
      __extends(HelloUmd, _super);
      function HelloUmd() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      HelloUmd.prototype.render = function () {
          return (React.createElement("span", null, "HelloUmd"));
      };
      return HelloUmd;
  }(React.PureComponent));

  exports.HelloUmd = HelloUmd;
  exports.ShowCharts = ShowCharts;
  exports.ShowTabs = ShowTabs;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
