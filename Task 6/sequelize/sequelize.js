import Sequelize from 'sequelize';
import UserModel from './models/user.js';
import ProductModel from './models/product.js';
import config from './config/config.js';

const name = config.development.database;
const user = config.development.username;
const password = config.development.password;
const options = {
    "dialect": config.development.dialect,
    "host": config.development.host
};

const sequelize = new Sequelize(name, user, password, options);

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);

export default { User, Product };