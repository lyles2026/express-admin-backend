import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    nickname: { type: String, default: '' },
    phone: { type: String, default: '' },
    email: { type: String, default: '' },
    role: { type: String, default: 'user' },
    level: { type: String, default: '普通会员' },
    status: { type: String, default: '正常' },
    createdAt: { type: String, default: '' }
}, {
    collection: 'user'
})

export const userModel = mongoose.model('user', userSchema)