import { gql } from "apollo-server-express";

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

import userTypeDefs from "./user/userSchema";

const typeDefs = [linkSchema, userTypeDefs];

module.exports = typeDefs;
