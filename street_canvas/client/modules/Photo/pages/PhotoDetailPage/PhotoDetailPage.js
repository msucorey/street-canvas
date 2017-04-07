import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';


export function PhotoDetailPage(props) {
  return (
    <div>
      <section>
        <img alt="streetart" src={props.photo.photo_url} className={styles['main-photo']} />
        <p className={styles['single-description']}>{props.photo.description}</p>
        <div>MAP GOES HERE</div>
      </section>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
PhotoDetailPage.need = [params => {
  return fetchPhoto(params.cuid);
}];
// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    photo: getPhoto(state, props.params.cuid),
  };
}

PhotoDetailPage.propTypes = {
  photo: PropTypes.shape({
    photo_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PhotoDetailPage);
