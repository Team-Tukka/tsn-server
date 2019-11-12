import Product from "./models/Product";

const productResolvers = {
  Query: {
    getProducts: async () => await Product.find({})
  }
};
module.exports = productResolvers;
