const User = require("../models/user.models");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../helpers/email");


const register = async(req, res) => {
    const {firstName,lastName,email,password} = req.body;
    try{
        if(!firstName|| !lastName|| !email|| !password)
            return res.status(400).json({message: 'All fields are required'});
    const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: 'User already exists'});
          }

          // Generating email verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const verificationTokenExpires = Date.now() + 60 * 60 * 1000;


//TO DO:Add password hashing here using bcrypt.hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      verificationToken :verificationToken,
      verificationTokenExpires :verificationTokenExpires,
      isVerified : false 
    });
   const verificationLink =
      `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;

      await sendEmail(
        newUser.email,
        "Verify your email",
        `Please click the link to verify your email: ${verificationLink}`
      );

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
   }   catch(e){
    console.log(e);
    return res.status(500).json({message: 'Internal server error'});   
}
};


const login = async(req, res) => {
    const {email,password} = req.body;
    try{
        if(!email || !password)
            return res.status(400).json({message: 'All fields are required'});
    const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: 'User not found'});
          }
          
          if (!user.isVerified) {
      return res.status(400).json({ message: "User is not verified" });
    }
//TODO : Add password compare here using bcrypt.compare     
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );          
    return res.status(200).json({message: 'login successful', token: token});
 } catch(e){
    console.log(e);
    return res.status(500).json({message: 'Internal server error'});   
}
};


const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
if (!token) {
      return res.status(400).json({
        message: "Verification token is required",
      });
    }

    const user = await User.findOne({
      verificationToken: token,
    });
    if (!user) {
      return res.status(400).json({
        message: "Invalid verification token",
      });
    }

    if (user.verificationTokenExpires < Date.now()) {
      return res.status(400).json({
        message: "Verification token has expired",
      });
    }

    
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpires = null;
    

    await user.save();

    return res.status(200).json({
      message: "Email verified successfully",
    });
} catch (e) {
    console.log(e);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};





module.exports = {register, login, verifyEmail};
