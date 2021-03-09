import {
  DataTypes,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  Model
} from "sequelize";
import sequelize from "../utils/database";
import Cart from "./cart";
import Order from "./order";
import Product from "./product";

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  cart!: Cart;

  public getCart!: HasOneGetAssociationMixin<Cart>;
  public createCart!: HasOneCreateAssociationMixin<Cart>;

  public createOrder!: HasManyCreateAssociationMixin<Order>;

  public getOrders!:HasManyGetAssociationsMixin<Order>

  public async createOrderProduct(products: Product[]): Promise<Order> {
    const transaction = await this.sequelize.transaction();
    try {
      const order = await this.createOrder({ transaction });
      console.log(order);
      await order.addProducts(products, { transaction });
      transaction.commit();
      return order;
    } catch (e) {
      transaction.rollback();
      throw e;
    }
  }

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    modelName: "user",
    sequelize,
  }
);
export default User;
