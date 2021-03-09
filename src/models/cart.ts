import {
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManySetAssociationsMixin,
  DataTypes,
  Model,
} from "sequelize";
import sequelize from "../utils/database";
import CartItem from "./cart-item";
import Product from "./product";

class Cart extends Model {
  id!: string;
  total!: number;
  cartItem!: any;
  products?: Product[];

  createProduct!: BelongsToManyCreateAssociationMixin<Product>;
  addProduct!: BelongsToManyAddAssociationMixin<
    Product,
    { throught: CartItem }
  >;
  addProducts!: BelongsToManyAddAssociationsMixin<
    Product,
    { throught: CartItem }
  >;
  setProducts!: BelongsToManySetAssociationsMixin<
    Product ,
    { throught: CartItem }
  >;
  getProducts!: BelongsToManyGetAssociationsMixin<Product>;
  removeProduct!: BelongsToManyRemoveAssociationMixin<
    Product,
    { throught: CartItem }
  >;
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
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    tableName: "carts",
    modelName: "cart",
    sequelize,
  }
);

export default Cart;
