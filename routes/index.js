import { Router } from "express";
import userRouter from "./userRoute.js";
import authRouter from "./authRoute.js";

const route = Router();

route.use("/user", userRouter)
route.use("/auth", authRouter)

export default route;