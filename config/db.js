const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
//cloud
const uri = process.env.mongoDB_URI;
// const uri ="mongodb+srv://anjaneyacharyregoju:GZx0ONLlzY3FBgBW@sampledb.0a8taio.mongodb.net/"
// const uri ="mongodb://localhost:27017/"
async function connectDB() {

    try {
        await mongoose.connect(uri, {dbName:"simple_todo_db"})
        console.log("database connected successfully");


    } catch (error) {
        console.log(error.message)
        
    }
    
}
module.exports= {connectDB}