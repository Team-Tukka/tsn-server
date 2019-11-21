import { gql } from 'apollo-server-express';

const productTypeDefs = gql`
  type Product {
    _id: ID
    name: String!
    price: Float!
    sku: String
    tags: [String]
    brand: String
    description: String
    itemNo: String!
    categoryId: String
    subCategoryId: String
  }
  input ProductIn {
    _id: ID
    name: String
    price: Float
    sku: String
    tags: [String]
    brand: String
    description: String
    itemNo: String
    categoryId: String
    subCategoryId: String
  }

  extend type Query {
    getProducts: [Product]
  }

  extend type Mutation {
    addProduct(
      name: String!
      price: Float!
      sku: String
      tags: [String]
      brand: String
      description: String
      itemNo: String!
      categoryId: String
      subCategoryId: String
    ): Product
    updateProductById(_id: ID!, input: ProductIn): Product
    deleteProductById(_id: ID!): Product
  }
`;
module.exports = productTypeDefs;
