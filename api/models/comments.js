const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
	body: { type: String, required: true },
	postId: { type: String }
});

module.exports = mongoose.model('comments', commentsSchema);
