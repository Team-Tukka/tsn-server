import { gql } from 'apollo-server-express';
import userTypeDefs from './user/userTypes';
import productTypeDefs from './product/productTypes';
import sparepartTypeDefs from './sparepart/sparepartTypes';
import textareaTypeDefs from './textarea/textareaTypes';

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

const typeDefs = [
  linkSchema,
  userTypeDefs,
  productTypeDefs,
  sparepartTypeDefs,
  textareaTypeDefs
];

module.exports = typeDefs;
