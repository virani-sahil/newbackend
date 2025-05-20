import { Router } from "express";
import { addData, deleteData, getData, updateData } from "../controllers/useController.js";
import { Authentication } from "../middleware/authentication.js";

const userRouter = Router();

userRouter.post("/add", addData);
userRouter.get("/get", Authentication, getData);
userRouter.put("/update/:id", updateData);
userRouter.delete("/delete/:id", deleteData);

export default userRouter;