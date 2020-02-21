const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const Types = {
  UsersType: new GraphQLObjectType({
    name: "Users",
    fields: () => ({
      id: { type: GraphQLString },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      email: { type: GraphQLString },
      age: { type: GraphQLInt }
    })
  })
};

module.exports = Types;
