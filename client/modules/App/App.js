import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


// Import Actions
import { toggleAddPost } from './AppActions';
import { logout } from '../User/UserActions';

// import cookie from 'react-cookie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false, logState: false };
  }

  componentDidMount() {
    // this.setState({ isMounted: true, logState: false});
    // eslint-disable-line
  }
  //  cw - keeping this legacy code as a placeholder right now
  //  to force state changes or add other global toggles
  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
    const newState = !this.state.logState;
    this.setState({ isMounted: true, logState: newState });
  };
  logoutUser = () => {
    this.props.dispatch(logout());
    const newState = !this.state.logState;
    this.setState({ isMounted: true, logState: newState });
  };

  render() {
    return (
      <div>

        <div>
          <Header toggleAddPost={this.toggleAddPostSection} logout={this.logoutUser} />
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
