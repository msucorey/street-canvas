import { connect } from 'react-redux';
import PhotoAddPage from './PhotoAddPage';

// Import Actions
import { addPhotoRequest } from '../../PhotoActions';

// Import Selectors
// import { getPhoto } from '../../PhotoReducer';

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoto: (photo_url, description, cuid, lat, lng) => dispatch(addPhotoRequest(
    { photo_url, description, cuid, lat, lng }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoAddPage);
