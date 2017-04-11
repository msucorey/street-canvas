/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_PHOTOS = exports.ADD_PHOTO = undefined;
	exports.addPhoto = addPhoto;
	exports.addPhotoRequest = addPhotoRequest;
	exports.addPhotos = addPhotos;
	exports.fetchPhotos = fetchPhotos;
	exports.fetchPhoto = fetchPhoto;
	
	var _apiCaller = __webpack_require__(8);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	
	var ADD_PHOTO = exports.ADD_PHOTO = 'ADD_PHOTO';
	var ADD_PHOTOS = exports.ADD_PHOTOS = 'ADD_PHOTOS';
	
	// Export Actions
	function addPhoto(photo) {
	  return {
	    type: ADD_PHOTO,
	    photo: photo
	  };
	}
	
	function addPhotoRequest(photo) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('photos', 'post', {
	      photo: {
	        photo_url: photo.photo_url,
	        description: photo.description,
	        cuid: photo.description,
	        lat: photo.lat,
	        lng: photo.lng
	      }
	    }).then(function (res) {
	      return dispatch(addPhoto(photo));
	    });
	  };
	}
	
	function addPhotos(photos) {
	  return {
	    type: ADD_PHOTOS,
	    photos: photos
	  };
	}
	
	function fetchPhotos() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('photos').then(function (res) {
	      dispatch(addPhotos(res.photos));
	    });
	  };
	}
	
	function fetchPhoto(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('photos/' + cuid).then(function (res) {
	      return dispatch(addPhoto(res.photo));
	    });
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPhoto = exports.getPhotos = undefined;
	
	var _PhotoActions = __webpack_require__(3);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Import Actions
	
	
	// Initial State
	var initialState = { data: [] };
	
	var PhotoReducer = function PhotoReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PhotoActions.ADD_PHOTO:
	      return {
	        data: [action.photo].concat(_toConsumableArray(state.data))
	      };
	    case _PhotoActions.ADD_PHOTOS:
	      return {
	        data: action.photos
	      };
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all photos
	var getPhotos = exports.getPhotos = function getPhotos(state) {
	  return state.photos.data;
	};
	
	// Get photo by cuid
	var getPhoto = exports.getPhoto = function getPhoto(state, cuid) {
	  return state.photos.data.filter(function (photo) {
	    return photo.cuid === cuid;
	  })[0];
	};
	
	exports.default = PhotoReducer;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-cookie");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LOAD_USER_PROPS = exports.REGISTER_FAILURE = exports.REGISTER_SUCCESS = exports.UPDATE_USER_INFO_FAILURE = exports.UPDATE_USER_INFO_SUCCESS = exports.LOGOUT = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = undefined;
	exports.registerSuccess = registerSuccess;
	exports.registerFailure = registerFailure;
	exports.registerFailureMessage = registerFailureMessage;
	exports.registerRequest = registerRequest;
	exports.loginSuccess = loginSuccess;
	exports.loginFailureMessage = loginFailureMessage;
	exports.loginRequest = loginRequest;
	exports.loginFailure = loginFailure;
	exports.logout = logout;
	exports.updateUserInfoRequest = updateUserInfoRequest;
	exports.updateUserInfoSuccess = updateUserInfoSuccess;
	exports.updateUserInfoFailure = updateUserInfoFailure;
	exports.loadUserProps = loadUserProps;
	
	var _reactCookie = __webpack_require__(6);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	var _apiCaller = __webpack_require__(8);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	var _reactRouter = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Auth Constants
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
	var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';
	var UPDATE_USER_INFO_SUCCESS = exports.UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
	var UPDATE_USER_INFO_FAILURE = exports.UPDATE_USER_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE';
	var REGISTER_SUCCESS = exports.REGISTER_SUCCESS = 'REGISTER_SUCCESS';
	var REGISTER_FAILURE = exports.REGISTER_FAILURE = 'REGISTER_FAILURE';
	var LOAD_USER_PROPS = exports.LOAD_USER_PROPS = 'LOAD_USER_PROPS';
	
	function registerSuccess() {
	  return {
	    type: REGISTER_SUCCESS
	  };
	}
	
	function registerFailure(res) {
	  // alert('registration failed: '+res.err);
	  return {
	    type: REGISTER_FAILURE,
	    error: res.err
	  };
	}
	
	function registerFailureMessage(err) {
	  var box = document.getElementById('message-box');
	  box.innerHTML = err;
	}
	
	function registerRequest(userInfo) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('register', 'post', {
	      user: {
	        username: userInfo.username,
	        password: userInfo.password
	      }
	    }).then(function (res) {
	      if (res.user) {
	        dispatch(registerSuccess());
	      } else {
	        var text = res.err;
	        registerFailureMessage(text);
	      }
	    });
	  };
	}
	
	function loginSuccess(user, token) {
	  // alert('login successful');
	  _reactCookie2.default.save('mernAuth', {
	    u: user.username,
	    t: token
	  }, {
	    maxAge: 31536e3,
	    path: '/'
	  });
	
	  setTimeout(function () {
	    _reactRouter.browserHistory.push('/');
	  }, 500);
	
	  return {
	    type: LOGIN_SUCCESS,
	    user: user
	  };
	}
	
	function loginFailureMessage(err) {
	  var box = document.getElementById('message-box');
	  box.innerHTML = err;
	}
	
	function loginRequest(userInfo) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('login', 'post', {
	      user: {
	        username: userInfo.username,
	        password: userInfo.password
	      }
	    }).then(function (res) {
	      if (res.user) {
	        dispatch(loginSuccess(res.user, res.token));
	      } else {
	        // invalid credential
	        var text = res.err;
	        loginFailureMessage(text);
	      }
	    });
	  };
	}
	
	function loginFailure(res) {
	  // alert('login failed: '+res.err);
	  return {
	    type: LOGIN_FAILURE,
	    error: res.err
	  };
	}
	function logout() {
	  _reactCookie2.default.remove('mernAuth', { path: '/' });
	  // alert('logged out');
	  return {
	    type: LOGOUT
	  };
	}
	
	function updateUserInfoRequest(newUserInfo) {
	  return function (dispatch) {
	    var token = _reactCookie2.default.load('mernAuth').t;
	    return (0, _apiCaller2.default)('updateUserInfo', 'post', newUserInfo, {
	      'content-type': 'application/json',
	      'Authorization': token
	    }).then(function (res) {
	      if (res.user) {
	        dispatch(updateUserInfoSuccess(res.user));
	      } else {
	        dispatch(updateUserInfoFailure(res));
	      }
	    });
	  };
	}
	
	function updateUserInfoSuccess(user) {
	  alert('profile updated successfully');
	  return {
	    type: UPDATE_USER_INFO_SUCCESS,
	    user: user
	  };
	}
	
	function updateUserInfoFailure(res) {
	  alert('update failed: ' + res.err);
	  return {
	    type: UPDATE_USER_INFO_FAILURE,
	    res: res
	  };
	}
	
	function loadUserProps(user) {
	  return {
	    type: LOAD_USER_PROPS,
	    user: user
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(63);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var PhotoSchema = new Schema({
	  photo_url: { type: 'String', require: true },
	  // user_id: { type: 'Integer', default: 1, required: true },
	  description: { type: 'String' },
	  cuid: { type: 'String', required: true },
	  lat: { type: 'Number', required: true },
	  lng: { type: 'Number', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	
	});
	
	exports.default = _mongoose2.default.model('Photo', PhotoSchema);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactCookie = __webpack_require__(6);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	var _App = __webpack_require__(36);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _PhotoDetailPageContainer = __webpack_require__(35);
	
	var _PhotoDetailPageContainer2 = _interopRequireDefault(_PhotoDetailPageContainer);
	
	var _PhotoAddPageContainer = __webpack_require__(34);
	
	var _PhotoAddPageContainer2 = _interopRequireDefault(_PhotoAddPageContainer);
	
	var _PhotoGalleryPage = __webpack_require__(44);
	
	var _PhotoGalleryPage2 = _interopRequireDefault(_PhotoGalleryPage);
	
	var _LoginPage = __webpack_require__(51);
	
	var _LoginPage2 = _interopRequireDefault(_LoginPage);
	
	var _PhotoListPage = __webpack_require__(45);
	
	var _PhotoListPage2 = _interopRequireDefault(_PhotoListPage);
	
	var _RegisterPage = __webpack_require__(52);
	
	var _RegisterPage2 = _interopRequireDefault(_RegisterPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	var requireLoggedIn = function requireLoggedIn(nextState, replace, cb) {
	  var authCookie = _reactCookie2.default.load('mernAuth');
	  if (!authCookie || !authCookie.t) {
	    replace('/login');
	  }
	  cb();
	};
	var requireNotLoggedIn = function requireNotLoggedIn(nextState, replace, cb) {
	  var authCookie = _reactCookie2.default.load('mernAuth');
	  if (authCookie && authCookie.t) {
	    replace('/');
	  }
	  cb();
	};
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(19);
	
	var _reduxThunk = __webpack_require__(72);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(38);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(53);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _Photo2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	    var photo1 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491414710/IMG_20170214_125605_iytljf.jpg',
	      description: 'Anatomical bat by Austrian surgeon/street artist, Nychos', lat: '37.7875099', lng: '-122.397319', cuid: 'cikqgkv4q01ck7453ualdn7fq' });
	    var photo2 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491454814/dreams_boukn2.jpg',
	      description: 'You don\'t have dreams, you make them', lat: '37.758', lng: '-122.419', cuid: 'cikqgkv4q01ck7453uald3tgsreh' });
	    var photo3 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491454813/morning_stairwell_2_bottom_y19gxa.jpg',
	      description: 'Mosaic stairs', lat: '37.756279', lng: '-122.4756077', cuid: 'cikqgkv4q01ck7453uaadfabe' });
	    var photo4 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491454815/fire_steel_xxg1nw.jpg',
	      description: 'Steel and Fire', lat: '37.806', lng: '-122.269', cuid: 'cikqgkv4q01ck7453ualsg34t' });
	    var photo5 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672367/20170406_081026_zhxmx4.jpg',
	      description: 'Rest in Pride burger head', lat: '37.7807641', lng: '-122.4058703', cuid: 'cikqgkv4q01ck56whwhtth4ah' });
	    var photo6 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672374/IMG_20170407_181345_rmh8hp.jpg',
	      description: 'Blue Gray into the mind of madness', lat: '37.772', lng: '-122.432', cuid: 'cikqgkv4q01ckjkkyh3kh35k64' });
	    var photo7 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672367/IMG_20170407_181526_iyheav.jpg',
	      description: 'Smiling woman and happy people', lat: '37.772', lng: '-122.433', cuid: 'cikqgagahgagh46kjkkyh3kh35k64' });
	    var photo8 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672342/20170406_081116_q7osbs.jpg',
	      description: 'Bunny Kitty', lat: '37.7850441', lng: '-122.4059089', cuid: 'cadgfag4gagh46kjkkyh3kh35k64' });
	    var photo9 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672348/IMG_20170407_182703_aptmub.jpg',
	      description: 'Summer of Love', lat: '37.77', lng: '-122.445', cuid: '533treteragh46kjkkyh3kh35k64' });
	    var photo10 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672370/20170406_081001_sgm9ye.jpg',
	      description: 'Beautiful woman piece defaced', lat: '37.780920', lng: '-122.405878', cuid: '533treteragh46kjkkyags4tnk64' });
	    var photo11 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/q_auto:good/v1491672365/IMG_1833_lqgzuh.jpg',
	      description: 'Rogue One', lat: '37.7752018', lng: '-122.4195165', cuid: '533treteragh46kjkafds535364' });
	    var photo12 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491672322/IMG_1825_duxhfu.jpg',
	      description: 'Honey Bears Divisidero and Oak', lat: '37.772882', lng: '-122.438734', cuid: '533treteragh46kjagsgarw535364' });
	    var photo14 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491672324/IMG_1831_ilhqlr.jpg',
	      description: 'Bluebird of happiness by the underground stop', lat: '37.775149', lng: '-122.419870', cuid: '533treteasgah6sgarw535364' });
	    var photo15 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672368/20170406_081103_xwjazd.jpg',
	      description: 'Eagle', lat: '37.7809643', lng: '-122.405793', cuid: '533treteasgagkity09064' });
	    var photo16 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672362/IMG_20170407_181439_n8kh9f.jpg',
	      description: 'Fantasy woman in Lower Haight', lat: '37.772', lng: '-122.433', cuid: '533treteasdhgfhdgagkity09064' });
	    var photo17 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491672322/IMG_1829_u5qrfm.jpg',
	      description: 'Dragon Lantern Ladies', lat: '37.7751366', lng: '-122.419619', cuid: '533tretadfagdghahgdgagkity09064' });
	    var photo18 = new _Photo2.default({
	      photo_url: 'http://res.cloudinary.com/streetcanvas/image/upload/c_scale,q_auto:good,w_980/v1491672373/IMG_20170407_183014_kkbrre.jpg',
	      description: 'Side of a Burger Joint', lat: '37.77', lng: '-122.449', cuid: '533tretadfagdghahgdgagkfadgagah' });
	
	    _Photo2.default.create([photo1, photo5, photo4, photo3, photo6, photo9, photo10, photo7, photo8, photo9, photo11, photo12, photo14, photo15, photo16, photo17, photo2, photo18], function (error) {
	      if (!error) {}
	    });
	  });
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';
	
	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';
	
	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
	
	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _post = __webpack_require__(16);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _Photo = __webpack_require__(15);
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(11);
	
	var _post = __webpack_require__(55);
	
	var PostController = _interopRequireWildcard(_post);
	
	var _user = __webpack_require__(56);
	
	var UserController = _interopRequireWildcard(_user);
	
	var _Photo = __webpack_require__(54);
	
	var PhotoController = _interopRequireWildcard(_Photo);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	
	// Get all Photos
	router.route('/photos').get(PhotoController.getPhotos);
	
	// Get one photo by cuid
	router.route('/photos/:cuid').get(PhotoController.getPhoto);
	
	// Add a new Photo
	router.route('/photos').post(PhotoController.addPhoto);
	
	// User auth routes
	router.route('/register').post(UserController.register);
	
	router.route('/login').post(UserController.login);
	
	router.route('/updateUserInfo').post(UserController.updateUserInfo);
	
	exports.default = router;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(60);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(13);
	var cssnext = __webpack_require__(66);
	var postcssFocus = __webpack_require__(67);
	var postcssReporter = __webpack_require__(68);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __WEBPACK_IMPORTED_MODULE_0_react_redux__ && __WEBPACK_IMPORTED_MODULE_0_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react_redux__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react_redux___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(40);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header___default = __WEBPACK_IMPORTED_MODULE_1__header__ && __WEBPACK_IMPORTED_MODULE_1__header__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1__header__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1__header__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1__header___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1__header___default });
	
	
	
	const mapStateToProps = (state) => {
	  return {
	    userData: state.user.data,
	  };
	};
	
	// const mapDispatchToProps = (dispatch) => {
	//   return {
	//
	//   };
	// };
	
	/* harmony default export */ exports["default"] = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"].call(undefined, mapStateToProps,
	  null
	)(/* harmony import */__WEBPACK_IMPORTED_MODULE_1__header___default.a);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __WEBPACK_IMPORTED_MODULE_0_react_redux__ && __WEBPACK_IMPORTED_MODULE_0_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react_redux__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react_redux___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage__ = __webpack_require__(42);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage___default = __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage__ && __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1__PhotoAddPage___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1__PhotoAddPage___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PhotoActions__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PhotoActions___default = __WEBPACK_IMPORTED_MODULE_2__PhotoActions__ && __WEBPACK_IMPORTED_MODULE_2__PhotoActions__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2__PhotoActions__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2__PhotoActions__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2__PhotoActions___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2__PhotoActions___default });
	
	
	
	// Import Actions
	
	
	// Import Selectors
	// import { getPhoto } from '../../PhotoReducer';
	
	const mapStateToProps = (state) => {
	  return {
	    photos: state.photos,
	  };
	};
	
	const mapDispatchToProps = (dispatch) => {
	  return {
	    addPhoto: (photo_url, description, cuid, lat, lng) => dispatch(/* harmony import */__WEBPACK_IMPORTED_MODULE_2__PhotoActions__["addPhotoRequest"].call(undefined, { photo_url, description, cuid, lat, lng }))
	  };
	};
	
	/* harmony default export */ exports["default"] = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"].call(undefined, mapStateToProps,
	  mapDispatchToProps
	)(/* harmony import */__WEBPACK_IMPORTED_MODULE_1__PhotoAddPage___default.a);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __WEBPACK_IMPORTED_MODULE_0_react_redux__ && __WEBPACK_IMPORTED_MODULE_0_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react_redux__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_react_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_react_redux___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage__ = __webpack_require__(43);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage___default = __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage__ && __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PhotoActions__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PhotoActions___default = __WEBPACK_IMPORTED_MODULE_2__PhotoActions__ && __WEBPACK_IMPORTED_MODULE_2__PhotoActions__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2__PhotoActions__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2__PhotoActions__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2__PhotoActions___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2__PhotoActions___default });
	
	
	
	// Import Actions
	
	
	// Import Selectors
	// import { getPhoto } from '../../PhotoReducer';
	
	const mapStateToProps = (state) => {
	  return {
	    state: state,
	  };
	};
	
	const mapDispatchToProps = (dispatch) => {
	  return {
	    fetchPhoto: () => dispatch(/* harmony import */__WEBPACK_IMPORTED_MODULE_2__PhotoActions__["fetchPhoto"].call(undefined, this.params.cuid)),
	  };
	};
	
	/* harmony default export */ exports["default"] = /* harmony import */__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"].call(undefined, mapStateToProps,
	  mapDispatchToProps
	)(/* harmony import */__WEBPACK_IMPORTED_MODULE_1__PhotoDetailPage___default.a);


/***/ },
/* 36 */
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
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(12);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _HeaderContainer = __webpack_require__(33);
	
	var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);
	
	var _Footer = __webpack_require__(39);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AppActions = __webpack_require__(14);
	
	var _UserActions = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	// import cookie from 'react-cookie';
	
	var _ref = _jsx(_Footer2.default, {});
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	      var newState = !_this.state.logState;
	      _this.setState({ isMounted: true, logState: newState });
	    };
	
	    _this.logoutUser = function () {
	      _this.props.dispatch((0, _UserActions.logout)());
	      var newState = !_this.state.logState;
	      _this.setState({ isMounted: true, logState: newState });
	    };
	
	    _this.state = { isMounted: false, logState: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	    // this.setState({ isMounted: true, logState: false});
	    // eslint-disable-line
	
	    //  cw - keeping this legacy code as a placeholder right now
	    //  to force state changes or add other global toggles
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_HeaderContainer2.default, {
	        toggleAddPost: this.toggleAddPostSection,
	        logout: this.logoutUser
	      }), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, 'children'), _ref));
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    store: store,
	    userData: store.user.data
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(14);
	
	// Initial State
	var initialState = {
	  showAddPost: false
	}; // Import Actions
	
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(69);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(71);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(70);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(1);
	
	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf",
	  "bottomNav": "_1rQGXvViTQ2wMZnRnZ2d7P",
	  "addButton": "wD72WgykmC8gfBLz0AWj2"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, 'MAP');
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/gallery'
	}, void 0, 'GALLERY');
	
	var _ref3 = _jsx(_reactRouter.Link, {
	  to: '/add'
	}, void 0, '+');
	
	function Footer() {
	  return _jsx('div', {
	    className: _Footer2.default.footer
	  }, void 0, _jsx('ul', {}, void 0, _jsx('li', {
	    className: _Footer2.default.bottomNav
	  }, void 0, ' ', _ref), _jsx('li', {
	    className: _Footer2.default.bottomNav
	  }, void 0, _ref2), _jsx('li', {
	    className: _Footer2.default.addButton
	  }, void 0, _ref3)));
	}
	
	exports.default = Footer;

/***/ },
/* 40 */
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
	
	var _reactRouter = __webpack_require__(1);
	
	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "content": "_1eavAvnySzoZc5rld6Q4pa",
	  "site-title": "UfFn6muOcOBjkVI5_yltp",
	  "username": "_3IPQpfnwVZcWnkBJ8RvCd3",
	  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
	  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
	  "selected": "_3IRlmCpgSZBcTGVIGHvgaI"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _reactCookie = __webpack_require__(6);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// export function Header(props, context) {
	var _ref = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, 'STREET', _jsx('span', {}, void 0, 'CANVAS'));
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	    _this.loginUser = function (e) {
	      e.preventDefault();
	      _this.props.toggleAddPost();
	      _reactRouter.browserHistory.push('/login');
	    };
	
	    _this.logoutUser = function (e) {
	      e.preventDefault();
	      _this.props.logout();
	      _reactRouter.browserHistory.push('/');
	    };
	
	    _this.loginUser = _this.loginUser.bind(_this);
	    _this.logoutUser = _this.logoutUser.bind(_this);
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      // <p className={styles['username']}>`{username}`</p>
	      var authCookie = _reactCookie2.default.load('mernAuth');
	      var username = null;
	      if (authCookie) {
	        username = authCookie.u;
	      }
	      var button = _jsx('a', {
	        className: _Header2.default['add-post-button'],
	        href: '#',
	        onClick: this.loginUser
	      }, void 0, 'LOG IN');
	      if (authCookie) {
	        button = _jsx('a', {
	          className: _Header2.default['add-post-button'],
	          href: '#',
	          onClick: this.logoutUser
	        }, void 0, username, ' | LOG OUT');
	      }
	
	      return _jsx('div', {
	        className: _Header2.default.header
	      }, void 0, _jsx('div', {
	        className: _Header2.default.content
	      }, void 0, _jsx('h1', {
	        className: _Header2.default['site-title']
	      }, void 0, _ref), button));
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Photo = {
	  "main-photo": "_3bgl-xR9b9nNfzNwl83dlL",
	  "upload-button": "_2D0KDb86aCc_7iMIIwAYIQ",
	  "mainmap": "_2w_kf4vezLCudMaMQynt5y",
	  "map_container": "_3VbutXpA3gYrTg9QP5OTN4",
	  "detailmap": "_3cA2t99JS7lC4qSUnjf35_",
	  "map_detail_container": "_1xTR7PmheA3r96Kt7BLKh5",
	  "addmap": "_2UVt-YA-c1K-bIaKInsbMs",
	  "map_add_container": "_4g0fdLg7mGkiZrkPaOFnb",
	  "map_location": "M7cGdaBJrLgpdYLZtEYGf",
	  "single-description": "_2RrOg4hs5FQQRaAa1-6b_q",
	  "masonry": "_3zHoRcfSZdKNX60hwkaIoF",
	  "item": "_3EsDOptiEMGKcBYKsO65DG",
	  "add-container": "_1orBUMGGLvgRStgaN01CRn",
	  "add_desc": "_1N0vJGW-6aycxDhaqPDc0h",
	  "form-field": "_1C6zGdaYM033004X4Q4WfC",
	  "photo-submit-button": "_2meCQG8wtek88IgKcGJUEw",
	  "loading": "_2uUcbJa6vvaYs5qNyL6gyo",
	  "innerLoading": "_145vD4Gq1IBBq4C98krHej",
	  "gallery-container": "_3ycquBjLjgIq1LsRhheTDG"
	};
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('img', {
	  src: 'http://res.cloudinary.com/streetcanvas/image/upload/v1491536665/default_ztywus.svg',
	  alt: 'loading'
	});
	
	var _ref2 = _jsx('h3', {}, void 0, 'Loading...');
	
	var Loading = function Loading() {
	  return _jsx('div', {
	    className: _Photo2.default['loading']
	  }, void 0, _jsx('div', {
	    className: _Photo2.default['innerLoading']
	  }, void 0, _ref, _ref2));
	};
	
	exports.default = Loading;

/***/ },
/* 42 */
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
	
	var _reactRouter = __webpack_require__(1);
	
	var _Photo = {
	  "main-photo": "_3bgl-xR9b9nNfzNwl83dlL",
	  "upload-button": "_2D0KDb86aCc_7iMIIwAYIQ",
	  "mainmap": "_2w_kf4vezLCudMaMQynt5y",
	  "map_container": "_3VbutXpA3gYrTg9QP5OTN4",
	  "detailmap": "_3cA2t99JS7lC4qSUnjf35_",
	  "map_detail_container": "_1xTR7PmheA3r96Kt7BLKh5",
	  "addmap": "_2UVt-YA-c1K-bIaKInsbMs",
	  "map_add_container": "_4g0fdLg7mGkiZrkPaOFnb",
	  "map_location": "M7cGdaBJrLgpdYLZtEYGf",
	  "single-description": "_2RrOg4hs5FQQRaAa1-6b_q",
	  "masonry": "_3zHoRcfSZdKNX60hwkaIoF",
	  "item": "_3EsDOptiEMGKcBYKsO65DG",
	  "add-container": "_1orBUMGGLvgRStgaN01CRn",
	  "add_desc": "_1N0vJGW-6aycxDhaqPDc0h",
	  "form-field": "_1C6zGdaYM033004X4Q4WfC",
	  "photo-submit-button": "_2meCQG8wtek88IgKcGJUEw",
	  "loading": "_2uUcbJa6vvaYs5qNyL6gyo",
	  "innerLoading": "_145vD4Gq1IBBq4C98krHej",
	  "gallery-container": "_3ycquBjLjgIq1LsRhheTDG"
	};
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	var _PhotoActions = __webpack_require__(3);
	
	var _PhotoReducer = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import { bindActionCreators } from 'redux';
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var _getCoordsObj = function _getCoordsObj(latLng) {
	  return {
	    lat: latLng.lat(),
	    lng: latLng.lng()
	  };
	};
	
	var _ref = _jsx('h2', {}, void 0, 'Add a Photo');
	
	var _ref2 = _jsx('h3', {}, void 0, 'Step 1:');
	
	var _ref3 = _jsx('h3', {}, void 0, 'Step 2:');
	
	var _ref4 = _jsx('p', {}, void 0, 'Select location by clicking on map:');
	
	var _ref5 = _jsx('h3', {}, void 0, 'Step 3:');
	
	var PhotoAddPage = function (_React$Component) {
	  _inherits(PhotoAddPage, _React$Component);
	
	  function PhotoAddPage(props) {
	    _classCallCheck(this, PhotoAddPage);
	
	    var _this = _possibleConstructorReturn(this, (PhotoAddPage.__proto__ || Object.getPrototypeOf(PhotoAddPage)).call(this, props));
	
	    _this.addPhoto = function (e) {
	      e.preventDefault();
	      // alert('adding photo from form');
	      _this.photo.description = _this.refs.description.value;
	      _this.photo.lat = _this.photo.lat || _this.currentLat;
	      _this.photo.lng = _this.photo.lng || _this.currentLng;
	      _this.props.addPhoto(_this.photo.photo_url, _this.photo.description, _this.photo.description, _this.photo.lat, _this.photo.lng);
	      setTimeout(function () {
	        return _reactRouter.browserHistory.push('/photos/' + _this.props.photos.data[0].cuid);
	      }, 500);
	    };
	
	    _this.photo = {
	      photo_url: null,
	      description: null,
	      lat: null,
	      lng: null,
	      cuid: null
	    };
	    _this.addPhoto = _this.addPhoto.bind(_this);
	    _this.upload = _this.upload.bind(_this);
	    _this.state = { loaded: false };
	    _this.initMap = _this.initMap.bind(_this);
	    _this._handleClick = _this._handleClick.bind(_this);
	    _this.getLocation = _this.getLocation.bind(_this);
	    _this.setCoords = _this.setCoords.bind(_this);
	    _this.currentLat = 37.7758;
	    _this.currentLng = -122.435;
	    _this.options = {
	      enableHighAccuracy: true,
	      timeout: 5000,
	      maximumAge: 0
	    };
	    _this.error = _this.error.bind(_this);
	    return _this;
	  }
	
	  _createClass(PhotoAddPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.initMap = this.initMap;
	      if (!this.state.loaded) {
	        setTimeout(this.initMap, 500);
	      }
	    }
	  }, {
	    key: 'getLocation',
	    value: function getLocation() {
	      if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(this.setCoords, this.error, this.options);
	        console.log("position set");
	      } else {
	        console.log("no geolocation");
	      }
	    }
	  }, {
	    key: 'setCoords',
	    value: function setCoords(pos) {
	      this.currentLat = pos.coords.latitude;
	      this.currentLng = pos.coords.longitude;
	    }
	  }, {
	    key: 'error',
	    value: function error(err) {
	      console.warn('ERROR(' + err.code + '): ' + err.message);
	    }
	  }, {
	    key: 'initMap',
	    value: function initMap() {
	      // set the map to show SF
	      this.getLocation();
	      var mapOptions = {
	        center: { lat: this.currentLat, lng: this.currentLng }, // this is SF
	        zoom: 15,
	        disableDefaultUI: true,
	        zoomControl: true
	      };
	      this.map = new google.maps.Map(this.refs.map, mapOptions);
	      this.setState({ loaded: true });
	    }
	  }, {
	    key: 'upload',
	    value: function upload(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, results) {
	        console.log(error, results[0]);
	        if (!error) {
	          _this2.photo.photo_url = results[0].secure_url;
	        }
	      });
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick(coords) {
	      this.photo.lat = coords.lat;
	      this.photo.lng = coords.lng;
	      document.getElementById('location-message').innerHTML = "Location Set";
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var content = null;
	      if (this.state.loaded) {
	        google.maps.event.addListener(this.map, 'click', function (event) {
	          var coords = _getCoordsObj(event.latLng);
	          _this3._handleClick(coords);
	        });
	      }
	      return _jsx('div', {}, void 0, _jsx('div', {
	        className: _Photo2.default['add-container']
	      }, void 0, _ref, _jsx('form', {
	        action: '/photos',
	        method: 'post',
	        encType: 'multipart/form-data'
	      }, void 0, _ref2, _jsx('button', {
	        onClick: this.upload,
	        className: _Photo2.default['upload-button']
	      }, void 0, 'UPLOAD IMAGE'), _ref3, _jsx('div', {
	        className: _Photo2.default.map_add_container
	      }, void 0, _ref4, _react2.default.createElement(
	        'div',
	        { className: _Photo2.default.addmap, ref: 'map' },
	        'Map'
	      ), _jsx('h4', {
	        id: 'location-message',
	        className: _Photo2.default.map_location
	      })), _ref5, _react2.default.createElement('textarea', { className: _Photo2.default.add_desc, ref: 'description', placeholder: 'Enter description' }), _jsx('button', {
	        className: _Photo2.default['photo-submit-button'],
	        href: '#',
	        onClick: this.addPhoto
	      }, void 0, 'Submit'))));
	    }
	  }]);
	
	  return PhotoAddPage;
	}(_react2.default.Component);
	
	exports.default = PhotoAddPage;
	
	// <script type="text/javascript">
	//     window.CLOUDINARY_OPTIONS = {
	//       cloud_name: "streetcanvas",
	//       upload_preset: "ivjdpthx",
	//       max_files: 1,
	//       client_allowed_formats: ['png', 'jpg', 'jpeg'],
	//       stylesheet: ' #cloudinary-overlay.modal {
	//         background-color: rgba(0,0,0,.9);
	//       }'}
	//   </script>

/***/ },
/* 43 */
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
	
	var _lodash = __webpack_require__(18);
	
	var _Photo = {
	  "main-photo": "_3bgl-xR9b9nNfzNwl83dlL",
	  "upload-button": "_2D0KDb86aCc_7iMIIwAYIQ",
	  "mainmap": "_2w_kf4vezLCudMaMQynt5y",
	  "map_container": "_3VbutXpA3gYrTg9QP5OTN4",
	  "detailmap": "_3cA2t99JS7lC4qSUnjf35_",
	  "map_detail_container": "_1xTR7PmheA3r96Kt7BLKh5",
	  "addmap": "_2UVt-YA-c1K-bIaKInsbMs",
	  "map_add_container": "_4g0fdLg7mGkiZrkPaOFnb",
	  "map_location": "M7cGdaBJrLgpdYLZtEYGf",
	  "single-description": "_2RrOg4hs5FQQRaAa1-6b_q",
	  "masonry": "_3zHoRcfSZdKNX60hwkaIoF",
	  "item": "_3EsDOptiEMGKcBYKsO65DG",
	  "add-container": "_1orBUMGGLvgRStgaN01CRn",
	  "add_desc": "_1N0vJGW-6aycxDhaqPDc0h",
	  "form-field": "_1C6zGdaYM033004X4Q4WfC",
	  "photo-submit-button": "_2meCQG8wtek88IgKcGJUEw",
	  "loading": "_2uUcbJa6vvaYs5qNyL6gyo",
	  "innerLoading": "_145vD4Gq1IBBq4C98krHej",
	  "gallery-container": "_3ycquBjLjgIq1LsRhheTDG"
	};
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	var _PhotoActions = __webpack_require__(3);
	
	var _PhotoReducer = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import { bindActionCreators } from 'redux';
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PhotoDetailPage = function (_React$Component) {
	  _inherits(PhotoDetailPage, _React$Component);
	
	  function PhotoDetailPage(props) {
	    _classCallCheck(this, PhotoDetailPage);
	
	    var _this = _possibleConstructorReturn(this, (PhotoDetailPage.__proto__ || Object.getPrototypeOf(PhotoDetailPage)).call(this, props));
	
	    _this.photo = null;
	    _this.state = { loaded: false };
	    _this.initMap = _this.initMap.bind(_this);
	    return _this;
	  }
	
	  _createClass(PhotoDetailPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.photo = (0, _PhotoReducer.getPhoto)(this.props.state, this.props.params.cuid);
	      window.initMap = this.initMap;
	      if (!this.state.loaded) {
	        setTimeout(this.initMap, 20);
	      }
	    }
	  }, {
	    key: 'initMap',
	    value: function initMap() {
	      // set the map to show SF
	      var mapOptions = {
	        center: { lat: this.photo.lat, lng: this.photo.lng }, // this is SF
	        zoom: 13,
	        disableDefaultUI: true,
	        zoomControl: true
	      };
	      this.map = new google.maps.Map(this.refs.map, mapOptions);
	      this.setState({ loaded: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = null;
	      if (this.state.loaded) {
	        content = _jsx('section', {}, void 0, _jsx('img', {
	          alt: 'streetart',
	          src: this.photo.photo_url,
	          className: _Photo2.default['main-photo']
	        }), _jsx('p', {
	          className: _Photo2.default['single-description']
	        }, void 0, this.photo.description));
	      }
	      if (this.state.loaded) {
	        this.marker = new google.maps.Marker({
	          position: { lat: this.photo.lat, lng: this.photo.lng },
	          map: this.map
	        });
	      }
	      return _jsx('div', {}, void 0, content, _jsx('div', {
	        className: _Photo2.default.map_detail_container
	      }, void 0, _react2.default.createElement(
	        'div',
	        { className: _Photo2.default.detailmap, ref: 'map' },
	        'Map'
	      )));
	    }
	  }]);
	
	  return PhotoDetailPage;
	}(_react2.default.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PhotoDetailPage.need = [function (params) {
	  return (0, _PhotoActions.fetchPhoto)(params.cuid);
	}];
	// Retrieve data from store as props
	// function mapStateToProps(state, props) {
	//   return {
	//     photo: getPhoto(state, props.params.cuid),
	//   };
	// }
	
	
	exports.default = PhotoDetailPage;

/***/ },
/* 44 */
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
	
	var _lodash = __webpack_require__(18);
	
	var _reactRouter = __webpack_require__(1);
	
	var _loading = __webpack_require__(41);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _Photo = {
	  "main-photo": "_3bgl-xR9b9nNfzNwl83dlL",
	  "upload-button": "_2D0KDb86aCc_7iMIIwAYIQ",
	  "mainmap": "_2w_kf4vezLCudMaMQynt5y",
	  "map_container": "_3VbutXpA3gYrTg9QP5OTN4",
	  "detailmap": "_3cA2t99JS7lC4qSUnjf35_",
	  "map_detail_container": "_1xTR7PmheA3r96Kt7BLKh5",
	  "addmap": "_2UVt-YA-c1K-bIaKInsbMs",
	  "map_add_container": "_4g0fdLg7mGkiZrkPaOFnb",
	  "map_location": "M7cGdaBJrLgpdYLZtEYGf",
	  "single-description": "_2RrOg4hs5FQQRaAa1-6b_q",
	  "masonry": "_3zHoRcfSZdKNX60hwkaIoF",
	  "item": "_3EsDOptiEMGKcBYKsO65DG",
	  "add-container": "_1orBUMGGLvgRStgaN01CRn",
	  "add_desc": "_1N0vJGW-6aycxDhaqPDc0h",
	  "form-field": "_1C6zGdaYM033004X4Q4WfC",
	  "photo-submit-button": "_2meCQG8wtek88IgKcGJUEw",
	  "loading": "_2uUcbJa6vvaYs5qNyL6gyo",
	  "innerLoading": "_145vD4Gq1IBBq4C98krHej",
	  "gallery-container": "_3ycquBjLjgIq1LsRhheTDG"
	};
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	var _PhotoActions = __webpack_require__(3);
	
	var _PhotoReducer = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import { bindActionCreators } from 'redux';
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var _ref = _jsx(_loading2.default, {});
	
	var PhotoGalleryPage = function (_Component) {
	  _inherits(PhotoGalleryPage, _Component);
	
	  function PhotoGalleryPage() {
	    _classCallCheck(this, PhotoGalleryPage);
	
	    return _possibleConstructorReturn(this, (PhotoGalleryPage.__proto__ || Object.getPrototypeOf(PhotoGalleryPage)).apply(this, arguments));
	  }
	
	  _createClass(PhotoGalleryPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PhotoActions.fetchPhotos)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if ((0, _lodash.isEmpty)(this.props.photos)) {
	        return _ref;
	      }
	      return _jsx('div', {
	        className: _Photo2.default['masonry']
	      }, void 0, this.props.photos.map(function (photo) {
	        return _jsx('div', {
	          className: _Photo2.default['item']
	        }, photo.cuid, _jsx('div', {}, void 0, _jsx(_reactRouter.Link, {
	          to: '/photos/' + photo.cuid
	        }, void 0, _jsx('img', {
	          alt: 'streetart',
	          src: photo.photo_url
	        }), ' ')));
	      }));
	    }
	  }]);
	
	  return PhotoGalleryPage;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    photos: (0, _PhotoReducer.getPhotos)(state)
	  };
	};
	
	PhotoGalleryPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PhotoGalleryPage);

/***/ },
/* 45 */
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
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactRedux = __webpack_require__(2);
	
	var _Photo = {
	  "main-photo": "_3bgl-xR9b9nNfzNwl83dlL",
	  "upload-button": "_2D0KDb86aCc_7iMIIwAYIQ",
	  "mainmap": "_2w_kf4vezLCudMaMQynt5y",
	  "map_container": "_3VbutXpA3gYrTg9QP5OTN4",
	  "detailmap": "_3cA2t99JS7lC4qSUnjf35_",
	  "map_detail_container": "_1xTR7PmheA3r96Kt7BLKh5",
	  "addmap": "_2UVt-YA-c1K-bIaKInsbMs",
	  "map_add_container": "_4g0fdLg7mGkiZrkPaOFnb",
	  "map_location": "M7cGdaBJrLgpdYLZtEYGf",
	  "single-description": "_2RrOg4hs5FQQRaAa1-6b_q",
	  "masonry": "_3zHoRcfSZdKNX60hwkaIoF",
	  "item": "_3EsDOptiEMGKcBYKsO65DG",
	  "add-container": "_1orBUMGGLvgRStgaN01CRn",
	  "add_desc": "_1N0vJGW-6aycxDhaqPDc0h",
	  "form-field": "_1C6zGdaYM033004X4Q4WfC",
	  "photo-submit-button": "_2meCQG8wtek88IgKcGJUEw",
	  "loading": "_2uUcbJa6vvaYs5qNyL6gyo",
	  "innerLoading": "_145vD4Gq1IBBq4C98krHej",
	  "gallery-container": "_3ycquBjLjgIq1LsRhheTDG"
	};
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	var _PhotoActions = __webpack_require__(3);
	
	var _PhotoReducer = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import { isEmpty } from 'lodash';
	// import Loading from '../../loading';
	// import { bindActionCreators } from 'redux';
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PhotoListPage = function (_Component) {
	  _inherits(PhotoListPage, _Component);
	
	  function PhotoListPage(props) {
	    _classCallCheck(this, PhotoListPage);
	
	    var _this = _possibleConstructorReturn(this, (PhotoListPage.__proto__ || Object.getPrototypeOf(PhotoListPage)).call(this, props));
	
	    _this.state = { loaded: false };
	    _this.initMap = _this.initMap.bind(_this);
	    _this.currentLat = 37.7758;
	    _this.currentLng = -122.435;
	    return _this;
	  }
	
	  _createClass(PhotoListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PhotoActions.fetchPhotos)());
	      window.initMap = this.initMap;
	      if (!this.state.loaded) {
	        setTimeout(this.initMap, 20);
	      }
	    }
	  }, {
	    key: 'getLocation',
	    value: function getLocation() {
	      if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(this.setCoords, this.error, this.options);
	        console.log('position set');
	      } else {
	        console.log('no geolocation');
	      }
	    }
	  }, {
	    key: 'setCoords',
	    value: function setCoords(pos) {
	      this.currentLat = pos.coords.latitude;
	      this.currentLng = pos.coords.longitude;
	    }
	  }, {
	    key: 'error',
	    value: function error(err) {
	      console.warn('ERROR(' + err.code + '): ' + err.message);
	    }
	  }, {
	    key: 'initMap',
	    value: function initMap() {
	      var mapOptions = {
	        center: { lat: this.currentLat, lng: this.currentLng },
	        zoom: 14,
	        disableDefaultUI: true,
	        zoomControl: true
	      };
	      this.map = new google.maps.Map(this.refs.map, mapOptions);
	      this.setState({ loaded: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (this.state.loaded) {
	        this.props.photos.map(function (photo) {
	          _this2.marker = new google.maps.Marker({
	            position: { lat: photo.lat, lng: photo.lng },
	            map: _this2.map
	          });
	          google.maps.event.addListener(_this2.marker, 'click', function () {
	            return _reactRouter.browserHistory.push('/photos/' + photo.cuid);
	          });
	          return 0;
	        });
	      }
	
	      return _jsx('div', {
	        className: _Photo2.default.map_container
	      }, void 0, _react2.default.createElement(
	        'div',
	        { className: _Photo2.default.mainmap, ref: 'map' },
	        'Map'
	      ));
	    }
	  }]);
	
	  return PhotoListPage;
	}(_react.Component);
	
	function loadJS(src) {
	  var ref = window.document.getElementsByTagName('script')[0];
	  var script = window.document.createElement('script');
	  script.src = src;
	  script.async = true;
	  ref.parentNode.insertBefore(script, ref);
	}
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    photos: (0, _PhotoReducer.getPhotos)(state)
	  };
	};
	
	PhotoListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PhotoListPage);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	
	var _apiCaller = __webpack_require__(8);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(46);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Auth Actions
	
	
	var _UserActions = __webpack_require__(7);
	
	// Initial State
	var initialState = {
	  data: null
	};
	
	var UserReducer = function UserReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _UserActions.REGISTER_SUCCESS:
	      return _extends({}, state);
	
	    case _UserActions.REGISTER_FAILURE:
	      return _extends({}, state);
	
	    case _UserActions.LOGIN_SUCCESS:
	      return _extends({}, state, {
	        data: action.user
	      });
	
	    case _UserActions.LOGIN_FAILURE:
	      return _extends({}, state);
	
	    case _UserActions.LOGOUT:
	      return _extends({}, state, {
	        data: null
	      });
	
	    case _UserActions.UPDATE_USER_INFO_SUCCESS:
	      return _extends({}, state, {
	        data: action.user
	      });
	
	    case _UserActions.UPDATE_USER_INFO_FAILURE:
	      return _extends({}, state);
	
	    case _UserActions.LOAD_USER_PROPS:
	      return _extends({}, state, {
	        data: action.user
	      });
	
	    default:
	      return state;
	  }
	};
	
	var getUser = exports.getUser = function getUser(state) {
	  return state.user.data;
	};
	
	// Export Reducer
	exports.default = UserReducer;

/***/ },
/* 49 */
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

/***/ },
/* 50 */
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

/***/ },
/* 51 */
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
	
	var _LoginForm = __webpack_require__(49);
	
	var _LoginForm2 = _interopRequireDefault(_LoginForm);
	
	var _UserActions = __webpack_require__(7);
	
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
/* 52 */
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
	
	var _RegisterForm = __webpack_require__(50);
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	var _UserActions = __webpack_require__(7);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(19);
	
	var _AppReducer = __webpack_require__(37);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(47);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _UserReducer = __webpack_require__(48);
	
	var _UserReducer2 = _interopRequireDefault(_UserReducer);
	
	var _PhotoReducer = __webpack_require__(4);
	
	var _PhotoReducer2 = _interopRequireDefault(_PhotoReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	
	
	// Import Reducers
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  user: _UserReducer2.default,
	  photos: _PhotoReducer2.default
	}); /**
	     * Root Reducer
	     */

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPhotos = getPhotos;
	exports.getPhoto = getPhoto;
	exports.addPhoto = addPhoto;
	
	var _Photo = __webpack_require__(15);
	
	var _Photo2 = _interopRequireDefault(_Photo);
	
	var _cuid = __webpack_require__(17);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _sanitizeHtml = __webpack_require__(9);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Configure Cloudinary
	// with credentials available on
	// your Cloudinary account dashboard
	// cloudinary.config({
	//   cloud_name: 'streetcanvas',
	//   api_key: '956475254242893',
	//   api_secret: 'cWe_K6RjW54UYcD0xP3XOofgtas'
	// });
	
	// Get all Photos...
	function getPhotos(req, res) {
	  _Photo2.default.find().sort('-dateAdded').exec(function (err, photos) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ photos: photos });
	  });
	}
	
	// Get single Photo...
	
	function getPhoto(req, res) {
	  _Photo2.default.findOne({ cuid: req.params.cuid }).exec(function (err, photo) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ photo: photo });
	  });
	}
	
	// Add photo
	
	function addPhoto(req, res) {
	  var newPhoto = new _Photo2.default(req.body.photo);
	
	  // Let's sanitize inputs
	  newPhoto.photo_url = (0, _sanitizeHtml2.default)(newPhoto.photo_url);
	  newPhoto.description = (0, _sanitizeHtml2.default)(newPhoto.description);
	  newPhoto.lat = (0, _sanitizeHtml2.default)(newPhoto.lat);
	  newPhoto.lng = (0, _sanitizeHtml2.default)(newPhoto.lng);
	
	  newPhoto.cuid = (0, _cuid2.default)();
	  newPhoto.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	  // cloudinary.uploader.upload(req.files.image.path, (result) => {
	  //   const newPhoto = new Photo({
	  //     photo_url: result.url,
	  //     lat: req.body.photo.lat,
	  //     lng: req.body.photo.lng,
	  //   });
	  //
	  //   if (!req.body.photo.photo_url || !req.body.photo.lat || !req.body.photo.lng) {
	  //     res.status(403).end();
	  //   }
	  //
	  //   // Let's sanitize inputs
	  //   newPhoto.description = sanitizeHtml(newPhoto.description);
	  //   newPhoto.cuid = cuid();
	  //   newPhoto.save((err, saved) => {
	  //     if (err) {
	  //       res.status(500).send(err);
	  //     }
	  //     res.json({ photo: saved });
	  //     res.redirect(`/photos/${newPhoto.cuid}`);
	  //   });
	  // });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(16);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(17);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(65);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(9);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.register = register;
	exports.login = login;
	exports.updateUserInfo = updateUserInfo;
	
	var _user = __webpack_require__(57);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _secret = __webpack_require__(58);
	
	var _secret2 = _interopRequireDefault(_secret);
	
	var _crypto = __webpack_require__(62);
	
	var _crypto2 = _interopRequireDefault(_crypto);
	
	var _jsonwebtoken = __webpack_require__(64);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _sanitizeHtml = __webpack_require__(9);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var errors = {
	  REGISTER_USERNAME_TAKEN: 'username unavailable',
	  REGISTER_GENERAL_ERROR: 'an error has occured',
	  LOGIN_INVALID: 'invalid username/password combo',
	  LOGIN_GENERAL_ERROR: 'sorry, an error has occured. please try again'
	};
	
	function register(req, res) {
	  if (!req.body.user.username || !req.body.user.password) {
	    return res.status(403).end();
	  }
	
	  var newUser = new _user2.default(req.body.user);
	  newUser.username = (0, _sanitizeHtml2.default)(newUser.username);
	  newUser.save(function (err, saved) {
	    if (err) {
	      console.log(err.message);
	      if (err.message.indexOf('duplicate key error') !== -1) {
	        return res.status(500).send({ err: errors.REGISTER_USERNAME_TAKEN });
	      } else {
	        return res.status(500).send({ err: errors.REGISTER_GENERAL_ERROR });
	      }
	    }
	    var token = _jsonwebtoken2.default.sign({ 'id': newUser._id }, _secret2.default.secret, {
	      expiresIn: 31536e3
	    });
	    return res.json({
	      user: {
	        username: saved.username
	      },
	      token: token
	    });
	  });
	}
	
	function login(req, res) {
	  if (!req.body.user.username || !req.body.user.password) {
	    return res.status(403).end();
	  }
	
	  var username = (0, _sanitizeHtml2.default)(req.body.user.username);
	
	  _user2.default.findOne({ username: username }).exec(function (err, user) {
	    if (err) {
	      return res.status(500).send({ err: errors.LOGIN_GENERAL_ERROR });
	    } else if (!user) {
	      return res.json({ err: errors.LOGIN_GENERAL_ERROR });
	    }
	    user.comparePassword(req.body.user.password, function (err, isMatch) {
	      if (err) throw err;
	
	      if (isMatch) {
	        var token = _jsonwebtoken2.default.sign({ 'id': user._id }, _secret2.default.secret, {
	          expiresIn: 31536e3
	        });
	        return res.json({
	          user: {
	            username: user.username
	          },
	          token: token
	        });
	      } else {
	        return res.json({ err: errors.LOGIN_INVALID });
	      }
	    });
	  });
	}
	function updateUserInfo(req, res) {
	  if (!req.body.password) {
	    return res.status(403).end();
	  }
	  try {
	    // TODO sanitize req.headers.authorization
	    var decoded = _jsonwebtoken2.default.verify(req.headers.authorization, _secret2.default.secret);
	    _user2.default.findOne({ _id: decoded.id }).exec(function (err, user) {
	      if (err) {
	        return res.status(500).send({ err: errors.REGISTER_GENERAL_ERROR });
	      }
	
	      if (req.body.password !== undefined) {
	        user.password = req.body.password;
	      }
	
	      user.save(function (err, saved) {
	        if (err) {
	          return res.status(500).send({ err: errors.REGISTER_GENERAL_ERROR });
	        }
	        return res.json({
	          user: {
	            username: saved.username
	          }
	        });
	      });
	    });
	  } catch (err) {
	    // error during JWT verify
	    return res.status(500).send({ err: errors.REGISTER_GENERAL_ERROR });
	  }
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bcrypt = __webpack_require__(61);
	
	var _bcrypt2 = _interopRequireDefault(_bcrypt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	var SALT_WORK_FACTOR = 10;
	
	var UserSchema = new Schema({
	  username: { type: 'String', required: true, unique: true, maxlength: 25, minlength: 4 },
	  password: { type: 'String', required: true, minlength: 6 },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	UserSchema.pre('save', function (next) {
	  var user = this;
	  // only hash the password if it has been modified (or is new)
	  if (!user.isModified('password')) {
	    return next();
	  }
	  // generate a salt
	  _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
	    if (err) return next(err);
	
	    // hash the password using our new salt
	    _bcrypt2.default.hash(user.password, salt, function (err, hash) {
	      if (err) {
	        return next(err);
	      }
	
	      // override the cleartext password with the hashed one
	      user.password = hash;
	      next();
	    });
	  });
	});
	
	UserSchema.methods.comparePassword = function (candidatePassword, cb) {
	  _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
	    if (err) {
	      return cb(err);
	    }
	    cb(null, isMatch);
	  });
	};
	
	exports.default = _mongoose2.default.model('User', UserSchema);

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	module.exports = {
	    secret: 'canvas'
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(11);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(27);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(26);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(29);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _webpack = __webpack_require__(13);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(25);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(31);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(32);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(21);
	
	var _reactRedux = __webpack_require__(2);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(30);
	
	var _reactRouter = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(12);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactCookie = __webpack_require__(6);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	var _cookieParser = __webpack_require__(28);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _routes = __webpack_require__(20);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(24);
	
	var _api = __webpack_require__(23);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _dummyData = __webpack_require__(22);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(10);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// cookie for JWT token
	
	
	// Import required modules
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use((0, _cookieParser2.default)());
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use('/api', _api2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/main.css'] + '\' />' : '') + '\n        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700" rel="stylesheet">\n        <link rel="shortcut icon" href="http://res.cloudinary.com/streetcanvas/image/upload/v1491277108/favicon_dvbm6p.ico" type="image/png" />\n        <script src=\'//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\'></script>\n        <script src="//widget.cloudinary.com/global/all.js" type="text/javascript">\n  </script>\n  <script type="text/javascript">\n      window.CLOUDINARY_OPTIONS = {\n        cloud_name: "streetcanvas",\n        upload_preset: "ivjdpthx",\n        stylesheet: \'#cloudinary-overlay.modal { background-color: rgba(0,0,0,.9);}\'\n      }\n    </script>\n        </body>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/main.js'] : '/app.js') + '\'></script>\n        <script\n          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xkNlmWAK_4v52ewKZbnUoifMcYAxIy8"></script>\n\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("bcrypt");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);