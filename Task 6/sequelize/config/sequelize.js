const Sequelize = require('sequelize');
const UserModel = require('../models/user.js');
const ProductModel = require('../models/product.js');

const sequelize = new Sequelize('test', 'postgres', 'admin', {
    host: '127.0.0.1',
    port: '5433',
    dialect: 'postgres',
  })

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);

module.exports = {
    User,
    Product
  }