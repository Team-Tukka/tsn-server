import { gql } from 'apollo-server-express';
import userTypeDefs from './user/userTypes';
import scooterTypeDefs from './scooter/scooterTypes';
import sparepartTypeDefs from './sparepart/sparepartTypes';
import textareaTypeDefs from './textarea/textareaTypes';
import mailTypeDefs from './mail/mailTypes';

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
  scooterTypeDefs,
  sparepartTypeDefs,
  textareaTypeDefs,
  mailTypeDefs
];

module.exports = typeDefs;
