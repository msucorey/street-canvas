import React, { Component, PropTypes } from 'react';
import { browserHistory, hashHistory } from 'react-router';
import { connect } from 'react-redux';
// import { isEmpty } from 'lodash';
// import Loading from '../../loading';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhotos } from '../../PhotoActions';

// Import Selectors
import { getPhotos } from '../../PhotoReducer';


class PhotoListPage extends Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.initMap = this.initMap.bind(this);
    this.currentLat = 37.7758;
    this.currentLng = -122.435;
  }

  componentDidMount() {
    this.props.dispatch(fetchPhotos());
    window.initMap = this.initMap;
    if (!this.state.loaded) {
      setTimeout(this.initMap, 20);
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoords, this.error, this.options);
      console.log('position set');
    } else {
      console.log('no geolocation');
    }
  }

  setCoords(pos) {
    this.currentLat = pos.coords.latitude;
    this.currentLng = pos.coords.longitude;
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  initMap() {
    const mapOptions = {
      center: { lat: this.currentLat, lng: this.currentLng },
      zoom: 14,
      disableDefaultUI: true,
      zoomControl: true,
    };
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.setState({ loaded: true });
  }

  render() {
    if (this.state.loaded) {
      this.props.photos.map(photo => {
        this.marker = new google.maps.Marker({
          position: { lat: photo.lat, lng: photo.lng },
          map: this.map
        });
        google.maps.event.addListener(this.marker, 'click', () => (browserHistory.push(`/photos/${photo.cuid}`)));
        return 0;
      });
    }

    return (
      <div className={styles.map_container}>
        <div className={styles.mainmap} ref="map">Map</div>
      </div>
    );
  }
}

function loadJS(src) {
  const ref = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

const mapStateToProps = (state) => {
  return {
    photos: getPhotos(state),
  };
};


PhotoListPage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    photo_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

PhotoListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(
  mapStateToProps
)(PhotoListPage);
