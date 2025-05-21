import { ROLES } from "../utils/constant.js";

export const isAdmin = (req, res, next) => {
    try {
        console.log(req.user,'====req.user===')
        const userRole = req.user.role;

        if (userRole !== ROLES.ADMIN) {
            return res.status(403).json({ message: "You dont have permission for this action" })
        }
        next()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}