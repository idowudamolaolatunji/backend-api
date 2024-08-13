
const express = require('express');

const postController = require('../controller/postController.js');
const {protectedRoute} = require('../middlewares/protectedRoute.js')

const router = express.Router();

router.get('/get-all-posts',postController.getAllPosts);
router.post('/', protectedRoute, postController.createPost);


module.exports = router; 