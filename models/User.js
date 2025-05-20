import { Schema, model } from "mongoose"
import constant from "../utils/constant.js"

const USerSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            require: true,
            enum: constant.ROLE
        },
    }
)

export default new model("User", USerSchema)
