import Category from './models/Category';

const categoryResolvers = {
  Query: {
    // Query til at hente alle kategorier
    getCategories: async () => {
      const doc = await Category.find({});
      // Hvis der ingen kategorier findes i systemet, angives der en fejl
      if (doc.length === 0) {
        throw new Error('Ingen kategorier fundet!');
      } else {
        return doc;
      }
    },
    // Resolver som henter en specifik kategori ud fra _id-argumentet
    getCategoryById: async (_, args) => {
      try {
        return await Category.findById(args._id);
      } catch (error) {
        throw new Error('Kategorien findes ikke...');
      }
    },
    // Resolver som tager imod et array af _id-felter og henter dokumentet for id'erne
    getCategoriesByIds: async (_, args) => {
      try {
        return await Category.find({ _id: { $in: args.input } });
      } catch (error) {
        throw new Error('Kategorierne findes ikke...');
      }
    }
  },
  Mutation: {
    // Mutation til at oprette en ny kategori
    addCategory: async (_, category) => {
      const newCategory = await new Category({
        name: category.name
      });
      if (!newCategory) {
        throw new Error('Kategorien kunne ikke oprettes');
      } else {
        return newCategory.save();
      }
    },
    // Mutation til at opdatere en kategori ud fra dens id
    updateCategoryById: async (_, { _id, input }) => {
      try {
        return await Category.findOneAndUpdate({ _id }, input, { new: true });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    },
    // Mutation til at slette en kategori ud fra dens id
    deleteCategoryById: async (_, args) => {
      try {
        return await Category.findOneAndDelete({ _id: args._id });
      } catch (error) {
        throw new Error('Der skete en fejl...');
      }
    }
  }
};

module.exports = categoryResolvers;
