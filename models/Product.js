import { Schema, model } from "mongoose"

const USerSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        description: {
            type: String,
            require: true
        },
    }
)

export default new model("Product", USerSchema)
