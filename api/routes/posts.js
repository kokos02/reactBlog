import express from "express";
import {
    getPosts,
    getPost,
    addPost,
    updatePost,
    deletePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/", addPost);
router.get("/:id", deletePost);
router.put("/:id", updatePost);

export default router;