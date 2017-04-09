/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';
import App from './modules/App/App';
import PhotoDetailPageContainer from './modules/Photo/pages/PhotoDetailPage/PhotoDetailPageContainer';
import PhotoAddPageContainer from './modules/Photo/pages/PhotoAddPage/PhotoAddPageContainer';
import PhotoGalleryPage from './modules/Photo/pages/PhotoGalleryPage/PhotoGalleryPage';
import Loading from './modules/Photo/loading';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

const requireLoggedIn = (nextState, replace, cb) => {
  const authCookie = cookie.load('mernAuth');
  if (!authCookie || !authCookie.t) {
    replace('/');
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

const requireAuth = (nextState, replace, cb) => {
  alert('entered')
};

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Photo/pages/PhotoListPage/PhotoListPage').default);
        });
      }}
    />
    <Route
      path="/posts"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
    <Route
      path="/photos"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Photo/pages/PhotoListPage/PhotoListPage').default);
        });
      }}
    />
    <Route
      path="/photos/:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Photo/pages/PhotoDetailPage/PhotoDetailPageContainer').default);
        });
      }}
    />
    <Route
      path="/add"
      component={PhotoAddPageContainer}
    />
    <Route
      path="/loading"
      component={Loading}
      onEnter={requireAuth}
    />
    <Route
      path="/gallery"
      component={PhotoGalleryPage}
    />
    <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/LoginPage/LoginPage').default);
        });
      }}
    />
    <Route
      path="/register"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/RegisterPage/RegisterPage').default);
        });
      }}
    />
    {/* TODO refactor above to use !requireLoggedIn and get rid of requireNotLoggedIn???*/}
  </Route>
);
