import { Router } from "express";
import { createPost } from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router()

// Create Post
router.post('/', checkAuth, createPost)

// get all posts
// router.get('/', getAll)

export default router;