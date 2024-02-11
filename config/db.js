const mongoose = require('mongoose');

const db = async() => {
    try{
        await mongoose.connect(process.env.MOnGO_URL)
        console.log("Connected");
    }
    catch(error){
        console.log(error);
    }
}
module.exports = db;