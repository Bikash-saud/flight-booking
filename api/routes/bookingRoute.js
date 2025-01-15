import express from "express"
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js"
import { createBooking, deleteBooking, getBooking, getBookings, getUserBooking, updateBooking } from "../controller/bookingController.js"
const router = express.Router()

router.route("/").post(authenticate, createBooking)
router.route("/").get(authenticate, authorizedAdmin, getBookings)
router.route("/:id").get(authenticate,getBooking)
router.route("/:id").delete(authenticate,deleteBooking)
router.route("/:id").put(authenticate,updateBooking)
router.route("/mine").get(authenticate,getUserBooking)
export default router