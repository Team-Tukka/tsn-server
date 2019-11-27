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
    getSparepartById: async (_, args) => {
      try {
        return await Sparepart.findById(args._id);
      } catch (error) {
        throw new Error('Reservedelen findes ikke!');
      }
    }
  },
  Mutation: {
    // Mutation til at oprette en ny reservedel
    addSparepart: async (_, sparepart) => {
      const newSparepart = await new Sparepart({
        itemNo: sparepart.itemNo,
        name: sparepart.name,
        price: sparepart.price,
        priceVAT: (sparepart.price * 1.25).toFixed(2),
        scooterId: sparepart.scooterId,
        categoryId: sparepart.categoryId
      });
      if (!newSparepart) {
        throw new Error('Reservedelen kunne ikke oprettes!');
      }
      return newSparepart.save();
    },
    // Mutation til at opdatere en reservedel ud fra dens id
    updateSparepartById: async (_, { _id, input }) => {
      try {
        if (input.price) {
          input.priceVAT = input.price * 1.25;
        }
        return await Sparepart.findOneAndUpdate({ _id }, input, { new: true });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    },
    // Mutation til at slette en reservedel ud fra dens id
    deleteSparepartById: async (_, args) => {
      try {
        return await Sparepart.findOneAndDelete({ _id: args._id });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    }
  }
};
module.exports = sparepartResolvers;
