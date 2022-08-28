import express from "express";

import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/postController.js";

const router = express.Router();

//adding Routes
router.get('/', getPosts);
router.post('/', createPost);

//update existing Post
//For editing something, add always an :id 
router.patch('/:id', updatePost)

//Delete
//For deleting a post, need the :id 
router.delete('/:id', deletePost);

//Like
router.patch('/:id/likePost', likePost);


export default router;