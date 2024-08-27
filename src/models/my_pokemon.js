'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MyPokemon extends Model {}

  MyPokemon.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pokemonId: DataTypes.INTEGER,

      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      nickname: DataTypes.STRING,
      renameCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'MyPokemon',
      tableName: 'myPokemon',
    },
  )
  return MyPokemon
}
