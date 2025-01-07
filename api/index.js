import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
dotenv.config()
const app = express()

const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



import userRoute from "./routes/userRoute.js";
import flightRoute from "./routes/flightRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import packageRoute from "./routes/packageRoute.js"
import uploadRoute from "./routes/uploadRoute.js"
import path from "path";
app.use("/api/user", userRoute)
app.use("/api/flight", flightRoute)
app.use("/api/category", categoryRoute)
app.use("/api/package", packageRoute)
app.use("/api/upload", uploadRoute)


const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.listen(PORT, ()=>{
    dbConnect()
    console.log(`server is running on port :${PORT}`);
    
})
