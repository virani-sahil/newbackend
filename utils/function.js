import Auth from "../models/Auth.js"
import bcrypt from "bcrypt";

export const createDefaultAdmin = async (req, res) => {
    try {
        const adminExists = await Auth.findOne({ role: "ADMIN" })

        if (!adminExists) {
            const hashedPassword = await bcrypt.hash("12345", 10);
            const defaultAdmin = {
                userName: "SuperAdmin",
                email: "admin@gamil.com",
                password: hashedPassword,
                role: "ADMIN",
            };

            await Auth.create(defaultAdmin);
            console.log("admin created.");
        } else {
            console.log("admin already exists...");
        }
    } catch (err) {
        console.log(err.message);
    }
}