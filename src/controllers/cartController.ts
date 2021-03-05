import { Response } from "express";
import Product from "../models/product";
import { AuthReuqest } from "../types/request";

export const showCart = async (req: AuthReuqest, res: Response) => {
  const products = await req.user?.cart.getProducts();
  res.render("cart", {
    title: "cart",
    products,
  });
};

export const addToCart = async (req: AuthReuqest, res: Response) => {
  const productId = req.body.productId;
  const product = await Product.findByPk(productId);
  console.log(req.user?.cart);
  if (product) {
    if (!req.user?.cart) {
      const cart = await req.user?.createCart({ total: 0 });
      await cart!.createProduct(product, { through: { amount: 1 } });
    } else {
      await req.user?.cart.createProduct(product, { through: { amount: 1 } });
    }
  }
  res.redirect("/cart");
};
