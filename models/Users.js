const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String },
  password: { type: String }
});

usersSchema.methods.validatePassword = function(pw) {
    return (this.password === pw);
};

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;