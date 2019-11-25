import { gql } from 'apollo-server-express';

const sparepartTypeDefs = gql`
  type Sparepart {
    _id: ID
    itemNo: String!
    name: String!
    price: Float!
    productId: String
    sparepartCategory: String
  }

  extend type Query {
    getSpareparts: [Sparepart]
  }

  extend type Mutation {
    addSparepart(
      itemNo: String!
      name: String!
      price: Float!
      productId: String
      sparepartCategory: String
    ): Sparepart
  }
`;

module.exports = sparepartTypeDefs;
