import callApi from '../../util/apiCaller';

// Export Constants

export const ADD_PHOTO = 'ADD_PHOTO';
export const ADD_PHOTOS = 'ADD_PHOTOS';


// Export Actions
export function addPhoto(photo) {
  return {
    type: ADD_PHOTO,
    photo,
  };
}

export function addPhotoRequest(photo) {
  console.log(photo);
  return (dispatch) => {
    return callApi('photos', 'post', {
      photo: {
        photo_url: photo.photo_url,
        description: photo.description,
        cuid: photo.description,
        lat: photo.lat,
        lng: photo.lng,
      },
    }).then(res => dispatch(addPhoto(photo)));
  };
}

export function addPhotos(photos) {
  return {
    type: ADD_PHOTOS,
    photos,
  };
}

export function fetchPhotos() {
  return (dispatch) => {
    return callApi('photos').then(res => {
      dispatch(addPhotos(res.photos));
    });
  };
}

export function fetchPhoto(cuid) {
  return (dispatch) => {
    return callApi(`photos/${cuid}`).then(res => dispatch(addPhoto(res.photo)));
  };
}
