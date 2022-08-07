import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/postController.js";

const router = express.Router();

//adding Routes
router.get('/', getPosts);
router.post('/', createPost);

//update existing Post
//For editing something, add always an :id 
router.patch('/:id', updatePost)


export default router;