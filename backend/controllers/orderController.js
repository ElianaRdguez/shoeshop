const { addOrder } = require('../models/order');

function createOrder(req, res) {
    const order = req.body;
    const savedOrder = addOrder(order);
    res.status(201).json(savedOrder);
}

module.exports = { createOrder };