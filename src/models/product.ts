import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import CartItem from "./cart-item";
import OrderItem from "./order-item";

class Product extends Model {
  id!: string;
  title!: string;
  description!: string;
  price!: number;
  cartItem?: CartItem;
  orderItem?: OrderItem;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    modelName: "product",
    sequelize,
  }
);

export default Product;
