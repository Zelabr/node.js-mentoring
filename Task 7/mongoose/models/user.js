const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    lastName: String,
    email: String
});
const User = mongoose.model("User", userScheme);

module.exports = User;