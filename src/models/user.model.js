const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      fullName: {
        type: String,
      },
      password: {
        type: String,
        required: [true, "Password is required"],
      },
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("User", userSchema);

  module.exports = User