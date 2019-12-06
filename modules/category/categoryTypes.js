import { gql } from 'apollo-server-express';

const CategoryTypeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }
  input CategoryIn {
    name: String
  }
  input CategoryInForId {
    _id: ID!
  }

  extend type Query {
    getCategories: [Category]
    getCategoryById(_id: ID!): Category
    getCategoriesById(input: [CategoryInForId]): [Category]
  }

  extend type Mutation {
    addCategory(name: String!): Category
    updateCategoryById(_id: ID!, input: CategoryIn): Category
    deleteCategoryById(_id: ID!): Category
  }
`;

module.exports = CategoryTypeDefs;
