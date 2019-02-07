const Posts = require('../models/posts');

module.exports = {
	getPosts: async (callback, limit) => {
		await Posts.find(callback).limit(limit);
	},

	addPost: async (post, callback) => {
		await Posts.create(post, callback);
	},

	deletePost: async (id, callback) => {
		const query = { _id: id };
		try {
			await Posts.deleteOne(query, callback);
		} catch (error) {
			console.log(JSON.stringify(error));
		}
	}
};
