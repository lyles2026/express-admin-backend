import mongoose from "mongoose";

const AfterSaleSchema = new mongoose.Schema({
    orderNo: String,
    user: String,
    type: String,
    reason: String,
    amount: Number,
    status: { type: String, default: '待处理' },
    createTime: String,
    handleTime: { type: String, default: '' },
    handleNote: { type: String, default: '' },
}, { collection: 'afterSale' })

export const AfterSaleModel = mongoose.model('afterSale', AfterSaleSchema)