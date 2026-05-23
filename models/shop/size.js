import mongoose from "mongoose";

const SizeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    values: Array,
    goodsCount: Number,
}, { collection: 'size' })

export const SizeModel = mongoose.model('size', SizeSchema)