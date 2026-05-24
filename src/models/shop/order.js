import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderNo: String,
    user: String,
    phone: String,
    amount: Number,
    status: { type: String, default: '待付款' },
    payTime: { type: String, default: '' },
    address: { type: String, default: '' },
    items: { type: Array, default: [] },
    createTime: { type: String, default: '' }
}, { collection: 'order' })

export const OrderModel = mongoose.model('order', OrderSchema)