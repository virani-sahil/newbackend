import jwt from "jsonwebtoken"
import Auth from "../models/Auth.js";
import config from "../config/config.js";
import constant from "../utils/constant.js";

export const adminAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: "no token found" })
        }
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decode = jwt.verify(token, config.SECRET.KEY);

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const user = await Auth.findOne({ email: decode.email});

        if (user.role !== constant.ROLE[0]) {
            return res.status(401).json({ message: "not valid user" })
        }

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        req.user = user
        next();
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const supplierAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: "no token found" })
        }
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decode = jwt.verify(token, config.SECRET.KEY);

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const user = await Auth.findOne({ email: decode.email});

        if (user.role !== constant.ROLE[1]) {
            return res.status(401).json({ message: "not valid user" })
        }

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        req.user = user
        next();
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const customerAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: "no token found" })
        }
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const decode = jwt.verify(token, config.SECRET.KEY);

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized" })
        }
        const user = await Auth.findOne({ email: decode.email});

        if (user.role !== constant.ROLE[2]) {
            return res.status(401).json({ message: "not valid user" })
        }

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        req.user = user
        next();
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}