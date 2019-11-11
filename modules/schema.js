import { gql } from "apollo-server-express";
import userTypeDefs from "./user/userTypes";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const typeDefs = [linkSchema, userTypeDefs];

module.exports = typeDefs;
