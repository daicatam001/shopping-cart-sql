import { Response } from "express";
import Product from "../models/product";
import { AuthReuqest } from "../types/request";

export const showCart = async (req: AuthReuqest, res: Response) => {
  try {
    let cart = await req.user?.getCart({
      include: ["products"],
    });
    let products: Product[];
    if (!cart) {
      cart = await req.user?.createCart();
      products = [];
    } else {
      products = cart.products || [];
    }
    res.render("cart", {
      title: "cart",
      products,
    });
  } catch (e) {
    console.log(e);
    res.redirect("back");
  }
};

export const addToCart = async (req: AuthReuqest, res: Response) => {
  try {
    const productId = req.body.productId;
    let cart = await req.user?.getCart();

    if (!cart) {
      cart = await req.user?.createCart({ total: 0 });
    }
    let addProduct,
      newAmount = 1;
    const foundProducts = await cart!.getProducts({ where: { id: productId } });
    if (foundProducts.length) {
      addProduct = foundProducts[0];
      newAmount += addProduct.cartItem!.amount;
    } else {
      addProduct = await Product.findByPk(productId);
      if (!addProduct) {
        res.redirect("/");
        return;
      }
    }

    await cart?.addProduct(addProduct!, { through: { amount: newAmount } });
    res.redirect("/cart");
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteCartItem = async (req: AuthReuqest, res: Response) => {
  try {
    const { productId } = req.body;
    const cart = await req.user!.getCart();
    await cart.removeProduct(productId);
    res.redirect("back");
  } catch (e) {
    console.error(e);
    throw e;
  }
};
