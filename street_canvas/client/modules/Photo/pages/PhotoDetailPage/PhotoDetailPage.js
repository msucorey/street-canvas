import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';


class PhotoDetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.photo = null;
    this.state = { loaded: false };
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.photo = getPhoto(this.props.state, this.props.params.cuid);
    window.initMap = this.initMap;
    if (!this.state.loaded) {
      setTimeout(this.initMap, 20);
    }
  }

  initMap() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true,
    };
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.setState({ loaded: true });
  }

  render() {
    let content = null;
    if (this.state.loaded) {
      content = (
        <section>
          <img alt="streetart" src={this.photo.photo_url} className={styles['main-photo']} />
          <p className={styles['single-description']}>{this.photo.description}</p>
        </section>
      );
    }
    if (this.state.loaded) {
      this.marker = new google.maps.Marker({
        position: { lat: this.photo.lat, lng: this.photo.lng },
        map: this.map
      });
    }
    return (
      <div>
        {content}
        <div className={styles.map_container}>
          <div className={styles.mainmap} ref="map">Map</div>
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PhotoDetailPage.need = [params => {
  return fetchPhoto(params.cuid);
}];
// Retrieve data from store as props
// function mapStateToProps(state, props) {
//   return {
//     photo: getPhoto(state, props.params.cuid),
//   };
// }


export default PhotoDetailPage;
