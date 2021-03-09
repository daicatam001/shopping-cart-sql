import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";

class OrderItem extends Model {
  id?: number;
  amount!: number;
  price!: number;
}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
  },
  {
    tableName: "order-item",
    modelName: "orderItem",
    sequelize,
  }
);
export default OrderItem;