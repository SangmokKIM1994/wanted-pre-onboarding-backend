const { Users, Posts } = require("../models");

class PostRepository {
  createPost = async ({ userId, title, content }) => {
    await Posts.create({ userId, title, content });
    return;
  };

  getPaginatedPosts = async ({ page }) => {
    const limit = 5;
    const offset = (page - 1) * group;
    const posts = Posts.findAll({
      attributes: [title, content],
      limit: limit,
      offset: offset,
    });
    return posts;
  };

  getOnePost = async ({postId}) => {
    const post = Post.findOne({where:{postId}})
    return post
  }
}

module.exports = PostRepository;
