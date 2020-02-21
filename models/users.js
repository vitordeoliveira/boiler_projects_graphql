"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {}
  );
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
