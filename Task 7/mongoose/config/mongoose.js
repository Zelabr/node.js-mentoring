const mongoose = require("mongoose");
const dbAddress = 'mongodb://localhost/task7';
const connectMongo = () => {
    mongoose.connect(dbAddress, err => {
        if(err) {
            console.log(err.message);
            return;
        }
    });
    return mongoose.connection;
}

module.exports = connectMongo();