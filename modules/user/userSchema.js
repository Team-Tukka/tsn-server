import { gql } from "apollo-server-express";

const userTypeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    mail: String!
    password: String!
    created: String
    lastLogin: String
    adminRole: Boolean
    address: String!
    zipCode: Int!
    phone: Int
  }

  extend type Query {
    getUsers: [User]
    me: User
  }

  extend type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      mail: String!
      password: String!
      adminRole: Boolean
      address: String!
      zipCode: Int!
      phone: Int
    ): User
  }
`;
module.exports = userTypeDefs;
