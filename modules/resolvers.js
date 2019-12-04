import userResolvers from './user/userResolvers';
import scooterResolvers from './scooter/scooterResolvers';
import sparepartResolvers from './sparepart/sparepartResolvers';
import textareaResolvers from './textarea/textareaResolvers';
import mailResolvers from './mail/mailResolvers';

const resolvers = [
  userResolvers,
  scooterResolvers,
  sparepartResolvers,
  textareaResolvers,
  mailResolvers
];
module.exports = resolvers;
