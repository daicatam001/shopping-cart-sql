import { Request, Response } from "express";
import Product from "../models/product";

export const showProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.render("product-list", {
      title: "Product List",
      products,
    });
  } catch (e) {
    throw e;
  }
};

export const showProductCreate = async (req: Request, res: Response) => {
  try {
    res.render("product-create", {
      title: "Product Create",
    });
  } catch (e) {
    throw e;
  }
};

export const insertProduct = async (req: Request, res: Response) => {
  try {
    const { title, description, price } = req.body;
    const product = await Product.create({ title, description, price });
    console.log(product.title);
    res.redirect("/");
  } catch (e) {
    throw e;
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const product = await Product.destroy({ where: { id: productId } });
    res.redirect("/");
  } catch (e) {
    throw e;
  }
};
