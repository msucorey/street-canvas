import React from 'react';


// Import Style
import styles from '../../Photo.css';

class UploadButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        alert('it worked');
        // this.props.postImage(results[0]);
      } else {
        alert(error);
      }
    });
  }

  render() {
    return (
      <div className={styles['upload-form']}>
        <button className={styles['upload-button']} onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
}

export default UploadButton;
