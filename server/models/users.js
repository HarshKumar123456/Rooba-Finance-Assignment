import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        country: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const User = mongoose.model("USER",userSchema);

export default User;