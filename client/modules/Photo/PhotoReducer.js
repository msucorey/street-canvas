// Import Actions
import { ADD_PHOTO, ADD_PHOTOS } from './PhotoActions';

// Initial State
const initialState = { data: [] };

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        data: [action.photo, ...state.data],
      };
    case ADD_PHOTOS :
      return {
        data: action.photos,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all photos
export const getPhotos = state => state.photos.data;

// Get photo by cuid
export const getPhoto = (state, cuid) => state.photos.data.filter(photo => photo.cuid === cuid)[0];


export default PhotoReducer;
