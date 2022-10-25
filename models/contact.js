'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contact.init({
    salutation: DataTypes.STRING,
    fname: DataTypes.STRING,
    mname: DataTypes.STRING,
    lname: DataTypes.STRING,
    workphone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    workemail: DataTypes.STRING,
    persemail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};