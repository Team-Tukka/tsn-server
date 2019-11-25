import { gql } from 'apollo-server-express';

const sparepartTypeDefs = gql`
  type Sparepart {
    _id: ID
    itemNo: String!
    name: String!
    price: Float!
    priceVAT: Float
    scooterId: String
    sparepartCategory: String
  }

  extend type Query {
    getSpareparts: [Sparepart]
    getSparepartById(_id: ID!): Sparepart
  }

  extend type Mutation {
    addSparepart(
      itemNo: String!
      name: String!
      price: Float!
      priceVAT: Float
      scooterId: String
      sparepartCategory: String
    ): Sparepart
  }
`;

module.exports = sparepartTypeDefs;
