import { BelongsToManyAddAssociationsMixin, DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import OrderItem from "./order-item";
import Product from "./product";

class Order extends Model {
  id!: number;
  total!: number;

  products?: Product[];

  addProducts!: BelongsToManyAddAssociationsMixin<
    Product,
    { through: OrderItem }
  >;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  {
    tableName: "orders",
    modelName: "order",
    sequelize,
  }
);
export default Order;
