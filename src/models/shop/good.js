import mongoose from "mongoose";

const GoodsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    icon: String,
    status: String,
    goodsCount: Number,
    type: String,
    value: String,
    startTime: String,
    endTime: String,
    receiveCount: Number,
    category: String,
    price: Number,
    stock: Number,
    createTime: String,
    valueList: [String],   
})

export const GoodsModel = mongoose.model('goods', GoodsSchema)