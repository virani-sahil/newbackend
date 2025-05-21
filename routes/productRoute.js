import { Router } from "express";
import { addData, deleteData, getData, updateData } from "../controllers/productController.js";
import { Authentication } from "../middleware/authentication.js";
import { isAdmin } from "../middleware/authorizedrole.js";

const productRouter = Router();

productRouter.post("/add", Authentication, isAdmin, addData);
productRouter.get("/get", Authentication, getData);
productRouter.put("/update/:id", Authentication, isAdmin, updateData);
productRouter.delete("/delete/:id", Authentication, isAdmin, deleteData);

export default productRouter;