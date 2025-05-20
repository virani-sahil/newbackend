import User from "../models/User.js"

export const adminRole = async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json({message: "admin data get successfully...", user})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}