import express, { Request, Response } from 'express';
import {
  insertProduct,
  showProducts,
  showProductCreate,
} from '../controllers/productController';
const router = express.Router();
// views
router.get('/', showProducts);
router.get('/create-product', showProductCreate);

// action
router.post('/products/create', insertProduct);

export default router;
