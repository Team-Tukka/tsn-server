import Textarea from './models/Textarea';

const textareaResolvers = {
  Query: {
    getTextareas: async () => {
      // Query til at hente alle tekstfelter
      const doc = await Textarea.find({});
      // Hvis der er 0 tekstfelter i databasen, så smides en fejl
      if (doc.length === 0) {
        throw new Error('Ingen tekstfelter fundet!');
      } else {
        return doc;
      }
    },

    getTextareaById: async (root, args, context, info) => {
      return await Textarea.findById(args._id);
    }
  },
  Mutation: {
    // Mutation til at oprette et nyt produkt
    addTextarea: async (parent, textarea) => {
      const newTextarea = await new Textarea({
        text: textarea.text
      });
      if (!newTextarea) {
        throw new Error('Textfeltet kunne ikke oprettes!');
      } else {
        return newTextarea.save();
      }
    },
    // Mutation til at opdatere et tekstfelt efter id
    updateTextareaById: async (root, { _id, input }) => {
      //Hvis man ikke indtaster den nye tekst, så smides en fejl
      if (!input) {
        throw new Error('Fejl i opdateret tekst!');
      } else {
        return await Textarea.findOneAndUpdate({ _id }, input, { new: true });
      }
    }
  }
};
module.exports = textareaResolvers;
