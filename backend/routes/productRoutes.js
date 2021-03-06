import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// Get all products
router.route('/').get(getProducts).post(protect, admin, createProduct)

// Get 5 top products
router.route('/top').get(getTopProducts)

// Create new review for given product
router.route('/:id/reviews').post(protect, createProductReview)

// Fetch a single product GET '/api/products/:id' PUBLIC
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
