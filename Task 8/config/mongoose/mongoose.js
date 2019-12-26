import mongoose from "mongoose";

const dbAddress = 'mongodb://localhost/task7';

const connectMongo = () => {
    mongoose.connect(dbAddress, err => {
        if (err) {
            console.log(err.message);
            return;
        }
    });
    return mongoose.connection;
}

export const mongoConnection = connectMongo();