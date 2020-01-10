import { gql } from 'apollo-server-express';

const ScooterTypeDefs = gql`
  type Scooter {
    _id: ID
    name: String!
    price: Float!
    priceVAT: Float
    sku: String
    tags: [String]
    tagsArray: [String]
    brand: String
    description: String
    itemNo: String!
    categoryId: String
    imagePath: String
  }
  input ScooterIn {
    _id: ID
    name: String
    price: Float
    priceVAT: Float
    sku: String
    tags: String
    brand: String
    description: String
    itemNo: String
    categoryId: String
    imagePath: String
  }

  extend type Query {
    getScooters: [Scooter]
    getScooterById(_id: ID!): Scooter
  }

  extend type Mutation {
    addScooter(
      name: String!
      price: Float!
      sku: String
      tags: String
      brand: String
      description: String
      itemNo: String!
      categoryId: String
      imagePath: String!
    ): Scooter
    updateScooterById(_id: ID!, input: ScooterIn): Scooter
    deleteScooterById(_id: ID!): Scooter
  }
`;

module.exports = ScooterTypeDefs;
