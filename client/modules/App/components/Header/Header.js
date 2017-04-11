import React from 'react';
import { Link, browserHistory } from 'react-router';

// Import Style
import styles from './Header.css';
import cookie from 'react-cookie';

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
    const authCookie = cookie.load('mernAuth');
    let username = null;
    if (authCookie) {
      username = authCookie.u;
    }
    let button =
    (<a className={styles['add-post-button']} href="#" onClick={this.loginUser}>LOG IN</a>);
    if (authCookie) {
      button = (<a className={styles['add-post-button']} href="#" onClick={this.logoutUser}>{username} | LOG OUT</a>);
    }

    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
            <Link to="/" >STREET<span>CANVAS</span></Link>
          </h1>
          <h5>{button}</h5>
        </div>
      </div>
    );
  }
}

export default Header;
