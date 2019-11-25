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
    },
    getSparepartById: async (root, args, context, info) => {
      return await Sparepart.findById(args._id);
    }
  },
  Mutation: {
    // Mutation til at oprette en ny reservedele
    addSparepart: async (parent, sparepart) => {
      const newSparepart = await new Sparepart({
        itemNo: sparepart.itemNo,
        name: sparepart.name,
        price: sparepart.price,
        priceVAT: (sparepart.price * 1.25).toFixed(2),
        scooterId: sparepart.scooterId,
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
