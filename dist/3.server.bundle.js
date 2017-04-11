exports.ids = [3];
exports.modules = {

/***/ 69:
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
	
	var _reactRouter = __webpack_require__(1);
	
	var _LoginForm = __webpack_require__(71);
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	var _UserActions = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	var LoginPage = function (_Component) {
	  _inherits(LoginPage, _Component);
	
	  function LoginPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LoginPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleLogin = function (username, password) {
	      _this.props.dispatch((0, _UserActions.loginRequest)({ username: username, password: password }));
	      // browserHistory.push('/');
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(LoginPage, [{
	    key: 'render',
	    value: function render() {
	      return _jsx(_LoginForm2.default, {
	        login: this.handleLogin
	      });
	    }
	  }]);
	
	  return LoginPage;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return state;
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LoginPage);

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginForm = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LoginForm = {
	  "form": "_3sWMTuxyvd1V5ieUUy-3vy",
	  "form-content": "aRC4YaP2IAtLvN5JZRQ7T",
	  "message-box": "OtHvr2gygd6wjM1CaZq8t",
	  "form-p": "_3qBmvAZ4RuaCjKdx3_DXRO",
	  "form-title": "_1ocD7vS-xQpZGBAXiquOuW",
	  "form-field": "yaR-a4HCjeYH5yLCGrKCu",
	  "submit-button": "_8DLqESQK5xLT9bci_k-kf",
	  "appear": "_3RUCkWvyT17wpB13hJdJ2v"
	};
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	var _reactRouter = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/register'
	}, void 0, 'sign up here');
	
	var LoginForm = exports.LoginForm = function (_Component) {
	  _inherits(LoginForm, _Component);
	
	  function LoginForm() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, LoginForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.onLogin = function () {
	      var usernameRef = _this.refs.username;
	      var passwordRef = _this.refs.password;
	      if (usernameRef.value && passwordRef.value) {
	        _this.props.login(usernameRef.value, passwordRef.value);
	        passwordRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(LoginForm, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _LoginForm2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _LoginForm2.default['form-title']
	      }, void 0, 'Log In'), _jsx('p', {
	        className: _LoginForm2.default['form-p']
	      }, void 0, 'New users please ', _ref2), _jsx('p', {
	        id: 'message-box',
	        className: _LoginForm2.default['message-box']
	      }), _react2.default.createElement('input', { className: _LoginForm2.default['form-field'], ref: 'username', placeholder: 'Email' }), _react2.default.createElement('input', { ref: 'password', className: _LoginForm2.default['form-field'], placeholder: 'Password', type: 'password' }), _jsx('a', {
	        className: _LoginForm2.default['submit-button'],
	        onClick: this.onLogin
	      }, void 0, 'submit'));
	    }
	  }]);
	
	  return LoginForm;
	}(_react.Component);
	
	exports.default = LoginForm;

/***/ }

};;