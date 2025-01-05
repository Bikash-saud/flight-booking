import express from "express"
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js"
import { createFlight, deleteFlight, getFlights, getFligthById, updateFlight } from "../controller/flightController.js"
const router = express.Router()

router.route("/").post(authenticate, authorizedAdmin, createFlight)
router.route("/").get(authenticate, getFlights)
router.route("/:id").get(authenticate, getFligthById)
router.route("/delete/:id").delete(authenticate,authorizedAdmin, deleteFlight)
router.route("/update/:id").put(authenticate,authorizedAdmin, updateFlight)

export default router