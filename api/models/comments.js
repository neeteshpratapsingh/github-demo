const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
	body: { type: String, required: true },
	postId: { type: String, required: true }
});

module.exports = mongoose.model('comments', commentsSchema);
