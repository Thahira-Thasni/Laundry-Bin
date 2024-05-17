const { json } = require("body-parser");
const User = require("../model/userSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.register = async (req, res) => {
    console.log(req.body);
    try{
        const {name,emailOrPhone,password}=req.body;
        const user= await User.findOne({emailorphone});
        console.log(user);
        if(user){
           console.log("user already exist");
           res.status(400).json({error:true,message:"user already exist"});
           return; 
        }
        // doing bycript
        const hashedpassword = await bycrypt.hash(password,10);
        //save schema model
        const newUser =new User({
            name,emailOrPhone,password:hashedpassword});
            newUser.save();
            console.log(newUser);
const data ={name:newUser.name,
    emailOrPhone:newUser.emailOrPhone
};
res.status(200).json({error:false,status:true,message:"user registered successfully",data})
        }catch(error){
            console.log("server error",error);
            res.status(500).json({error:true,status:false,massege:"server error"});
        }};

