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
    const posts = await this.postRepository.getPaginatedPosts({ page });
    if (posts.length === 0) {
      throw new makeError({
        message: `${page}페이지의 게시글이 없습니다`,
        code: 404,
      });
    }
    return posts;
  };

  getOnePost = async ({ postId }) => {
    const post = await this.postRepository.getOnePost({ postId });
    if (!post) {
      throw new makeError({
        message: `${postId}번 게시글이 없습니다.`,
        code: 404,
      });
    }
    return post;
  };

  editTitleOrContent = async ({ userId, postId, title, content }) => {
    const post = await this.postRepository.getOnePost({ postId });
    if (!post) {
      throw new makeError({
        message: `${postId}번 게시글이 없습니다.`,
        code: 404,
      });
    }
    if (userId !== post.userId) {
      throw new makeError({
        message: "게시글 수정 권한이 없습니다.",
        code: 400,
      });
    }

    if (!content) {
      if (title == post.title) {
        throw new makeError({
          message: "제목이 같습니다.",
          code: 400,
        });
      }
      await this.postRepository.editTitle({ postId, title });
    } else if (!title) {
      if (content == post.content) {
        throw new makeError({
          message: "내용이 같습니다",
          code: 400,
        });
      }
      await this.postRepository.editContent({ postId, content });
    } else if (title && content) {
      if (title == post.title) {
        throw new makeError({
          message: "제목이 같습니다.",
          code: 400,
        });
      }
      if (content == post.content) {
        throw new makeError({
          message: "내용이 같습니다",
          code: 400,
        });
      }
      await this.postRepository.editTitleAndContent({ postId, title, content });
    }
    return;
  };

  deletePost = async ({ userId, postId }) => {
    const post = await this.postRepository.getOnePost({ postId });
    if (!post) {
      throw new makeError({
        message: `${postId}번 게시글이 없습니다.`,
        code: 404,
      });
    }
    if (userId !== post.userId) {
      throw new makeError({
        message: "게시글 삭제 권한이 없습니다.",
        code: 400,
      });
    }

    await this.postRepository.deletePost({ postId });
    return;
  };
}

module.exports = PostService;
