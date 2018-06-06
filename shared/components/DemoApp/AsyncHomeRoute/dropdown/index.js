(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactDropdownTreeSelect", ["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDropdownTreeSelect"] = factory(require("react"));
	else
		root["ReactDropdownTreeSelect"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(36)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(35)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataset__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dataset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapToObject__ = __webpack_require__(30);
/* unused harmony reexport mapToObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isEmpty__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__isEmpty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isOutsideClick__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__isOutsideClick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debounce__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__debounce__["a"]; });






/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".node{list-style:none;white-space:nowrap;padding:4px}.node.leaf.collapsed{display:none}.node.disabled>*{color:gray;cursor:not-allowed}.node.match-in-children.hide .node-label{opacity:.5}.toggle{white-space:pre;margin-right:4px}.toggle:after{content:\" \"}.toggle.collapsed:after{cursor:pointer;content:\"+\"}.toggle.expanded:after{cursor:pointer;content:\"-\"}.searchModeOn .toggle{display:none}.checkbox-item{vertical-align:middle;margin:0 4px 0 0}.checkbox-item.simple-select{display:none}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_partial__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_partial___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_array_partial__);


var identity = function identity(c) {
  return c;
};

/* harmony default export */ __webpack_exports__["a"] = (function (node) {
  var childProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var childSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return __WEBPACK_IMPORTED_MODULE_0_array_partial___default()(node[childProp], function (c) {
    return childSelector(c).checked;
  }) || node[childProp].some(function (c) {
    return childSelector(c).partial;
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(7);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__index_css___default.a);

var getTags = function getTags() {
  var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var onDelete = arguments[1];
  return tags.map(function (tag) {
    var _id = tag._id,
        label = tag.label,
        tagClassName = tag.tagClassName,
        dataset = tag.dataset;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      _extends({ className: cx('tag-item', tagClassName), key: 'tag-item-' + _id }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getDataset */])(dataset)),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__tag__["a" /* default */], { label: label, id: _id, onDelete: onDelete })
    );
  });
};

var Input = function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.handleInputChange = function (e) {
      e.persist();
      _this.delayedCallback(e);
    };

    _this.delayedCallback = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* debounce */])(function (e) {
      return _this.props.onInputChange(e.target.value);
    }, 300);
    return _this;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tags = _props.tags,
          onTagRemove = _props.onTagRemove,
          inputRef = _props.inputRef,
          _props$placeholderTex = _props.placeholderText,
          placeholderText = _props$placeholderTex === undefined ? 'Choose...' : _props$placeholderTex,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: cx('tag-list') },
        getTags(tags, onTagRemove),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: cx('tag-item') },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            type: 'text',
            ref: inputRef,
            className: cx('search'),
            placeholder: placeholderText,
            onChange: this.handleInputChange,
            onFocus: onFocus,
            onBlur: onBlur
          })
        )
      );
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Input.propTypes = {
  tags: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  placeholderText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onInputChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onTagRemove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  inputRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPartialState__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flatten_tree__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var TreeManager = function () {
  function TreeManager(tree, simple, showPartialState) {
    _classCallCheck(this, TreeManager);

    this._src = tree;

    var _flattenTree = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__flatten_tree__["a" /* default */])(JSON.parse(JSON.stringify(tree)), simple, showPartialState),
        list = _flattenTree.list,
        defaultValues = _flattenTree.defaultValues;

    this.tree = list;
    this.defaultValues = defaultValues;
    this.simpleSelect = simple;
    this.showPartialState = showPartialState;
    this.searchMaps = new Map();
  }

  _createClass(TreeManager, [{
    key: 'getNodeById',
    value: function getNodeById(id) {
      return this.tree.get(id);
    }
  }, {
    key: 'getMatches',
    value: function getMatches(searchTerm) {
      var _this = this;

      if (this.searchMaps.has(searchTerm)) {
        return this.searchMaps.get(searchTerm);
      }

      var proximity = -1;
      var closestMatch = searchTerm;
      this.searchMaps.forEach(function (m, key) {
        if (searchTerm.startsWith(key) && key.length > proximity) {
          proximity = key.length;
          closestMatch = key;
        }
      });

      var matches = [];

      if (closestMatch !== searchTerm) {
        var superMatches = this.searchMaps.get(closestMatch);
        superMatches.forEach(function (key) {
          var node = _this.getNodeById(key);
          if (node.label.toLowerCase().indexOf(searchTerm) >= 0) {
            matches.push(node._id);
          }
        });
      } else {
        this.tree.forEach(function (node) {
          if (node.label.toLowerCase().indexOf(searchTerm) >= 0) {
            matches.push(node._id);
          }
        });
      }

      this.searchMaps.set(searchTerm, matches);
      return matches;
    }
  }, {
    key: 'setChildMatchStatus',
    value: function setChildMatchStatus(id) {
      if (id !== undefined) {
        var node = this.getNodeById(id);
        node.matchInChildren = true;
        this.setChildMatchStatus(node._parent);
      }
    }
  }, {
    key: 'filterTree',
    value: function filterTree(searchTerm) {
      var _this2 = this;

      var matches = this.getMatches(searchTerm.toLowerCase());

      this.tree.forEach(function (node) {
        node.hide = true;
        node.matchInChildren = false;
      });

      matches.forEach(function (m) {
        var node = _this2.getNodeById(m);
        node.hide = false;
        _this2.setChildMatchStatus(node._parent);
      });

      var allNodesHidden = matches.length === 0;
      return { allNodesHidden: allNodesHidden, tree: this.tree };
    }
  }, {
    key: 'restoreNodes',
    value: function restoreNodes() {
      this.tree.forEach(function (node) {
        node.hide = false;
      });

      return this.tree;
    }
  }, {
    key: 'restoreDefaultValues',
    value: function restoreDefaultValues() {
      var _this3 = this;

      this.defaultValues.forEach(function (id) {
        _this3.setNodeCheckedState(id, true);
      });

      return this.tree;
    }
  }, {
    key: 'togglePreviousChecked',
    value: function togglePreviousChecked(id) {
      var prevChecked = this.currentChecked;
      if (prevChecked) this.getNodeById(prevChecked).checked = false;
      this.currentChecked = id;
    }
  }, {
    key: 'setNodeCheckedState',
    value: function setNodeCheckedState(id, checked) {
      var node = this.getNodeById(id);
      node.checked = checked;

      if (this.showPartialState) {
        node.partial = false;
      }

      if (this.simpleSelect) {
        this.togglePreviousChecked(id);
      } else {
        this.toggleChildren(id, checked);

        if (this.showPartialState) {
          this.partialCheckParents(node);
        }

        if (!checked) {
          this.unCheckParents(node);
        }
      }
    }

    /**
     * Walks up the tree unchecking parent nodes
     * @param  {[type]} node [description]
     * @return {[type]}      [description]
     */

  }, {
    key: 'unCheckParents',
    value: function unCheckParents(node) {
      var parent = node._parent;
      while (parent) {
        var next = this.getNodeById(parent);
        next.checked = false;
        next.partial = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPartialState__["a" /* default */])(next, '_children', this.getNodeById.bind(this));
        parent = next._parent;
      }
    }

    /**
     * Walks up the tree setting partial state on parent nodes
     * @param  {[type]} node [description]
     * @return {[type]}      [description]
     */

  }, {
    key: 'partialCheckParents',
    value: function partialCheckParents(node) {
      var _this4 = this;

      var parent = node._parent;
      while (parent) {
        var next = this.getNodeById(parent);
        next.checked = next._children.every(function (c) {
          return _this4.getNodeById(c).checked;
        });
        next.partial = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPartialState__["a" /* default */])(next, '_children', this.getNodeById.bind(this));
        parent = next._parent;
      }
    }
  }, {
    key: 'toggleChildren',
    value: function toggleChildren(id, state) {
      var _this5 = this;

      var node = this.getNodeById(id);
      node.checked = state;

      if (this.showPartialState) {
        node.partial = false;
      }

      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isEmpty */])(node._children)) {
        node._children.forEach(function (id) {
          return _this5.toggleChildren(id, state);
        });
      }
    }
  }, {
    key: 'toggleNodeExpandState',
    value: function toggleNodeExpandState(id) {
      var node = this.getNodeById(id);
      node.expanded = !node.expanded;
      if (!node.expanded) this.collapseChildren(node);
      return this.tree;
    }
  }, {
    key: 'collapseChildren',
    value: function collapseChildren(node) {
      var _this6 = this;

      node.expanded = false;
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isEmpty */])(node._children)) {
        node._children.forEach(function (c) {
          return _this6.collapseChildren(_this6.getNodeById(c));
        });
      }
    }
  }, {
    key: 'getTags',
    value: function getTags() {
      var _this7 = this;

      var tags = [];
      var visited = {};
      var markSubTreeVisited = function markSubTreeVisited(node) {
        visited[node._id] = true;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isEmpty */])(node._children)) node._children.forEach(function (c) {
          return markSubTreeVisited(_this7.getNodeById(c));
        });
      };

      this.tree.forEach(function (node, key) {
        if (visited[key]) return;

        if (node.checked) {
          // Parent node, so no need to walk children
          tags.push(node);
          markSubTreeVisited(node);
        } else {
          visited[key] = true;
        }
      });
      return tags;
    }
  }]);

  return TreeManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (TreeManager);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_infinite_scroll_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_infinite_scroll_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_infinite_scroll_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_node__ = __webpack_require__(23);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var shouldRenderNode = function shouldRenderNode(node, searchModeOn, data) {
  if (node.hide) return false;
  if (searchModeOn || node.expanded) return true;

  var parent = node._parent && data.get(node._parent);
  // if it has a parent, then check parent's state.
  // otherwise root nodes are always rendered
  return !parent || parent.expanded;
};

var Tree = function (_Component) {
  _inherits(Tree, _Component);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

    _initialiseProps.call(_this);

    _this.computeInstanceProps(props);

    _this.state = {
      items: _this.allVisibleNodes.slice(0, _this.props.pageSize)
    };
    return _this;
  }

  _createClass(Tree, [{
    key: 'render',
    value: function render() {
      var searchModeOn = this.props.searchModeOn;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'ul',
        { className: 'root ' + (searchModeOn ? 'searchModeOn' : ''), ref: this.setNodeRef },
        this.state.scrollableTarget && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_react_infinite_scroll_component___default.a,
          {
            dataLength: this.state.items.length,
            next: this.loadMore,
            hasMore: this.hasMore(),
            loader: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'span',
              { className: 'searchLoader' },
              'Loading...'
            ),
            scrollableTarget: this.state.scrollableTarget
          },
          this.state.items
        )
      );
    }
  }]);

  return Tree;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

Tree.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  keepTreeOnSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  searchModeOn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onNodeToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onCheckboxChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  simpleSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  showPartiallySelected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  pageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};
Tree.defaultProps = {
  pageSize: 100
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (nextProps) {
    _this2.computeInstanceProps(nextProps);
    _this2.setState({ items: _this2.allVisibleNodes.slice(0, _this2.props.pageSize) });
  };

  this.componentDidMount = function () {
    _this2.setState({ scrollableTarget: _this2.node.parentNode });
  };

  this.computeInstanceProps = function (props) {
    _this2.allVisibleNodes = _this2.getNodes(props);
    _this2.totalPages = Math.ceil(_this2.allVisibleNodes.length / _this2.props.pageSize);
    _this2.currentPage = 1;
  };

  this.getNodes = function (props) {
    var data = props.data,
        keepTreeOnSearch = props.keepTreeOnSearch,
        searchModeOn = props.searchModeOn,
        simpleSelect = props.simpleSelect,
        showPartiallySelected = props.showPartiallySelected;
    var onAction = props.onAction,
        onChange = props.onChange,
        onCheckboxChange = props.onCheckboxChange,
        onNodeToggle = props.onNodeToggle;

    var items = [];
    data.forEach(function (node) {
      if (shouldRenderNode(node, searchModeOn, data)) {
        items.push(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__tree_node__["a" /* default */], _extends({
          keepTreeOnSearch: keepTreeOnSearch,
          key: node._id
        }, node, {
          searchModeOn: searchModeOn,
          onChange: onChange,
          onCheckboxChange: onCheckboxChange,
          onNodeToggle: onNodeToggle,
          onAction: onAction,
          simpleSelect: simpleSelect,
          showPartiallySelected: showPartiallySelected
        })));
      }
    });
    return items;
  };

  this.hasMore = function () {
    return _this2.currentPage <= _this2.totalPages;
  };

  this.loadMore = function () {
    _this2.currentPage = _this2.currentPage + 1;
    var nextItems = _this2.allVisibleNodes.slice(0, _this2.currentPage * _this2.props.pageSize);
    _this2.setState({ items: nextItems });
  };

  this.setNodeRef = function (node) {
    _this2.node = node;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Tree);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".hide:not(.match-in-children){display:none}.react-dropdown-tree-select .dropdown{position:relative;display:table}.react-dropdown-tree-select .dropdown .dropdown-trigger{padding:4px;line-height:20px;max-height:200px;display:inline-block;overflow:auto;border:1px solid #b9b9b9}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow{cursor:pointer}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.bottom:after{content:\"\\25BC\";vertical-align:middle;color:#3c3c3c;margin-right:2px}.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.top:after{content:\"\\25B2\";vertical-align:middle;color:#3c3c3c;margin-right:2px}.react-dropdown-tree-select .dropdown .dropdown-content{position:absolute;padding:4px;z-index:1;background:#fff;border-top:1px solid rgba(0,0,0,.05);-webkit-box-shadow:0 5px 8px rgba(0,0,0,.15);box-shadow:0 5px 8px rgba(0,0,0,.15)}.react-dropdown-tree-select .dropdown .dropdown-content ul{margin:0;padding:0}", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function(arr, func) {
  const some = arr.filter(func)
  return some.length !== 0 && some.length !== arr.length
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* unused harmony export refUpdater */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var refUpdater = function refUpdater(_ref) {
  var checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return function (input) {
    if (input) {
      input.checked = checked;
      input.indeterminate = indeterminate;
    }
  };
};

var Checkbox = function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          _props$indeterminate = _props.indeterminate,
          indeterminate = _props$indeterminate === undefined ? false : _props$indeterminate,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['checked', 'indeterminate', 'onChange']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ type: 'checkbox', ref: refUpdater({ checked: checked, indeterminate: indeterminate }), onChange: onChange }, rest));
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Checkbox.propTypes = {
  checked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  indeterminate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree_manager__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*!
 * React Dropdown Tree Select
 * A lightweight, fast and highly customizable tree select component.
 * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
 * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
 * license MIT
 * see https://github.com/dowjones/react-dropdown-tree-select
 */











var cx = __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_7__index_css___default.a);

var DropdownTreeSelect = function (_Component) {
  _inherits(DropdownTreeSelect, _Component);

  function DropdownTreeSelect(props) {
    _classCallCheck(this, DropdownTreeSelect);

    var _this = _possibleConstructorReturn(this, (DropdownTreeSelect.__proto__ || Object.getPrototypeOf(DropdownTreeSelect)).call(this, props));

    _this.notifyChange = function () {
      var _this$props;

      typeof _this.props.onChange === 'function' && (_this$props = _this.props).onChange.apply(_this$props, arguments);
    };

    _this.createList = function (tree, simple, showPartial) {
      _this.treeManager = new __WEBPACK_IMPORTED_MODULE_6__tree_manager__["a" /* default */](tree, simple, showPartial);
      return _this.treeManager.tree;
    };

    _this.resetSearchState = function () {
      // clear the search criteria and avoid react controlled/uncontrolled warning
      _this.searchInput.value = '';
      return {
        tree: _this.treeManager.restoreNodes(), // restore the tree to its pre-search state
        searchModeOn: false,
        allNodesHidden: false
      };
    };

    _this.handleClick = function () {
      _this.setState(function (prevState) {
        // keep dropdown active when typing in search box
        var showDropdown = _this.keepDropdownActive || !prevState.showDropdown;

        // register event listeners only if there is a state change
        if (showDropdown !== prevState.showDropdown) {
          if (showDropdown) {
            document.addEventListener('click', _this.handleOutsideClick, false);
          } else {
            document.removeEventListener('click', _this.handleOutsideClick, false);
          }
        }

        return !showDropdown ? _extends({ showDropdown: showDropdown }, _this.resetSearchState()) : { showDropdown: showDropdown };
      });
    };

    _this.handleOutsideClick = function (e) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* isOutsideClick */])(e)) {
        return;
      }

      _this.handleClick();
    };

    _this.onInputChange = function (value) {
      var _this$treeManager$fil = _this.treeManager.filterTree(value),
          allNodesHidden = _this$treeManager$fil.allNodesHidden,
          tree = _this$treeManager$fil.tree;

      var searchModeOn = value.length > 0;

      _this.setState({
        tree: tree,
        searchModeOn: searchModeOn,
        allNodesHidden: allNodesHidden
      });
    };

    _this.onTagRemove = function (id) {
      _this.onCheckboxChange(id, false);
    };

    _this.onNodeToggle = function (id) {
      _this.treeManager.toggleNodeExpandState(id);
      _this.setState({ tree: _this.treeManager.tree });
      typeof _this.props.onNodeToggle === 'function' && _this.props.onNodeToggle(_this.treeManager.getNodeById(id));
    };

    _this.onCheckboxChange = function (id, checked) {
      _this.treeManager.setNodeCheckedState(id, checked);
      var tags = _this.treeManager.getTags();
      var showDropdown = _this.props.simpleSelect ? false : _this.state.showDropdown;

      if (!tags.length) {
        _this.treeManager.restoreDefaultValues();
        tags = _this.treeManager.getTags();
      }

      var nextState = {
        tree: _this.treeManager.tree,
        tags: tags,
        showDropdown: showDropdown
      };

      if (_this.props.simpleSelect || _this.props.clearSearchOnChange) {
        Object.assign(nextState, _this.resetSearchState());
      }

      if (_this.props.simpleSelect) {
        document.removeEventListener('click', _this.handleOutsideClick, false);
      }

      _this.setState(nextState);
      _this.notifyChange(_this.treeManager.getNodeById(id), tags);
    };

    _this.onAction = function (actionId, nodeId) {
      typeof _this.props.onAction === 'function' && _this.props.onAction(actionId, _this.treeManager.getNodeById(nodeId));
    };

    _this.onInputFocus = function () {
      _this.keepDropdownActive = true;
    };

    _this.onInputBlur = function () {
      _this.keepDropdownActive = false;
    };

    _this.state = {
      showDropdown: _this.props.showDropdown || false,
      searchModeOn: false
    };
    return _this;
  }

  _createClass(DropdownTreeSelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var tree = this.createList(this.props.data, this.props.simpleSelect, this.props.showPartiallySelected);
      var tags = this.treeManager.getTags();
      this.setState({ tree: tree, tags: tags });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var tree = this.createList(nextProps.data, nextProps.simpleSelect, nextProps.showPartiallySelected);
      var tags = this.treeManager.getTags();
      this.setState({ tree: tree, tags: tags });
    }

    // isOutSideClick = e =>

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dropdownTriggerClassname = cx({
        'dropdown-trigger': true,
        arrow: true,
        top: this.state.showDropdown,
        bottom: !this.state.showDropdown
      });

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: cx(this.props.className, 'react-dropdown-tree-select'),
          ref: function ref(node) {
            _this2.node = node;
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          { className: 'dropdown' },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'a',
            { className: dropdownTriggerClassname, onClick: this.handleClick },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__input__["a" /* default */], {
              inputRef: function inputRef(el) {
                _this2.searchInput = el;
              },
              tags: this.state.tags,
              placeholderText: this.props.placeholderText,
              onInputChange: this.onInputChange,
              onFocus: this.onInputFocus,
              onBlur: this.onInputBlur,
              onTagRemove: this.onTagRemove
            })
          ),
          this.state.showDropdown && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { className: cx('dropdown-content') },
            this.state.allNodesHidden ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'span',
              { className: 'no-matches' },
              this.props.noMatchesText || 'No matches found'
            ) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__tree__["a" /* default */], {
              data: this.state.tree,
              keepTreeOnSearch: this.props.keepTreeOnSearch,
              searchModeOn: this.state.searchModeOn,
              onAction: this.onAction,
              onCheckboxChange: this.onCheckboxChange,
              onNodeToggle: this.onNodeToggle,
              simpleSelect: this.props.simpleSelect,
              showPartiallySelected: this.props.showPartiallySelected
            })
          )
        )
      );
    }
  }]);

  return DropdownTreeSelect;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

DropdownTreeSelect.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]).isRequired,
  clearSearchOnChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  keepTreeOnSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  placeholderText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  showDropdown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onNodeToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  simpleSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  noMatchesText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  showPartiallySelected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};


/* harmony default export */ __webpack_exports__["default"] = (DropdownTreeSelect);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var cx = __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__index_css___default.a);

var Tag = function (_PureComponent) {
  _inherits(Tag, _PureComponent);

  function Tag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete;


      onDelete(id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'span',
        { className: cx('tag') },
        label,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'button',
          { onClick: this.handleClick, className: cx('tag-remove'), type: 'button' },
          'x'
        )
      );
    }
  }]);

  return Tag;
}(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);

Tag.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onDelete: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPartialState__ = __webpack_require__(10);


/**
 * Converts a nested node into an associative array with pointers to child and parent nodes
 * Given:
```
const tree = [
  {
    label: 'item1', value: 'value1',
    children: [
      {
        label: 'item10', value: 'value10',
        children: [
          {label: 'item20', value: 'value31'},
          {label: 'item12', value: 'value32'}
        ]
      },
      { label: 'item22', value: 'value22' }
    ]
  },
  {
    label: 'item1', value: 'value1',
    children: [
      {
        label: 'item21', value: 'value21',
        children: [
          {label: 'item31', value: 'value31'},
          {label: 'item32', value: 'value32'}
        ]
      },
      { label: 'item22', value: 'value22' }
    ]
  }
]
```
 * results in
```
{
  "0": {
    "_id": "0",
    "_parent": null,
    "_children": ["0-0", "0-1"],
    "label": "item1",
    "value": "value1"
  },
  "1": {
    "_id": "1", "_parent": null, "_children": ["1-0", "1-1"],
    "label": "item2", "value": "value2"
  },
  "0-0": {
    "_id": "0-0", "_parent": "0", "_children": ["0-0-0", "0-0-1"],
    "label": "item1-1", "value": "value1-1"
  },
  "0-1": {
    "_id": "0-1", "_parent": "0",
    "label": "item1-2", "value": "value1-2"
  },
  "0-0-0": {
    "_id": "0-0-0", "_parent": "0-0",
    "label": "item1-1-1", "value": "value1-1-1"
  },
  "0-0-1": {
    "_id": "0-0-1", "_parent": "0-0",
    "label": "item1-1-2", "value": "value1-1-2"
  },
  "1-0": {
    "_id": "1-0", "_parent": "1", "_children": ["1-0-0", "1-0-1", "1-0-2"],
    "label": "item2-1", "value": "value2-1"
  },
  "1-1": {
    "_id": "1-1", "_parent": "1",
    "label": "item2-2", "value": "value2-2"
  },
  "1-0-0": {
    "_id": "1-0-0", "_parent": "1-0",
    "label": "item2-1-1", "value": "value2-1-1"
  },
  "1-0-1": {
    "_id": "1-0-1", "_parent": "1-0",
    "label": "item2-1-2", "value": "value2-1-2"
  },
  "1-0-2": {
    "_id": "1-0-2", "_parent": "1-0", "_children": ["1-0-2-0"],
    "label": "item2-1-3", "value": "value2-1-3"
  },
  "1-0-2-0": {
    "_id": "1-0-2-0", "_parent": "1-0-2",
    "label": "item2-1-3-1", "value": "value2-1-3-1"
  }
}
```
 * @param  {[type]} tree              The incoming tree object
 * @param  {[bool]} simple            Whether its in Single slect mode (simple dropdown)
 * @param  {[bool]} showPartialState  Whether to show partially checked state
 * @return {object}                   The flattened list
 */
function flattenTree(tree, simple, showPartialState) {
  var forest = Array.isArray(tree) ? tree : [tree];

  // eslint-disable-next-line no-use-before-define

  var _walkNodes = walkNodes({
    nodes: forest,
    simple: simple,
    showPartialState: showPartialState
  }),
      list = _walkNodes.list,
      defaultValues = _walkNodes.defaultValues;

  return { list: list, defaultValues: defaultValues };
}

/**
 * If the node didn't specify anything on its own
 * figure out the initial state based on parent
 * @param {object} node [current node]
 * @param {object} parent [node's immediate parent]
 */
function setInitialStateProps(node) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var stateProps = ['checked', 'disabled'];
  for (var index = 0; index < stateProps.length; index++) {
    var prop = stateProps[index];

    // if and only if, node doesn't explicitly define a prop, grab it from parent
    if (node[prop] === undefined && parent[prop] !== undefined) {
      node[prop] = parent[prop];
    }
  }
}

function walkNodes(_ref) {
  var nodes = _ref.nodes,
      _ref$list = _ref.list,
      list = _ref$list === undefined ? new Map() : _ref$list,
      parent = _ref.parent,
      _ref$depth = _ref.depth,
      depth = _ref$depth === undefined ? 0 : _ref$depth,
      simple = _ref.simple,
      showPartialState = _ref.showPartialState,
      _ref$defaultValues = _ref.defaultValues,
      defaultValues = _ref$defaultValues === undefined ? [] : _ref$defaultValues;

  nodes.forEach(function (node, i) {
    node._depth = depth;

    if (parent) {
      node._id = node.id || parent._id + '-' + i;
      node._parent = parent._id;
      parent._children.push(node._id);
    } else {
      node._id = node.id || '' + i;
    }

    if (node.isDefaultValue) {
      defaultValues.push(node._id);
      node.checked = true;
    }

    setInitialStateProps(node, parent);

    list.set(node._id, node);
    if (!simple && node.children) {
      node._children = [];
      walkNodes({
        nodes: node.children,
        list: list,
        parent: node,
        depth: depth + 1,
        showPartialState: showPartialState,
        defaultValues: defaultValues
      });

      if (showPartialState && !node.checked) {
        node.partial = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getPartialState__["a" /* default */])(node);

        // re-check if all children are checked. if so, check thyself
        if (node.children.every(function (c) {
          return c.checked;
        })) {
          node.checked = true;
        }
      }

      node.children = undefined;
    }
  });
  return { list: list, defaultValues: defaultValues };
}

/* harmony default export */ __webpack_exports__["a"] = (flattenTree);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Action = function (_PureComponent) {
  _inherits(Action, _PureComponent);

  function Action() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Action);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Action.__proto__ || Object.getPrototypeOf(Action)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onAction(_this.props.actionData);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          className = _props.className,
          text = _props.text;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'i',
        { title: title, className: className, onClick: this.handleClick },
        text
      );
    }
  }]);

  return Action;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Action.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  actionData: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Action.defaultProps = {
  onAction: function onAction() {}
};


/* harmony default export */ __webpack_exports__["a"] = (Action);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Actions = function (_PureComponent) {
  _inherits(Actions, _PureComponent);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actions = _props.actions,
          onAction = _props.onAction,
          id = _props.id;


      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* isEmpty */])(actions)) return null;

      // we _do_ want to rely on array index here
      // eslint-disable-next-line react/no-array-index-key
      return actions.map(function (a, idx) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__action__["a" /* default */], _extends({ key: 'action-' + idx }, a, { actionData: { action: a.id, id: id }, onAction: onAction }));
      });
    }
  }]);

  return Actions;
}(__WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]);

Actions.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array,
  onAction: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};
Actions.defaultProps = {
  onAction: function onAction() {}
};


/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_label__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toggle__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var cx = __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_7__index_css___default.a);

var isLeaf = function isLeaf(children) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* isEmpty */])(children);
};

var getNodeCx = function getNodeCx(props) {
  var keepTreeOnSearch = props.keepTreeOnSearch,
      _children = props._children,
      matchInChildren = props.matchInChildren,
      disabled = props.disabled,
      partial = props.partial,
      hide = props.hide,
      className = props.className,
      showPartiallySelected = props.showPartiallySelected;


  return cx('node', {
    leaf: isLeaf(_children),
    tree: !isLeaf(_children),
    disabled: disabled,
    hide: hide,
    'match-in-children': keepTreeOnSearch && matchInChildren,
    partial: showPartiallySelected && partial
  }, className);
};

var TreeNode = function (_PureComponent) {
  _inherits(TreeNode, _PureComponent);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).apply(this, arguments));
  }

  _createClass(TreeNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          simpleSelect = _props.simpleSelect,
          keepTreeOnSearch = _props.keepTreeOnSearch,
          _id = _props._id,
          _children = _props._children,
          dataset = _props.dataset,
          _depth = _props._depth,
          expanded = _props.expanded,
          title = _props.title,
          label = _props.label,
          partial = _props.partial,
          checked = _props.checked,
          value = _props.value,
          disabled = _props.disabled,
          actions = _props.actions,
          onAction = _props.onAction,
          searchModeOn = _props.searchModeOn,
          onNodeToggle = _props.onNodeToggle,
          onCheckboxChange = _props.onCheckboxChange,
          showPartiallySelected = _props.showPartiallySelected;

      var liCx = getNodeCx(this.props);
      var style = keepTreeOnSearch || !searchModeOn ? { paddingLeft: (_depth || 0) * 20 + 'px' } : {};

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'li',
        _extends({ className: liCx, style: style }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* getDataset */])(dataset)),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__toggle__["a" /* default */], { isLeaf: isLeaf(_children), expanded: expanded, id: _id, onNodeToggle: onNodeToggle }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__node_label__["a" /* default */], {
          title: title,
          label: label,
          id: _id,
          partial: partial,
          checked: checked,
          value: value,
          disabled: disabled,
          simpleSelect: simpleSelect,
          onCheckboxChange: onCheckboxChange,
          showPartiallySelected: showPartiallySelected
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */], { actions: actions, onAction: onAction, id: _id })
      );
    }
  }]);

  return TreeNode;
}(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);

TreeNode.propTypes = {
  _id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  _depth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  _children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  actions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  checked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  expanded: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  partial: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  dataset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  keepTreeOnSearch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  searchModeOn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onNodeToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onCheckboxChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  simpleSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  showPartiallySelected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};


/* harmony default export */ __webpack_exports__["a"] = (TreeNode);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var cx = __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__index_css___default.a);

var NodeLabel = function (_PureComponent) {
  _inherits(NodeLabel, _PureComponent);

  function NodeLabel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NodeLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeLabel.__proto__ || Object.getPrototypeOf(NodeLabel)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheckboxChange = function (e) {
      var _this$props = _this.props,
          simpleSelect = _this$props.simpleSelect,
          id = _this$props.id,
          onCheckboxChange = _this$props.onCheckboxChange;


      if (simpleSelect) {
        onCheckboxChange(id, true);
      } else {
        var checked = e.target.checked;

        onCheckboxChange(id, checked);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NodeLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          simpleSelect = _props.simpleSelect,
          title = _props.title,
          label = _props.label,
          id = _props.id,
          partial = _props.partial,
          checked = _props.checked,
          value = _props.value,
          disabled = _props.disabled,
          showPartiallySelected = _props.showPartiallySelected;

      var nodeLabelProps = { className: 'node-label' };

      if (simpleSelect) {
        nodeLabelProps.onClick = this.handleCheckboxChange;
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'label',
        { title: title || label, htmlFor: id },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkbox__["a" /* default */], {
          name: id,
          id: id,
          indeterminate: showPartiallySelected && partial,
          className: cx('checkbox-item', { 'simple-select': simpleSelect }),
          checked: checked,
          onChange: this.handleCheckboxChange,
          value: value,
          disabled: disabled
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'span',
          nodeLabelProps,
          label
        )
      );
    }
  }]);

  return NodeLabel;
}(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);

NodeLabel.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  actions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  checked: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  partial: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  expanded: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  dataset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  simpleSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  showPartiallySelected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onCheckboxChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["a"] = (NodeLabel);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var cx = __WEBPACK_IMPORTED_MODULE_0_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__index_css___default.a);

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.onToggle = function () {
      _this.props.onNodeToggle(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          expanded = _props.expanded,
          isLeaf = _props.isLeaf;

      var toggleCx = cx('toggle', { expanded: !isLeaf && expanded, collapsed: !isLeaf && !expanded });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: toggleCx, onClick: this.onToggle });
    }
  }]);

  return Toggle;
}(__WEBPACK_IMPORTED_MODULE_2_react__["PureComponent"]);

Toggle.propTypes = {
  expanded: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isLeaf: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onNodeToggle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};


/* harmony default export */ __webpack_exports__["a"] = (Toggle);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var toKebabCase = function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

var getDataset = function getDataset() {
  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(o).reduce(function (acc, cur) {
    acc['data-' + toKebabCase(cur)] = o[cur];
    return acc;
  }, {});
};

/* harmony default export */ __webpack_exports__["a"] = (getDataset);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Modified debounce that always invokes on leading edge
 * See unmodified: https://gist.github.com/mrchief/a7e8938ee96774f05644905b37f09536
 */
/* harmony default export */ __webpack_exports__["a"] = (function (func, wait) {
  var timeout = void 0;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      func.apply(undefined, args);
    };

    // timeout will be undefined the first time (leading edge)
    // so the callback will get executed once on leading edge
    var callNow = !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(undefined, args);
  };
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Simplified implmentation of isEmpty.
 * Note: This is not complete and will return false positives for empty objects and likes.
 * However, it suffices for the limited use-case of this project.
 */
var isEmpty = function isEmpty(o) {
  return !o || Array.isArray(o) && !o.length;
};

/* harmony default export */ __webpack_exports__["a"] = (isEmpty);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getPath = function getPath(e) {
  if (e.path) return e.path;

  var elem = e.target;
  var path = [elem];

  while (elem.parentElement) {
    elem = elem.parentElement;
    path.unshift(elem);
  }

  return path;
};

/* harmony default export */ __webpack_exports__["a"] = (function (e) {
  if (!(e instanceof Event)) return false;
  return !getPath(e).some(function (node) {
    return node.className && node.className.indexOf('react-dropdown-tree-select') >= 0;
  });
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var mapToObject = function mapToObject(map) {
  var obj = Object.create(null);
  // eslint-disable-next-line no-restricted-syntax
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];

      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj;
};

/* unused harmony default export */ var _unused_webpack_default_export = (mapToObject);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".node>label{cursor:pointer;margin-left:2px}.tag-list{display:inline;padding:0;margin:0}.tag-item{display:inline-block;margin:4px}.tag-item .search{border:none;border-bottom:1px solid #ccc;outline:none}.tag-item:last-child{margin-right:4px}", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".tag{background-color:#f4f4f4;border:1px solid #e9e9e9;padding:2px 0 2px 2px;border-radius:2px;display:inline-block}.tag-remove{color:#a0a0a0;font-size:75%;line-height:100%;cursor:pointer;background-color:transparent;border:none;outline:none}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(8);
  var warning = __webpack_require__(11);
  var ReactPropTypesSecret = __webpack_require__(9);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var warning = __webpack_require__(11);
var assign = __webpack_require__(33);

var ReactPropTypesSecret = __webpack_require__(9);
var checkPropTypes = __webpack_require__(34);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InfiniteScroll"] = factory(require("react"));
	else
		root["InfiniteScroll"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utilsThrottle = __webpack_require__(1);

	var _utilsThrottle2 = _interopRequireDefault(_utilsThrottle);

	var InfiniteScroll = (function (_Component) {
	  _inherits(InfiniteScroll, _Component);

	  function InfiniteScroll(props) {
	    _classCallCheck(this, InfiniteScroll);

	    _get(Object.getPrototypeOf(InfiniteScroll.prototype), "constructor", this).call(this);
	    this.state = {
	      showLoader: false,
	      lastScrollTop: 0,
	      actionTriggered: false,
	      pullToRefreshThresholdBreached: false
	    };
	    // variables to keep track of pull down behaviour
	    this.startY = 0;
	    this.currentY = 0;
	    this.dragging = false;
	    // will be populated in componentDidMount
	    // based on the height of the pull down element
	    this.maxPullDownDistance = 0;

	    this.onScrollListener = this.onScrollListener.bind(this);
	    this.throttledOnScrollListener = (0, _utilsThrottle2["default"])(this.onScrollListener, 150).bind(this);
	    this.onStart = this.onStart.bind(this);
	    this.onMove = this.onMove.bind(this);
	    this.onEnd = this.onEnd.bind(this);
	    this.getScrollableTarget = this.getScrollableTarget.bind(this);
	  }

	  _createClass(InfiniteScroll, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this._scrollableNode = this.getScrollableTarget();
	      this.el = this.props.height ? this._infScroll : this._scrollableNode || window;
	      this.el.addEventListener("scroll", this.throttledOnScrollListener);

	      if (typeof this.props.initialScrollY === "number" && this.el.scrollHeight > this.props.initialScrollY) {
	        this.el.scrollTo(0, this.props.initialScrollY);
	      }

	      if (this.props.pullDownToRefresh) {
	        this.el.addEventListener("touchstart", this.onStart);
	        this.el.addEventListener("touchmove", this.onMove);
	        this.el.addEventListener("touchend", this.onEnd);

	        this.el.addEventListener("mousedown", this.onStart);
	        this.el.addEventListener("mousemove", this.onMove);
	        this.el.addEventListener("mouseup", this.onEnd);

	        // get BCR of pullDown element to position it above
	        this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height;
	        this.forceUpdate();

	        if (typeof this.props.refreshFunction !== "function") {
	          throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
	        }
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.el.removeEventListener("scroll", this.throttledOnScrollListener);

	      if (this.props.pullDownToRefresh) {
	        this.el.removeEventListener("touchstart", this.onStart);
	        this.el.removeEventListener("touchmove", this.onMove);
	        this.el.removeEventListener("touchend", this.onEnd);

	        this.el.removeEventListener("mousedown", this.onStart);
	        this.el.removeEventListener("mousemove", this.onMove);
	        this.el.removeEventListener("mouseup", this.onEnd);
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(props) {
	      // do nothing when dataLength is unchanged
	      if (this.props.dataLength === props.dataLength) return;

	      // update state when new data was sent in
	      this.setState({
	        showLoader: false,
	        actionTriggered: false,
	        pullToRefreshThresholdBreached: false
	      });
	    }
	  }, {
	    key: "getScrollableTarget",
	    value: function getScrollableTarget() {
	      if (this.props.scrollableTarget instanceof HTMLElement) return this.props.scrollableTarget;
	      if (typeof this.props.scrollableTarget === 'string') {
	        return document.getElementById(this.props.scrollableTarget);
	      }
	      if (this.props.scrollableTarget === null) {
	        console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
	      }
	      return null;
	    }
	  }, {
	    key: "onStart",
	    value: function onStart(evt) {
	      if (this.state.lastScrollTop) return;

	      this.dragging = true;
	      this.startY = evt.pageY || evt.touches[0].pageY;
	      this.currentY = this.startY;

	      this._infScroll.style.willChange = "transform";
	      this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
	    }
	  }, {
	    key: "onMove",
	    value: function onMove(evt) {
	      if (!this.dragging) return;
	      this.currentY = evt.pageY || evt.touches[0].pageY;

	      // user is scrolling down to up
	      if (this.currentY < this.startY) return;

	      if (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold) {
	        this.setState({
	          pullToRefreshThresholdBreached: true
	        });
	      }

	      // so you can drag upto 1.5 times of the maxPullDownDistance
	      if (this.currentY - this.startY > this.maxPullDownDistance * 1.5) return;

	      this._infScroll.style.overflow = "visible";
	      this._infScroll.style.transform = "translate3d(0px, " + (this.currentY - this.startY) + "px, 0px)";
	    }
	  }, {
	    key: "onEnd",
	    value: function onEnd(evt) {
	      var _this = this;

	      this.startY = 0;
	      this.currentY = 0;

	      this.dragging = false;

	      if (this.state.pullToRefreshThresholdBreached) {
	        this.props.refreshFunction && this.props.refreshFunction();
	      }

	      requestAnimationFrame(function () {
	        _this._infScroll.style.overflow = "auto";
	        _this._infScroll.style.transform = "none";
	        _this._infScroll.style.willChange = "none";
	      });
	    }
	  }, {
	    key: "isElementAtBottom",
	    value: function isElementAtBottom(target) {
	      var scrollThreshold = arguments.length <= 1 || arguments[1] === undefined ? 0.8 : arguments[1];

	      var clientHeight = target === document.body || target === document.documentElement ? window.screen.availHeight : target.clientHeight;

	      return target.scrollTop + clientHeight >= scrollThreshold * target.scrollHeight;
	    }
	  }, {
	    key: "onScrollListener",
	    value: function onScrollListener(event) {
	      var _this2 = this;

	      if (typeof this.props.onScroll === "function") {
	        // Execute this callback in next tick so that it does not affect the
	        // functionality of the library.
	        setTimeout(function () {
	          return _this2.props.onScroll(event);
	        }, 0);
	      }

	      var target = this.props.height || this._scrollableNode ? event.target : document.documentElement.scrollTop ? document.documentElement : document.body;

	      // return immediately if the action has already been triggered,
	      // prevents multiple triggers.
	      if (this.state.actionTriggered) return;

	      var atBottom = this.isElementAtBottom(target, this.props.scrollThreshold);

	      // call the `next` function in the props to trigger the next data fetch
	      if (atBottom && this.props.hasMore) {
	        this.setState({ actionTriggered: true, showLoader: true });
	        this.props.next();
	      }
	      this.setState({ lastScrollTop: target.scrollTop });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;

	      var style = _extends({
	        height: this.props.height || "auto",
	        overflow: "auto",
	        WebkitOverflowScrolling: "touch"
	      }, this.props.style);
	      var hasChildren = this.props.hasChildren || !!(this.props.children && this.props.children.length);

	      // because heighted infiniteScroll visualy breaks
	      // on drag down as overflow becomes visible
	      var outerDivStyle = this.props.pullDownToRefresh && this.props.height ? { overflow: "auto" } : {};
	      return _react2["default"].createElement(
	        "div",
	        { style: outerDivStyle },
	        _react2["default"].createElement(
	          "div",
	          {
	            className: "infinite-scroll-component",
	            ref: function (infScroll) {
	              return _this3._infScroll = infScroll;
	            },
	            style: style
	          },
	          this.props.pullDownToRefresh && _react2["default"].createElement(
	            "div",
	            {
	              style: { position: "relative" },
	              ref: function (pullDown) {
	                return _this3._pullDown = pullDown;
	              }
	            },
	            _react2["default"].createElement(
	              "div",
	              {
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  right: 0,
	                  top: -1 * this.maxPullDownDistance
	                }
	              },
	              !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
	              this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
	            )
	          ),
	          this.props.children,
	          !this.state.showLoader && !hasChildren && this.props.hasMore && this.props.loader,
	          this.state.showLoader && this.props.hasMore && this.props.loader,
	          !this.props.hasMore && this.props.endMessage
	        )
	      );
	    }
	  }]);

	  return InfiniteScroll;
	})(_react.Component);

	exports["default"] = InfiniteScroll;

	InfiniteScroll.defaultProps = {
	  pullDownToRefreshContent: _react2["default"].createElement(
	    "h3",
	    null,
	    "Pull down to refresh"
	  ),
	  releaseToRefreshContent: _react2["default"].createElement(
	    "h3",
	    null,
	    "Release to refresh"
	  ),
	  pullDownToRefreshThreshold: 100,
	  disableBrowserPullToRefresh: true
	};

	InfiniteScroll.propTypes = {
	  next: _propTypes2["default"].func,
	  hasMore: _propTypes2["default"].bool,
	  children: _propTypes2["default"].node,
	  loader: _propTypes2["default"].node.isRequired,
	  scrollThreshold: _propTypes2["default"].number,
	  endMessage: _propTypes2["default"].node,
	  style: _propTypes2["default"].object,
	  height: _propTypes2["default"].number,
	  scrollableTarget: _propTypes2["default"].node,
	  hasChildren: _propTypes2["default"].bool,
	  pullDownToRefresh: _propTypes2["default"].bool,
	  pullDownToRefreshContent: _propTypes2["default"].node,
	  releaseToRefreshContent: _propTypes2["default"].node,
	  pullDownToRefreshThreshold: _propTypes2["default"].number,
	  refreshFunction: _propTypes2["default"].func,
	  onScroll: _propTypes2["default"].func,
	  dataLength: _propTypes2["default"].number.isRequired
	};
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// https://remysharp.com/2010/07/21/throttling-function-calls
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = throttle;

	function throttle(fn, threshhold, scope) {
	  threshhold || (threshhold = 250);
	  var last, deferTimer;
	  return function () {
	    var context = scope || this;

	    var now = +new Date(),
	        args = arguments;
	    if (last && now < last + threshhold) {
	      // hold on to it
	      clearTimeout(deferTimer);
	      deferTimer = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshhold);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	}

	module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(2);
	var invariant = __webpack_require__(3);
	var ReactPropTypesSecret = __webpack_require__(6);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(4)();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ])
});
;

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-dropdown-tree-select.js.map