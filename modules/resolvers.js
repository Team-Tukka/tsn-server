import userResolvers from './user/userResolvers';
import productResolvers from './product/productResolvers';
import sparepartResolvers from './sparepart/sparepartResolvers';

const resolvers = [userResolvers, productResolvers, sparepartResolvers];
module.exports = resolvers;
