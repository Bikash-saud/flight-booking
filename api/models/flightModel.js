import mongoose from "mongoose";
const flightSchema = new mongoose.Schema({
    departure : {
type : String,
required : true
    },
    arrival : {
        type : String,
        required : true
    },
    departureTime : {
        type : String,
        required : true
    },
    arrivalTime : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    airline : {
        type : String,
        required : true
    },
    flightNumber : {
        type : String,
        required : true
    },
    seats : {
        type : Number,
        required : true
    },
    availableSeats : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },

},{timestamps : true});

const Flight = mongoose.model("Flight", flightSchema);
export default Flight;