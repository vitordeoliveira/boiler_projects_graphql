const express = require("express");
const schema = require("./server/schema.js");
// const expressGraphQL = require("express-graphql");

// config
require("dotenv").config({ path: "./config/.env" });
require("./database/models");
const app = express();
app.use(express.json());

const auth = require("./server/middleware/Auth");

// app.use(
//   "/graphql",
//   auth,
//   expressGraphQL(req => ({
//     schema,
//     graphiql: true,
//     context: {
//       user: req.user
//     }
//   }))
// );

app.listen(process.env.PORT, () => {
  console.log("Listen on port:" + process.env.PORT);
});
