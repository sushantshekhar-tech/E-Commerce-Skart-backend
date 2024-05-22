const express = require('express');
const { createProduct, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/Product');

const router = express.Router();


// POST request for creating products
// /products is already in the base path 
router.post('/', createProduct).get('/',fetchAllProducts).get('/:id',fetchProductById).patch('/:id',updateProduct)

exports.router = router;

