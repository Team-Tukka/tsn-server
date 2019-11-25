import Sparepart from './models/Sparepart';

const sparepartResolvers = {
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
  },
  Mutation: {
    // Mutation til at oprette en ny reservedele
    addSparepart: async (parent, sparepart) => {
      const newSparepart = await new Sparepart({
        itemNo: sparepart.itemNo,
        name: sparepart.name,
        price: sparepart.price,
        productId: sparepart.productId,
        sparepartCategory: sparepart.sparepartCategory
      });
      if (!newSparepart) {
        throw new Error('Reservedelen kunne ikke oprettes!');
      }
      return newSparepart.save();
    }
  }
};
module.exports = sparepartResolvers;
