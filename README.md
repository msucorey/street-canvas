## Street Canvas
## Find Street Art Near You!
![logo](http://res.cloudinary.com/streetcanvas/image/upload/v1491274037/street_canvas_logo_banner_haafy3.jpg)

**Team**:

**Brent Gummow**
karmapoint@gmail.com
https://github.com/karmapoint

**Corey Wofford**
msucorey@gmail.com
https://github.com/msucorey


[StreetCANVAS live link - coming soon](http://streetcanvas.herokuapp.com/)

StreetCANVAS is be a mobile-first, single-page, isomorphic JavaScript web app that shows visitors nearby street art (murals, tags, public art, etc.) on a Google map. Users can use StreetCANVAS to make their own walking tours of these locations. They also have the ability to find, photograph, and add new murals, tags, or public art pieces to the StreetCANVAS collection.

![detailpage](http://res.cloudinary.com/streetcanvas/image/upload/c_scale,h_600/v1491786155/mobile_detail_zt8dtx.png)

## Technical Overview
We built this project over the course of five days with new stack for us: MERN (MongoDB/Express/React/Node.js). The new stack added additional levels of complexity that we were able to clear slowly, but surely with the help of documentation and the MERN Starter boilerplate and cli from http://mern.io.

We opted to use the Google Maps JavaScript API and the Cloudinary CDN to host our images. http://cloudinary.com/ also provided an image upload widget that we integrated to get images from users into the cloud.


## Features

### View pins of nearby locations with documented street art
We used the Goolge Maps JavaScript API to geolocate the user when they first visit the site. They are then greeted with a map centered on their location where they can see any nearby pins representing instances of photographed street art.


Initializing the map at the correct location:
````JavaScript
initMap() {
  const mapOptions = {
    center: { lat: this.currentLat, lng: this.currentLng },
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
  };
  this.map = new google.maps.Map(this.refs.map, mapOptions);
  this.setState({ loaded: true });
}
````

Adding the pins which link to photo detail pages:
````JavaScript
if (this.state.loaded) {
  this.props.photos.map(photo => {
    this.marker = new google.maps.Marker({
      position: { lat: photo.lat, lng: photo.lng },
      map: this.map
    });
    google.maps.event.addListener(this.marker, 'click', () => (browserHistory.push(`/photos/${photo.cuid}`)));
    return 0;
  });
````



![pins](http://res.cloudinary.com/streetcanvas/image/upload/c_scale,h_700/v1491786155/mobile_map_rcees4.png)



### Add your own photos of street art at the correct location
A user must register and log in to add photos to the StreetCANVAS collection.  We added an `onEnter hook` to the `PhotoAddPage` route in the React-router to enforce this.

The form on that page was a unique challenge as it required us to launch the `Cloudinary UploadWidget` for the first step of the form, then a clickable Google Map (which starts at the current location of the user) to set the coordinates for the pin.

After successfully adding their new photo, the user is redirected to the show page for that image.


![addpage](http://res.cloudinary.com/streetcanvas/image/upload/v1491786155/mobile_add_jxio4p.png)


### View a gallery of all images in the collection
For the `Gallery` view of the application, we fetch all the images from the database and display them in a simple layout utilizing custom, responsive, CSS-only `masonry`.

Clicking on any image in the gallery will redirect the user to the proper detail page where they can see a larger image, the image description, and small map displaying the pinned location of the photograph.

![gallery](http://res.cloudinary.com/streetcanvas/image/upload/v1491786155/mobile_gallery_bsffwo.png)


### Additional Resources

#### Wireframes
![wireframes](https://raw.githubusercontent.com/msucorey/street-canvas/master/docs/wireframes/wireframes.png)

* [Full set of screenshots](https://github.com/msucorey/street-canvas/tree/master/docs/screenshots)


### Potential future improvements
The current iteration of StreetCANVAS is just an MVP. With more time, we would love to build out some more improvements.

**Location search**
It would be very helpful to allow users to search for a location to move the map there. Right now they are limited to starting from their current location and then zooming/panning with the map controls.

**Commenting and/or likes**
Adding a feature to allow logged in users to leave comments about photos on the detail page could help keep users coming back to the site.
