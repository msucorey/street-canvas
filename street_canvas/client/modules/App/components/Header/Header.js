import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" >STREET<span>CANVAS</span></Link>
        </h1>
        <h1 className={styles['add-post-button']}>
          <Link to="/login" >LOGIN</Link>
        </h1>
        <h1 className={styles['add-post-button']}>
          <Link  >LOGOUT</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}>Add Post</a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  // logout: PropTypes.func.isRequired,
};

export default Header;
