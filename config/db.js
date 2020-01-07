const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Skaber forbindelse til databasen gennem Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB forbundet!');
  } catch (err) {
    console.error(err.message);
    // Afslutter processen pga. fejl
    process.exit(1);
  }
};

module.exports = connectDB;
