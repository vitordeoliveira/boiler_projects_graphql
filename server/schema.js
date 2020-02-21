const { GraphQLObjectType, GraphQLSchema, GraphQLList } = require("graphql");

const Mutations = require("./controllers/Mutations");
const Queries = require("./controllers/Queryes");

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: Queries
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: Mutations
});

module.exports = new GraphQLSchema({
  query,
  mutation
});
