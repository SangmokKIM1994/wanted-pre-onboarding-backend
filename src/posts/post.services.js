const PostRepository = require("./post.repositories");
const { makeError } = require("../error");

class PostService {
  postRepository = new PostRepository();

  createPost = async ({ userId, title, content }) => {
    if (!title || !content) {
      throw new makeError({ message: "제목이나 내용을 입력하세요", code: 400 });
    }
    await this.postRepository.createPost({ userId, title, content });
    return;
  };

  getPaginatedPosts = async ({ page }) => {
    const posts = this.postRepository.getPaginatedPosts({ page });
    return posts;
  };
}

module.exports = PostService;
