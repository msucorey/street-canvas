import { connect } from 'react-redux';
import PhotoDetailPage from './PhotoDetailPage';

// Import Actions
import { fetchPhoto } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: () => dispatch(fetchPhoto(this.params.cuid)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetailPage);
