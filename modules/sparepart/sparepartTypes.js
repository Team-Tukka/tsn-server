import { gql } from 'apollo-server-express';

const sparepartTypeDefs = gql`
  type Sparepart {
    _id: ID
    itemNo: String!
    name: String!
    price: Float!
    priceVAT: Float
    categoryId: String
    subCategoryId: String
  }
  input SparepartIn {
    itemNo: String
    name: String
    price: Float
    categoryId: String
    subCategoryId: String
  }

  extend type Query {
    getSpareparts: [Sparepart]
    getSparepartById(_id: ID!): Sparepart
    getSparepartsBySubCategory(subCategoryId: String!): [Sparepart]
  }

  extend type Mutation {
    addSparepart(
      itemNo: String!
      name: String!
      price: Float!
      priceVAT: Float
      categoryId: String
      subCategoryId: String
    ): Sparepart
    updateSparepartById(_id: ID!, input: SparepartIn): Sparepart
    deleteSparepartById(_id: ID!): Sparepart
  }
`;

module.exports = sparepartTypeDefs;
