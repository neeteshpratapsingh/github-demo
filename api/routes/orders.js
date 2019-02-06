const express = require("express");
const router = express.Router();

//handle incoming GET request to /orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "orders were fetched"
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: "order was created",
    order: order
  });
});

router.get("/orderId", (req, res, next) => {
  res.status(200).json({
    message: "order dtails",
    orderId: req.params.orderId
  });
});

router.delete("/orderId", (req, res, next) => {
  res.status(200).json({
    message: "order deleted",
    orderId: req.params.orderId
  });
});

module.exports = router;
