import { gql } from 'apollo-server-express';

const subCategoryTypeDefs = gql`
  type SubCategory {
    _id: ID
    name: String!
    categoryId: String!
    imagePath: String
  }
  input SubCategoryIn {
    name: String
  }
  input SubCategoryInForId {
    _id: ID!
  }

  extend type Query {
    getSubCategories: [SubCategory]
    getSubCategoryById(_id: ID!): SubCategory
    getSubCategoriesByIds(input: [SubCategoryInForId]): [SubCategory]
    getSubCategoriesByCategoryId(categoryId: String!): [SubCategory]
  }

  extend type Mutation {
    addSubCategory(
      name: String!
      categoryId: String!
      imagePath: String
    ): SubCategory
    updateSubCategoryById(_id: ID!, input: SubCategoryIn): SubCategory
    deleteSubCategoryById(_id: ID!): SubCategory
  }
`;

module.exports = subCategoryTypeDefs;
