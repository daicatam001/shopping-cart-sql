import Product from "./product";
import CartItem from "./cart-item";
import Cart from "./cart";
import User from "./user";

User.hasOne(Cart, {
  foreignKey: "userId",
});
Cart.belongsToMany(Product, {
  through: CartItem,
  foreignKey: "cartId",
});
Product.belongsToMany(Cart, {
  through: CartItem,
  foreignKey: "productId",
});
