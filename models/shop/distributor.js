import mongoose from "mongoose";

const DistributorSchema = new mongoose.Schema({
    name: String,
    phone: String,
    level: { type: String, default: '一级分销' },
    totalCommission: { type: Number, default: 0 },
    settledCommission: { type: Number, default: 0 },
    pendingCommission: { type: Number, default: 0 },
    status: { type: String, default: '正常' },
}, { collection: 'distributor' })

export const DistributorModel = mongoose.model('distributor', DistributorSchema)