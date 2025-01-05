import express from "express";
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controller/categoryController.js";
const router = express.Router();

router.route("/").post(authenticate,authorizedAdmin, createCategory)
router.route("/").get(authenticate, getCategories)
router.route("/:id").get(authenticate, getCategoryById)
router.route("/update/:id").put(authenticate, authorizedAdmin, updateCategory)
router.route("/delete/:id").delete(authenticate,authorizedAdmin, deleteCategory)


export default router