import { Router } from "express";
import authRouter from "./authRoute.js";
import adminRoute from "./adminRoute.js";
import productRouter from "./productRoute.js";

const route = Router();

route.use("/product", productRouter)
route.use("/auth", authRouter)
route.use("/role", adminRoute)

export default route;