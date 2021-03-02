import { DataTypes, HasOneCreateAssociationMixin, HasOneGetAssociationMixin, Model } from "sequelize";
import sequelize from "../utils/database";
import Cart from "./cart";

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  cart!:Cart;

  public getCart!:HasOneGetAssociationMixin<Cart>;
  public createCart!:HasOneCreateAssociationMixin<Cart>
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
    sequelize,
  }
);
export default User;
