import express from "express";
import { createUser, deleteUser, getUserById, getUserProfile, getUsers, loginUser, logoutUser, updateUser, updateUserByAdmin } from "../controller/userController.js";
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();


router.route("/").post(createUser)
router.route("/login").post( loginUser)
router.route("/logout").post(authenticate, logoutUser)
router.route("/").get(authenticate,authorizedAdmin, getUsers)
router.route("/profile").get(authenticate, getUserProfile)
.put(authenticate, updateUser)


router.route("/:id").get(authenticate,authorizedAdmin, getUserById)
.delete(authenticate, authorizedAdmin, deleteUser)
.put(authenticate, authorizedAdmin, updateUserByAdmin)
export default router