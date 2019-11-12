import { gql } from 'apollo-server-express';

const sparepartTypeDef = gql`
  type Sparepart {
    _id: ID
    itemNo: String!
    name: String!
    price: Int!
    productId: String
    sparepartCategory: String
  }

  extend type Query {
    getSpareparts: [Sparepart]
  }
`;

module.exports = sparepartTypeDef;
