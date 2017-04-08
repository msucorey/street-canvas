import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
// import { bindActionCreators } from 'redux';

// Import Style
import styles from '../../Photo.css';

// Import Actions
import { fetchPhoto } from '../../PhotoActions';

// Import Selectors
import { getPhoto } from '../../PhotoReducer';


class PhotoDetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.photo = null;
    this.state = { loaded: false };
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    this.photo = getPhoto(this.props.state, this.props.params.cuid);
    setTimeout(this.setState({ loaded: true }), 20);
  }

  render() {
    let content = null;
    if (this.state.loaded) {
      content = (
        <section>
          <img alt="streetart" src={this.photo.photo_url} className={styles['main-photo']} />
          <p className={styles['single-description']}>{this.photo.description}</p>
          <div ref="map">MAP GOES HERE</div>
        </section>
      );
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PhotoDetailPage.need = [params => {
  return fetchPhoto(params.cuid);
}];
// Retrieve data from store as props
// function mapStateToProps(state, props) {
//   return {
//     photo: getPhoto(state, props.params.cuid),
//   };
// }


export default PhotoDetailPage;
