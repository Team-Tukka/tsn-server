import Sparepart from './models/Sparepart';

const sparepartResolver = {
  Query: {
    // Query til at hente alle reservedele
    getSpareparts: async () => {
      const doc = await Sparepart.find({});
      // Hvis der er 0 reservedele i databasen, så smider den en fejl
      if (doc.length === 0) {
        throw new Error('Ingen reservedele fundet!');
      } else {
        return doc;
      }
    }
  }
};
module.exports = sparepartResolver;
