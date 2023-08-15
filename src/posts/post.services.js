const PostRepository = require("./post.repositories");
const { makeError } = require("../error");

class PostService {
  postRepository = new PostRepository();
}

module.exports = PostService;
