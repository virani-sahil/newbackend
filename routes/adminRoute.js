import { Router } from "express";
import { adminRole } from "../controllers/adminController.js";

const adminRoute = Router();

adminRoute.get("/admin", adminRole)

export default adminRoute;