const mongoose = require('mongoose')
const colors = require('colors');

const connectDB = ()=>{
    mongoose
    .connect("mongodb+srv://thahirathasni:1820@cluster0.oapcruh.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("connect to mongoDB".magenta))
    .catch((err) => console.error("mongoDB connection error:", err));


}
module.exports = connectDB;