import { gql } from 'apollo-server-express';

const MailTypeDefs = gql`
  type Mail {
    _id: ID
    firstName: String!
    lastName: String!
    title: String!
    email: String!
    phone: Int
    message: String!
  }
  input MailIn {
    _id: ID
    firstName: String!
    lastName: String!
    title: String!
    email: String!
    phone: Int
    message: String!
  }

  extend type Query {
    getMails: [Mail]
  }

  extend type Mutation {
    addMail(
      firstName: String!
      lastName: String!
      title: String!
      email: String!
      phone: Int
      message: String!
    ): Mail
    deleteMailById(_id: ID!): Mail
  }
`;

module.exports = MailTypeDefs;
