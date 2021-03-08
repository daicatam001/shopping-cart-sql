import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";

class CartItem extends Model {
  id!: number;
  amount!: number;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "cart_item",
    modelName: "cartItem",
    sequelize,
  }
);

export default CartItem;
