import { Router } from "express";
import { getUsers } from "../controllers/adminController.js";
import { Authentication } from "../middleware/authentication.js";

const adminRoute = Router();

adminRoute.get("/users", Authentication, getUsers)

export default adminRoute;