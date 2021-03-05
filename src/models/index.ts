import Product from "./product";
import CartItem from "./cart-item";
import Cart from "./cart";
import User from "./user";

User.hasOne(Cart, {
  onDelete: "CASCADE",
  as: "cart",
});
Cart.belongsTo(User, { foreignKey: "userId" });
Cart.belongsToMany(Product, { through: "cart-item", foreignKey: "cartId" });
Product.belongsToMany(Cart, { through: "cart-item", foreignKey: "productId" });
