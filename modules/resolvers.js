import userResolvers from './user/userResolvers';
import scooterResolvers from './scooter/scooterResolvers';
import sparepartResolvers from './sparepart/sparepartResolvers';
import textareaResolvers from './textarea/textareaResolvers';

const resolvers = [
  userResolvers,
  scooterResolvers,
  sparepartResolvers,
  textareaResolvers
];
module.exports = resolvers;
