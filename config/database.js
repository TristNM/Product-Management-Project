const mongoose = require('mongoose');
module.exports.connect = async () => {
    try{
        await mongoose.connect(process.env.DatabaseMongoURI);
            console.log("Connected to database")
    }
     catch (error) {
        console.log(error)}
}