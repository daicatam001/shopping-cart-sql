import Product from "./product";
import CartItem from "./cart-item";
import Cart from "./cart";
import User from "./user";
import Order from "./order";
import OrderItem from "./order-item";

User.hasOne(Cart, {
  foreignKey: "userId",
});
Cart.belongsToMany(Product, {
  through: CartItem,
  foreignKey: "cartId",
  as:'products'
});
Product.belongsToMany(Cart, {
  through: CartItem,
  foreignKey: "productId",
  as:'carts'
});
User.hasMany(Order, {
  foreignKey: "userId",
});
Order.belongsTo(User);
Order.belongsToMany(Product, {
  through: OrderItem,
  foreignKey: "orderId",
  as:'products'
});
Product.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: "productId",
});
