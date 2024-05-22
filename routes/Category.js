const express = require('express');
const {  fetchCategories, createCategory } = require('../controller/Category');



const router = express.Router();


// POST request for creating products
// /products is already in the base path 
router.get('/',fetchCategories).post('/',createCategory);

exports.router = router;

