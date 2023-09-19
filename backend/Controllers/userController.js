const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const { decrypt } = require('dotenv');

const createToken = (_id)=>{
    const jwtkey = process.env.JWT_SECRET_KEY;
    
    return jwt.sign({_id},jwtkey,{expiresIn:'3d'});
};


const registerUser = async (req,res)=>{
    console.log('req aayi')
    try{
    const {name,email,password,avtImg} = req.body;
    let user = await userModel.findOne({email});
        if(user){ 
        console.log('user pahle se hi hai')
        return res.status(400).json('user with this email already exist');}
        if(!name || !email || !password){
          console.log('sabkuch de')
          return res.status(400).json('All fields are required');}
        if(!validator.isEmail(email)) {
            console.log('email de')
        return res.status(400).json('Email must be a valid email');}
        if(!validator.isStrongPassword(password)){
        console.log('strong password de')
        return res.status(400).json('password must be a strong password');}

    user = new userModel({name,email,password,avtImg});
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);
    await user.save();

    const token = createToken(user._id);
    res.status(200).json({_id:user._id,name,email,token,avtImg});
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try{
        let user = await userModel.findOne({email});
        if(!user) return res.status(400).json('Invalid email or password!');
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword)
             return res.status(400).json('Invalid email or password!');
        const token = createToken(user._id);
        console.log('get users req aayi')
        res.status(200).json({_id:user._id,name:user.name,email,token,avtImg:user.avtImg});

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const findUser = async (req,res)=>{
    const userId = req.params.userId;
    try {
        const user = await userModel.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getUsers = async (req,res)=>{
    try {
        let users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



module.exports = {registerUser,loginUser,findUser,getUsers};