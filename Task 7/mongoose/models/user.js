import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    lastName: String,
    email: String
});
const User = mongoose.model("User", userScheme);

export default User;