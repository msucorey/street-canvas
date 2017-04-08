import React from 'react';
import { Link, browserHistory } from 'react-router';

// Import Style
import styles from './Header.css';

// export function Header(props, context) {
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.logout = this.logoutUser.bind(this);
  }

  register = (e) => {
    e.preventDefault();
    this.props.toggleAddPost();
    browserHistory.push('/register');
  };

  logoutUser = (e) => {
    e.preventDefault();
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    let button =
    (<a className={styles['add-post-button']} href="#" onClick={this.register}>Log In</a>);
    if (this.props.userData) {
      button = (<a className={styles['add-post-button']} href="#" onClick={this.logoutUser}>Log Out</a>);
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
