const express = require("express");
const schema = require("./server/schema");
const expressGraphQL = require("express-graphql");
const bodyparser = require("body-parser");
const jwt = require("express-jwt");

// config
require("dotenv").config({ path: "./config/.env" });
require("./models");
const app = express();
app.use(express.json());

const auth = require("./middleware/Auth");

app.use(
  "/graphql",
  auth,
  expressGraphQL(req => ({
    schema,
    graphiql: true,
    context: {
      user: req.user
    }
  }))
);

app.listen(process.env.PORT, () => {
  console.log("Listen on port:" + process.env.PORT);
});
