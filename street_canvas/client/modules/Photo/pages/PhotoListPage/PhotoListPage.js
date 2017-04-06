import React, { Component, PropTypes } from 'react';
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
  }

  render() {
    console.log(this.props);
    return (
      <div>
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
