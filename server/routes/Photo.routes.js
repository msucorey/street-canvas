import { Router } from 'express';
import * as PhotoController from '../controllers/Photo.controller';

const router = new Router();
// Get all Photos
router.route('/photos').get(PhotoController.getPhotos);

// Get one photo by cuid
router.route('/photos/:cuid').get(PhotoController.getPhoto);

// Add a new Photo
router.route('/photos').post(PhotoController.addPhoto);


export default router;
