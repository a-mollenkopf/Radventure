const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Email address is required.",
    unique: true,
  },
  password: { type: String, trim: true, required: "Password is required." },

  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

userSchema.methods.validatePassword = function (pw) {
  return this.password === pw;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
