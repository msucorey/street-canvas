import React from 'react';
import { Link, browserHistory } from 'react-router';

// Import Style
import styles from './Header.css';

// export function Header(props, context) {
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  loginUser = (e) => {
    e.preventDefault();
    this.props.toggleAddPost();
    browserHistory.push('/login');
  };

  logoutUser = (e) => {
    e.preventDefault();
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    // <p className={styles['username']}>`{username}`</p>

    let username = null;
    if (this.props.userData) {
      username = this.props.userData.username;
    }
    let button =
    (<a className={styles['add-post-button']} href="#" onClick={this.loginUser}>LOG IN</a>);
    if (this.props.userData) {
      button = (<a className={styles['add-post-button']} href="#" onClick={this.logoutUser}>{username} | LOG OUT</a>);
    }

    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
            <Link to="/" >STREET<span>CANVAS</span></Link>
          </h1>
          {button}
        </div>
      </div>
    );
  }
}

export default Header;
