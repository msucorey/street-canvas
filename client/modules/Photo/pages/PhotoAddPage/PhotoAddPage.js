import React from 'react';
import { browserHistory } from 'react-router';

// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});


class PhotoAddPage extends React.Component {

  constructor(props) {
    super(props);
    this.photo = {
      photo_url: null,
      description: null,
      lat: 37.7758,
      lng: -122.435,
      cuid: null,
    };
    this.map = null;
    this.marker = null;
    this.addPhoto = this.addPhoto.bind(this);
    this.upload = this.upload.bind(this);
    this.state = { loaded: false,
                   currentLat: 37.7758,
                   currentLng: -122.435,
  };
    this.initMap = this.initMap.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.setCoords = this.setCoords.bind(this);
    this.options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    this.error = this.error.bind(this);
  }

  componentDidMount() {
    this.getLocation();
    window.initMap = this.initMap;
    if (!this.state.loaded) {
      setTimeout(this.initMap, 500);
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoords, this.error, this.options);
    } else {
      console.log('no geolocation');
    }
  }

  setCoords(pos) {
    console.log('position set');
    this.photo.lat = pos.coords.latitude;
    this.photo.lng = pos.coords.longitude;
    this.currentLat = pos.coords.latitude;
    this.currentLng = pos.coords.longitude;
    const newLoc = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    this.map.setCenter(newLoc);
    this.setState(
      { loaded: true, currentLat: pos.coords.latitude, currentLng: pos.coords.longitude }
    );
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  initMap() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: this.state.currentLat, lng: this.state.currentLng }, // this is SF
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
    };
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.setState({ loaded: true });
  }

  addPhoto = (e) => {
    e.preventDefault();
    // alert('adding photo from form');
    this.photo.description = this.refs.description.value;
    // this.photo.lat = this.photo.lat || this.currentLat;
    // this.photo.lng = this.photo.lng || this.currentLng;
    this.props.addPhoto(
      this.photo.photo_url,
      this.photo.description,
      this.photo.description,
      this.photo.lat,
      this.photo.lng,
    );
    setTimeout(() => (
      browserHistory.push(`/photos/${this.props.photos.data[0].cuid}`)
    ), 500);
  };

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => { console.log(error, results[0]);
      if (!error) {
        this.photo.photo_url = results[0].secure_url;
      }
    });
  }

  _handleClick(coords) {
    this.photo.lat = coords.lat;
    this.photo.lng = coords.lng;
    const newLoc = new google.maps.LatLng(coords.lat, coords.lng);
    this.marker.setPosition(newLoc);
    document.getElementById('location-message').innerHTML = 'Location Set';
  }

  render() {
    if (this.state.loaded) {
      google.maps.event.addListener(this.map, 'click', event => {
        const coords = _getCoordsObj(event.latLng);
        this._handleClick(coords);
      });
      this.marker = new google.maps.Marker({
        position: { lat: this.photo.lat, lng: this.photo.lng },
        map: this.map
      });
    }
    return (
      <div >
        <div className={styles['add-container']}>
          <h2>Add a Photo</h2>
          <form action="/photos" method="post" encType="multipart/form-data" >
          <h3>Step 1:</h3>
            <button onClick={this.upload} className={styles['upload-button']}>UPLOAD IMAGE</button>
          <h3>Step 2:</h3>
            <div className={styles.map_add_container}>
              <p>Select location by clicking on map:</p>
              <div className={styles.addmap} ref="map">Map</div>
              <h4 id="location-message" className={styles.map_location}></h4>
            </div>
          <h3>Step 3:</h3>
            <textarea className={styles.add_desc} ref="description" placeholder="Enter description"></textarea>
            <button className={styles['photo-submit-button']} href="#" onClick={this.addPhoto}>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default PhotoAddPage;
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
