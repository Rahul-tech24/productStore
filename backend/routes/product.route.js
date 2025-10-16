import express from 'express';
import {getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();


// Get all products
router.get('/', getAllProducts);
// Create a new product
router.post('/', createProduct);
// Get a product by ID
router.get('/:id', getProductById);
       
// Delete a product
router.delete('/:id', deleteProduct);
    

// Update a product
router.put('/:id', updateProduct);

export default router;
