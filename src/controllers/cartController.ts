import { Response } from "express";
import Product from "../models/product";
import { AuthReuqest } from "../types/request";

export const showCart = async (req: AuthReuqest, res: Response) => {
  try {
    let cart = await req.user?.getCart();
    let products: Product[];
    if (!cart) {
      cart = await req.user?.createCart();
      products = [];
    } else {
      products = await cart.getProducts();
    }
    console.log(products);
    res.render("cart", {
      title: "cart",
      products,
    });
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
};

export const addToCart = async (req: AuthReuqest, res: Response) => {
  try {
    const productId = req.body.productId;
    const product = await Product.findByPk(productId);
    console.log(product);
    if (!product) {
      res.redirect("/");
      return;
    }
    let cart = await req.user?.getCart();

    if (!cart) {
      cart = await req.user?.createCart({ total: 0 });
    }
    await cart?.addProduct(product, { through: { amount: 1 } });
    res.redirect("/cart");
  } catch (e) {
    console.error(e);
    res.redirect("/");
  }
};
