import Auth from "../models/Auth.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
        const data = await Auth.findOne({ email })

        if (!data) {
            return res.status(401).json({ message: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, data.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if (data) {
            const token = jwt.sign({ email: data?.email }, (process.env.SECRET_KEY), { expiresIn: "1h" })
            return res.status(200).json({ message: "login successfull", username: data.userName, token })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}