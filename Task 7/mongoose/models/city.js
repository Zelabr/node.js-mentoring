import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cityScheme = new Schema({
    name: String,
    country: String,
    capital: { type: String, required: true },
    location: Array(Number)
});
const City = mongoose.model("City", cityScheme);

export default City;