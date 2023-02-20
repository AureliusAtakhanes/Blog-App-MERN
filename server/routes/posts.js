import { Router } from "express";
import {
    createPost,
    getAll,
    getById,
    getMyPosts,
    removePost,
    updatePost
} from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router()

// Create Post
router.post('/', checkAuth, createPost)

// get all posts
router.get('/', getAll)

// Get post by id
router.get('/:id', getById)

// Get my posts
router.get('/user/me', checkAuth, getMyPosts)

// Delete Post
router.delete('/:id', checkAuth, removePost)

// Update Post
router.put('/:id', checkAuth, updatePost)

export default router;