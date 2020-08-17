const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },

  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trips",
    },
  ],
});

userSchema.methods.validatePassword = function(pw) {
    return (this.password === pw);
};

const User = mongoose.model("User", userSchema);
module.exports = User;