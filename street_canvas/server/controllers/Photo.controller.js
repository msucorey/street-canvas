import Photo from '../models/Photo';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';


// Configure Cloudinary
// with credentials available on
// your Cloudinary account dashboard
// cloudinary.config({
//   cloud_name: 'streetcanvas',
//   api_key: '956475254242893',
//   api_secret: 'cWe_K6RjW54UYcD0xP3XOofgtas'
// });

// Get all Photos...
export function getPhotos(req, res) {
  Photo.find().sort('-dateAdded').exec((err, photos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ photos });
  });
}

// Get single Photo...

export function getPhoto(req, res) {
  Photo.findOne({ cuid: req.params.cuid }).exec((err, photo) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ photo });
  });
}


// Add photo

export function addPhoto(req, res) {
  cloudinary.uploader.upload(req.files.image.path, (result) => {
    const newPhoto = new Photo({
      photo_url: result.url,
      lat: req.body.photo.lat,
      lng: req.body.photo.lng,
    });

    if (!req.body.photo.photo_url || !req.body.photo.lat || !req.body.photo.lng) {
      res.status(403).end();
    }

    // Let's sanitize inputs
    newPhoto.description = sanitizeHtml(newPhoto.description);
    newPhoto.cuid = cuid();
    newPhoto.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ photo: saved });
      res.redirect(`/photos/${newPhoto.cuid}`);
    });
  });
}
