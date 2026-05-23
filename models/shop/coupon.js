import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    value: String,
    startTime: String,
    endTime: String,
    status: String,
    receiveCount: Number,
    goodsCount: Number,
}, { collection: 'coupon' })

export const CouponModel = mongoose.model('coupon', CouponSchema)