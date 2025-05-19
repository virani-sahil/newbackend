import User from "../models/User.js"

export const addData = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({ message: "data create successfull..." })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getData = async (req, res) => {
    try {
        let data = await User.find();
        res.status(200).json(data, { message: "data get successfully..." })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const updateData = async (req, res) => {
    try {
        const data = req.body;
        await User.findByIdAndUpdate({_id: req.params.id}, data)
        res.status(200).json({ message: "update data successfully..." })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteData = async (req, res) => {
    try {
        await User.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({ message: "delete data successfull..." })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}