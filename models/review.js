'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    mark: DataTypes.DECIMAL
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};