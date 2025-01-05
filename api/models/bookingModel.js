import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    flight : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Flight",

    },
    package : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Package",
        required : true
    },
    bookingDate : {
        type : Date,
        required : true,
        default : Date.now()
    },
    status : {
        type : String,
        enum : ["pending", "completed", "cancelled"]
    },
    passengers : [
        {
            name : {type : String, required : true},
            age : {type : Number, required : true},
            gender : {type : String, required : true},
            seatNumber : {type : String, required : true},
            meal : {type : String , required : true},
            luggage : {type : String, required : true},
            passport : {type : String, required : true },
            address : {type : String, required : true},
            phone : { type : String, required :true},
            email : {type : String, required : true},

        }
    ],
    totalAmount :{
        type : Number,
        required : true
    },
    paymentMethod : {
        type : String,
        required : true
    },
   paymentStatus : {
    type : String,
    required : true
   },
   paymetDate : {
    type : Date,
   },
paymentId :{
    type : String
}
},{timestamps: true});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;