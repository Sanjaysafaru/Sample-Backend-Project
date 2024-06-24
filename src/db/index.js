const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017/Sample-Project"
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    // console.log(connectionInstance);
  } catch (error) {
    console.log("MONGODB connection Failed ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
