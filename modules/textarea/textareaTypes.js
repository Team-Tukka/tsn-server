import { gql } from 'apollo-server-express';

const textareaTypeDefs = gql`
  type Textarea {
    _id: ID
    text: String!
  }
  input TextareaInput {
    text: String!
  }
  extend type Query {
    getTextareas: [Textarea]
    getTextareaById(_id: ID!): Textarea
  }
  extend type Mutation {
    addTextarea(text: String!): Textarea
    updateTextareaById(_id: ID!, input: TextareaInput): Textarea
  }
`;
module.exports = textareaTypeDefs;
