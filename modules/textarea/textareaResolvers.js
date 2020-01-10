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
    // Query til at hente ét tekstfelt ud fra dets ID
    getTextareaById: async (_, args) => {
      return await Textarea.findById(args._id);
    }
  },
  Mutation: {
    // Mutation til at oprette et nyt produkt
    addTextarea: async (_, textarea) => {
      const newTextarea = await new Textarea({
        text: textarea.text
      });
      if (!newTextarea) {
        throw new Error('Tekstfeltet kunne ikke oprettes!');
      } else {
        return newTextarea.save();
      }
    },
    // Mutation til at opdatere et tekstfelt efter ID
    updateTextareaById: async (_, { _id, input }) => {
      // Hvis man ikke indtaster den nye tekst, så smides en fejl
      if (!input) {
        throw new Error('Fejl i opdateret tekst!');
      } else {
        return await Textarea.findOneAndUpdate({ _id }, input, { new: true });
      }
    }
  }
};

module.exports = textareaResolvers;
