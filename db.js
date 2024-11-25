const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anshuljain8110:eeeeeeeeeeee@cluster0.7ywbtsi.mongodb.net/pokedex?retryWrites=true&w=majority");

    console.log("Connected to MongoDB Atlas");
  } 
  catch (error) {
    console.error("Error connecting to MongoDB:");
  }
};

module.exports = connect;
