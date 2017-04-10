import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import * as UserController from '../controllers/user.controller';
import * as PhotoController from '../controllers/Photo.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

// Get all Photos
router.route('/photos').get(PhotoController.getPhotos);

// Get one photo by cuid
router.route('/photos/:cuid').get(PhotoController.getPhoto);

// Add a new Photo
router.route('/photos').post(PhotoController.addPhoto);


// User auth routes
router.route('/register').post(UserController.register);

router.route('/login').post(UserController.login);

router.route('/updateUserInfo').post(UserController.updateUserInfo);

export default router;
