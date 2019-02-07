const express = require('express');
const router = express.Router();

const Comments = require('../main/comments');

router.get('/', (req, res) => {
	Comments.getComments((error, comments) => {
		if (error) {
			throw error;
		}
		res.json(comments).status(200);
	});
});

router.post('/', (req, res) => {
	const comment = req.body;

	Comments.addComment(comment, (err, comment) => {
		if (err) {
			throw err;
		}
		res.json(comment).status(200);
	});
});

router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Comments.deleteComment(id, (err, comment) => {
		if (err) {
			throw err;
		}
		res.json(comment);
	});
});

module.exports = router;
