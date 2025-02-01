import asyncHandler from "../middleware/asycnHandler.js";
import Package from "../models/packagesModel.js";

export const createPackage = asyncHandler(async(req,res)=>{
    try {
        const {name, description, price , image, location, status, ticketType, date, time} = req.body;
        switch(true){
            case !name:
                case !description:
                    case !price:
                        case !image:
                            case !location:
                                case !status:
                                    res.status(400)
                                    throw new Error("Please fill all the fields")
                                    default:
                                        break;
        }
        const newPackage = new Package({name,description,price,image,location,status,ticketType,date,time})
        if(newPackage){
            await newPackage.save()
            res.status(201).json({success : true, newPackage})
        }else{
            res.status(400)
            throw new Error("Invalid package data")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getPackages = asyncHandler(async(req,res)=>{
    try {
        const packages = await Package.find().sort({createdAt : -1})
        res.status(200).json(packages)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})


export const getpackage = asyncHandler(async(req,res)=>{
    try {
        const packagek = await Package.findById(req.params.id)
        if (packagek) {
            res.status(200).json(packagek)
        }else{
            res.status(404)
            throw new Error("Package not found")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})
export const fecthTopPackage = asyncHandler(async(req,res,next)=>{
    try {
      const product = await Package.find({}).sort({rating : -1}).limit(4)
      res.json(product)
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message)
      
    }
    
    })

export const updatePackage = asyncHandler(async(req,res)=>{
    try {
        const {name, description, price , image, location, status, ticketType, date, time} = req.fields;
        switch(true){
            case !name:
                case !description:
                    case !price:
                        case !image:
                            case !location:
                                case !status:
                                    res.status(400)
                                    throw new Error("Please fill all the fields")
                                    default:
                                        break;
        }

        const packagek = await Package.findById(req.params.id)
        if (packagek) {
            packagek.name = name || packagek.name
            packagek.description = description || packagek.description
            packagek.price = price || packagek.price
            packagek.image = image || packagek.image
            packagek.location = location || packagek.location
            packagek.status = status || packagek.status
            packagek.ticketType = ticketType || packagek.ticketType
            packagek.date = date || packagek.date
            packagek.time = time || packagek.time

            await packagek.save()
            res.status(200).json({success : true, packagek})
        }else{
            res.status(404).json({success : false, message : "Package not found"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

export const deletePackage = asyncHandler(async(req,res)=>{
    try {
        const packagek = await Package.findByIdAndDelete(req.params.id)
        if (packagek) {
            res.status(200).json({success : true, message : "Packages deleted successfully"})
        }else{
            res.status(404).json({success : false, message : "Package not found"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }

})

export const  addPackageReview = asyncHandler(async(req,res)=>{
    try {
        const {rating, comment} = req.body;
        const packagek = await Package.findById(req.params.id)
        if (packagek) {
            const alreadyReviewed =  packagek.review.find((r)=> r.user.toString() === req.user._id.toString())
            if (alreadyReviewed) {
                res.status(400)
                throw new Error("Product already reviewed")
            }

            const reviews = {
                name : req.user.name,
                rating : Number(rating),
                comment,
                user : req.user._id
            }

            packagek.review.push(reviews)
            packagek.numReviews = packagek.review.length
            packagek.rating = packagek.review.reduce((acc,item)=>item.rating + acc, 0) / packagek.review.length
            await packagek.save()
            res.status(200).json(packagek)
        }else{
            res.status(404).json({success : false, message : "Package not found"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})