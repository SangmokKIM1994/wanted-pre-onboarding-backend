const { Users, Posts } = require("../models");

class PostRepository {
  createPost = async ({ userId, title, content }) => {
    await Posts.create({ userId, title, content });
    return;
  };

  getPaginatedPosts = async ({ page }) => {
    const limit = 5;
    const offset = (page - 1) * group;
    const posts = await Posts.findAll({
      attributes: [title, content],
      limit: limit,
      offset: offset,
    });
    return posts;
  };

  getOnePost = async ({ postId }) => {
    const post = await Posts.findOne({ where: { postId } });
    return post;
  };

  editTitle = async ({ postId, title }) => {
    await Posts.update({ title }, { where: { postId } });
    return;
  };

  editContent = async ({ postId, content }) => {
    await Posts.update({ content }, { where: { postId } });
    return;
  };

  deletePost = async ({ postId }) => {
    await Posts.delete({ where: { postId } });
    return;
  };
}

module.exports = PostRepository;
