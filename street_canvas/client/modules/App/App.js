import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';


// Import Actions
import { toggleAddPost } from './AppActions';
import { logout } from '../User/UserActions';

import cookie from 'react-cookie';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false, loggedIn: false };
  }

  componentDidMount() {
    const authCookie = cookie.load('mernAuth');
    const loggedIn = authCookie && authCookie.t;
    this.setState({isMounted: true, loggedIn: loggedIn});
    // eslint-disable-line
  }
  //  cw - keeping this legacy code as a placeholder right now
  //  to force state changes or add other global toggles
  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
    this.setState({ isMounted: true, loggedIn: false });
  };
  logoutUser = () => {
    this.props.dispatch(logout());
    this.setState({ isMounted: true, loggedIn: false });
  };

  render() {
    return (
      <div>

        <div>
          <Helmet
            title="StreetCANVAS: Find Street Art Near You!"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
        <HeaderContainer toggleAddPost={this.toggleAddPostSection} logout={this.logoutUser} />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    store,
    userData: store.user.data,
  };
}

export default connect(mapStateToProps)(App);
