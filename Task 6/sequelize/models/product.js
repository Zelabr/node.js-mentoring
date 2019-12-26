const moduleProduct = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    reviews: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  return Product;
};

module.exports = moduleProduct;