import { BelongsToManyGetAssociationsMixin } from "sequelize";
import {
  BelongsToManyAddAssociationMixin,
  DataTypes,
  HasManyAddAssociationMixin,
  Model,
} from "sequelize";
import sequelize from "../utils/database";
import CartItem from "./cart-item";
import Product from "./product";

class Cart extends Model {
  id!: string;
  total!:number

  createProduct!: BelongsToManyAddAssociationMixin<Product, { throught: CartItem }>;
  getProducts!:BelongsToManyGetAssociationsMixin<Product>
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false
    },
  },
  {
    tableName: "carts",
    sequelize,
  }
);

export default Cart;
