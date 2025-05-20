import jwt from "jsonwebtoken"
import Auth from "../models/Auth.js";

export const Authentication = async (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY);

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const user = await Auth.findOne({ email: decode.email });

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        req.user = user
        next();
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}