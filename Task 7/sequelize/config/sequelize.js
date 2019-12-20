const Sequelize = require('sequelize');
const UserModel = require('../models/user.js');
const ProductModel = require('../models/product.js');
const { configure } = require('sequelize-pg-utilities');
const config = require('../config/config.json');
const { name, user, password, options } = configure(config);

const sequelize = new Sequelize(name, user, password, options);

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);

module.exports = {
  User,
  Product
}