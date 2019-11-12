import { gql } from "apollo-server-express";

const productTypeDefs = gql`
  type Product {
    _id: ID
    name: String!
    sku: String
    tags: [String]
    brand: String
    description: String
    itemNo: String!
    categoryId: String
    subCategoryId: String
  }

  extend type Query {
    getProducts: [Product]
  }

  extend type Mutation {
    addProduct(
      name: String!
      sku: String
      tags: [String]
      brand: String
      description: String
      itemNo: String!
      categoryId: String
      subCategoryId: String
    ): Product
  }
`;
module.exports = productTypeDefs;
