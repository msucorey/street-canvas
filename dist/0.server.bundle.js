exports.ids = [0];
exports.modules = {

/***/ 35:
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
	
	var _PhotoReducer = __webpack_require__(6);
	
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

/***/ }

};;