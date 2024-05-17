const mongoose = require('mongoose')
const colors = require('colors');

const connectDB = ()=>{
    mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => console.log("connect to mongoDB".magenta))
    .catch((err) => console.error("mongoDB connection error:", err));


}
module.exports = connectDB;