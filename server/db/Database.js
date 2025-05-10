const mongoose = require("mongoose");
// const connectDB = require('../.env')

require('dotenv').config({ path: '../config/.env' });

// const connectDB = 


const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/LIMAT-TEST-SERIES", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB database connected successfully");
      // db.Questionbank.find({})

    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB`);
    });
};

module.exports = connectDatabase;



