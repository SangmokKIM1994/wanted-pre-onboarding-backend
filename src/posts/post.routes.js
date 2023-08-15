const express = require("express");
const router = express.Router();

const authMiddleWare = require("../middlewares/auth.middleware");

const PostController = require("./post.controllers");
const postController = new PostController();

router.post("/", authMiddleWare, postController.createPost);
router.get("/", postController.getPaginatedPosts);
router.get("/:postId", postController.getOnePost);
router.patch("/:postId", authMiddleWare, postController.editTitleOrContent);
router.delete("/:postId", authMiddleWare, postController.deletePost);

module.exports = router;
