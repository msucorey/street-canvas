import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';


export class PhotoAddPage extends Component {
  addPhoto = () => {
    const descriptionRef = this.refs.description;
    // const titleRef = this.refs.title;
    // const contentRef = this.refs.content;
    // if (nameRef.value && titleRef.value && contentRef.value) {
    //   this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
    //   nameRef.value = titleRef.value = contentRef.value = '';
    // }
  };

  render() {
    return (
      <div >
        <div className={styles['add-container']}>
          <h2 >Add a Photo</h2>
          <p>SELECT LOCATION GOES HERE</p>
          <p>UPLOAD PHOTO (TAKE PHOTO) GOES HERE</p>
          <input placeholder="description" className={styles['form-field']} ref="description" /><br />
          <a className={styles['photo-submit-button']} href="#" onClick={this.addPhoto}>Submit</a>
        </div>
      </div>
    );
  }
}

PhotoAddPage.propTypes = {
  addPhoto: PropTypes.func.isRequired,
};

export default PhotoAddPage;
