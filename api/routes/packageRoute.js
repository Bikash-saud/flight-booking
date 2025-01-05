import express from "express"
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js"
import { addPackageReview, createPackage, deletePackage, getpackage, getPackages, updatePackage } from "../controller/packageController.js"
const router = express.Router()

router.route("/").post(authenticate,authorizedAdmin,createPackage)
.get(authenticate, getPackages)
router.route("/:id").get(authenticate,getpackage)
router.route("/update/:id").put(authenticate,authorizedAdmin, updatePackage)
router.route("/delete/:id").delete(authenticate,authorizedAdmin,deletePackage)
router.route("/:id/reviews").post(authenticate,addPackageReview)

export default router