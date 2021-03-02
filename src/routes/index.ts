import express from "express";
import { addToCart, showCart } from "../controllers/cartController";
import {
  insertProduct,
  showProductCreate,
  showProducts,
} from "../controllers/productController";

const router = express.Router();
// views

router.get("/", showProducts);
router.get("/create-product", showProductCreate);

router.get("/cart", showCart);

// action
router.post("/products/create", insertProduct);
router.post("/cart", addToCart);
export default router;
