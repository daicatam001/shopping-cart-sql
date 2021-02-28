import e from 'express';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('shopping_store', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
