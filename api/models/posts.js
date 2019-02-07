const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
	title: { type: String, required: true },
	article: { type: String, required: true },
	author: { type: String, required: true }
});

module.exports = mongoose.model('post', postsSchema);
