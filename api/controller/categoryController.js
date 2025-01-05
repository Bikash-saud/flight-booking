import asyncHandler from "../middleware/asycnHandler.js";
import Category from "../models/categoryModel.js";

export const createCategory = asyncHandler(async(req,res)=>{
    try {
        const {name} = req.body;
        if (!name) {
            res.status(400)
            throw new Error ("Please fill all the fields")
        }
        const newCategory =  new Category({name})
        if (newCategory) {
            await newCategory.save()
            res.status(201).json({success : true, newCategory})
        }else{

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getCategories = asyncHandler(async(req,res)=>{
    try {
        const categories = await Category.find()
        res.status(200).json({success : true, categories})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getCategoryById = asyncHandler(async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json({success : true, category})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const updateCategory = asyncHandler(async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id)
        if (category) {
            category.name = req.body.name || category.name
            await category.save()
            res.status(200).json({success : true, category})
        }else{
            res.status(400)
            throw new Error("Category not found")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const deleteCategory = asyncHandler(async(req,res)=>{
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({success : true, message : "Category deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})