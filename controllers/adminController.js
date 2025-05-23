import Auth from "../models/Auth.js";
import { ROLES } from "../utils/constant.js";
import bcrypt from "bcrypt"

export const getUsers = async (req, res) => {
    try {
        const user = req.user;
        let data;
        if (user.role === ROLES.ADMIN) {
            data = await Auth.find();
        } else if (user.role === ROLES.SUPPLIER) {
            data = await Auth.find({ role: { $in: [ROLES.SUPPLIER, ROLES.CUSTOMER] } })
        } else if (user.role === ROLES.CUSTOMER) {
            data = await Auth.find({ role: { $in: [ROLES.CUSTOMER] } })
        }
        else {
            return res.status(400).json({ message: "role not found" })
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const userExists = await Auth.findOne({ role: req.body.role, email: req.body.email });

        if (userExists) {
            return res.status(400).json({ message: "user alredy exists" })
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const defaultUser = {
                userName: req.body.userName,
                email: req.body.email,
                password: hashedPassword,
                role: req.body.role,
            };

            await Auth.create(defaultUser);
            return res.status(200).json({ message: `${req.body.role} created succesfully` })
        }
    } catch (err) {
        console.log(err.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        const data = req.body
        await Auth.findByIdAndUpdate({ _id: req.params.id }, data);
        res.status(200).json({ message: "update successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await Auth.findByIdAndDelete(id);
        res.status(200).json({ message: "delete successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}