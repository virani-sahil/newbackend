import Auth from "../models/Auth.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/config.js";

export const signup = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body
        if (!userName || !email || !password || !role) {
            return res.status(400).json({ message: "userName, email, password, role must required" })
        }
        const saltRounds = 10;
        const hasPassword = await bcrypt.hash(password, saltRounds);

        await Auth.create({ userName, email, role, password: hasPassword })
        return res.status(200).json({ message: "signup successfull" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Auth.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if (user) {
            const token = jwt.sign({ email: user?.email, role: user.role }, (config.SECRET.KEY), { expiresIn: "1h" })
            return res.status(200).json({ message: "login successfull", username: user.userName, token })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}