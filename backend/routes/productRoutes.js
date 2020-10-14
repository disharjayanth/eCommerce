import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

// Get all products
router.route('/').get(getProducts)

// Fetch a single product GET '/api/products/:id' PUBLIC
router.route('/:id').get(getProductById)

export default router
