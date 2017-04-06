/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import user from './modules/User/UserReducer';
import photos from './modules/Photo/PhotoReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  user,
  photos,
});
