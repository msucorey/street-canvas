import React from 'react';
import styles from './Photo.css';

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <div className={styles['innerLoading']}>
        <img src="http://res.cloudinary.com/streetcanvas/image/upload/v1491536665/default_ztywus.svg" alt="loading" />
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loading;
