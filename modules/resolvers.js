import userResolvers from './user/userResolvers';
import productResolvers from './product/productResolvers';
import sparepartResolvers from './sparepart/sparepartResolvers';
import textareaResolvers from './textarea/textareaResolvers';

const resolvers = [
  userResolvers,
  productResolvers,
  sparepartResolvers,
  textareaResolvers
];
module.exports = resolvers;
