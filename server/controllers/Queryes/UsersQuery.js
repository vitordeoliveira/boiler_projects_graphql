const { UsersType } = require("../Types");
const { GraphQLList } = require("graphql");
const { Users } = require("../../../database/models");
const UsersQuery = {
  me: {
    type: UsersType,
    async resolve(_, __, { user }) {
      if (!user) {
        throw new Error("You are not authenticated!");
      }
      // user is authenticated
      return await Users.findByPk(user.id);
    }
  },
  users: {
    type: new GraphQLList(UsersType),
    async resolve(_, __, { user }) {
      if (!user) {
        throw new Error("You are not authenticated!");
      }
      // user is authenticated
      return await Users.findAll();
    }
  }
};

module.exports = UsersQuery;
