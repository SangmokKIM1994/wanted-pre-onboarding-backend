const PostService = require("./post.services");

class PostController {
  postService = new PostService();
}

module.exports = PostController;
