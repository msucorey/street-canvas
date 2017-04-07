import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';
import Loading from '../../loading';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhotos } from '../../PhotoActions';

// Import Selectors
import { getPhotos } from '../../PhotoReducer';


class PhotoGalleryPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPhotos());
  }

  render() {
    if (isEmpty(this.props.photos)) {
      return <Loading />;
    }
    return (
      <div>
        {
          this.props.photos.map(photo => (
            <section>
              <Link to={'/photos/' + photo.cuid}><img alt="streetart" src={photo.photo_url} className={styles['main-photo']} /></Link>
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


PhotoGalleryPage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    photo_url: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

PhotoGalleryPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(
  mapStateToProps
)(PhotoGalleryPage);
