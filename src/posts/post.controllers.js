const PostService = require("./post.services");

class PostController {
  postService = new PostService();

  createPost = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;
      const { title, content } = req.body;

      await this.postService.createPost({
        userId,
        title,
        content,
      });
      res.status(201).json({ message: "게시물 작성 완료" });
    } catch (error) {
      next(error);
    }
  };

  getPaginatedPosts = async (req, res, next) => {
    try {
      const { page } = req.query;
      const posts = this.postService.getPaginatedPosts({ page });
      res.status(200).json({ message: `${page}페이지 조회 성공`, posts });
    } catch (error) {
      next(error);
    }
  };

  getOnePost = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const post = this.postService.getOnePost({ postId });
      res.status(200).json({ message: "게시글 조회 성공", post });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PostController;
