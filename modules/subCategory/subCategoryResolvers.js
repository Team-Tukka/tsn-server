import SubCategory from './models/SubCategory';

const subCategoryResolvers = {
  Query: {
    // Query til at hente alle underkategorier
    getSubCategories: async () => {
      const doc = await SubCategory.find({});
      // Hvis der ingen underkategorier findes i systemet, angives der en fejl
      if (doc.length === 0) {
        throw new Error('Ingen underkategorier fundet!');
      } else {
        return doc;
      }
    },
    // Resolver som henter en specifik underkategori ud fra _id-argumentet
    getSubCategoryById: async (_, args) => {
      try {
        return await SubCategory.findById(args._id);
      } catch (error) {
        throw new Error('Underkategorien findes ikke...');
      }
    },
    // Resolver som tager imod et array af _id-felter og henter dokumentet for ID'erne
    getSubCategoriesByIds: async (_, args) => {
      try {
        return await SubCategory.find({ _id: { $in: args.input } });
      } catch (error) {
        throw new Error('Underkategorierne findes ikke...');
      }
    },
    getSubCategoriesByCategoryId: async (_, args) => {
      try {
        return await SubCategory.find({ categoryId: args.categoryId });
      } catch (error) {
        throw new Error('Underkategorierne kunne ikke findes...');
      }
    }
  },
  Mutation: {
    // Mutation til at oprette en ny underkategori
    addSubCategory: async (_, subCategory) => {
      const newSubCategory = await new SubCategory({
        name: subCategory.name,
        categoryId: subCategory.categoryId,
        imagePath: subCategory.imagePath
      });
      if (!newSubCategory) {
        throw new Error('Underkategorien kunne ikke oprettes!');
      } else {
        return newSubCategory.save();
      }
    },
    // Mutation til at opdatere en underkategori ud fra dens ID
    updateSubCategoryById: async (_, { _id, input }) => {
      try {
        return await SubCategory.findOneAndUpdate({ _id }, input, {
          new: true
        });
      } catch (error) {
        throw new Error('Der skete en fejl!');
      }
    },
    // Mutation til at slette en underkategori ud fra dens ID
    deleteSubCategoryById: async (_, args) => {
      try {
        return await SubCategory.findOneAndDelete({ _id: args._id });
      } catch (error) {
        throw new Error('Der skete en fejl!');
      }
    }
  }
};

module.exports = subCategoryResolvers;
