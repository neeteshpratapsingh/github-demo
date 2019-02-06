const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Product = require('../models/product');

router.get('/', async (req, res, next) => {
	console.log('GET PRODUCTS REQUEST');
	await Product.find()
		.exec()
		.then((docs) => {
			res.status(200).json(docs);
		})
		.catch((er) => {
			console.log(er);
			res.status(500).json({
				error: er
			});
		});
});

router.post('/', checkAuth, (req, res, next) => {
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price
	});
	product
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => console.log(err));
	res.status(201).json({
		message: 'Handling POST requests to /products',
		createdProduct: product
	});
});

router.get('/:productId', (req, res, next) => {
	const id = req.params.productId;
	Product.findById(id)
		.exec()
		.then((doc) => {
			console.log('From database', doc);
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.patch('/:productId', checkAuth, (req, res, next) => {
	const id = req.params.productId;
	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}
	Product.update({ _id: id }, { $set: updateOps })
		.exec()
		.then((result) => {
			console.log(result);
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.delete('/:productId', checkAuth, (req, res, next) => {
	const id = req.params.productId;
	console.log('product deletes', id);
	Product.remove({ _id: id })
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

module.exports = router;
