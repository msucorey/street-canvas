import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto, addPhotoRequest } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';


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
  }

  componentDidMount() {
    // nothing for now
  }

  addPhoto = (e) => {
    e.preventDefault();
    // alert('adding photo from form');
    this.photo.description = this.refs.description.value;
    this.photo.lat = this.refs.lat.value;
    this.photo.lng = this.refs.lng.value;
    this.props.addPhoto(
      this.photo.photo_url,
      this.photo.description,
      this.photo.description,
      this.photo.lat,
      this.photo.lng,
    );
    setTimeout(() => (
      browserHistory.push(`/photos/${this.props.photos.data[0].cuid}`)
    ), 20);
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

  render() {

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
        </div>
      </div>
    );
  }


}

export default PhotoAddPage;
