import Mail from './models/Mail';

const mailResolvers = {
  Query: {
    // Query til at hente alle mails
    getMails: async () => {
      const doc = await Mail.find({});
      // Hvis den ingen mails finder i systemet, angives der en fejl
      if (doc.length === 0) {
        throw new Error('Ingen mails fundet!');
      } else {
        return doc;
      }
    },
    // Resolver som henter en specifik mail ud fra _id-argumentet
    getMailById: async (_, args) => {
      try {
        return await Mail.findById(args._id);
      } catch (error) {
        throw new Error('Mailen findes ikke...');
      }
    }
  },
  Mutation: {
    // Mutation til at oprette en ny mail
    addMail: async (_, mail) => {
      const newMail = await new Mail({
        firstName: mail.firstName,
        lastName: mail.lastName,
        title: mail.title,
        email: mail.email,
        phone: mail.phone,
        message: mail.message
      });
      if (!newMail) {
        throw new Error('Beskeden kunne ikke sendes');
      } else {
        return newMail.save();
      }
    },
    // Mutation til at slette en mail ud fra dens id
    deleteMailById: async (_, args) => {
      try {
        return await Mail.findOneAndDelete({ _id: args._id });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    }
  }
};

module.exports = mailResolvers;
