import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto, addPhotoRequest } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class PhotoAddPage extends Component {

  constructor(props) {
    super(props);
    this.photo = {
      photo_url: null,
      description: null,
      lat: null,
      lng: null,
      cuid: null,
    };
    this.addPhoto = this.addPhoto.bind(this);
    this.upload = this.upload.bind(this);
    this.state = { loaded: false };
    this.initMap = this.initMap.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
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

  addPhoto = (e) => {
    e.preventDefault();
    // alert('adding photo from form');
    this.photo.description = this.refs.description.value;
    this.props.addPhoto(
      this.photo.photo_url,
      this.photo.description,
      this.photo.description,
      this.photo.lat,
      this.photo.lng,
    );
    setTimeout(() => (
      browserHistory.push(`/photos/${this.props.photos.data[0].cuid}`)
    ), 50);
  };
  //
  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.log);
  //   } else {
  //     console.log('does not support geolocation');
  //   }
  // }
  //
  // log(position) {
  //   console.log(position.coords);
  // }
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
    alert('coords set');
  }

  render() {
    let content = null;
    if (this.state.loaded) {
      google.maps.event.addListener(this.map, 'click', event => {
        const coords = _getCoordsObj(event.latLng);
        this._handleClick(coords);
      });
    }
    return (
      <div >
        <div className={styles['add-container']}>
          <h2 >Add a Photo</h2>
          <form action="/photos" method="post" encType="multipart/form-data" >
            <button onClick={this.upload}>Upload new image!</button>
            <input placeholder="description" className={styles['form-field']} ref="description" /><br />
            <input placeholder="lat" className={styles['form-field']} ref="lat" /><br />
            <input placeholder="lng" className={styles['form-field']} ref="lng" /><br />
            <button className={styles['photo-submit-button']} href="#" onClick={this.addPhoto}>Submit</button>
          </form>
          <div className={styles.map_detail_container}>
            <p>some text</p>
            <div className={styles.detailmap} ref="map">Map</div>
            <p>some more text</p>
          </div>
        </div>
      </div>
    );
  }


}

export default PhotoAddPage;
