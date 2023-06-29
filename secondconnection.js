const asyncHandler = require("express-async-handler");
const SecondModel = require("../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(400)
        throw new Error("All Fields are Mandatory!!!");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const create = await SecondModel.create({name,email,password:hashedPassword});
    res.json({create});
})

const login = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All Fields are Mandatory!!!");
    }
    const user = await SecondModel.findOne({email});
    if(user==email){
        res.status(400)
        throw new Error("User Exist");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const correctpassword = await bcrypt.compare(password,hashedPassword);
    if(!correctpassword){
        res.status(400);
        throw new Error("Wrong Password");
    }
    const userexist = await SecondModel.findOne({email});
    if(userexist && password){
        const accesstoken = jwt.sign({
            user:{
                name:userexist.name,
                email:userexist.email
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"120m"})
    res.json({name:userexist.name,email:userexist.email,accesstoken});    
    }
    else{
        throw new Error("User not Available");
    }
})

module.exports = {register,login};