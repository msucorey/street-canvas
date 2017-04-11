exports.ids = [2];
exports.modules = {

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _RegisterForm = __webpack_require__(72);
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	var _UserActions = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	var RegisterPage = function (_Component) {
	  _inherits(RegisterPage, _Component);
	
	  function RegisterPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RegisterPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleRegister = function (username, password) {
	      _this.props.dispatch((0, _UserActions.registerRequest)({ username: username, password: password }));
	    }, _this.handleLogin = function (username, password) {
	      _this.props.dispatch((0, _UserActions.loginRequest)({ username: username, password: password }));
	      // browserHistory.push('/');
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RegisterPage, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_RegisterForm2.default, {
	        register: this.handleRegister,
	        login: this.handleLogin
	      });
	    }
	  }]);
	
	  return RegisterPage;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return state;
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(RegisterPage);

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RegisterForm = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _RegisterForm = {
	  "form": "_3hyXRo25vT5e0lr0YJH-sb",
	  "form-content": "_2ICG7iX-nJskJO7vhWMw3D",
	  "message-box": "_3T45RKOFuFwYCVTseN5W0o",
	  "form-p": "_2EYv4442cD_YMjk6Cbd_mD",
	  "form-title": "_3fg0n82cN-o4FPY_lb1_MS",
	  "form-field": "_1i0fivq_K72wQrWLAjv1Me",
	  "submit-button": "_3J1b-x859-9xpUZC4TPjMy",
	  "appear": "_2EZNTTqO5GPzqKLEswxMEr"
	};
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/login'
	}, void 0, 'log in here');
	
	var RegisterForm = exports.RegisterForm = function (_Component) {
	  _inherits(RegisterForm, _Component);
	
	  function RegisterForm() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RegisterForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call.apply(_ref, [this].concat(args))), _this), _this.onRegister = function () {
	      var usernameRef = _this.refs.username;
	      var passwordRef = _this.refs.password;
	      if (usernameRef.value && passwordRef.value) {
	        _this.props.register(usernameRef.value, passwordRef.value);
	        setTimeout(function () {
	          _this.props.login(usernameRef.value, passwordRef.value);
	          passwordRef.value = '';
	        }, 500);
	        setTimeout(function () {
	          return _reactRouter.browserHistory.push('/');
	        }, 1000);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RegisterForm, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _RegisterForm2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _RegisterForm2.default['form-title']
	      }, void 0, 'Sign Up'), _jsx('p', {
	        className: _RegisterForm2.default['form-p']
	      }, void 0, 'Existing users please ', _ref2), _jsx('p', {
	        id: 'message-box',
	        className: _RegisterForm2.default['message-box']
	      }), _react2.default.createElement('input', { className: _RegisterForm2.default['form-field'], ref: 'username', placeholder: 'Email' }), _react2.default.createElement('input', { className: _RegisterForm2.default['form-field'], ref: 'password', type: 'password', placeholder: 'Password' }), _jsx('a', {
	        className: _RegisterForm2.default['submit-button'],
	        onClick: this.onRegister
	      }, void 0, 'Submit'));
	    }
	  }]);
	
	  return RegisterForm;
	}(_react.Component);
	
	exports.default = RegisterForm;

/***/ }

};;