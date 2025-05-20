import { Router } from "express";
import userRouter from "./userRoute.js";
import authRouter from "./authRoute.js";
import adminRoute from "./adminRoute.js";

const route = Router();

route.use("/user", userRouter)
route.use("/auth", authRouter)
route.use("/admin", adminRoute)

export default route;