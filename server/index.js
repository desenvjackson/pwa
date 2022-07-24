const express = require("express");
var fs = require("fs");
var morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schemas = require("./graphql/schema.ts");
const resolver = require("./graphql/resolver.ts");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(morgan("combined"));

const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemas,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`GraphQL Server Now Running in ${PORT}`));
