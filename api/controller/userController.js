import asyncHandler from "../middleware/asycnHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import createToken from "../utils/createToken.js";
export const createUser = asyncHandler(async(req,res)=>{
    try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            res.status(400)
            throw new Error("Please fill all the fields")
        }
        const user = await User.findOne({email})
        if (user) {
            res.status(400)
            throw new Error("User already exists")
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({name, email, password : hashedPassword})
        if (newUser) {
            await newUser.save()
            createToken(res, newUser._id)
            res.status(201).json({success : true, newUser})
        }else{
            res.status(400)
            throw new Error("Invalid user data")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const loginUser = asyncHandler(async(req,res)=>{
    try {
        const{email, password} = req.body;
        if (!email || !password) {
            res.status(400)
            throw new Error("Please fill all the fields")
        }
        const user = await User.findOne({email})
        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if (isPasswordMatch) {
                createToken(res, user._id)
                res.status(200).json({success : true, user})
            }else{
                res.status(400)
                throw new Error("Invalid email or password")
            }
        }else{
            res.status(400)
            throw new Error("User does not exist")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const logoutUser = asyncHandler(async(req,res)=>{
    try {
        res.cookie("jwt", "", {
            httpOnly : true,
            expires : new Date(0)
        })
        res.status(200).json({message : "User logged out"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getUserProfile = asyncHandler(async(req, res)=>{
    try {
        const user = await User.findById(req.user._id)
        if (user) {
            res.status(200).json({success : true, user})
        }else{
            res.status(400)
            throw new Error("User not found")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json({success : true, users})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const deleteUser = asyncHandler(async(req, res)=>{
    try {
        const user  = await User.findByIdAndDelete(req.params.id)
      res.status(200).json({success : true, message : "User deleted"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const updateUser = asyncHandler(async(req,res)=>{
    try {
        const user = await User.findById(req.user._id)
        if (user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.password = req.body.password || user.password

            await user.save()
            res.status(200).json({success : true, user})
        }else{
            res.status(400)
            throw new Error("User not found")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})


export const updateUserByAdmin = asyncHandler(async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            user.isAdmin = req.body.isAdmin || user.isAdmin
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email

            await user.save()
            res.status(200).json({success : true, user})
        }else{
            res.status(400)
            throw new Error("User not found")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getUserById = asyncHandler(async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({success : true, user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})