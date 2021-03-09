import express from "express";
import {
  addToCart,
  deleteCartItem,
  showCart,
} from "../controllers/cartController";
import { createOrder, getOrder } from "../controllers/orderController";
import {
  deleteProduct,
  insertProduct,
  showProductCreate,
  showProducts,
} from "../controllers/productController";

const router = express.Router();
// views

router.get("/", showProducts);
router.get("/create-product", showProductCreate);

router.get("/cart", showCart);

router.get("/order/:orderId", getOrder);

// action
router.post("/products/create", insertProduct);
router.post("/products/delete", deleteProduct);

router.post("/cart", addToCart);
router.post("/cart/delete", deleteCartItem);

router.post("/order", createOrder);
export default router;
