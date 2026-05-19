import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, require: true},
    password: { type: String, require: true},
    email: { type: String },
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now }
}, {
    collection: 'user'
})

export const userModel = mongoose.model('user', userSchema)