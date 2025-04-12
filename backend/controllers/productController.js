const products = require('../models/product');

function getAllProducts(req, res) {
    res.json(products);
}

function getProductById(req, res) {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
}

module.exports = { getAllProducts, getProductById };