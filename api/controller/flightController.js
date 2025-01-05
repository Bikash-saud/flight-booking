import asyncHandler from "../middleware/asycnHandler.js"
import Flight from "../models/flightModel.js";


export const createFlight = asyncHandler(async(req,res)=>{
    try {
        const {departure, arrival, departureTime, arrivalTime, price , date, airline, flightNumber, seats, availableSeats, status, image} = req.body;
        switch (true){
            case !departure:
                case !arrival:
                    case !departureTime:
                        case !arrivalTime:
                            case !price:
                                case !date:
                                    case !airline:
                                        case !flightNumber:
                                            case !seats:
                                                case !availableSeats:
                                                    case !status:
                                                        case !image:
                                                            res.status(4000)
                                                            throw new Error("Please fill all the fields")
                                                            default: 
                                                            break;
        }
        const newFlight = new Flight({departure,arrival,departureTime,arrivalTime,price,date,airline,flightNumber,seats,availableSeats,status,image})
        if (newFlight) {
            await newFlight.save()
            res.status(201).json({success :true, newFlight})
        }else{
            res.status(400)
            throw new Error("Invalid flight data")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

export const getFlights = asyncHandler(async(req,res)=>{
    try {
        const flights = await Flight.find().sort({createdAt : -1})
        res.status(200).json({success : true, flights})
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

export const getFligthById = asyncHandler(async(req,res)=>{
    try {
        const flight = await Flight.findById(req.params.id)
        if (flight) {
            res.status(200).json({success : true, flight})
        }else{
            res.status(404)
            throw new Error("Flight not found")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

export const updateFlight = asyncHandler(async(req,res)=>{
    try {
        const {departure, arrival, departureTime, arrivalTime, price , date, airline, flightNumber, seats, availableSeats, status, image} = req.body;
        switch (true){
            case !departure:
                case !arrival:
                    case !departureTime:
                        case !arrivalTime:
                            case !price:
                                case !date:
                                    case !airline:
                                        case !flightNumber:
                                            case !seats:
                                                case !availableSeats:
                                                    case !status:
                                                        case !image:
                                                            res.status(4000)
                                                            throw new Error("Please fill all the fields")
                                                            default: 
                                                            break;
        }
        const flight = await Flight.findById(req.params.id)
        if (flight){
            flight.departure = departure || flight.departure
            flight.arrival = arrival || flight.arrival
            flight.departureTime = departureTime || flight.departureTime
            flight.arrivalTime = arrivalTime || flight.arrivalTime
            flight.price = price || flight.price
            flight.date = date || flight.date
            flight.airline = airline || flight.airline
            flight.flightNumber = flightNumber || flight.flightNumber
            flight.seats = seats || flight.seats
            flight.availableSeats = availableSeats || flight.availableSeats
            flight.status = status || flight.status
            flight.image = image || flight.image
            await flight.save()
            res.status(200).json({success : true, flight})

        }else{
            res.status(404)
            throw new Error("Flight not found")
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

export const deleteFlight = asyncHandler(async(req,res)=>{
    try {
        const flight = await Flight.findByIdAndDelete(req.params.id)
        if (flight) {
            res.status(200).json({success : true, message : "Flight deleted"})
        }else{
            res.status(404)
            throw new Error("Flight not found")
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).json({success : false, message : "Internal server error"})
        
    }
})

