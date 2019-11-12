import Product from "./models/Product";

const productResolvers = {
  Query: {
    // Query til at hente alle produkter
    getProducts: async () => {
      const doc = await Product.find({});
      // Hvis der er 0 produkter i databasen, så smider den en fejl
      if (doc.length === 0) {
        throw new Error("Ingen produkter fundet!");
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
        sku: product.sku,
        tags: product.tags,
        brand: product.brand,
        description: product.description,
        itemNo: product.itemNo,
        categoryId: product.categoryId,
        subCategoryId: product.subCategoryId
      });
      return newProduct.save();
    }
  }
};
module.exports = productResolvers;
