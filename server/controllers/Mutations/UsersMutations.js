const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const { Users } = require("../../../models");
const { UsersType } = require("../Types");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const UsersMutations = {
  register: {
    type: GraphQLString,
    args: {
      username: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      age: { type: GraphQLInt }
    },
    async resolve(parentValue, args) {
      const newPass = bcrypt.hashSync(args.password);
      args.password = newPass;

      const user = await Users.create(args);

      payload.password = undefined;

      return (
        "Bearer " +
        jwt.sign({ id: user.id, email: user.email }, "process.env.SECRET", {
          expiresIn: "50000"
        })
      );
    }
  },

  login: {
    type: GraphQLString,
    args: {
      username: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) }
    },

    async resolve(dsad, { username, password }) {
      const user = await Users.findOne({
        where: {
          username
        }
      });

      if (!user) {
        throw new Error("No user with that username");
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        throw new Error("Incorrect password");
      }

      return (
        "Bearer " +
        jwt.sign({ id: user.id, email: user.email }, "process.env.SECRET", {
          expiresIn: "1d"
        })
      );
    }
  }
};

module.exports = UsersMutations;
