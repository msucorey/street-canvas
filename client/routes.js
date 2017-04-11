/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';
import App from './modules/App/App';
import PhotoDetailPageContainer from './modules/Photo/pages/PhotoDetailPage/PhotoDetailPageContainer';
import PhotoAddPageContainer from './modules/Photo/pages/PhotoAddPage/PhotoAddPageContainer';
import PhotoGalleryPage from './modules/Photo/pages/PhotoGalleryPage/PhotoGalleryPage';
import LoginPage from './modules/User/pages/LoginPage/LoginPage';
import PhotoListPage from './modules/Photo/pages/PhotoGalleryPage/PhotoListPage';
import RegisterPage from './modules/User/pages/RegisterPage/RegisterPage';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

const requireLoggedIn = (nextState, replace, cb) => {
  const authCookie = cookie.load('mernAuth');
  if (!authCookie || !authCookie.t) {
    replace('/login');
  }
  cb();
};
const requireNotLoggedIn = (nextState, replace, cb) => {
  const authCookie = cookie.load('mernAuth');
  if (authCookie && authCookie.t) {
    replace('/');
  }
  cb();
};

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PhotoListPage} />
    <Route
      path="/photos/:cuid" component={PhotoDetailPageContainer}
    />
    <Route
      path="/add"
      onEnter={requireLoggedIn}
      component={PhotoAddPageContainer}
    />
    <Route
      path="/gallery"
      component={PhotoGalleryPage}
    />
    <Route
      path="/login" component={LoginPage}
    />
    <Route
      path="/register" component={RegisterPage}
    />
  </Route>
);
