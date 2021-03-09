import { Response } from "express";
import OrderItem from "../models/order-item";
import { AuthReuqest } from "../types/request";

export const getOrder = async (req: AuthReuqest, res: Response) => {
  const { orderId } = req.params;
  const order = await req.user!.getOrders({
    include: ["products"],
  });
  if (order.length) {
    res.render("order", {
      title: "Order",
      products: order[0].products,
    });
  }
  res.send(orderId);
};

export const createOrder = async (req: AuthReuqest, res: Response) => {
  try {
    const cart = await req.user!.getCart({
      include: ["products"],
    });
    if (!cart.products!.length) {
      res.redirect("/cart");
    }
    const order = await req.user!.createOrderProduct(
      cart.products!.map((item) => {
        item.orderItem = {
          price: item.price,
          amount: item.cartItem!.amount,
        } as OrderItem;
        console.log(item);
        return item;
      })
    );
    cart.setProducts(undefined);
    res.redirect("/order/" + order!.id);
  } catch (e) {
    throw new Error(e);
  }
};
