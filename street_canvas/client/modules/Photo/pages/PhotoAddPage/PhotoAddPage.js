import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto, addPhotoRequest } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';


export class PhotoAddPage extends Component {

  componentDidMount() {

  }

  addPhoto = () => {
    const descriptionRef = this.refs.description;
    // const titleRef = this.refs.title;
    // const contentRef = this.refs.content;
    // if (nameRef.value && titleRef.value && contentRef.value) {
    //   this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
    //   nameRef.value = titleRef.value = contentRef.value = '';
    // }
  };

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.log);
    } else {
      console.log('does not support geolocation');
    }
  }

  log(position) {
    console.log(position.coords);
  }

  render() {
    this.getLocation();
    return (
      <div >
        <div className={styles['add-container']}>
          <h2 >Add a Photo</h2>
          <form action="/photos" method="post" encType="multipart/form-data" >
            <p>SELECT LOCATION GOES HERE</p>
            <input name="image" type="file" />
            <input placeholder="description" className={styles['form-field']} ref="description" /><br />
            <button className={styles['photo-submit-button']} href="#" onClick={this.addPhoto}>Submit</button>
          </form>
        </div>
      </div>
    );
  }


}

PhotoAddPage.propTypes = {
  // addPhoto: PropTypes.func.isRequired,
};

export default PhotoAddPage;
