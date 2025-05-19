import mongoose from "mongoose";
import config from "./config.js"

export const connectDatabase = async () => {
    try {
        await mongoose.connect(config.DATABASE.MONGO_URL);
        console.log("Database connected");
    } catch (err) {
        console.log(err, "Connection failed");
    }
}