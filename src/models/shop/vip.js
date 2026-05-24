import mongoose from "mongoose";

const VipSchema = new mongoose.Schema({
    name: String,
    level: Number,
    discount: Number,
    minAmount: Number,
    maxAmount: Number,
}, { collection: 'vip' })

export const VipModel = mongoose.model('vip', VipSchema)