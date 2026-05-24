import mongoose from "mongoose";

const CommissionSchema = new mongoose.Schema({
    distributor: String,
    orderNo: String,
    amount: Number,
    commission: Number,
    rate: String,
    status: { type: String, default: '待结算' },
    settleTime: { type: String, default: '-' },
}, { collection: 'commission' })

export const CommissionModel = mongoose.model('commission', CommissionSchema)