import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    name : {type : String, required : true},
    rating : {type : Number, required : true},
    comment : {type : String, required : true},
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})
const pakageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true,

    },
    status : {
        type : String,
        required : true
    },
    ticketType : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        // required : true
    },
    date : {
        type : String,

    },
    time :{
        type : String
    },
    review : [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
},{timestamps : true})
const Package = mongoose.model("Package", pakageSchema);
export default Package