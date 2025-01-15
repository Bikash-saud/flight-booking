import express from "express"
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js"
import { createFlight, deleteFlight, getFlights, getFligthById,searchFlight, updateFlight } from "../controller/flightController.js"
import formidable from "express-formidable"
const router = express.Router()

router.route("/").post(authenticate, authorizedAdmin,createFlight)
router.route("/").get(authenticate, getFlights)
router.route("/:id").get(authenticate, getFligthById)
router.route("/:id").delete(authenticate,authorizedAdmin, deleteFlight)
router.route("/:id").put(authenticate,authorizedAdmin, formidable(),updateFlight)
router.route("/search").post(searchFlight)
// router.route("/test").get(se)
export default router