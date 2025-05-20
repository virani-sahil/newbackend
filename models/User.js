import { Schema, model } from "mongoose"

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
        }
    }
)

export default new model("User", USerSchema)
