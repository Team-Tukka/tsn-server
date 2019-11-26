import Scooter from './models/Scooter';

const scooterResolvers = {
  Query: {
    // Query til at hente alle elscootere
    getScooters: async () => {
      const doc = await Scooter.find({});
      // Hvis der er 0 elscootere i databasen, så smider den en fejl
      if (doc.length === 0) {
        throw new Error('Ingen elscootere fundet!');
      } else {
        return doc;
      }
    },
    getScooterById: async (root, args, context, info) => {
      try {
        const doc = await Scooter.findById(args._id);
        return doc;
      } catch (error) {
        throw new Error('Elscooteren findes ikke!');
      }
    }
  },
  Mutation: {
    // Mutation til at oprette en ny elscooter
    addScooter: async (parent, scooter) => {
      const newScooter = await new Scooter({
        name: scooter.name,
        price: scooter.price,
        priceVAT: (scooter.price * 1.25).toFixed(2),
        sku: scooter.sku,
        tags: scooter.tags.split(' '),
        brand: scooter.brand,
        description: scooter.description,
        itemNo: scooter.itemNo,
        categoryId: scooter.categoryId,
        subCategoryId: scooter.subCategoryId
      });
      if (!newScooter) {
        throw new Error('Elscooteren kunne ikke oprettes!');
      } else {
        return newScooter.save();
      }
    },
    // Mutation til at opdatere en elscooter ud fra dens id
    updateScooterById: async (root, { _id, input }) => {
      try {
        if (input.price) {
          input.priceVAT = input.price * 1.25;
        }
        if (input.tags) {
          input.tags = input.tags.split(' ');
        }
        return await Scooter.findOneAndUpdate({ _id }, input, { new: true });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    },
    // Mutation til at slette en elscooter ud fra dens id
    deleteScooterById: async (root, args, context, info) => {
      try {
        return await Scooter.findOneAndDelete({ _id: args._id });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    }
  }
};
module.exports = scooterResolvers;
