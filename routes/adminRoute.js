import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/adminController.js";
import { adminAuth } from "../middleware/authentication.js";

const adminRoute = Router();

adminRoute.get("/get-user", adminAuth, getUsers);
adminRoute.post("/add-user", adminAuth, createUser);
adminRoute.put("/update-user/:id", adminAuth, updateUser)
adminRoute.get("/delete-user/:id", adminAuth, deleteUser);

export default adminRoute;