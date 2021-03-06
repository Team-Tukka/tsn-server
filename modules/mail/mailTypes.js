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
    created: String
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
    getMailById(_id: ID!): Mail
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
