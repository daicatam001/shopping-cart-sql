import sequelize from "../utils/database";
import { DataTypes, HasOneGetAssociationMixin, Model } from "sequelize";
import User from "./user";

class Cart extends Model {
    id!:string;

    public getCat!:HasOneGetAssociationMixin<Cart>;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: "carts",
    sequelize,
  }
);

export default Cart;
