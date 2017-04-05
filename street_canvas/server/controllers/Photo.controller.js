import Photo from '../models/Photo';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

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
  if (!req.body.photo.photo_url || !req.body.photo.lat || !req.body.photo.lng) {
    res.status(403).end();
  }

  const newPhoto = new Photo(req.body.photo);

  // Let's sanitize inputs
  newPhoto.description = sanitizeHtml(newPhoto.description);

  newPhoto.cuid = cuid();
  newPhoto.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ photo: saved });
  });
}
