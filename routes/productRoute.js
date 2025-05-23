import { Router } from "express";
import { addData, deleteData, getData, updateData } from "../controllers/productController.js";
import { adminAuth } from "../middleware/authentication.js";
import { isAdmin } from "../middleware/authorizedrole.js";

const productRouter = Router();

productRouter.post("/add", adminAuth, isAdmin, addData);
productRouter.get("/get", adminAuth, getData);
productRouter.put("/update/:id", adminAuth, isAdmin, updateData);
productRouter.delete("/delete/:id", adminAuth, isAdmin, deleteData);

export default productRouter;