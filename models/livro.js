'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  livro.init({
    autorId: DataTypes.STRING,
    titulo: DataTypes.STRING,
    editora: DataTypes.STRING,
    data_publicacao: DataTypes.DATE,
    preco: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'livro',
  });
  return livro;
};