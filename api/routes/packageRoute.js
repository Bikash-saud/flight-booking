import express from "express"
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js"
import formidable from "express-formidable"
import { addPackageReview, createPackage, deletePackage, fecthTopPackage, getpackage, getPackages, updatePackage } from "../controller/packageController.js"
import checkId from "../middleware/checkId.js"
const router = express.Router()

router.route("/").post(authenticate,authorizedAdmin,createPackage)
.get(authenticate, getPackages)
router.route("/:id").get(authenticate,getpackage)
router.route("/:id").put(authenticate,authorizedAdmin,formidable(), updatePackage)
router.route("/:id").delete(authenticate,authorizedAdmin,deletePackage)
router.route("/:id/reviews").post(authenticate,checkId,addPackageReview)
router.route("/top-package").get(authenticate,fecthTopPackage)
export default router