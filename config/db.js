const mongoose = require("mongoose");
const config = require("config");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
  }
};

const db = config.get("mongoURI");

module.exports = connectDB;