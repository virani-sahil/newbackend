import Auth from "../models/Auth.js";
import { ROLES } from "../utils/constant.js";

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