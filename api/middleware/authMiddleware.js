import User from "../models/userModel.js";
import asyncHandler from "./asycnHandler.js";
import jwt from "jsonwebtoken"

export const authenticate = asyncHandler(async(req,res,next)=>{
    let token
    token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId)
            next()
            
        } catch (error) {
            console.log(error);
            res.status(401).json({message : "Not authorized, token failed"})
            
        }
    }else{
        res.status(401).json({message :"Not authorized, no token"})
    }
})

export const authorizedAdmin = asyncHandler(async(req,res,next)=>{
    if (req.user && req.user.isAdmin) {
        next()
    }else{
        res.status(401).json({message : "Not authorized as an admin"})
    }
})