const express = require('express');
const router = express.Router();
const Posts = require('../main/posts');
const Comments = require('../main/comments');

router.get('/', (req, res) => {
	Posts.getPosts((error, posts) => {
		if (error) {
			throw error;
		}
		res.json(posts).status(200);
	});
});

router.post('/', (req, res) => {
	const post = req.body;

	Posts.addPost(post, (err, post) => {
		if (err) {
			throw err;
		}
		res.json(post).status(200);
	});
});

router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Comments.deletePostComments(id, (err) => {
		if (err) {
			throw err;
		}

		res.sendStatus(200);
	});
	Posts.deletePost(id, (err, post) => {
		if (err) {
			throw err;
		}
		res.json(post);
	});
});

module.exports = router;
