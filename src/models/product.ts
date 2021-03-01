import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";

class Product extends Model {
  id!:string;
  title!:string;
  description!:string;
  price!:string;
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
    sequelize,
  }
);

export default Product;
