import { Schema, model } from "mongoose"

const AuthSchema = new Schema(
    {
        id: {
            type: Number,
            require: true
        },
        userName: {
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
        }
    }
)

export default new model("Auth", AuthSchema)