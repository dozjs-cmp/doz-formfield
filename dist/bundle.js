// [DozFormfield]  Build version: 0.1.2  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozFormfield", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozFormfield"] = factory(require("doz"));
	else
		root["DozFormfield"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-formfield', _src2.default);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _doz = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            id: '',
            type: 'text',
            label: '',
            name: '',
            options: [],
            required: false,
            value: '',
            done: false,
            description: '',
            errors: '',
            classInner: '',
            classField: '',
            storeUrl: '',
            rowPath: '',
            valueRow: '',
            displayRow: '',
            showValue: false
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'template',
        value: function template(h) {
            var _this2 = this;

            var input = '';

            switch (this.props.type) {
                case 'select':

                    input = '\n                    <input \n                        d-ref="selectHidden" \n                        name="' + this.props.name + '" \n                        type="hidden"\n                    >\n                    <select \n                        id="' + this.props.id + '" \n                        d-ref="field" \n                        class="' + this.props.classField + '"\n                        required="' + this.props.required + '"\n                    >\n                    ' + this.each(this.props.options, function (item) {
                        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') return '\n                                <option ' + (_this2.props.value == item.value ? 'selected' : '') + ' value="' + item.value + '">' + item.key + ' ' + (_this2.props.showValue ? '(' + item.value + ')' : '') + '</option>\n                            ';else return '\n                                <option ' + (_this2.props.value === item ? 'selected' : '') + ' value="' + item + '">' + item + '</option>\n                            ';
                    }) + '\n                    </select>\n                ';
                    break;

                case 'textarea':
                    input = '\n                    <textarea \n                        id="' + this.props.id + '" \n                        d-ref="field" \n                        name="' + this.props.name + '" \n                        class="' + this.props.classField + '"\n                        required=' + this.props.required + '\n                    > ' + this.props.value + '</textarea>\n                ';
                    break;

                case 'checkbox':
                    input = '\n                    <input \n                        id="' + this.props.id + '" \n                        type="checkbox" \n                        d-bind="done"  \n                        d-ref="field" \n                        name="' + this.props.name + '" \n                        class="' + this.props.classField + '"\n                        required=' + this.props.required + '\n                    > $' + this.props.done + ' <br/>\n                ';
                    break;

                case 'color':
                    input = '\n                    <input \n                        d-ref="colorInput" \n                        type="color" \n                        d-bind="value" \n                        style="vertical-align: bottom"\n                    >\n                    <input \n                        d-ref="field" \n                        id="' + this.props.id + '" \n                        type="text" \n                        name="' + this.props.name + '" \n                        d-bind="value" \n                        class="' + this.props.classField + '"\n                        required="' + this.props.required + '"\n                        style="display: inline; width: inherit;"\n                        size="7"\n                        maxlength="7"\n                        pattern="^#(?:[0-9a-fA-F]{3}){1,2}$"\n                    >\n                ';
                    break;

                default:
                    input = '\n                    <input \n                        d-ref="field" \n                        id="' + this.props.id + '" \n                        type="' + this.props.type + '" \n                        name="' + this.props.name + '" \n                        d-bind="value"\n                        \n                        class="' + this.props.classField + '"\n                        required=' + this.props.required + '\n                    >\n                ';
            }

            return '\n            <div class="' + this.props.classInner + '">\n                <label for="' + this.props.id + '">\n                    ' + this.props.label + ' ' + (this.props.required ? '<span class="required">*</span>' : '') + ' \n                </label>\n                ' + (this.props.description ? '<div>' + this.props.description + '</div>' : '') + '\n                <div>\n                    ' + input + '\n                </div>\n                <div>\n                    ' + this.props.value + '\n                </div>\n                \n            </div>\n        ';
        }
    }, {
        key: 'setNew',
        value: function setNew() {
            this.props.value = '';
        }
    }, {
        key: 'onCreate',
        value: function onCreate() {
            this.props.id = this.props.id || 'form-field-' + Math.random();
        }
    }, {
        key: 'onMount',
        value: function onMount() {
            var _this3 = this;

            if (this.props.type === 'color') {
                this.ref.colorInput.addEventListener('change', function (e) {
                    _this3.ref.field.value = e.target.value;
                });
                this.ref.field.addEventListener('change', function (e) {
                    _this3.ref.colorInput.value = e.target.value;
                });
                var height = this.ref.field.getBoundingClientRect().height;
                this.ref.colorInput.style.height = height + 'px';
                this.ref.colorInput.style.width = height + 'px';
            } else if (this.props.type === 'select') {
                this.ref.selectHidden.addEventListener('change', function (e) {
                    _this3.$firstValue = e.target.value;
                    _this3.ref.field.value = e.target.value;
                });
                this.ref.field.addEventListener('change', function (e) {
                    _this3.ref.selectHidden.value = e.target.value;
                });
                this.$loadStore();
            }
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate() {}
    }, {
        key: 'onDestroy',
        value: function onDestroy() {}
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ })
/******/ ]);
}); 