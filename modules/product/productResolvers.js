import Product from './models/Product';

const productResolvers = {
  Query: {
    // Query til at hente alle produkter
    getProducts: async () => {
      const doc = await Product.find({});
      // Hvis der er 0 produkter i databasen, så smider den en fejl
      if (doc.length === 0) {
        throw new Error('Ingen produkter fundet!');
      } else {
        return doc;
      }
    }
  },
  Mutation: {
    // Mutation til at oprette et nyt produkt
    addProduct: async (parent, product) => {
      const newProduct = await new Product({
        name: product.name,
        price: product.price,
        sku: product.sku,
        tags: product.tags,
        brand: product.brand,
        description: product.description,
        itemNo: product.itemNo,
        categoryId: product.categoryId,
        subCategoryId: product.subCategoryId
      });
      if (!newProduct) {
        throw new Error('Produktet kunne ikke oprettes!');
      } else {
        return newProduct.save();
      }
    },
    updateProductById: async (root, { _id, input }) => {
      return await Product.findOneAndUpdate({ _id }, input, { new: true });
    },
    deleteProductById: async (root, args, context, info) => {
      return await Product.findOneAndDelete({ _id: args._id });
    }
  }
};
module.exports = productResolvers;
