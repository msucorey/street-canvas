import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhotos } from '../../PhotoActions';

// Import Selectors
import { getPhotos } from '../../PhotoReducer';


class PhotoListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPhotos());
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true,
    };

    this.map = new google.maps.Map(this.refs.map, mapOptions);
  }

  render() {

    this.marker = new google.maps.Marker({
      position: { lat: 37.7875099, lng: -122.397319 },
      map: this.map
    });
    this.props.photos.map(photo => {
      this.marker = new google.maps.Marker({
        position: { lat: photo.lat, lng: photo.lng },
        map: this.map
      });
      google.maps.event.addListener(this.marker, 'click', () => (hashHistory.push(`/photos/${photo.cuid}`)));
      return 0;
    });

    return (
      <div>
        <span className={styles.mainmap} ref="map">Map</span>
        {
          this.props.photos.map(photo => (
            <section>
              <img alt="streetart" src={photo.photo_url} className={styles['main-photo']} />
              <p>{photo.description}</p>
              <p>{photo.lng}</p>
              <p>{photo.lat}</p>
            </section>
          ))
        }
      </div>
    );
  }
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
