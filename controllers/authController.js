import Auth from "../models/Auth.js"
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { id, userName, email, password } = req.body
        if ( !id || !userName || !email || !password ) {
           return res.status(400).json({message: "id, userName, email, password must required"})
        }
        await Auth.create({ id, userName, email, password })
        return res.status(200).json({ message: "signup successfull" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const data = await Auth.findOne({ email, password })

        if (data) {
            const token = jwt.sign({email: data?.email}, (process.env.SECRET_KEY), {expiresIn:"1h"})
            return res.status(200).json({ message: "login successfull", username: data.userName, token })
        } else {
            return res.status(401).json({ error: "unauthorized" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}