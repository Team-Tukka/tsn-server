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
    getScooterById: async (_, args) => {
      try {
        var docTags = '';
        const doc = await Scooter.findById(args._id);
        for (let i = 0; i < doc.tags.length; i++) {
          docTags += doc.tags[i].replace(/,/g, ' ') + ' ';
        }
        doc.tags = docTags;
        return doc;
      } catch (error) {
        throw new Error('Elscooteren findes ikke!');
      }
    }
  },
  Mutation: {
    // Mutation til at oprette en ny elscooter
    addScooter: async (_, scooter) => {
      const newScooter = await new Scooter({
        name: scooter.name,
        price: scooter.price,
        priceVAT: (scooter.price * 1.25).toFixed(2),
        sku: scooter.sku,
        tags: scooter.tags.split(' '),
        tagsArray: scooter.tags.split(' '),
        brand: scooter.brand,
        description: scooter.description,
        itemNo: scooter.itemNo,
        categoryId: scooter.categoryId,
        imagePath: scooter.imagePath
      });
      if (!newScooter) {
        throw new Error('Elscooteren kunne ikke oprettes!');
      } else {
        return newScooter.save();
      }
    },
    // Mutation til at opdatere en elscooter ud fra dens id
    updateScooterById: async (_, { _id, input }) => {
      try {
        if (input.price) {
          input.priceVAT = (input.price * 1.25).toFixed(2);
        }
        if (input.tags) {
          input.tags = input.tags.split(' ');
          input.tagsArray = input.tags;
        }
        return await Scooter.findOneAndUpdate({ _id }, input, { new: true });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    },
    // Mutation til at slette en elscooter ud fra dens id
    deleteScooterById: async (_, args) => {
      try {
        return await Scooter.findOneAndDelete({ _id: args._id });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    }
  }
};
module.exports = scooterResolvers;
