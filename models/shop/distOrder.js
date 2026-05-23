import mongoose from "mongoose";

const DistOrderSchema = new mongoose.Schema({
    orderNo: String,
    buyer: String,
    distributor: String,
    commission: Number,
    level: String,
    status: { type: String, default: '待结算' },
    createTime: { type: String, default: '' },
}, { collection: 'distOrder' })

export const DistOrderModel = mongoose.model('distOrder', DistOrderSchema)