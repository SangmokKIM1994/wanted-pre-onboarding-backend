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
    if (!posts) {
      throw new makeError({
        message: `${page}페이지의 게시글이 없습니다`,
        code: 400,
      });
    }
    return posts;
  };

  getOnePost = async ({ postId }) => {
    const post = this.postRepository.getOnePost({ postId });
    if (!post) {
      throw new makeError({
        message: `${postId}번 게시글이 없습니다.`,
        code: 400,
      });
    }
    return post;
  };
}

module.exports = PostService;
