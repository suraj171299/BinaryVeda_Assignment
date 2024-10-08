import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min: 0,
        max: 120,
    },
    address:{
        type: String,
        required: true
    }
},{ timestamps: true })


export const User = mongoose.model("User", userSchema);