import React, { PropTypes } from 'react';

// Import Style
import styles from './Map.css';

 function initMap() {
   var SF = {lat: 37.7758, lng: -122.435};
   var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
     zoom: 12,
     center: SF,
     disableDefaultUI: true,
     zoomControl: true,
   });
   var marker = new google.maps.Marker({
     position: SF,
     map: map
   });
 }

function Map() {
  return (
    <div className={styles.map}></div>
  );
}

Map.propTypes = {
};

export default Map;
