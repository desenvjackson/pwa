const { buildSchema } = require("graphql");

const schema = buildSchema(`
type User {
    _id: String
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String   
    greeting: String
    friends:[Friends]
}

type Friends {
    _id: String
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String    
  }
 
type Query {
    list(name: String): [User]
}

`);

module.exports = schema;
