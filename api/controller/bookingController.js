import asyncHandler from "../middleware/asycnHandler.js";
import Booking from "../models/bookingModel.js";

export const createBooking = asyncHandler(async(req,res)=>{
   try {
     const {name,age,gender,seatNumber,meal,luggage,passport,address,city,postalCode,country,email,phone,bookingDate} = req.body;
     if (!name || !age || !gender || !seatNumber   || !email || !phone) {
         res.status(400)
         throw new Error("Please fill all the fields")
     }
     const booking = await Booking.findById(req.params.id)
     if (booking) {
         res.status(400)
         throw new Error("Flight already booked.")
     }
     const newBooking = new Booking({
        user : req.user._id,
        //  flight : req.flight._id,
        //  package : req.package._id,
        name,
        age,
        gender,
        seatNumber,
        meal,
        luggage,
        passport,
        address,
        city,
        postalCode,
        country,
        email,
        phone,
         bookingDate : bookingDate,
        //  paymentMethod,
        //  totalAmount,
     })
     await newBooking.save()
     res.status(201).json(newBooking)
   } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal server error"})
    
   }

})

export const getBookings = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.find({}).populate("flight", "airline").populate("package","name")
        res.status(200).json(booking)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getBooking = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.findById(req.params.id)   
        res.status(200).json(booking)
                                         
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})


export const deleteBooking = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id)
        if (booking) {
            res.status(400)
            throw new Error("Booking not found")
        }else{
            res.status(200).json("Booking deleted successfully")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const updateBooking = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.findById(req.params.id)
        if (booking) {
         booking.name = req.body.name || booking.name
         booking.age = req.body.age || booking.age
         booking.gender = req.body.gender || booking.gender
         booking.meal = req.body.meal || booking.meal
         booking.seatNumber = req.body.seatNumber || booking.seatNumber
         booking.luggage = req.body.luggage || booking.luggage
         booking.address = req.body.address || booking.address
         booking.passport = req.body.passport || booking.passport
         booking.email = req.body.email || booking.email
         booking.phone = req.body.phone || booking.phone
            booking.bookingDate = req.body.bookingDate || booking.bookingDate

            await booking.save()
            res.status(200).json(booking)
        }else{
            res.status(400)
            throw new Error("Booking not found")
        }  
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})

export const getUserBooking = asyncHandler(async(req,res)=>{
    try {
        const booking = await Booking.find({user : req.user._id})
        res.status(200).json(booking)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})